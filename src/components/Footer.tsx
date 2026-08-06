import { Link } from 'react-router-dom'
import { useT } from '../i18n'
import { plans } from '../content/plans'

export function Footer() {
  const { t, locale, href } = useT()

  const nav = [
    { label: t.navServices, to: href('/uslugi') },
    { label: t.navPortfolio, to: href('/portfolio') },
    { label: t.navPricing, to: href('/tseny') },
    { label: t.navAbout, to: href('/o-nas') },
    { label: t.navContacts, to: href('/kontakty') },
  ]

  const linkClass = 'text-muted hover:text-forest text-sm transition-colors duration-200 no-underline'

  return (
    <footer className="pb-8 pt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-cream rounded-[2.5rem] p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Бренд */}
            <div>
              <Link to={href('/')} className="flex items-center gap-2 text-forest font-body font-700 text-2xl tracking-tighter lowercase mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="10" fill="#0a3a2a" />
                  <rect x="7" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" />
                  <rect x="17" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
                  <rect x="7" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
                  <rect x="17" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.3" />
                </svg>
                imbim
              </Link>
              <p className="text-muted text-sm leading-relaxed max-w-[280px]">{t.footerLead}</p>
            </div>

            {/* Навигация */}
            <div>
              <p className="text-dark font-semibold mb-4">{t.footerNav}</p>
              <div className="flex flex-col gap-2.5">
                {nav.map(l => (
                  <Link key={l.to} to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Услуги */}
            <div>
              <p className="text-dark font-semibold mb-4">{t.footerServices}</p>
              <div className="flex flex-col gap-2.5">
                {plans.map(p => (
                  <Link key={p.slug} to={href(`/uslugi/${p.slug}`)} className={linkClass}>
                    {p.copy[locale].name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Контакты и документы */}
            <div>
              <p className="text-dark font-semibold mb-4">{t.footerContacts}</p>
              <div className="flex flex-col gap-2.5">
                <a href="tel:+998901359666" className={linkClass}>
                  +998 90 135 96 66
                </a>
                <a href="https://t.me/imbim2004" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Telegram: @imbim2004
                </a>
                <a href="https://instagram.com/imbim_web" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Instagram: @imbim_web
                </a>
              </div>

              <p className="text-dark font-semibold mt-7 mb-4">{t.footerLegal}</p>
              <div className="flex flex-col gap-2.5">
                <Link to={href('/politika-konfidentsialnosti')} className={linkClass}>
                  {t.footerPrivacy}
                </Link>
                <Link to={href('/oferta')} className={linkClass}>
                  {t.footerOffer}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-dark/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-xs">{t.footerCopyright}</p>
            <p className="text-muted text-xs">{t.footerCraft}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
