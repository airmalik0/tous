import { Link } from 'react-router-dom'
import { ArrowRight, Browsers, Buildings, FileText, ShoppingBag, type Icon } from '@phosphor-icons/react'
import { ScrollReveal } from './ScrollReveal'
import { useT } from '../i18n'
import { plans, type PlanSlug } from '../content/plans'

const icons: Record<PlanSlug, Icon> = {
  lending: FileText,
  'sayt-vizitka': Browsers,
  'korporativnyy-sayt': Buildings,
  'internet-magazin': ShoppingBag,
}

type Props = {
  heading?: boolean
  /** Кнопка «Все услуги» под сеткой. */
  showAllLink?: boolean
}

/** Четыре формата работ карточками — на главной и на странице услуг. */
export function ServicesGrid({ heading = true, showAllLink = false }: Props) {
  const { t, locale, href } = useT()

  return (
    <section id="services" className={heading ? 'py-24 md:py-32' : 'pb-24 md:pb-32'}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {heading && (
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
                {t.servicesBadge}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
                {t.servicesTitle1}
                <br />
                <span className="text-mint-deep">{t.servicesTitle2}</span>
              </h2>
            </div>
          </ScrollReveal>
        )}

        <div className="grid md:grid-cols-2 gap-5">
          {plans.map((plan, i) => {
            const copy = plan.copy[locale]
            const IconTag = icons[plan.slug]
            return (
              <ScrollReveal key={plan.slug} delay={i * 0.08}>
                <Link
                  to={href(`/uslugi/${plan.slug}`)}
                  className="group h-full flex flex-col bg-cream rounded-[2rem] p-7 md:p-9 no-underline transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-2xl bg-forest flex items-center justify-center mb-6">
                    <IconTag size={24} weight="duotone" className="text-mint" />
                  </span>

                  <h3 className="text-2xl md:text-3xl font-800 tracking-tight text-dark">{copy.name}</h3>
                  <p className="mt-2 text-muted leading-relaxed max-w-[38ch]">{copy.tagline}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-pill bg-white text-dark/70 text-xs font-medium">
                      {copy.pages}
                    </span>
                    <span className="px-3 py-1.5 rounded-pill bg-white text-dark/70 text-xs font-medium">
                      {copy.deadline}
                    </span>
                  </div>

                  <div className="mt-auto pt-8 flex items-end justify-between gap-4">
                    <p className="font-display font-800 text-xl md:text-2xl tracking-tight text-forest">
                      {copy.price}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                      {t.serviceOpen}
                      <ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        {showAllLink && (
          <div className="mt-12 flex justify-center">
            <Link
              to={href('/uslugi')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-forest/15 text-forest rounded-pill text-base font-semibold hover:bg-forest hover:text-mint transition-colors duration-200"
            >
              {t.ctaAllServices}
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
