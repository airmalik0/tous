import { ScrollReveal } from './ScrollReveal'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'Pickles Team',
    tag: 'Маркетинговое агентство',
    color: 'bg-[#1a1a1a]',
    text: 'text-white',
    desc: 'Сайт для агентства полного цикла в Ташкенте с анимациями и кейсами',
    url: 'https://pickles.team/uz/',
    span: 'lg:col-span-2',
  },
  {
    title: 'Serenity',
    tag: 'Агентство',
    color: 'bg-mint-bg',
    text: 'text-dark',
    desc: 'Маркетинговое агентство: стратегия, брендинг и продвижение',
    url: 'https://serenity.agency/',
    span: '',
  },
  {
    title: 'Samara Diamonds',
    tag: 'Ювелирный бутик',
    color: 'bg-[#1a1a2e]',
    text: 'text-white',
    desc: 'Премиальный сайт бутика бриллиантов в Tashkent City Mall',
    url: 'https://bloom-page-frame.lovable.app',
    span: '',
  },
  {
    title: 'KOTTE',
    tag: 'Digital-агентство',
    color: 'bg-forest',
    text: 'text-white',
    desc: 'Агентство полного цикла из Санкт-Петербурга: сайты, реклама, SMM',
    url: 'https://kotte.agency/',
    span: 'lg:col-span-2',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
              Портфолио
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
              Проекты, которыми
              <br />
              <span className="text-mint">мы гордимся</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1} className={p.span}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${p.color} rounded-[2rem] p-8 md:p-10 h-full min-h-[280px] flex flex-col justify-between overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99] block no-underline`}
              >
                {/* Mock UI elements for visual interest */}
                <div className="absolute top-6 right-6 opacity-[0.08] pointer-events-none">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, j) => (
                      <div key={j} className={`w-8 h-8 rounded-lg ${p.text === 'text-white' ? 'bg-white' : 'bg-dark'}`} />
                    ))}
                  </div>
                </div>

                <div>
                  <span
                    className={`inline-flex px-3 py-1.5 rounded-pill text-xs font-medium mb-4 ${
                      p.text === 'text-white'
                        ? 'bg-white/10 text-white/80'
                        : 'bg-forest/5 text-forest'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>

                <div>
                  <p
                    className={`text-sm mb-2 ${
                      p.text === 'text-white' ? 'text-white/50' : 'text-muted'
                    }`}
                  >
                    {p.desc}
                  </p>
                  <div className="flex items-end justify-between">
                    <h3 className={`text-2xl md:text-3xl font-800 tracking-tight ${p.text}`}>
                      {p.title}
                    </h3>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        p.text === 'text-white' ? 'bg-white/10' : 'bg-forest/5'
                      }`}
                    >
                      <ArrowUpRight
                        size={18}
                        weight="bold"
                        className={p.text === 'text-white' ? 'text-white/70' : 'text-forest'}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
