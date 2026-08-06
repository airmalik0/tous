import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, CaretDown } from '@phosphor-icons/react'
import { PageHero } from '../components/PageHero'
import { Process } from '../components/Process'
import { CtaBand } from '../components/CtaBand'
import { ScrollReveal } from '../components/ScrollReveal'
import { Seo, SITE_URL } from '../components/Seo'
import { NotFound } from './NotFound'
import { useT } from '../i18n'
import { featureLabels, planBySlug, plans } from '../content/plans'

export function ServiceDetail() {
  const { slug } = useParams()
  const { t, locale, href, pathFor } = useT()
  const plan = planBySlug(slug)
  const copy = plan?.copy[locale]

  const jsonLd = useMemo(() => {
    if (!plan || !copy) return undefined
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: copy.name,
          description: copy.lead,
          provider: { '@type': 'ProfessionalService', name: 'imbim', url: SITE_URL },
          areaServed: 'UZ',
          url: `${SITE_URL}${pathFor(locale)}`,
        },
        {
          '@type': 'FAQPage',
          mainEntity: copy.faq.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    }
  }, [plan, copy, locale, pathFor])

  if (!plan || !copy) return <NotFound />

  const others = plans.filter(p => p.slug !== plan.slug)

  return (
    <>
      <Seo title={copy.seoTitle} description={copy.seoDescription} jsonLd={jsonLd} />

      <PageHero
        badge={t.servicesBadge}
        title1={copy.name}
        lead={copy.lead}
        crumbs={[{ label: t.navServices, to: href('/uslugi') }, { label: copy.name }]}
      />

      {/* Ключевые цифры */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: t.caseFormat, value: copy.pages },
              { label: t.processBadge, value: copy.deadline },
              { label: t.pricingBadge, value: copy.price },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.06}>
                <div className="h-full bg-cream rounded-[1.75rem] p-6 md:p-7">
                  <p className="text-muted text-xs uppercase tracking-wide font-semibold">{item.label}</p>
                  <p className="mt-2 font-display font-800 text-xl md:text-2xl tracking-tight text-forest">
                    {item.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Что входит / кому подходит */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-5">
          <ScrollReveal>
            <div className="h-full bg-forest rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-800 tracking-tight text-white mb-7">
                {t.serviceIncluded}
              </h2>
              <ul className="flex flex-col gap-3.5 list-none p-0 m-0">
                {plan.included.map(key => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-mint/15 flex items-center justify-center">
                      <Check size={12} weight="bold" className="text-mint" />
                    </span>
                    <span className="text-white/80 leading-snug">{featureLabels[locale][key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full bg-cream rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-800 tracking-tight text-dark mb-7">
                {t.serviceSuitable}
              </h2>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {copy.suitable.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-forest" />
                    <span className="text-dark/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Process dark />

      {/* Вопросы */}
      <section className="py-8 md:py-12">
        {/* Ширина контейнера как у остальных секций — иначе левый край съезжает. */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-800 tracking-tighter text-dark mb-8 md:mb-10">
              {t.serviceFaqTitle}
            </h2>
          </ScrollReveal>
          <div className="flex flex-col gap-3 max-w-[860px]">
            {copy.faq.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.06}>
                <details className="group bg-cream rounded-[1.5rem] px-6 py-5 md:px-8 md:py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="font-display font-800 text-lg md:text-xl tracking-tight text-dark">
                      {f.q}
                    </span>
                    <CaretDown
                      size={20}
                      weight="bold"
                      className="mt-1 shrink-0 text-forest transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 text-muted leading-relaxed">{f.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Другие услуги */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-800 tracking-tighter text-dark mb-8">
              {t.serviceOther}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.06}>
                <Link
                  to={href(`/uslugi/${p.slug}`)}
                  className="group h-full flex flex-col bg-white border border-dark/5 rounded-[1.75rem] p-7 no-underline transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-800 tracking-tight text-dark">{p.copy[locale].name}</h3>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{p.copy[locale].tagline}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                    {p.copy[locale].price}
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`${copy.name}: ${t.ctaGetQuote.toLowerCase()}`} lead={t.contactLead} />
    </>
  )
}
