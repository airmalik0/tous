import { useT } from '../i18n'

export function Footer() {
  const { t } = useT()
  return (
    <footer className="pb-8 pt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-cream rounded-[2.5rem] p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-2 text-forest font-body font-700 text-2xl tracking-tighter lowercase mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="10" fill="#0a3a2a" />
                  <rect x="7" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" />
                  <rect x="17" y="7" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
                  <rect x="7" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.6" />
                  <rect x="17" y="17" width="8" height="8" rx="2.5" fill="#3dffa2" opacity="0.3" />
                </svg>
                imbim
              </a>
              <p className="text-muted text-sm leading-relaxed max-w-[280px]">
                {t.footerLead}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-dark font-semibold mb-4">{t.footerNav}</p>
              <div className="flex flex-col gap-2.5">
                <a href="#pricing" className="text-muted hover:text-forest text-sm transition-colors duration-200">{t.navPricing}</a>
                <a href="#team" className="text-muted hover:text-forest text-sm transition-colors duration-200">{t.navTeam}</a>
                <a href="#portfolio" className="text-muted hover:text-forest text-sm transition-colors duration-200">{t.navPortfolio}</a>
                <a href="#contact" className="text-muted hover:text-forest text-sm transition-colors duration-200">{t.navContact}</a>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <p className="text-dark font-semibold mb-4">{t.footerContacts}</p>
              <div className="flex flex-col gap-2.5">
                <a href="tel:+998901359666" className="text-muted hover:text-forest text-sm transition-colors duration-200 no-underline">+998 90 135 96 66</a>
                <a href="https://t.me/imbim2004" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-forest text-sm transition-colors duration-200 no-underline">Telegram: @imbim2004</a>
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
