import { Clock, InstagramLogo, PaperPlaneTilt, Phone } from '@phosphor-icons/react'
import { PageHero } from '../components/PageHero'
import { Contact } from '../components/Contact'
import { ScrollReveal } from '../components/ScrollReveal'
import { Seo } from '../components/Seo'
import { SITE_URL, seoFor } from '../content/seo'
import { useT } from '../i18n'

const contactLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'imbim',
  url: `${SITE_URL}/kontakty`,
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'imbim',
    telephone: '+998901359666',
    sameAs: ['https://t.me/imbim2004', 'https://instagram.com/imbim_web'],
  },
}

export function Contacts() {
  const { t, locale } = useT()

  const cards = [
    {
      icon: Phone,
      label: t.contactsPhoneLabel,
      value: '+998 90 135 96 66',
      to: 'tel:+998901359666',
    },
    {
      icon: PaperPlaneTilt,
      label: t.contactsTelegramLabel,
      value: '@imbim2004',
      to: 'https://t.me/imbim2004',
    },
    {
      icon: InstagramLogo,
      label: t.contactsInstagramLabel,
      value: '@imbim_web',
      to: 'https://instagram.com/imbim_web',
    },
    {
      icon: Clock,
      label: t.contactsHoursLabel,
      value: t.contactsHoursValue,
    },
  ]

  return (
    <>
      <Seo {...seoFor('/kontakty', locale)} jsonLd={contactLd} />

      <PageHero
        badge={t.contactsBadge}
        title1={t.contactsTitle1}
        title2={t.contactsTitle2}
        lead={t.contactsLead}
        crumbs={[{ label: t.navContacts }]}
      />

      <section className="pb-8 md:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c, i) => {
              const IconTag = c.icon
              const inner = (
                <>
                  <span className="w-11 h-11 rounded-2xl bg-forest flex items-center justify-center mb-5">
                    <IconTag size={22} weight="fill" className="text-mint" />
                  </span>
                  <p className="text-muted text-xs uppercase tracking-wide font-semibold">{c.label}</p>
                  <p className="mt-1.5 font-display font-800 text-lg tracking-tight text-dark break-words">
                    {c.value}
                  </p>
                </>
              )
              const cls =
                'h-full flex flex-col bg-cream rounded-[1.75rem] p-6 md:p-7 no-underline transition-transform duration-300'
              return (
                <ScrollReveal key={c.label} delay={i * 0.06}>
                  {c.to ? (
                    <a
                      href={c.to}
                      target={c.to.startsWith('http') ? '_blank' : undefined}
                      rel={c.to.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${cls} hover:-translate-y-1`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
