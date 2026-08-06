import { Link } from 'react-router-dom'
import { Phone } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'
import { useT } from '../i18n'

type Props = {
  title: string
  lead?: string
}

/** Компактный призыв в конце внутренней страницы: кнопка на форму + телефон. */
export function CtaBand({ title, lead }: Props) {
  const { t, href } = useT()

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="relative overflow-hidden bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14">
            <div
              className="absolute -bottom-32 -right-24 w-[460px] h-[460px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.1) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-800 tracking-tighter text-white max-w-[20ch]">
                  {title}
                </h2>
                {lead && <p className="mt-4 text-white/50 text-base md:text-lg max-w-[46ch]">{lead}</p>}
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Link
                  to={href('/kontakty')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-mint text-forest rounded-pill text-base font-bold hover:brightness-110 transition-[filter] duration-200 active:scale-[0.98]"
                >
                  {t.ctaGetQuote}
                </Link>
                <a
                  href="tel:+998901359666"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/20 text-white rounded-pill text-base font-medium hover:bg-white/5 transition-colors duration-200"
                >
                  <Phone size={18} weight="fill" className="text-mint" />
                  +998 90 135 96 66
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
