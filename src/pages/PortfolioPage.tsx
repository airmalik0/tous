import { PageHero } from '../components/PageHero'
import { Portfolio } from '../components/Portfolio'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { useT } from '../i18n'

export function PortfolioPage() {
  const { t, locale } = useT()

  return (
    <>
      <Seo
        title={locale === 'uz' ? 'Portfolio — imbim veb-studiyasi ishlari' : 'Портфолио — работы веб-студии imbim'}
        description={
          locale === 'uz'
            ? "imbim loyihalari: internet-do'konlar, xizmat saytlari va promo-sahifalar. Har bir keysda vazifa va yechim."
            : 'Проекты imbim: интернет-магазины, сайты услуг и промо-страницы. В каждом кейсе — задача и что мы для неё сделали.'
        }
      />

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
