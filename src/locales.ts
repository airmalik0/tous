export type Locale = 'ru' | 'uz'

export const LOCALES: Locale[] = ['ru', 'uz']

/** Русский живёт в корне, узбекский — под /uz. */
export const UZ_PREFIX = '/uz'

/** Локаль по адресу: /uz и всё, что под ним, — узбекская версия. */
export function localeFromPath(pathname: string): Locale {
  return pathname === UZ_PREFIX || pathname.startsWith(`${UZ_PREFIX}/`) ? 'uz' : 'ru'
}

/** Канонический путь без языкового префикса: /uz/uslugi → /uslugi */
export function stripLocale(pathname: string): string {
  if (pathname === UZ_PREFIX) return '/'
  if (pathname.startsWith(`${UZ_PREFIX}/`)) return pathname.slice(UZ_PREFIX.length) || '/'
  return pathname || '/'
}

/** Канонический путь → путь в нужной локали: (/uslugi, uz) → /uz/uslugi */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === 'ru') return clean
  return clean === '/' ? UZ_PREFIX : `${UZ_PREFIX}${clean}`
}
