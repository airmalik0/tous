import { Link } from 'react-router-dom'
import { CaretRight } from '@phosphor-icons/react'
import { useT } from '../i18n'

export type Crumb = { label: string; to?: string }

type Props = {
  badge: string
  title1: string
  title2?: string
  lead?: string
  crumbs?: Crumb[]
}

/** Шапка внутренней страницы: хлебные крошки, бейдж, заголовок, лид. */
export function PageHero({ badge, title1, title2, lead, crumbs = [] }: Props) {
  const { t, href } = useT()

  return (
    <section className="relative overflow-hidden pt-30 md:pt-36 pb-12 md:pb-16">
      <div
        className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(61,255,162,0.16) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <nav aria-label="breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-muted mb-7">
          <Link to={href('/')} className="hover:text-forest transition-colors duration-200">
            {t.breadcrumbHome}
          </Link>
          {crumbs.map(c => (
            <span key={c.label} className="flex items-center gap-1.5">
              <CaretRight size={12} weight="bold" className="text-dark/25" />
              {c.to ? (
                <Link to={c.to} className="hover:text-forest transition-colors duration-200">
                  {c.label}
                </Link>
              ) : (
                <span className="text-dark/60">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
          {badge}
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-800 tracking-tighter text-dark leading-[1.02] max-w-[16ch]">
          {title1}
          {title2 && (
            <>
              <br />
              <span className="text-mint-deep">{title2}</span>
            </>
          )}
        </h1>

        {lead && (
          <p className="mt-7 text-muted text-lg md:text-xl leading-relaxed max-w-[640px]">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
