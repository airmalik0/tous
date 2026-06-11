import { ScrollReveal } from './ScrollReveal'
import { Check } from '@phosphor-icons/react'
import { useT, type Locale } from '../i18n'

type Plan = {
  name: string
  pages: string
  features: string[]
  price: string
  popular?: boolean
}

const plansByLocale: Record<Locale, Plan[]> = {
  ru: [
    {
      name: 'Лендинг',
      pages: '1 страница',
      features: [
        'Домен и хостинг',
        'Адаптивный уникальный дизайн',
        'Формы заявок в Telegram',
        'SEO-оптимизация',
        'Обучение персонала',
        'Техподдержка в течение года',
        'Сроки от 3 дней',
      ],
      price: 'от 2.5 млн сум',
    },
    {
      name: 'Сайт-визитка',
      pages: '3–10 страниц',
      features: [
        'Домен и хостинг',
        'Адаптивный уникальный дизайн',
        'Формы заявок в Telegram',
        'Админ-панель',
        'SEO-оптимизация',
        'Мультиязычность uz/ru/en',
        'Обучение персонала',
        'Техподдержка в течение года',
        'Сроки от 7 дней',
      ],
      price: 'от 4 млн сум',
      popular: true,
    },
    {
      name: 'Корпоративный сайт',
      pages: '10–100 страниц',
      features: [
        'Домен и хостинг',
        'Адаптивный уникальный дизайн',
        'Формы заявок в Telegram',
        'Админ-панель',
        'SEO-оптимизация',
        'Мультиязычность uz/ru/en',
        'Модули, функционал, квиз',
        'Регистрация в Google / Yandex',
        'Обучение персонала',
        'Техподдержка в течение года',
        'Сроки от 14 дней',
      ],
      price: 'от 7 млн сум',
    },
    {
      name: 'Интернет-магазин',
      pages: '10–1000 страниц',
      features: [
        'Домен и хостинг',
        'Адаптивный уникальный дизайн',
        'Формы заявок в Telegram',
        'Админ-панель',
        'Личный кабинет',
        'Оплата Click / Payme',
        'SEO-оптимизация',
        'Мультиязычность uz/ru/en',
        'Регистрация в Google / Yandex',
        'Обучение персонала',
        'Техподдержка в течение года',
        'Сроки от 20 дней',
      ],
      price: 'от 10 млн сум',
    },
  ],
  uz: [
    {
      name: 'Lending',
      pages: '1 sahifa',
      features: [
        'Domen va hosting',
        'Moslashuvchan unikal dizayn',
        'Telegramga ariza formalari',
        'SEO-optimallashtirish',
        "Xodimlarni o'qitish",
        'Bir yil davomida texnik yordam',
        'Muddat 3 kundan',
      ],
      price: "2.5 mln so'mdan",
    },
    {
      name: 'Sayt-vizitka',
      pages: '3–10 sahifa',
      features: [
        'Domen va hosting',
        'Moslashuvchan unikal dizayn',
        'Telegramga ariza formalari',
        'Admin-panel',
        'SEO-optimallashtirish',
        "Ko'p tillilik uz/ru/en",
        "Xodimlarni o'qitish",
        'Bir yil davomida texnik yordam',
        'Muddat 7 kundan',
      ],
      price: "4 mln so'mdan",
      popular: true,
    },
    {
      name: 'Korporativ sayt',
      pages: '10–100 sahifa',
      features: [
        'Domen va hosting',
        'Moslashuvchan unikal dizayn',
        'Telegramga ariza formalari',
        'Admin-panel',
        'SEO-optimallashtirish',
        "Ko'p tillilik uz/ru/en",
        'Modullar, funksional, kviz',
        "Google / Yandexda ro'yxatdan o'tkazish",
        "Xodimlarni o'qitish",
        'Bir yil davomida texnik yordam',
        'Muddat 14 kundan',
      ],
      price: "7 mln so'mdan",
    },
    {
      name: "Internet-do'kon",
      pages: '10–1000 sahifa',
      features: [
        'Domen va hosting',
        'Moslashuvchan unikal dizayn',
        'Telegramga ariza formalari',
        'Admin-panel',
        'Shaxsiy kabinet',
        "Click / Payme to'lovi",
        'SEO-optimallashtirish',
        "Ko'p tillilik uz/ru/en",
        "Google / Yandexda ro'yxatdan o'tkazish",
        "Xodimlarni o'qitish",
        'Bir yil davomida texnik yordam',
        'Muddat 20 kundan',
      ],
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
          {plans.map((plan, i) => (
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
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={`mt-0.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${plan.popular ? 'bg-mint/15' : 'bg-mint-bg'}`}>
                        <Check size={12} weight="bold" className={plan.popular ? 'text-mint' : 'text-forest'} />
                      </span>
                      <span className={`text-sm leading-snug ${plan.popular ? 'text-white/80' : 'text-dark/80'}`}>
                        {f}
                      </span>
                    </li>
                  ))}
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
          ))}
        </div>
      </div>
    </section>
  )
}
