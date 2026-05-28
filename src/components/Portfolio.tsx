import { ScrollReveal } from './ScrollReveal'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useT } from '../i18n'

type Project = {
  slug: string
  brand: string
  tagKey: 'fintech' | 'design' | 'family' | 'cafe' | 'arcade' | 'books' | 'florist'
  span?: string
}

const projects: Project[] = [
  { slug: 'bento', brand: 'Поток', tagKey: 'fintech', span: 'lg:col-span-2' },
  { slug: 'bold-typography', brand: 'КРИК', tagKey: 'design' },
  { slug: 'claymorphism', brand: 'Семечки', tagKey: 'family' },
  { slug: 'hand-drawn', brand: 'Эскиз', tagKey: 'cafe' },
  { slug: 'paper-cutout', brand: 'Слова на ветер', tagKey: 'books' },
  { slug: 'mosaic-pixel', brand: 'PIXEL ALMATY', tagKey: 'arcade', span: 'lg:col-span-2' },
  { slug: 'spring-blooms', brand: 'FLEUREL', tagKey: 'florist' },
]

export function Portfolio() {
  const { t } = useT()

  const tags: Record<Project['tagKey'], string> = {
    fintech: t.portfolioTagFintech,
    design: t.portfolioTagDesign,
    family: t.portfolioTagFamily,
    cafe: t.portfolioTagCafe,
    arcade: t.portfolioTagArcade,
    books: t.portfolioTagBooks,
    florist: t.portfolioTagFlorist,
  }

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
              {t.portfolioBadge}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
              {t.portfolioTitle1}
              <br />
              <span className="text-mint">{t.portfolioTitle2}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.08} className={p.span ?? ''}>
              <a
                href={`/portfolio/${p.slug}/index.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-dark rounded-[2rem] h-full min-h-[320px] flex flex-col overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] no-underline"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={`/portfolio-previews/${p.slug}.jpg`}
                    alt={p.brand}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/0 to-dark/0" />
                </div>

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3 pointer-events-none">
                  <span className="inline-flex px-3 py-1.5 rounded-pill text-xs font-medium bg-white/85 text-dark backdrop-blur-sm">
                    {tags[p.tagKey]}
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/85 group-hover:scale-110 transition-transform duration-300">
                    <ArrowUpRight size={18} weight="bold" className="text-forest" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-800 tracking-tight text-white">
                    {p.brand}
                  </h3>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
