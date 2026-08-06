import { createContext, useContext } from 'react'
import type { Locale } from '../locales'
import type { Dict } from './dictionaries'

export type Ctx = {
  locale: Locale
  t: Dict
  /** Ссылка в текущей локали: href('/uslugi') → '/uslugi' или '/uz/uslugi' */
  href: (path: string) => string
  /** Тот же экран на другом языке — для переключателя и hreflang. */
  pathFor: (locale: Locale) => string
  setLocale: (locale: Locale) => void
}

export const LanguageContext = createContext<Ctx | null>(null)

export function useT() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT must be used inside LanguageProvider')
  return ctx
}
