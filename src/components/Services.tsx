import { ScrollReveal } from './ScrollReveal'
import {
  Browser,
  ShoppingCart,
  Rocket,
  DeviceMobile,
  PaintBrush,
  ChartLineUp,
} from '@phosphor-icons/react'

const services = [
  {
    icon: Browser,
    title: 'Корпоративные сайты',
    desc: 'Представительство вашей компании в интернете с продуманной структурой и контентом.',
    accent: false,
  },
  {
    icon: ShoppingCart,
    title: 'Интернет-магазины',
    desc: 'E-commerce решения с каталогом, корзиной, оплатой и интеграцией с CRM.',
    accent: false,
  },
  {
    icon: Rocket,
    title: 'Лендинги',
    desc: 'Продающие страницы с высокой конверсией для ваших рекламных кампаний.',
    accent: false,
  },
  {
    icon: DeviceMobile,
    title: 'Веб-приложения',
    desc: 'SPA и PWA любой сложности: от личных кабинетов до внутренних сервисов.',
    accent: false,
  },
  {
    icon: PaintBrush,
    title: 'UI/UX Дизайн',
    desc: 'Проектирование интерфейсов, которые красивы и удобны для ваших пользователей.',
    accent: false,
  },
  {
    icon: ChartLineUp,
    title: 'SEO и аналитика',
    desc: 'Оптимизация сайта для поисковых систем и настройка инструментов аналитики.',
    accent: false,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
              Наши услуги
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
              Всё, что нужно для
              <br />
              <span className="text-mint">вашего проекта</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div
                className={`group relative p-8 rounded-[2rem] transition-all duration-500 h-full ${
                  s.accent
                    ? 'bg-forest text-white'
                    : 'bg-mint-bg hover:bg-mint-soft'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div
                  className={`w-14 h-14 rounded-[1.25rem] flex items-center justify-center mb-6 ${
                    s.accent ? 'bg-mint/15' : 'bg-white'
                  }`}
                >
                  <s.icon
                    size={28}
                    weight="duotone"
                    className={s.accent ? 'text-mint' : 'text-forest'}
                  />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${s.accent ? 'text-white' : 'text-dark'}`}>
                  {s.title}
                </h3>
                <p className={`leading-relaxed ${s.accent ? 'text-white/70' : 'text-muted'}`}>
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
