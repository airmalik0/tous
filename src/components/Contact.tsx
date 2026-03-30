import { ScrollReveal } from './ScrollReveal'
import { TelegramLogo, Phone } from '@phosphor-icons/react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-mint/8 rounded-full blur-[120px]" />
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-mint/5 rounded-full blur-[80px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center px-4 py-2 bg-mint/15 rounded-pill text-mint text-sm font-medium mb-8">
                  Свяжитесь с нами
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-white mb-6">
                  Давайте создадим
                  <br />
                  <span className="text-mint">что-то крутое</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-[480px]">
                  Напишите нам в Telegram — обсудим ваш проект и ответим на все вопросы.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: CTA buttons */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-5">
                {/* Main CTA — Telegram bot */}
                <a
                  href="https://t.me/imbim2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-mint rounded-[2rem] p-6 md:p-8 no-underline hover:scale-[1.02] active:scale-[0.99] transition-transform duration-500"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <div className="w-14 h-14 bg-forest rounded-[1.25rem] flex items-center justify-center shrink-0">
                    <TelegramLogo size={28} weight="fill" className="text-mint" />
                  </div>
                  <div>
                    <p className="text-forest font-bold text-lg md:text-xl">Написать в Telegram</p>
                    <p className="text-forest/60 text-sm">Ответим в ближайшее время</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+998901359666"
                  className="group flex items-center gap-5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 md:p-8 no-underline hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-mint/15 rounded-[1.25rem] flex items-center justify-center shrink-0">
                    <Phone size={28} weight="fill" className="text-mint" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg md:text-xl">+998 90 135 96 66</p>
                    <p className="text-white/40 text-sm">Позвонить напрямую</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
