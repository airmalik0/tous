import { PageHero } from '../components/PageHero'
import { Stats } from '../components/Stats'
import { Team } from '../components/Team'
import { CtaBand } from '../components/CtaBand'
import { ScrollReveal } from '../components/ScrollReveal'
import { Seo } from '../components/Seo'
import { seoFor } from '../content/seo'
import { useT } from '../i18n'

export function About() {
  const { t, locale } = useT()

  const values = [
    { title: t.aboutValue1Title, text: t.aboutValue1Text },
    { title: t.aboutValue2Title, text: t.aboutValue2Text },
    { title: t.aboutValue3Title, text: t.aboutValue3Text },
    { title: t.aboutValue4Title, text: t.aboutValue4Text },
  ]

  return (
    <>
      <Seo {...seoFor('/o-nas', locale)} />

      <PageHero
        badge={t.aboutBadge}
        title1={t.aboutTitle1}
        title2={t.aboutTitle2}
        lead={t.aboutLead}
        crumbs={[{ label: t.navAbout }]}
      />

      <Stats />

      {/* История и принципы */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-800 tracking-tighter text-dark">
                {t.aboutStoryTitle}
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">{t.aboutStoryP1}</p>
              <p className="mt-4 text-muted text-lg leading-relaxed">{t.aboutStoryP2}</p>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-800 tracking-tighter text-dark mb-8">
                {t.aboutValuesTitle}
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.06}>
                  <div className="h-full bg-cream rounded-[1.75rem] p-6 md:p-7">
                    <h3 className="text-lg font-800 tracking-tight text-dark">{v.title}</h3>
                    <p className="mt-2.5 text-muted text-sm leading-relaxed">{v.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Team />
      <CtaBand title={`${t.contactTitle1} ${t.contactTitle2.toLowerCase()}`} lead={t.contactLead} />
    </>
  )
}
