import { PageHero } from '../components/PageHero'
import { ServicesGrid } from '../components/ServicesGrid'
import { Process } from '../components/Process'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { seoFor } from '../content/seo'
import { useT } from '../i18n'

export function Services() {
  const { t, locale } = useT()

  return (
    <>
      <Seo {...seoFor('/uslugi', locale)} />

      <PageHero
        badge={t.servicesBadge}
        title1={t.servicesTitle1}
        title2={t.servicesTitle2}
        lead={t.servicesLead}
        crumbs={[{ label: t.navServices }]}
      />

      <ServicesGrid heading={false} />
      <Process />
      <CtaBand title={t.contactTitle1 + ' ' + t.contactTitle2.toLowerCase()} lead={t.contactLead} />
    </>
  )
}
