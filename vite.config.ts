import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { plans } from './src/content/plans'
import { projects } from './src/content/projects'

const SITE = 'https://imbim.online'

// Пути без языкового префикса — узбекские версии достраиваются автоматически.
const staticPaths = [
  '/',
  '/uslugi',
  '/portfolio',
  '/tseny',
  '/o-nas',
  '/kontakty',
  '/politika-konfidentsialnosti',
  '/oferta',
]

const uz = (path: string) => (path === '/' ? '/uz' : `/uz${path}`)

/** Собирает sitemap.xml из тех же данных, что рендерят страницы. */
function sitemap(): Plugin {
  return {
    name: 'imbim-sitemap',
    apply: 'build',
    closeBundle() {
      const paths = [
        ...staticPaths,
        ...plans.map(p => `/uslugi/${p.slug}`),
        ...projects.map(p => `/portfolio/${p.slug}`),
      ]

      const entries = paths.flatMap(path => {
        const alternates = [
          `    <xhtml:link rel="alternate" hreflang="ru" href="${SITE}${path}"/>`,
          `    <xhtml:link rel="alternate" hreflang="uz" href="${SITE}${uz(path)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${path}"/>`,
        ].join('\n')
        return [path, uz(path)].map(
          loc => `  <url>\n    <loc>${SITE}${loc}</loc>\n${alternates}\n  </url>`,
        )
      })

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`
      writeFileSync(resolve(import.meta.dirname, 'dist/sitemap.xml'), xml)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
  build: {
    target: 'es2020',
  },
})
