import { useEffect } from 'react'
import { useT } from '../i18n'
import { LOCALES } from '../locales'

export const SITE_URL = 'https://imbim.online'

type Props = {
  title: string
  description: string
  /** Абсолютный или относительный путь к картинке превью. */
  image?: string
  noindex?: boolean
  /** JSON-LD для страницы (schema.org). */
  jsonLd?: Record<string, unknown>
}

function setMeta(key: 'name' | 'property', value: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${key}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

const JSON_LD_ID = 'page-jsonld'

/**
 * Проставляет мета-теги страницы: title, description, canonical,
 * hreflang ru/uz и Open Graph. Тегами управляем императивно —
 * это дешевле, чем тянуть helmet ради десятка строк.
 */
export function Seo({ title, description, image = `${SITE_URL}/og.png`, noindex, jsonLd }: Props) {
  const { locale, pathFor } = useT()

  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)

    const canonical = `${SITE_URL}${pathFor(locale)}`
    setLink('canonical', canonical)
    for (const l of LOCALES) {
      setLink('alternate', `${SITE_URL}${pathFor(l)}`, l)
    }
    setLink('alternate', `${SITE_URL}${pathFor('ru')}`, 'x-default')

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', image.startsWith('http') ? image : `${SITE_URL}${image}`)
    setMeta('property', 'og:locale', locale === 'uz' ? 'uz_UZ' : 'ru_RU')
    setMeta('name', 'twitter:image', image.startsWith('http') ? image : `${SITE_URL}${image}`)

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (noindex) {
      setMeta('name', 'robots', 'noindex, follow')
    } else if (robots) {
      robots.remove()
    }
  }, [title, description, image, noindex, locale, pathFor])

  useEffect(() => {
    const existing = document.getElementById(JSON_LD_ID)
    if (existing) existing.remove()
    if (!jsonLd) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = JSON_LD_ID
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => script.remove()
  }, [jsonLd])

  return null
}
