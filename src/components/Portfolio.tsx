import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'
import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react'
import { useT } from '../i18n'
import { useProjectTags } from '../hooks/useProjectTags'
import { projects } from '../content/projects'

type Props = {
  heading?: boolean
  /** Сколько работ показать; без ограничения — все. */
  limit?: number
  /** Кнопка «Все работы» под сеткой. */
  showAllLink?: boolean
  /** Мозаика с широкими карточками; выключается, когда список урезан. */
  mosaic?: boolean
}

export function Portfolio({ heading = true, limit, showAllLink = false, mosaic = true }: Props) {
  const { t, locale, href } = useT()
  const tags = useProjectTags()
  const shown = limit ? projects.slice(0, limit) : projects

  return (
    <section id="portfolio" className={heading ? 'py-24 md:py-32' : 'pb-24 md:pb-32'}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {heading && (
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
                {t.portfolioBadge}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
                {t.portfolioTitle1}
                <br />
                <span className="text-mint-deep">{t.portfolioTitle2}</span>
              </h2>
            </div>
          </ScrollReveal>
        )}

        <div className="grid lg:grid-cols-3 gap-5">
          {shown.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08} className={(mosaic && p.span) || ''}>
              <Link
                to={href(`/portfolio/${p.slug}`)}
                className="group relative block h-full min-h-[260px] md:min-h-[300px] bg-forest rounded-[2rem] overflow-hidden no-underline"
              >
                <div className="absolute right-0 top-0 bottom-0 aspect-square overflow-hidden">
                  <img
                    src={`/portfolio-illust/${p.slug}.jpg`}
                    alt={p.brand}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-forest from-18% via-forest/40 via-46% to-transparent to-88%" />
                </div>

                <div
                  className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between gap-8"
                  style={{ paddingRight: 'calc(min(50%, 320px) - 1rem)' }}
                >
                  <span className="inline-flex w-fit px-3 py-1.5 rounded-pill text-xs font-medium bg-mint/15 text-mint">
                    {tags[p.tag]}
                  </span>
                  <div>
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-800 tracking-tight leading-[1.05]">
                      {p.brand}
                    </h3>
                    <p className="mt-2 text-white/45 text-sm leading-snug max-w-[34ch]">
                      {p.copy[locale].summary}
                    </p>
                  </div>
                </div>

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 group-hover:scale-110 transition-transform duration-300 z-20">
                  <ArrowUpRight size={18} weight="bold" className="text-forest" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-12 flex justify-center">
            <Link
              to={href('/portfolio')}
              className="inline-flex items-center gap-2 px-8 py-4 border border-forest/15 text-forest rounded-pill text-base font-semibold hover:bg-forest hover:text-mint transition-colors duration-200"
            >
              {t.ctaAllWorks}
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
