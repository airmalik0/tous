import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Portfolio } from './components/Portfolio'
import { Stats } from './components/Stats'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

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

    // Wait for fonts + double rAF to ensure browser has fully painted
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
        <Services />
        <Process />
        <Portfolio />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
