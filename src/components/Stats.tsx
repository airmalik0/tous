import { ScrollReveal } from './ScrollReveal'
import { useT } from '../i18n'

export function Stats() {
  const { t } = useT()

  const items = [
    { value: '50+', label: t.statProjects },
    { value: '2', label: t.statYears },
    { value: '3', label: t.statDays },
    { value: '1', label: t.statSupport },
  ]

  return (
    <section className="pb-8 md:pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <ScrollReveal key={it.label} delay={i * 0.06}>
              <div className="h-full bg-cream rounded-[1.75rem] p-6 md:p-8">
                <p className="font-display font-800 text-4xl md:text-5xl tracking-tighter text-forest">
                  {it.value}
                </p>
                <p className="mt-2 text-muted text-sm leading-snug">{it.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
