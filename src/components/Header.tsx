import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { useT } from '../i18n'
import { LOCALES, type Locale } from '../locales'

/** Переключатель ru/uz. Объявлен вне Header, иначе пересоздаётся на каждый рендер. */
function LangSwitch({
  locale,
  setLocale,
  className = '',
}: {
  locale: Locale
  setLocale: (l: Locale) => void
  className?: string
}) {
  return (
    <div className={`inline-flex items-center bg-forest/5 rounded-pill p-1 ${className}`}>
      {LOCALES.map(l => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
            locale === l ? 'bg-forest text-mint' : 'text-forest/60 hover:text-forest'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale, href } = useT()

  const links = [
    { label: t.navServices, to: href('/uslugi') },
    { label: t.navPortfolio, to: href('/portfolio') },
    { label: t.navPricing, to: href('/tseny') },
    { label: t.navAbout, to: href('/o-nas') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-18 md:h-20">
        {/* Логотип */}
        <Link to={href('/')} className="flex items-center gap-2 text-forest font-body font-700 text-2xl tracking-tighter lowercase">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="10" fill="#0a3a2a" />
            <rect x="7" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" />
            <rect x="17" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
            <rect x="7" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
            <rect x="17" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.3" />
          </svg>
          imbim
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-forest' : 'text-dark/70 hover:text-forest'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + язык */}
        <div className="hidden md:flex items-center gap-4">
          <LangSwitch locale={locale} setLocale={setLocale} />
          <Link
            to={href('/kontakty')}
            className="inline-flex items-center px-6 py-2.5 bg-forest text-mint rounded-pill text-[15px] font-semibold hover:bg-forest-light transition-colors duration-200 active:scale-[0.98]"
          >
            {t.ctaDiscuss}
          </Link>
        </div>

        {/* Бургер */}
        <div className="md:hidden flex items-center gap-3">
          <LangSwitch locale={locale} setLocale={setLocale} />
          <button
            className="p-2 text-forest"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menuAria}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 overflow-hidden border-t border-forest/5"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="py-3 text-dark/80 font-medium text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to={href('/kontakty')}
                className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-forest text-mint rounded-pill font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {t.ctaDiscuss}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
