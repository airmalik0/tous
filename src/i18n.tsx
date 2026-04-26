import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Locale = 'ru' | 'uz'

type Dict = {
  // Header
  navServices: string
  navProcess: string
  navAbout: string
  navContact: string
  ctaDiscuss: string
  menuAria: string

  // Hero
  heroBadge: string
  heroTitle1: string
  heroTitle2: string
  heroTitle3: string
  heroLead: string
  heroCtaSecondary: string
  heroNewLead: string
  heroNewLeadSub: string
  heroScrollAria: string

  // Services
  servicesBadge: string
  servicesTitle1: string
  servicesTitle2: string
  serviceCorpTitle: string
  serviceCorpDesc: string
  serviceShopTitle: string
  serviceShopDesc: string
  serviceLandingTitle: string
  serviceLandingDesc: string
  serviceAppTitle: string
  serviceAppDesc: string
  serviceDesignTitle: string
  serviceDesignDesc: string
  serviceSeoTitle: string
  serviceSeoDesc: string

  // Process
  processBadge: string
  processTitle1: string
  processTitle2: string
  step1Title: string
  step1Desc: string
  step2Title: string
  step2Desc: string
  step3Title: string
  step3Desc: string
  step4Title: string
  step4Desc: string

  // Stats
  statsTitle1: string
  statsTitle2: string
  statsOrders: string
  statsClients: string
  statsYears: string

  // Contact
  contactBadge: string
  contactTitle1: string
  contactTitle2: string
  contactLead: string
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
  contactSuccessTitle: string
  contactSuccessSub: string
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
  navServices: 'Услуги',
  navProcess: 'Процесс',
  navAbout: 'О нас',
  navContact: 'Контакты',
  ctaDiscuss: 'Обсудить проект',
  menuAria: 'Меню',

  heroBadge: 'Веб-студия полного цикла',
  heroTitle1: 'Создаём сайты',
  heroTitle2: 'любой',
  heroTitle3: 'сложности',
  heroLead: 'От лендингов до сложных веб-приложений. Превращаем идеи в цифровые продукты, которые работают на ваш бизнес.',
  heroCtaSecondary: 'Наши услуги',
  heroNewLead: 'Новая заявка',
  heroNewLeadSub: 'с вашего сайта',
  heroScrollAria: 'Прокрутить вниз',

  servicesBadge: 'Наши услуги',
  servicesTitle1: 'Всё, что нужно для',
  servicesTitle2: 'вашего проекта',
  serviceCorpTitle: 'Корпоративные сайты',
  serviceCorpDesc: 'Представительство вашей компании в интернете с продуманной структурой и контентом.',
  serviceShopTitle: 'Интернет-магазины',
  serviceShopDesc: 'E-commerce решения с каталогом, корзиной, оплатой и интеграцией с CRM.',
  serviceLandingTitle: 'Лендинги',
  serviceLandingDesc: 'Продающие страницы с высокой конверсией для ваших рекламных кампаний.',
  serviceAppTitle: 'Веб-приложения',
  serviceAppDesc: 'SPA и PWA любой сложности: от личных кабинетов до внутренних сервисов.',
  serviceDesignTitle: 'UI/UX Дизайн',
  serviceDesignDesc: 'Проектирование интерфейсов, которые красивы и удобны для ваших пользователей.',
  serviceSeoTitle: 'SEO и аналитика',
  serviceSeoDesc: 'Оптимизация сайта для поисковых систем и настройка инструментов аналитики.',

  processBadge: 'Как мы работаем',
  processTitle1: 'Прозрачный процесс.',
  processTitle2: 'Предсказуемый результат.',
  step1Title: 'Обсуждение',
  step1Desc: 'Узнаём ваши цели, аудиторию и задачи. Формируем бриф и определяем объём работ.',
  step2Title: 'Дизайн',
  step2Desc: 'Проектируем структуру и создаём визуальный дизайн, который решает задачи бизнеса.',
  step3Title: 'Разработка',
  step3Desc: 'Воплощаем дизайн в код: адаптивная вёрстка, анимации, интеграции и тестирование.',
  step4Title: 'Запуск',
  step4Desc: 'Деплоим сайт, настраиваем аналитику и обеспечиваем техническую поддержку.',

  statsTitle1: 'Цифры говорят',
  statsTitle2: 'сами за себя',
  statsOrders: 'Заказов выполнено',
  statsClients: 'Довольных клиентов',
  statsYears: 'Года на рынке',

  contactBadge: 'Оставьте заявку',
  contactTitle1: 'Давайте создадим',
  contactTitle2: 'что-то крутое',
  contactLead: 'Оставьте контакт — мы свяжемся, обсудим проект и предложим решение.',
  contactLabel: 'Телефон или Telegram *',
  contactPlaceholder: '+998... или @username',
  contactDescLabel: 'Описание проекта',
  contactDescOptional: '— необязательно',
  contactDescPlaceholder: 'Расскажите коротко о вашем проекте...',
  contactTimeLabel: 'Когда удобно позвонить',
  contactTimeOptional: '— необязательно',
  contactTimePlaceholder: 'Например: после 15:00',
  contactSubmit: 'Отправить заявку',
  contactSending: 'Отправляем...',
  contactErrorMsg: 'Ошибка отправки. Попробуйте позже или позвоните нам.',
  contactSuccessTitle: 'Заявка отправлена!',
  contactSuccessSub: 'Мы свяжемся с вами в ближайшее время',
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
  navServices: 'Xizmatlar',
  navProcess: 'Jarayon',
  navAbout: 'Biz haqimizda',
  navContact: 'Aloqa',
  ctaDiscuss: 'Loyihani muhokama qilish',
  menuAria: 'Menyu',

  heroBadge: "To'liq tsikl veb-studiya",
  heroTitle1: 'Har qanday',
  heroTitle2: 'murakkablikdagi',
  heroTitle3: 'saytlarni yaratamiz',
  heroLead: "Lendinglardan murakkab veb-ilovalargacha. G'oyalarni biznesingiz uchun ishlaydigan raqamli mahsulotlarga aylantiramiz.",
  heroCtaSecondary: 'Xizmatlarimiz',
  heroNewLead: "Yangi ariza",
  heroNewLeadSub: "saytingizdan",
  heroScrollAria: "Pastga aylantirish",

  servicesBadge: 'Xizmatlarimiz',
  servicesTitle1: 'Loyihangiz uchun',
  servicesTitle2: 'kerak bo‘lgan hamma narsa',
  serviceCorpTitle: 'Korporativ saytlar',
  serviceCorpDesc: "Kompaniyangizning internetdagi vakolatxonasi: o‘ylangan tuzilma va kontent bilan.",
  serviceShopTitle: 'Internet-do‘konlar',
  serviceShopDesc: "Katalog, savat, to‘lov va CRM integratsiyasi bilan e-commerce yechimlari.",
  serviceLandingTitle: 'Lendinglar',
  serviceLandingDesc: "Reklama kampaniyalaringiz uchun yuqori konversiyali sotuvchi sahifalar.",
  serviceAppTitle: 'Veb-ilovalar',
  serviceAppDesc: "Har qanday murakkablikdagi SPA va PWA: shaxsiy kabinetlardan ichki servislargacha.",
  serviceDesignTitle: 'UI/UX dizayn',
  serviceDesignDesc: "Foydalanuvchilaringiz uchun chiroyli va qulay interfeys dizayni.",
  serviceSeoTitle: 'SEO va analitika',
  serviceSeoDesc: "Saytni qidiruv tizimlari uchun optimallashtirish va analitika sozlash.",

  processBadge: 'Qanday ishlaymiz',
  processTitle1: 'Shaffof jarayon.',
  processTitle2: "Bashorat qilinadigan natija.",
  step1Title: 'Muhokama',
  step1Desc: "Maqsadlaringiz, auditoriyangiz va vazifalaringizni o‘rganamiz. Brif tuzamiz va ish hajmini belgilaymiz.",
  step2Title: 'Dizayn',
  step2Desc: "Biznes vazifalarini hal qiluvchi tuzilma va vizual dizayn yaratamiz.",
  step3Title: 'Dasturlash',
  step3Desc: "Dizaynni kodga aylantiramiz: moslashuvchan tuzilma, animatsiyalar, integratsiyalar va testlash.",
  step4Title: 'Ishga tushirish',
  step4Desc: "Saytni deploy qilamiz, analitikani sozlaymiz va texnik yordam ko‘rsatamiz.",

  statsTitle1: 'Raqamlar o‘zi',
  statsTitle2: 'gapiradi',
  statsOrders: 'Bajarilgan loyihalar',
  statsClients: 'Mamnun mijozlar',
  statsYears: 'Yil bozorda',

  contactBadge: "Ariza qoldiring",
  contactTitle1: "Birgalikda yaratamiz",
  contactTitle2: "ajoyib narsani",
  contactLead: "Aloqa qoldiring — biz bog‘lanamiz, loyihani muhokama qilamiz va yechim taklif qilamiz.",
  contactLabel: 'Telefon yoki Telegram *',
  contactPlaceholder: '+998... yoki @username',
  contactDescLabel: 'Loyiha tavsifi',
  contactDescOptional: '— ixtiyoriy',
  contactDescPlaceholder: "Loyihangiz haqida qisqacha aytib bering...",
  contactTimeLabel: "Qachon qo‘ng‘iroq qilish qulay",
  contactTimeOptional: '— ixtiyoriy',
  contactTimePlaceholder: 'Masalan: 15:00 dan keyin',
  contactSubmit: 'Arizani yuborish',
  contactSending: 'Yuborilmoqda...',
  contactErrorMsg: "Yuborishda xatolik. Keyinroq urinib ko‘ring yoki bizga qo‘ng‘iroq qiling.",
  contactSuccessTitle: 'Ariza yuborildi!',
  contactSuccessSub: "Tez orada siz bilan bog‘lanamiz",
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
