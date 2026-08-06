import { Suspense, lazy, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'

const Footer = lazy(() => import('./Footer').then(m => ({ default: m.Footer })))

/**
 * Переход на новую страницу возвращает нас наверх, переход по якорю —
 * к нужному блоку. Блок может быть внутри ещё не догрузившегося чанка,
 * поэтому пробуем найти его несколько кадров подряд.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }

    let attempts = 0
    let frame = 0
    const tryScroll = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts++ < 40) frame = requestAnimationFrame(tryScroll)
    }
    frame = requestAnimationFrame(tryScroll)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-[70svh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
