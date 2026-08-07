import { PageHero } from '../components/PageHero'
import { Portfolio } from '../components/Portfolio'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { seoFor } from '../content/seo'
import { useT } from '../i18n'

export function PortfolioPage() {
  const { t, locale } = useT()

  return (
    <>
      <Seo {...seoFor('/portfolio', locale)} />

      <PageHero
        badge={t.portfolioBadge}
        title1={t.portfolioTitle1}
        title2={t.portfolioTitle2}
        lead={t.portfolioLead}
        crumbs={[{ label: t.navPortfolio }]}
      />

      <Portfolio heading={false} />
      <CtaBand title={`${t.contactTitle1} ${t.contactTitle2.toLowerCase()}`} lead={t.contactLead} />
    </>
  )
}
