import { ScrollReveal } from './ScrollReveal'
import { Check, X } from '@phosphor-icons/react'
import { useT, type Locale } from '../i18n'

type FeatureKey =
  | 'design'
  | 'forms'
  | 'seo'
  | 'multilang'
  | 'training'
  | 'domain'
  | 'support'
  | 'admin'
  | 'modules'
  | 'registration'
  | 'cabinet'
  | 'payment'

// Единый порядок фич для всех тарифов — образует «лесенку» галочек/крестиков.
const featureOrder: FeatureKey[] = [
  'design',
  'forms',
  'seo',
  'multilang',
  'training',
  'domain',
  'support',
  'admin',
  'modules',
  'registration',
  'cabinet',
  'payment',
]

const featureLabels: Record<Locale, Record<FeatureKey, string>> = {
  ru: {
    design: 'Адаптивный уникальный дизайн',
    forms: 'Формы заявок в Telegram',
    seo: 'SEO-оптимизация',
    multilang: 'Мультиязычность uz/ru/en',
    training: 'Обучение персонала',
    domain: 'Домен и хостинг',
    support: 'Техподдержка в течение года',
    admin: 'Админ-панель',
    modules: 'Калькуляторы и квиз-формы',
    registration: 'Регистрация в Google / Yandex',
    cabinet: 'Личный кабинет',
    payment: 'Оплата Click / Payme',
  },
  uz: {
    design: 'Moslashuvchan unikal dizayn',
    forms: 'Telegramga ariza formalari',
    seo: 'SEO-optimallashtirish',
    multilang: "Ko'p tillilik uz/ru/en",
    training: "Xodimlarni o'qitish",
    domain: 'Domen va hosting',
    support: 'Bir yil davomida texnik yordam',
    admin: 'Admin-panel',
    modules: 'Kalkulyatorlar va kviz-formalar',
    registration: "Google / Yandexda ro'yxatdan o'tkazish",
    cabinet: 'Shaxsiy kabinet',
    payment: "Click / Payme to'lovi",
  },
}

type Plan = {
  name: string
  pages: string
  included: FeatureKey[]
  deadline: string
  price: string
  popular?: boolean
}

const plansByLocale: Record<Locale, Plan[]> = {
  ru: [
    {
      name: 'Лендинг',
      pages: '1 страница',
      included: ['design', 'forms', 'seo', 'multilang', 'training'],
      deadline: 'Сроки от 3 дней',
      price: 'от 2.5 млн сум',
    },
    {
      name: 'Сайт-визитка',
      pages: '3–10 страниц',
      included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin'],
      deadline: 'Сроки от 7 дней',
      price: 'от 4 млн сум',
      popular: true,
    },
    {
      name: 'Корпоративный сайт',
      pages: '10–100 страниц',
      included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin', 'modules', 'registration'],
      deadline: 'Сроки от 14 дней',
      price: 'от 7 млн сум',
    },
    {
      name: 'Интернет-магазин',
      pages: '10–1000 страниц',
      included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin', 'modules', 'registration', 'cabinet', 'payment'],
      deadline: 'Сроки от 20 дней',
      price: 'от 10 млн сум',
    },
  ],
  uz: [
    {
      name: 'Lending',
      pages: '1 sahifa',
      included: ['design', 'forms', 'seo', 'multilang', 'training'],
      deadline: 'Muddat 3 kundan',
      price: "2.5 mln so'mdan",
    },
    {
      name: 'Sayt-vizitka',
      pages: '3–10 sahifa',
      included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin'],
      deadline: 'Muddat 7 kundan',
      price: "4 mln so'mdan",
      popular: true,
    },
    {
      name: 'Korporativ sayt',
      pages: '10–100 sahifa',
      included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin', 'modules', 'registration'],
      deadline: 'Muddat 14 kundan',
      price: "7 mln so'mdan",
    },
    {
      name: "Internet-do'kon",
      pages: '10–1000 sahifa',
      included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin', 'modules', 'registration', 'cabinet', 'payment'],
      deadline: 'Muddat 20 kundan',
      price: "10 mln so'mdan",
    },
  ],
}

export function Pricing() {
  const { t, locale } = useT()
  const plans = plansByLocale[locale]

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center px-4 py-2 border border-forest/10 rounded-pill text-forest text-sm font-medium mb-6">
              {t.pricingBadge}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-dark">
              {t.pricingTitle1}
              <br />
              <span className="text-mint">{t.pricingTitle2}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((plan, i) => {
            const features = [
              ...featureOrder.map(key => ({
                label: featureLabels[locale][key],
                absent: !plan.included.includes(key),
              })),
              { label: plan.deadline, absent: false },
            ]
            return (
            <ScrollReveal key={plan.name} delay={i * 0.08}>
              <div
                className={`relative rounded-[2rem] p-7 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-forest text-white'
                    : 'bg-white border border-dark/5'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-mint text-forest text-xs font-bold rounded-pill whitespace-nowrap">
                    {t.pricingPopular}
                  </span>
                )}

                <h3 className={`text-xl font-800 tracking-tight ${plan.popular ? 'text-white' : 'text-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 mb-6 ${plan.popular ? 'text-white/50' : 'text-muted'}`}>
                  {plan.pages}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {features.map(f => {
                    const iconWrap = f.absent
                      ? plan.popular
                        ? 'bg-white/10'
                        : 'bg-dark/5'
                      : plan.popular
                        ? 'bg-mint/15'
                        : 'bg-mint-bg'
                    const iconColor = f.absent
                      ? plan.popular
                        ? 'text-white/40'
                        : 'text-dark/30'
                      : plan.popular
                        ? 'text-mint'
                        : 'text-forest'
                    const textColor = f.absent
                      ? plan.popular
                        ? 'text-white/40'
                        : 'text-dark/35'
                      : plan.popular
                        ? 'text-white/80'
                        : 'text-dark/80'
                    return (
                      <li key={f.label} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${iconWrap}`}>
                          {f.absent ? (
                            <X size={12} weight="bold" className={iconColor} />
                          ) : (
                            <Check size={12} weight="bold" className={iconColor} />
                          )}
                        </span>
                        <span className={`text-sm leading-snug ${textColor}`}>
                          {f.label}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-auto">
                  <p className={`font-display font-800 text-2xl md:text-[1.7rem] tracking-tight mb-5 ${plan.popular ? 'text-mint' : 'text-dark'}`}>
                    {plan.price}
                  </p>
                  <a
                    href="#contact"
                    className={`inline-flex w-full items-center justify-center px-6 py-3.5 rounded-pill text-[15px] font-bold transition-all duration-200 active:scale-[0.98] ${
                      plan.popular
                        ? 'bg-mint text-forest hover:brightness-110'
                        : 'bg-forest text-mint hover:bg-forest-light'
                    }`}
                  >
                    {t.ctaDiscuss}
                  </a>
                </div>
              </div>
            </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
