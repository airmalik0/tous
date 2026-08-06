import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'
import { Check, X, ArrowRight } from '@phosphor-icons/react'
import { useT } from '../i18n'
import { featureLabels, featureOrder, plans } from '../content/plans'

type Props = {
  /** На странице цен заголовок уже есть в шапке — второй не нужен. */
  heading?: boolean
  /** Подпись под сеткой тарифов. */
  note?: boolean
}

export function Pricing({ heading = true, note = false }: Props) {
  const { t, locale, href } = useT()

  return (
    <section id="pricing" className={heading ? 'py-24 md:py-32' : 'pb-24 md:pb-32'}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {heading && (
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
                {t.pricingBadge}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
                {t.pricingTitle1}
                <br />
                <span className="text-mint-deep">{t.pricingTitle2}</span>
              </h2>
            </div>
          </ScrollReveal>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => {
            const copy = plan.copy[locale]
            const features = [
              ...featureOrder.map(key => ({
                label: featureLabels[locale][key],
                absent: !plan.included.includes(key),
              })),
              { label: copy.deadline, absent: false },
            ]
            return (
              <ScrollReveal key={plan.slug} delay={i * 0.08}>
                <div
                  className={`relative rounded-[2rem] p-7 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 ${
                    plan.popular ? 'bg-forest text-white' : 'bg-white border border-dark/5'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-mint text-forest text-xs font-bold rounded-pill whitespace-nowrap">
                      {t.pricingPopular}
                    </span>
                  )}

                  <h3 className={`text-xl font-800 tracking-tight ${plan.popular ? 'text-white' : 'text-dark'}`}>
                    <Link to={href(`/uslugi/${plan.slug}`)} className="hover:underline underline-offset-4">
                      {copy.name}
                    </Link>
                  </h3>
                  <p className={`text-sm mt-1 mb-6 ${plan.popular ? 'text-white/50' : 'text-muted'}`}>
                    {copy.pages}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {features.map(f => {
                      const iconWrap = f.absent
                        ? plan.popular
                          ? 'bg-white/10'
                          : 'bg-dark/5'
                        : plan.popular
                          ? 'bg-mint/15'
                          : 'bg-mint-bg'
                      const iconColor = f.absent
                        ? plan.popular
                          ? 'text-white/40'
                          : 'text-dark/30'
                        : plan.popular
                          ? 'text-mint'
                          : 'text-forest'
                      const textColor = f.absent
                        ? plan.popular
                          ? 'text-white/40'
                          : 'text-dark/35'
                        : plan.popular
                          ? 'text-white/80'
                          : 'text-dark/80'
                      return (
                        <li key={f.label} className="flex items-start gap-2.5">
                          <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${iconWrap}`}>
                            {f.absent ? (
                              <X size={12} weight="bold" className={iconColor} />
                            ) : (
                              <Check size={12} weight="bold" className={iconColor} />
                            )}
                          </span>
                          <span className={`text-sm leading-snug ${textColor}`}>{f.label}</span>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-auto">
                    <p className={`font-display font-800 text-2xl md:text-[1.7rem] tracking-tight mb-5 ${plan.popular ? 'text-mint' : 'text-dark'}`}>
                      {copy.price}
                    </p>
                    <Link
                      to={href('/kontakty')}
                      className={`inline-flex w-full items-center justify-center px-6 py-3.5 rounded-pill text-[15px] font-bold transition-all duration-200 active:scale-[0.98] ${
                        plan.popular ? 'bg-mint text-forest hover:brightness-110' : 'bg-forest text-mint hover:bg-forest-light'
                      }`}
                    >
                      {t.ctaDiscuss}
                    </Link>
                    <Link
                      to={href(`/uslugi/${plan.slug}`)}
                      className={`mt-3 inline-flex w-full items-center justify-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                        plan.popular ? 'text-white/60 hover:text-mint' : 'text-muted hover:text-forest'
                      }`}
                    >
                      {t.serviceOpen}
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {note && (
          <p className="mt-10 text-muted text-sm md:text-base leading-relaxed max-w-[70ch] mx-auto text-center">
            {t.pricingNote}
          </p>
        )}
      </div>
    </section>
  )
}
