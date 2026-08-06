import { useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { localeFromPath, localizePath, stripLocale, type Locale } from '../locales'
import { dictionaries } from './dictionaries'
import { LanguageContext, type Ctx } from './context'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const locale = localeFromPath(pathname)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<Ctx>(() => {
    const canonical = stripLocale(pathname)
    const pathFor = (target: Locale) => localizePath(canonical, target)
    return {
      locale,
      t: dictionaries[locale],
      href: (path: string) => localizePath(path, locale),
      pathFor,
      setLocale: (target: Locale) => {
        if (target === locale) return
        navigate(`${pathFor(target)}${search}${hash}`)
      },
    }
  }, [locale, pathname, search, hash, navigate])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
