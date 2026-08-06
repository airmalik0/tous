import { PageHero } from '../components/PageHero'
import { ServicesGrid } from '../components/ServicesGrid'
import { Process } from '../components/Process'
import { CtaBand } from '../components/CtaBand'
import { Seo } from '../components/Seo'
import { useT } from '../i18n'

export function Services() {
  const { t, locale } = useT()

  return (
    <>
      <Seo
        title={
          locale === 'uz'
            ? "Sayt ishlab chiqish xizmatlari — narxlar va muddatlar | imbim"
            : 'Услуги веб-студии imbim — разработка сайтов в Ташкенте'
        }
        description={
          locale === 'uz'
            ? "Lending, sayt-vizitka, korporativ sayt va internet-do'kon ishlab chiqish. Har bir format uchun tarkib, muddat va narx."
            : 'Разработка лендингов, сайтов-визиток, корпоративных сайтов и интернет-магазинов. Состав работ, сроки и цены по каждому формату.'
        }
      />

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
