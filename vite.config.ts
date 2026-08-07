import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { LOCALES, localizePath } from './src/locales'
import { SITE_URL, allPaths, seoFor } from './src/content/seo'

const outDir = (...parts: string[]) => resolve(import.meta.dirname, 'dist', ...parts)

/** Собирает sitemap.xml из тех же данных, что рендерят страницы. */
function sitemap(): Plugin {
  return {
    name: 'imbim-sitemap',
    apply: 'build',
    closeBundle() {
      const entries = allPaths().flatMap(path => {
        const alternates = [
          ...LOCALES.map(
            l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localizePath(path, l)}"/>`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${path}"/>`,
        ].join('\n')
        return LOCALES.map(
          l => `  <url>\n    <loc>${SITE_URL}${localizePath(path, l)}</loc>\n${alternates}\n  </url>`,
        )
      })

      writeFileSync(
        outDir('sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`,
      )
    },
  }
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

function replaceTag(html: string, pattern: RegExp, replacement: string): string {
  if (!pattern.test(html)) throw new Error(`Не нашёл тег для замены: ${pattern}`)
  return html.replace(pattern, replacement)
}

/**
 * Кладёт рядом с SPA по HTML-файлу на каждый маршрут — с готовыми title,
 * description, OG, canonical и hreflang прямо в разметке.
 *
 * Зачем: превью ссылок в Telegram, Instagram и WhatsApp собираются ботами,
 * которые не выполняют JS, — без этого все страницы отдают мета-теги главной.
 * Тело остаётся тем же SPA, React отрисует нужную страницу по адресу.
 */
function prerenderMeta(): Plugin {
  return {
    name: 'imbim-prerender-meta',
    apply: 'build',
    closeBundle() {
      const template = readFileSync(outDir('index.html'), 'utf8')

      for (const path of allPaths()) {
        for (const locale of LOCALES) {
          const seo = seoFor(path, locale)
          const url = `${SITE_URL}${localizePath(path, locale)}`
          const image = `${SITE_URL}${seo.image ?? '/og.png'}`

          const head = [
            `    <link rel="canonical" href="${url}">`,
            ...LOCALES.map(
              l => `    <link rel="alternate" hreflang="${l}" href="${SITE_URL}${localizePath(path, l)}">`,
            ),
            `    <link rel="alternate" hreflang="x-default" href="${SITE_URL}${path}">`,
            `    <meta property="og:locale" content="${locale === 'uz' ? 'uz_UZ' : 'ru_RU'}">`,
            '  </head>',
          ].join('\n')

          let html = template
          html = replaceTag(html, /<html lang="[^"]*">/, `<html lang="${locale}">`)
          html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escape(seo.title)}</title>`)
          html = replaceTag(
            html,
            /<meta name="description" content="[^"]*">/,
            `<meta name="description" content="${escape(seo.description)}">`,
          )
          html = replaceTag(
            html,
            /<meta property="og:title" content="[^"]*">/,
            `<meta property="og:title" content="${escape(seo.title)}">`,
          )
          html = replaceTag(
            html,
            /<meta property="og:description" content="[^"]*">/,
            `<meta property="og:description" content="${escape(seo.description)}">`,
          )
          html = replaceTag(
            html,
            /<meta property="og:url" content="[^"]*">/,
            `<meta property="og:url" content="${url}">`,
          )
          html = replaceTag(
            html,
            /<meta property="og:image" content="[^"]*">/,
            `<meta property="og:image" content="${image}">`,
          )
          html = replaceTag(
            html,
            /<meta name="twitter:image" content="[^"]*">/,
            `<meta name="twitter:image" content="${image}">`,
          )
          html = replaceTag(html, /\s*<\/head>/, `\n${head}`)

          // Корень русской версии — это и есть dist/index.html,
          // он же остаётся заглушкой для неизвестных адресов.
          const target =
            path === '/' && locale === 'ru'
              ? outDir('index.html')
              : outDir(`.${localizePath(path, locale)}`, 'index.html')
          mkdirSync(dirname(target), { recursive: true })
          writeFileSync(target, html)
        }
      }

      const count = allPaths().length * LOCALES.length
      this.info?.(`предрендер мета-тегов: ${count} страниц`)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap(), prerenderMeta()],
  build: {
    target: 'es2020',
  },
})
