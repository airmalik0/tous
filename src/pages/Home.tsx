import { lazy, Suspense } from 'react'
import { Hero } from '../components/Hero'
import { Seo } from '../components/Seo'
import { SITE_URL, seoFor } from '../content/seo'
import { useT } from '../i18n'

const ServicesGrid = lazy(() => import('../components/ServicesGrid').then(m => ({ default: m.ServicesGrid })))
const Portfolio = lazy(() => import('../components/Portfolio').then(m => ({ default: m.Portfolio })))
const Pricing = lazy(() => import('../components/Pricing').then(m => ({ default: m.Pricing })))
const Team = lazy(() => import('../components/Team').then(m => ({ default: m.Team })))
const Contact = lazy(() => import('../components/Contact').then(m => ({ default: m.Contact })))

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'imbim',
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  telephone: '+998901359666',
  priceRange: 'от 2 500 000 UZS',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ташкент',
    addressCountry: 'UZ',
  },
  sameAs: ['https://t.me/imbim2004', 'https://instagram.com/imbim_web'],
}

export function Home() {
  const { locale } = useT()

  return (
    <>
      <Seo {...seoFor('/', locale)} jsonLd={organizationLd} />

      <Hero />
      <Suspense fallback={<div className="min-h-[50svh]" />}>
        <ServicesGrid showAllLink />
        <Portfolio limit={6} mosaic={false} showAllLink />
        <Pricing />
        <Team />
        <Contact />
      </Suspense>
    </>
  )
}
