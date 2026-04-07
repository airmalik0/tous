import { ScrollReveal } from './ScrollReveal'
import { ChatDots, PenNib, Code, RocketLaunch } from '@phosphor-icons/react'

const steps = [
  {
    num: '01',
    icon: ChatDots,
    title: 'Обсуждение',
    desc: 'Узнаём ваши цели, аудиторию и задачи. Формируем бриф и определяем объём работ.',
  },
  {
    num: '02',
    icon: PenNib,
    title: 'Дизайн',
    desc: 'Проектируем структуру и создаём визуальный дизайн, который решает задачи бизнеса.',
  },
  {
    num: '03',
    icon: Code,
    title: 'Разработка',
    desc: 'Воплощаем дизайн в код: адаптивная вёрстка, анимации, интеграции и тестирование.',
  },
  {
    num: '04',
    icon: RocketLaunch,
    title: 'Запуск',
    desc: 'Деплоим сайт, настраиваем аналитику и обеспечиваем техническую поддержку.',
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Large green container like flecto */}
        <div className="bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.08) 0%, transparent 70%)' }} />

          <ScrollReveal>
            <div className="relative z-10 mb-12 md:mb-16">
              <span className="inline-flex items-center px-4 py-2 bg-mint/15 rounded-pill text-mint text-sm font-medium mb-6">
                Как мы работаем
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-white">
                Прозрачный процесс.
                <br />
                <span className="text-mint">Предсказуемый результат.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-7 h-full hover:bg-white/10 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-mint/15 rounded-[1rem] flex items-center justify-center">
                      <step.icon size={24} weight="duotone" className="text-mint" />
                    </div>
                    <span className="text-white/20 text-3xl font-800 font-display">{step.num}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed text-[15px]">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
