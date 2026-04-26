import { ScrollReveal } from './ScrollReveal'
import {
  Browser,
  ShoppingCart,
  Rocket,
  DeviceMobile,
  PaintBrush,
  ChartLineUp,
} from '@phosphor-icons/react'
import { useT } from '../i18n'

export function Services() {
  const { t } = useT()

  const services = [
    { icon: Browser, title: t.serviceCorpTitle, desc: t.serviceCorpDesc },
    { icon: ShoppingCart, title: t.serviceShopTitle, desc: t.serviceShopDesc },
    { icon: Rocket, title: t.serviceLandingTitle, desc: t.serviceLandingDesc },
    { icon: DeviceMobile, title: t.serviceAppTitle, desc: t.serviceAppDesc },
    { icon: PaintBrush, title: t.serviceDesignTitle, desc: t.serviceDesignDesc },
    { icon: ChartLineUp, title: t.serviceSeoTitle, desc: t.serviceSeoDesc },
  ]

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
              {t.servicesBadge}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
              {t.servicesTitle1}
              <br />
              <span className="text-mint">{t.servicesTitle2}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i % 3) * 0.15}>
              <div
                className="group relative p-8 rounded-[2rem] transition-colors duration-200 h-full bg-mint-bg hover:bg-mint-soft"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="w-14 h-14 rounded-[1.25rem] flex items-center justify-center mb-6 bg-white">
                  <s.icon size={28} weight="duotone" className="text-forest" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
