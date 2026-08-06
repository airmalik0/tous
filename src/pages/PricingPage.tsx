import { PageHero } from '../components/PageHero'
import { Pricing } from '../components/Pricing'
import { Process } from '../components/Process'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { useT } from '../i18n'

export function PricingPage() {
  const { t, locale } = useT()

  return (
    <>
      <Seo
        title={
          locale === 'uz'
            ? "Sayt yaratish narxlari Toshkentda — 2.5 mln so'mdan | imbim"
            : 'Цены на создание сайта в Ташкенте — от 2.5 млн сум | imbim'
        }
        description={
          locale === 'uz'
            ? "imbim veb-studiyasi tariflari: lending, sayt-vizitka, korporativ sayt, internet-do'kon. Har bir tarifda nima borligi va muddatlar."
            : 'Тарифы веб-студии imbim: лендинг, сайт-визитка, корпоративный сайт, интернет-магазин. Что входит в каждый тариф и сроки запуска.'
        }
      />

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
