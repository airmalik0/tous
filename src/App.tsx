import { useEffect, lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })))
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })))
const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))

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
    <>
      <Header />
      <main>
        <Hero />
        <Suspense>
          <Services />
          <Process />
          <Stats />
          <Contact />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
