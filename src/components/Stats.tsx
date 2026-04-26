import { useEffect, useState, useRef } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { useT } from '../i18n'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 1200
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export function Stats() {
  const { t } = useT()

  const stats = [
    { value: 50, suffix: '+', label: t.statsOrders },
    { value: 50, suffix: '+', label: t.statsClients },
    { value: 2, suffix: '', label: t.statsYears },
  ]

  return (
    <section id="stats" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Mint container like flecto's green sections */}
        <div className="bg-mint rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-forest/5 rounded-br-[4rem]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-forest/5 rounded-tl-[4rem]" />

          <ScrollReveal>
            <div className="relative z-10 text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-forest">
                {t.statsTitle1}
                <br />
                {t.statsTitle2}
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="bg-forest rounded-[2rem] p-6 md:p-8 text-center">
                  <p className="text-4xl md:text-5xl font-800 text-mint font-display tracking-tight mb-2">
                    <AnimatedNumber target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-white/60 text-sm md:text-base">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
