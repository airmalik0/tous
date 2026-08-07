import type { Locale } from '../locales'
import { plans } from './plans'
import { projects } from './projects'

export const SITE_URL = 'https://imbim.online'

export type PageSeo = {
  title: string
  description: string
  /** Абсолютный путь к превью; по умолчанию /og.png */
  image?: string
}

/**
 * Мета-тексты страниц. Отсюда их берут и React-компоненты во время работы,
 * и плагин сборки, который вшивает теги в HTML — второго списка нет.
 * Модуль намеренно без React: его импортирует vite.config.ts.
 */
const staticPages: Record<string, Record<Locale, PageSeo>> = {
  '/': {
    ru: {
      title: 'imbim — Создание сайтов в Ташкенте под ключ',
      description:
        'Веб-студия полного цикла: лендинги, сайты-визитки, корпоративные сайты и интернет-магазины. 50+ проектов, срок от 3 дней, цена от 2.5 млн сум.',
    },
    uz: {
      title: 'imbim — Toshkentda sayt yaratish va ishlab chiqish',
      description:
        "To'liq tsikl veb-studiya: lendinglar, sayt-vizitkalar, korporativ saytlar va internet-do'konlar. 50+ loyiha, muddat 3 kundan, narx 2.5 mln so'mdan.",
    },
  },
  '/uslugi': {
    ru: {
      title: 'Услуги веб-студии imbim — разработка сайтов в Ташкенте',
      description:
        'Разработка лендингов, сайтов-визиток, корпоративных сайтов и интернет-магазинов. Состав работ, сроки и цены по каждому формату.',
    },
    uz: {
      title: 'Sayt ishlab chiqish xizmatlari — narxlar va muddatlar | imbim',
      description:
        "Lending, sayt-vizitka, korporativ sayt va internet-do'kon ishlab chiqish. Har bir format uchun tarkib, muddat va narx.",
    },
  },
  '/portfolio': {
    ru: {
      title: 'Портфолио — работы веб-студии imbim',
      description:
        'Проекты imbim: интернет-магазины, сайты услуг и промо-страницы. В каждом кейсе — задача и что мы для неё сделали.',
    },
    uz: {
      title: 'Portfolio — imbim veb-studiyasi ishlari',
      description:
        "imbim loyihalari: internet-do'konlar, xizmat saytlari va promo-sahifalar. Har bir keysda vazifa va yechim.",
    },
  },
  '/tseny': {
    ru: {
      title: 'Цены на создание сайта в Ташкенте — от 2.5 млн сум | imbim',
      description:
        'Тарифы веб-студии imbim: лендинг, сайт-визитка, корпоративный сайт, интернет-магазин. Что входит в каждый тариф и сроки запуска.',
    },
    uz: {
      title: "Sayt yaratish narxlari Toshkentda — 2.5 mln so'mdan | imbim",
      description:
        "imbim veb-studiyasi tariflari: lending, sayt-vizitka, korporativ sayt, internet-do'kon. Har bir tarifda nima borligi va muddatlar.",
    },
  },
  '/o-nas': {
    ru: {
      title: 'О веб-студии imbim — команда и подход к работе',
      description:
        'imbim — веб-студия полного цикла из Ташкента: дизайн, разработка, запуск и поддержка внутри одной команды. Принципы работы и состав команды.',
    },
    uz: {
      title: 'imbim veb-studiyasi haqida — jamoa va yondashuv',
      description:
        "imbim — Toshkentdagi to'liq tsikl veb-studiya: dizayn, dasturlash, ishga tushirish va qo'llab-quvvatlash bitta jamoa ichida.",
    },
  },
  '/kontakty': {
    ru: {
      title: 'Контакты веб-студии imbim — Ташкент',
      description:
        'Свяжитесь по телефону, в Telegram или Instagram, либо оставьте заявку на сайте — ответим в течение часа в рабочее время.',
    },
    uz: {
      title: 'imbim veb-studiyasi aloqalari — Toshkent',
      description:
        "Telefon, Telegram va Instagram orqali bog'laning yoki saytda ariza qoldiring — ish vaqtida bir soat ichida javob beramiz.",
    },
  },
  '/politika-konfidentsialnosti': {
    ru: {
      title: 'Политика конфиденциальности | imbim',
      description:
        'Какие данные собирает сайт imbim.online, зачем они нужны, кому передаются и как их удалить.',
    },
    uz: {
      title: 'Maxfiylik siyosati | imbim',
      description:
        "imbim.online sayti qanday ma'lumotlarni yig'adi, ular nima uchun kerak, kimga uzatiladi va qanday o'chiriladi.",
    },
  },
  '/oferta': {
    ru: {
      title: 'Публичная оферта | imbim',
      description:
        'Условия оказания услуг по разработке сайтов: предмет договора, стоимость и оплата, сроки, правки, права на результат и гарантия.',
    },
    uz: {
      title: 'Ommaviy oferta | imbim',
      description:
        "Sayt ishlab chiqish xizmatlari shartlari: shartnoma predmeti, narx va to'lov, muddatlar, tuzatishlar, natijaga huquqlar va kafolat.",
    },
  },
}

/** Все канонические пути сайта — для карты сайта и предрендера. */
export function allPaths(): string[] {
  return [
    ...Object.keys(staticPages),
    ...plans.map(p => `/uslugi/${p.slug}`),
    ...projects.map(p => `/portfolio/${p.slug}`),
  ]
}

/** Мета-теги для канонического пути (без языкового префикса). */
export function seoFor(path: string, locale: Locale): PageSeo {
  const own = staticPages[path]
  if (own) return own[locale]

  const planSlug = path.startsWith('/uslugi/') ? path.slice('/uslugi/'.length) : null
  if (planSlug) {
    const plan = plans.find(p => p.slug === planSlug)
    if (plan) {
      const copy = plan.copy[locale]
      return { title: copy.seoTitle, description: copy.seoDescription }
    }
  }

  const projectSlug = path.startsWith('/portfolio/') ? path.slice('/portfolio/'.length) : null
  if (projectSlug) {
    const project = projects.find(p => p.slug === projectSlug)
    if (project) {
      const copy = project.copy[locale]
      return {
        title: copy.seoTitle,
        description: copy.seoDescription,
        image: `/portfolio-illust/${project.slug}.jpg`,
      }
    }
  }

  return staticPages['/'][locale]
}
