import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Locale = 'ru' | 'uz'

type Dict = {
  // Header
  navPricing: string
  navTeam: string
  navPortfolio: string
  navContact: string
  ctaDiscuss: string
  menuAria: string

  // Hero
  heroBadge: string
  heroTitle1: string
  heroTitle2: string
  heroTitleAccent: string
  heroTitleAfter: string
  heroLead: string
  heroCtaSecondary: string

  // Pricing
  pricingBadge: string
  pricingTitle1: string
  pricingTitle2: string
  pricingPopular: string

  // Team
  teamBadge: string
  teamTitle1: string
  teamTitle2: string
  roleDesigner: string
  roleProject: string
  roleDeveloper: string
  roleSmm: string
  roleFinance: string

  // Portfolio
  portfolioBadge: string
  portfolioTitle1: string
  portfolioTitle2: string
  portfolioTagKidsShoes: string
  portfolioTagDetailing: string
  portfolioTagPillows: string
  portfolioTagFurniture: string
  portfolioTagBooks: string
  portfolioTagArcade: string
  portfolioTagFlorist: string

  // Contact
  contactBadge: string
  contactTitle1: string
  contactTitle2: string
  contactLead: string
  contactOrCall: string
  contactLabel: string
  contactPlaceholder: string
  contactDescLabel: string
  contactDescOptional: string
  contactDescPlaceholder: string
  contactTimeLabel: string
  contactTimeOptional: string
  contactTimePlaceholder: string
  contactSubmit: string
  contactSending: string
  contactErrorMsg: string
  tgNewLead: string
  tgContact: string
  tgDescription: string
  tgTime: string

  // Footer
  footerLead: string
  footerNav: string
  footerContacts: string
  footerCopyright: string
  footerCraft: string
}

const ru: Dict = {
  navPricing: 'Цены',
  navTeam: 'Команда',
  navPortfolio: 'Портфолио',
  navContact: 'Контакты',
  ctaDiscuss: 'Обсудить проект',
  menuAria: 'Меню',

  heroBadge: '50+ запущенных проектов',
  heroTitle1: 'Создаём сайты,',
  heroTitle2: '',
  heroTitleAccent: 'которые продают',
  heroTitleAfter: '',
  heroLead: 'Сайты от 2.5 млн сум. Сроки — от 3 дней.',
  heroCtaSecondary: 'Все работы',

  pricingBadge: 'Цены',
  pricingTitle1: 'Сколько стоит',
  pricingTitle2: 'ваш сайт',
  pricingPopular: 'Популярный',

  teamBadge: 'Команда',
  teamTitle1: 'Люди, которые',
  teamTitle2: 'создают imbim',
  roleDesigner: 'Дизайнер',
  roleProject: 'Project Manager',
  roleDeveloper: 'Разработчик',
  roleSmm: 'SMM',
  roleFinance: 'Финансы',

  portfolioBadge: 'Портфолио',
  portfolioTitle1: 'Наши',
  portfolioTitle2: 'работы',
  portfolioTagKidsShoes: 'Детская обувь',
  portfolioTagDetailing: 'Автодетейлинг',
  portfolioTagPillows: 'Шёлковый текстиль',
  portfolioTagFurniture: 'Мебель',
  portfolioTagBooks: 'Книжный',
  portfolioTagArcade: 'Ретро-аркада',
  portfolioTagFlorist: 'Флористика',

  contactBadge: 'Бесплатная консультация',
  contactTitle1: 'Узнайте стоимость',
  contactTitle2: 'вашего сайта',
  contactLead: 'Оставьте контакт — перезвоним в течение часа, покажем похожие кейсы и назовём точную цену. Бесплатно и ни к чему не обязывает.',
  contactOrCall: 'Или позвоните прямо сейчас',
  contactLabel: 'Телефон или Telegram *',
  contactPlaceholder: '+998... или @username',
  contactDescLabel: 'Описание проекта',
  contactDescOptional: '— необязательно',
  contactDescPlaceholder: 'Расскажите коротко о вашем проекте...',
  contactTimeLabel: 'Когда удобно позвонить',
  contactTimeOptional: '— необязательно',
  contactTimePlaceholder: 'Например: после 15:00',
  contactSubmit: 'Получить расчёт',
  contactSending: 'Отправляем...',
  contactErrorMsg: 'Ошибка отправки. Попробуйте позже или позвоните нам.',
  tgNewLead: '📩 Новая заявка с сайта imbim.online',
  tgContact: '📱 Контакт',
  tgDescription: '📝 Описание проекта',
  tgTime: '🕐 Удобное время',

  footerLead: 'Веб-студия полного цикла. Создаём сайты и веб-приложения, которые работают на ваш бизнес.',
  footerNav: 'Навигация',
  footerContacts: 'Контакты',
  footerCopyright: '© 2025 imbim. Все права защищены.',
  footerCraft: 'Сделано с заботой о каждом пикселе',
}

const uz: Dict = {
  navPricing: 'Narxlar',
  navTeam: 'Jamoa',
  navPortfolio: 'Portfolio',
  navContact: 'Aloqa',
  ctaDiscuss: 'Loyihani muhokama qilish',
  menuAria: 'Menyu',

  heroBadge: '50+ ishga tushirilgan loyihalar',
  heroTitle1: 'Biznesingiz uchun',
  heroTitle2: '',
  heroTitleAccent: 'sotadigan saytlar',
  heroTitleAfter: 'yaratamiz',
  heroLead: "Saytlar 2.5 mln so'mdan. Muddat — 3 kundan.",
  heroCtaSecondary: 'Barcha ishlar',

  pricingBadge: 'Narxlar',
  pricingTitle1: 'Saytingiz',
  pricingTitle2: 'qancha turadi',
  pricingPopular: 'Ommabop',

  teamBadge: 'Jamoa',
  teamTitle1: 'imbim ortidagi',
  teamTitle2: 'odamlar',
  roleDesigner: 'Dizayner',
  roleProject: 'Project Manager',
  roleDeveloper: 'Dasturchi',
  roleSmm: 'SMM',
  roleFinance: 'Moliya',

  portfolioBadge: 'Portfolio',
  portfolioTitle1: 'Bizning',
  portfolioTitle2: 'ishlarimiz',
  portfolioTagKidsShoes: "Bolalar poyabzali",
  portfolioTagDetailing: 'Avto-deteyling',
  portfolioTagPillows: "Ipak to'shak buyumlari",
  portfolioTagFurniture: 'Mebel',
  portfolioTagBooks: "Kitob do'koni",
  portfolioTagArcade: 'Retro arkada',
  portfolioTagFlorist: 'Floristika',

  contactBadge: 'Bepul konsultatsiya',
  contactTitle1: 'Saytingiz narxini',
  contactTitle2: 'bilib oling',
  contactLead: "Aloqa qoldiring — bir soat ichida qo'ng'iroq qilamiz, o'xshash keyslarni ko'rsatamiz va aniq narxni aytamiz. Bepul.",
  contactOrCall: "Yoki hoziroq qo'ng'iroq qiling",
  contactLabel: 'Telefon yoki Telegram *',
  contactPlaceholder: '+998... yoki @username',
  contactDescLabel: 'Loyiha tavsifi',
  contactDescOptional: '— ixtiyoriy',
  contactDescPlaceholder: "Loyihangiz haqida qisqacha aytib bering...",
  contactTimeLabel: "Qachon qo‘ng‘iroq qilish qulay",
  contactTimeOptional: '— ixtiyoriy',
  contactTimePlaceholder: 'Masalan: 15:00 dan keyin',
  contactSubmit: 'Hisob-kitob olish',
  contactSending: 'Yuborilmoqda...',
  contactErrorMsg: "Yuborishda xatolik. Keyinroq urinib ko‘ring yoki bizga qo‘ng‘iroq qiling.",
  tgNewLead: '📩 imbim.online saytidan yangi ariza',
  tgContact: '📱 Aloqa',
  tgDescription: '📝 Loyiha tavsifi',
  tgTime: '🕐 Qulay vaqt',

  footerLead: "To‘liq tsikl veb-studiya. Biznesingiz uchun ishlaydigan saytlar va veb-ilovalar yaratamiz.",
  footerNav: 'Navigatsiya',
  footerContacts: 'Aloqalar',
  footerCopyright: '© 2025 imbim. Barcha huquqlar himoyalangan.',
  footerCraft: "Har bir piksel mehr bilan ishlangan",
}

const dictionaries: Record<Locale, Dict> = { ru, uz }

type Ctx = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const LanguageContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'imbim.locale'

function detectInitial(): Locale {
  if (typeof window === 'undefined') return 'ru'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === 'ru' || stored === 'uz') return stored
  const nav = navigator.language?.toLowerCase() ?? ''
  if (nav.startsWith('uz')) return 'uz'
  return 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitial)

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = (l: Locale) => setLocaleState(l)

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useT() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT must be used inside LanguageProvider')
  return ctx
}
