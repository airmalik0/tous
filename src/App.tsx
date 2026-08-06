import { useEffect, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UZ_PREFIX } from './locales'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

// Главная грузится сразу — на ней LCP. Остальное подтягивается по требованию.
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })))
const CasePage = lazy(() => import('./pages/CasePage').then(m => ({ default: m.CasePage })))
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Contacts = lazy(() => import('./pages/Contacts').then(m => ({ default: m.Contacts })))
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })))
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })))

/** Одно дерево страниц, подключённое дважды: в корне (ru) и под /uz. */
function pageRoutes() {
  return [
    <Route key="home" index element={<Home />} />,
    <Route key="services" path="uslugi" element={<Services />} />,
    <Route key="service" path="uslugi/:slug" element={<ServiceDetail />} />,
    <Route key="portfolio" path="portfolio" element={<PortfolioPage />} />,
    <Route key="case" path="portfolio/:slug" element={<CasePage />} />,
    <Route key="pricing" path="tseny" element={<PricingPage />} />,
    <Route key="about" path="o-nas" element={<About />} />,
    <Route key="contacts" path="kontakty" element={<Contacts />} />,
    <Route key="privacy" path="politika-konfidentsialnosti" element={<Legal doc="privacy" />} />,
    <Route key="offer" path="oferta" element={<Legal doc="offer" />} />,
    <Route key="notfound" path="*" element={<NotFound />} />,
  ]
}

export default function App() {
  useEffect(() => {
    const hide = () => {
      document.documentElement.classList.add('ready')
      const loader = document.getElementById('loader')
      if (!loader) return
      loader.style.opacity = '0'
      loader.style.visibility = 'hidden'
      setTimeout(() => loader.remove(), 400)
    }

    const waitAndHide = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(hide)
      })
    }

    if (document.fonts?.ready) {
      document.fonts.ready.then(waitAndHide)
    } else {
      waitAndHide()
    }
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">{pageRoutes()}</Route>
        <Route path={UZ_PREFIX}>{pageRoutes()}</Route>
      </Route>
    </Routes>
  )
}
