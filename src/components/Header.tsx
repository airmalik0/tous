import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { useT, type Locale } from '../i18n'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, locale, setLocale } = useT()

  const links = [
    { label: t.navPricing, href: '#pricing' },
    { label: t.navTeam, href: '#team' },
    { label: t.navPortfolio, href: '#portfolio' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const LangSwitch = ({ className = '' }: { className?: string }) => (
    <div className={`inline-flex items-center bg-forest/5 rounded-pill p-1 ${className}`}>
      {(['ru', 'uz'] as Locale[]).map(l => (
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-18 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-forest font-body font-700 text-2xl tracking-tighter lowercase">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="10" fill="#0a3a2a" />
            <rect x="7" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" />
            <rect x="17" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
            <rect x="7" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
            <rect x="17" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.3" />
          </svg>
          imbim
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-dark/70 hover:text-forest text-[15px] font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Lang */}
        <div className="hidden md:flex items-center gap-4">
          <LangSwitch />
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2.5 bg-forest text-mint rounded-pill text-[15px] font-semibold hover:bg-forest-light transition-colors duration-200 active:scale-[0.98]"
          >
            {t.ctaDiscuss}
          </a>
        </div>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-3">
          <LangSwitch />
          <button
            className="p-2 text-forest"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.menuAria}
          >
            {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="py-3 text-dark/80 font-medium text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-forest text-mint rounded-pill font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {t.ctaDiscuss}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
