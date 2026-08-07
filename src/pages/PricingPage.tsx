import { PageHero } from '../components/PageHero'
import { Pricing } from '../components/Pricing'
import { Process } from '../components/Process'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { seoFor } from '../content/seo'
import { useT } from '../i18n'

export function PricingPage() {
  const { t, locale } = useT()

  return (
    <>
      <Seo {...seoFor('/tseny', locale)} />

      <PageHero
        badge={t.pricingBadge}
        title1={t.pricingTitle1}
        title2={t.pricingTitle2}
        lead={t.pricingLead}
        crumbs={[{ label: t.navPricing }]}
      />

      <Pricing heading={false} note />
      <Process dark />
      <CtaBand title={`${t.contactTitle1} ${t.contactTitle2.toLowerCase()}`} lead={t.contactLead} />
    </>
  )
}
