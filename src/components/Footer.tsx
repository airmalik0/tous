export function Footer() {
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
                Веб-студия полного цикла. Создаём сайты и веб-приложения, которые работают на ваш бизнес.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-dark font-semibold mb-4">Навигация</p>
              <div className="flex flex-col gap-2.5">
                <a href="#services" className="text-muted hover:text-forest text-sm transition-colors duration-200">Услуги</a>
                <a href="#process" className="text-muted hover:text-forest text-sm transition-colors duration-200">Процесс</a>
                <a href="#portfolio" className="text-muted hover:text-forest text-sm transition-colors duration-200">Портфолио</a>
                <a href="#stats" className="text-muted hover:text-forest text-sm transition-colors duration-200">О нас</a>
                <a href="#contact" className="text-muted hover:text-forest text-sm transition-colors duration-200">Контакты</a>
              </div>
            </div>

            {/* Contacts */}
            <div>
              <p className="text-dark font-semibold mb-4">Контакты</p>
              <div className="flex flex-col gap-2.5">
                <a href="tel:+998901359666" className="text-muted hover:text-forest text-sm transition-colors duration-200 no-underline">+998 90 135 96 66</a>
                <a href="https://t.me/imbim_bot" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-forest text-sm transition-colors duration-200 no-underline">Telegram: @imbim_bot</a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-dark/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-xs">&copy; 2025 imbim. Все права защищены.</p>
            <p className="text-muted/70 text-xs">Сделано с заботой о каждом пикселе</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
