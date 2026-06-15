import { ScrollReveal } from './ScrollReveal'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useT } from '../i18n'

type Project = {
  slug: string
  brand: string
  tagKey: 'kidsShoes' | 'detailing' | 'pillows' | 'furniture' | 'books' | 'arcade' | 'florist'
  url: string
  span?: string
}

const projects: Project[] = [
  { slug: 'savushka', brand: 'Savushka', tagKey: 'kidsShoes', url: 'https://savushka.com/', span: 'lg:col-span-2' },
  { slug: 'detailing-lab', brand: 'Detailing Lab', tagKey: 'detailing', url: 'https://detailinglab.uz/' },
  { slug: 'pillo', brand: 'Pillo', tagKey: 'pillows', url: 'https://pillo-86t.pages.dev/' },
  { slug: 'bron-mebel', brand: 'Bron Mebel', tagKey: 'furniture', url: 'https://bron-mebel.pages.dev/' },
  { slug: 'paper-cutout', brand: 'Слова на ветер', tagKey: 'books', url: '/portfolio/paper-cutout/index.html' },
  { slug: 'mosaic-pixel', brand: 'PIXEL ALMATY', tagKey: 'arcade', url: '/portfolio/mosaic-pixel/index.html', span: 'lg:col-span-2' },
  { slug: 'spring-blooms', brand: 'FLEUREL', tagKey: 'florist', url: '/portfolio/spring-blooms/index.html' },
]

export function Portfolio() {
  const { t } = useT()

  const tags: Record<Project['tagKey'], string> = {
    kidsShoes: t.portfolioTagKidsShoes,
    detailing: t.portfolioTagDetailing,
    pillows: t.portfolioTagPillows,
    furniture: t.portfolioTagFurniture,
    books: t.portfolioTagBooks,
    arcade: t.portfolioTagArcade,
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
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-forest from-22% via-forest/40 via-52% to-transparent to-96%" />
                </div>

                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between gap-8" style={{ paddingRight: 'calc(min(50%, 320px) - 1rem)' }}>
                  <span className="inline-flex w-fit px-3 py-1.5 rounded-pill text-xs font-medium bg-mint/15 text-mint">
                    {tags[p.tagKey]}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-800 tracking-tight leading-[1.05]">
                    {p.brand}
                  </h3>
                </div>

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 group-hover:scale-110 transition-transform duration-300 z-20">
                  <ArrowUpRight size={18} weight="bold" className="text-forest" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
