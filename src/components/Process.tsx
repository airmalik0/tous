import { ScrollReveal } from './ScrollReveal'
import { useT } from '../i18n'

type Props = {
  heading?: boolean
  /** Тёмная версия — для страниц со светлым верхом. */
  dark?: boolean
}

export function Process({ heading = true, dark = false }: Props) {
  const { t } = useT()

  const steps = [
    { title: t.processStep1Title, text: t.processStep1Text },
    { title: t.processStep2Title, text: t.processStep2Text },
    { title: t.processStep3Title, text: t.processStep3Text },
    { title: t.processStep4Title, text: t.processStep4Text },
    { title: t.processStep5Title, text: t.processStep5Text },
  ]

  const body = (
    <>
      {heading && (
        <ScrollReveal>
          <div className={`mb-12 md:mb-16 ${dark ? '' : 'text-center'}`}>
            <span
              className={`inline-flex items-center px-4 py-2 rounded-pill text-sm font-medium mb-6 ${
                dark ? 'bg-mint/15 text-mint' : 'border border-forest/10 text-forest'
              }`}
            >
              {t.processBadge}
            </span>
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter ${
                dark ? 'text-white' : 'text-dark'
              }`}
            >
              {t.processTitle1}
              <br />
              <span className={dark ? 'text-mint' : 'text-mint-deep'}>{t.processTitle2}</span>
            </h2>
          </div>
        </ScrollReveal>
      )}

      <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
        {steps.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.06}>
            <li
              className={`h-full rounded-[1.75rem] p-7 ${
                dark ? 'bg-white/5 border border-white/10' : 'bg-cream'
              }`}
            >
              <span
                className={`font-display font-800 text-4xl tracking-tighter ${
                  dark ? 'text-mint/40' : 'text-forest/20'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className={`mt-4 text-xl font-800 tracking-tight ${dark ? 'text-white' : 'text-dark'}`}
              >
                {s.title}
              </h3>
              <p className={`mt-2.5 text-sm leading-relaxed ${dark ? 'text-white/50' : 'text-muted'}`}>
                {s.text}
              </p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </>
  )

  if (!dark) {
    return (
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">{body}</div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.08) 0%, transparent 70%)' }}
          />
          <div className="relative z-10">{body}</div>
        </div>
      </div>
    </section>
  )
}
