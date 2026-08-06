import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { Seo } from '../components/Seo'
import { useT } from '../i18n'

export function NotFound() {
  const { t, href } = useT()

  return (
    <>
      <Seo title={`404 — ${t.notFoundTitle} | imbim`} description={t.notFoundLead} noindex />

      <section className="min-h-[70svh] flex items-center pt-28 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="font-display font-800 text-7xl md:text-9xl tracking-tighter text-forest/15">404</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-800 tracking-tighter text-dark">
            {t.notFoundTitle}
          </h1>
          <p className="mt-5 text-muted text-lg max-w-[46ch] mx-auto leading-relaxed">{t.notFoundLead}</p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to={href('/')}
              className="inline-flex items-center px-8 py-4 bg-forest text-mint rounded-pill text-base font-bold hover:bg-forest-light transition-colors duration-200"
            >
              {t.notFoundCta}
            </Link>
            <Link
              to={href('/portfolio')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-forest/15 text-forest rounded-pill text-base font-semibold hover:bg-cream transition-colors duration-200"
            >
              {t.ctaAllWorks}
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
