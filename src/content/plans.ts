import type { Locale } from '../locales'

export type FeatureKey =
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
export const featureOrder: FeatureKey[] = [
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

export const featureLabels: Record<Locale, Record<FeatureKey, string>> = {
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

export type PlanSlug = 'lending' | 'sayt-vizitka' | 'korporativnyy-sayt' | 'internet-magazin'

export type PlanCopy = {
  name: string
  pages: string
  deadline: string
  price: string
  /** Короткая строка под названием в списке услуг. */
  tagline: string
  /** Вводный абзац на странице услуги. */
  lead: string
  suitable: string[]
  faq: { q: string; a: string }[]
  seoTitle: string
  seoDescription: string
}

export type Plan = {
  slug: PlanSlug
  popular?: boolean
  included: FeatureKey[]
  copy: Record<Locale, PlanCopy>
}

export const plans: Plan[] = [
  {
    slug: 'lending',
    included: ['design', 'forms', 'seo', 'multilang', 'training'],
    copy: {
      ru: {
        name: 'Лендинг',
        pages: '1 страница',
        deadline: 'Сроки от 3 дней',
        price: 'от 2.5 млн сум',
        tagline: 'Одна страница, ведущая к заявке',
        lead: 'Лендинг — одна страница с одним целевым действием: оставить заявку. Подходит, когда нужно быстро запустить рекламу, проверить спрос или продать конкретную услугу. Мы собираем структуру по логике «проблема → решение → доказательства → форма» и доводим страницу до скорости, при которой посетитель не уходит на загрузке.',
        suitable: [
          'Запуск рекламы в Instagram или Google Ads — нужна посадочная страница',
          'Один товар или одна услуга, которую нужно продавать',
          'Проверка спроса на новую нишу без больших вложений',
          'Мероприятие, акция или запись на курс',
        ],
        faq: [
          {
            q: 'Реально сделать за 3 дня?',
            a: 'Да, если у вас готовы тексты и фотографии. Если контента нет — добавляем 3–5 дней на подготовку: пишем тексты и подбираем изображения сами.',
          },
          {
            q: 'Можно потом расширить до многостраничного сайта?',
            a: 'Да. Лендинг делаем на той же основе, что и большие сайты, поэтому добавить страницы, каталог или админку можно в любой момент — с доплатой разницы в тарифах.',
          },
          {
            q: 'Домен и хостинг входят в цену?',
            a: 'В базовый тариф — нет, но мы помогаем их купить и настраиваем бесплатно. Если домен и хостинг нужны «под ключ», это тариф «Сайт-визитка» и выше.',
          },
        ],
        seoTitle: 'Заказать лендинг в Ташкенте — от 2.5 млн сум | imbim',
        seoDescription: 'Разработка лендинга под ключ за 3 дня. Уникальный дизайн, заявки в Telegram, SEO-оптимизация, мультиязычность. Цена от 2.5 млн сум.',
      },
      uz: {
        name: 'Lending',
        pages: '1 sahifa',
        deadline: 'Muddat 3 kundan',
        price: "2.5 mln so'mdan",
        tagline: 'Arizaga olib boradigan bitta sahifa',
        lead: "Lending — bitta maqsadli harakatga ega bitta sahifa: ariza qoldirish. Reklamani tez ishga tushirish, talabni tekshirish yoki aniq xizmatni sotish kerak bo'lganda mos keladi. Strukturani «muammo → yechim → dalillar → forma» mantig'i bo'yicha yig'amiz va sahifani tashrifchi yuklanishda ketib qolmaydigan tezlikka olib chiqamiz.",
        suitable: [
          'Instagram yoki Google Ads reklamasi — qo\'nish sahifasi kerak',
          'Sotish kerak bo\'lgan bitta mahsulot yoki bitta xizmat',
          'Katta sarmoyasiz yangi nishadagi talabni tekshirish',
          'Tadbir, aksiya yoki kursga yozilish',
        ],
        faq: [
          {
            q: 'Haqiqatan 3 kunda qilish mumkinmi?',
            a: "Ha, agar matn va suratlaringiz tayyor bo'lsa. Kontent bo'lmasa — tayyorgarlik uchun 3–5 kun qo'shamiz: matnlarni o'zimiz yozamiz va rasmlarni tanlaymiz.",
          },
          {
            q: "Keyinchalik ko'p sahifali saytga kengaytirish mumkinmi?",
            a: "Ha. Lendingni katta saytlar bilan bir xil asosda qilamiz, shuning uchun sahifalar, katalog yoki admin-panel qo'shishni istalgan vaqtda — tariflar farqini to'lab — amalga oshirish mumkin.",
          },
          {
            q: 'Domen va hosting narxga kiradimi?',
            a: "Bazaviy tarifga kirmaydi, lekin sotib olishda yordam beramiz va bepul sozlaymiz. Agar «kalit topshirish» shaklida kerak bo'lsa — bu «Sayt-vizitka» tarifi va undan yuqorisi.",
          },
        ],
        seoTitle: "Toshkentda lending buyurtma qilish — 2.5 mln so'mdan | imbim",
        seoDescription: "Kalit topshirish shaklida 3 kunda lending ishlab chiqish. Unikal dizayn, Telegramga arizalar, SEO, ko'p tillilik. Narxi 2.5 mln so'mdan.",
      },
    },
  },
  {
    slug: 'sayt-vizitka',
    popular: true,
    included: ['design', 'forms', 'seo', 'multilang', 'training', 'domain', 'support', 'admin'],
    copy: {
      ru: {
        name: 'Сайт-визитка',
        pages: '3–10 страниц',
        deadline: 'Сроки от 7 дней',
        price: 'от 4 млн сум',
        tagline: 'Полноценный сайт компании с админкой',
        lead: 'Сайт-визитка — это отдельные страницы под услуги, работы, команду и контакты. У каждой страницы свой заголовок и адрес, поэтому она может попасть в поиск самостоятельно. Вы получаете админ-панель, домен, хостинг и год техподдержки — сайт можно вести без разработчика.',
        suitable: [
          'Салон, клиника, студия или сервис с несколькими направлениями',
          'Компания, которой нужно быть в поиске по нескольким запросам',
          'Бизнес, где важны доверие и подробное описание услуг',
          'Замена устаревшего сайта, который тяжело редактировать',
        ],
        faq: [
          {
            q: 'Смогу ли я сам менять тексты и фото?',
            a: 'Да, для этого и нужна админ-панель. После запуска проводим обучение вашей команды и оставляем короткую инструкцию.',
          },
          {
            q: 'Что с продвижением после запуска?',
            a: 'Базовая SEO-оптимизация входит в тариф: структура, заголовки, скорость, карта сайта и регистрация в Google Search Console. Платное продвижение и контекстную рекламу обсуждаем отдельно.',
          },
          {
            q: 'Сколько стоит дополнительная страница?',
            a: 'Внутри диапазона 3–10 страниц — без доплаты. Если страниц больше, переходим на тариф «Корпоративный сайт».',
          },
        ],
        seoTitle: 'Сайт-визитка под ключ в Ташкенте — от 4 млн сум | imbim',
        seoDescription: 'Разработка сайта-визитки на 3–10 страниц: уникальный дизайн, админ-панель, домен и хостинг, год техподдержки. Срок от 7 дней.',
      },
      uz: {
        name: 'Sayt-vizitka',
        pages: '3–10 sahifa',
        deadline: 'Muddat 7 kundan',
        price: "4 mln so'mdan",
        tagline: 'Admin-panelli to\'liq kompaniya sayti',
        lead: "Sayt-vizitka — xizmatlar, ishlar, jamoa va aloqa uchun alohida sahifalar. Har bir sahifaning o'z sarlavhasi va manzili bor, shuning uchun u qidiruvga mustaqil tusha oladi. Siz admin-panel, domen, hosting va bir yillik texnik yordam olasiz — saytni dasturchisiz yuritish mumkin.",
        suitable: [
          "Bir nechta yo'nalishga ega salon, klinika, studiya yoki servis",
          "Bir nechta so'rov bo'yicha qidiruvda bo'lishi kerak bo'lgan kompaniya",
          "Ishonch va xizmatlarning batafsil tavsifi muhim bo'lgan biznes",
          "Tahrirlash qiyin bo'lgan eskirgan saytni almashtirish",
        ],
        faq: [
          {
            q: "Matn va suratlarni o'zim o'zgartira olamanmi?",
            a: "Ha, admin-panel shuning uchun kerak. Ishga tushirgandan keyin jamoangizni o'qitamiz va qisqa qo'llanma qoldiramiz.",
          },
          {
            q: 'Ishga tushirgandan keyin targ\'ibot qanday?',
            a: "Bazaviy SEO tarifga kiradi: struktura, sarlavhalar, tezlik, sayt xaritasi va Google Search Console'da ro'yxatdan o'tkazish. Pullik targ'ibot va kontekst reklamani alohida muhokama qilamiz.",
          },
          {
            q: "Qo'shimcha sahifa qancha turadi?",
            a: "3–10 sahifa oralig'ida — qo'shimcha to'lovsiz. Sahifalar ko'proq bo'lsa, «Korporativ sayt» tarifiga o'tamiz.",
          },
        ],
        seoTitle: "Toshkentda kalit topshirish sayt-vizitka — 4 mln so'mdan | imbim",
        seoDescription: "3–10 sahifali sayt-vizitka ishlab chiqish: unikal dizayn, admin-panel, domen va hosting, bir yillik texnik yordam. Muddat 7 kundan.",
      },
    },
  },
  {
    slug: 'korporativnyy-sayt',
    included: [
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
    ],
    copy: {
      ru: {
        name: 'Корпоративный сайт',
        pages: '10–100 страниц',
        deadline: 'Сроки от 14 дней',
        price: 'от 7 млн сум',
        tagline: 'Большая структура, расчёты и интеграции',
        lead: 'Корпоративный сайт нужен, когда услуг много, у каждой своя аудитория и цена считается по параметрам. Мы проектируем структуру разделов, добавляем калькуляторы и квиз-формы, подключаем аналитику и регистрируем сайт в Google и Yandex. Такой сайт растёт вместе с компанией: разделы добавляются без переделки.',
        suitable: [
          'Производство, строительство, логистика, оптовые поставки',
          'Компания с филиалами или несколькими направлениями бизнеса',
          'Услуги, где цена зависит от параметров и нужен расчёт на сайте',
          'Бизнес, который ведёт вакансии, новости и документы на сайте',
        ],
        faq: [
          {
            q: 'Что такое калькулятор и квиз-форма?',
            a: 'Калькулятор считает примерную стоимость по параметрам, которые указывает клиент. Квиз — короткий опрос из нескольких шагов вместо обычной формы: заявок через него обычно заметно больше.',
          },
          {
            q: 'Можно интегрировать с 1С или CRM?',
            a: 'Да. Настраиваем передачу заявок в amoCRM, Bitrix24 или вашу систему, обмен с 1С обсуждаем отдельно — зависит от того, как устроен ваш учёт.',
          },
          {
            q: 'Как считается срок в 14 дней?',
            a: 'Это срок для структуры примерно на 10–15 страниц при готовых материалах. Большие проекты разбиваем на этапы и согласуем график на брифе.',
          },
        ],
        seoTitle: 'Корпоративный сайт под ключ в Ташкенте — от 7 млн сум | imbim',
        seoDescription: 'Разработка корпоративного сайта на 10–100 страниц: калькуляторы, квиз-формы, админ-панель, интеграции и аналитика. Срок от 14 дней.',
      },
      uz: {
        name: 'Korporativ sayt',
        pages: '10–100 sahifa',
        deadline: 'Muddat 14 kundan',
        price: "7 mln so'mdan",
        tagline: 'Katta struktura, hisob-kitob va integratsiyalar',
        lead: "Korporativ sayt xizmatlar ko'p bo'lganda, har birining o'z auditoriyasi bo'lganda va narx parametrlar bo'yicha hisoblanganda kerak. Biz bo'limlar strukturasini loyihalaymiz, kalkulyator va kviz-formalar qo'shamiz, analitikani ulaymiz va saytni Google va Yandexda ro'yxatdan o'tkazamiz. Bunday sayt kompaniya bilan birga o'sadi.",
        suitable: [
          'Ishlab chiqarish, qurilish, logistika, ulgurji yetkazib berish',
          "Filiallari yoki bir nechta biznes yo'nalishi bo'lgan kompaniya",
          'Narxi parametrlarga bog\'liq va saytda hisob-kitob kerak bo\'lgan xizmatlar',
          'Saytda vakansiya, yangilik va hujjatlar yurituvchi biznes',
        ],
        faq: [
          {
            q: 'Kalkulyator va kviz-forma nima?',
            a: "Kalkulyator mijoz ko'rsatgan parametrlar bo'yicha taxminiy narxni hisoblaydi. Kviz — oddiy forma o'rniga bir necha bosqichli qisqa so'rov: u orqali arizalar odatda sezilarli ko'p bo'ladi.",
          },
          {
            q: '1C yoki CRM bilan integratsiya mumkinmi?',
            a: "Ha. Arizalarni amoCRM, Bitrix24 yoki sizning tizimingizga uzatishni sozlaymiz, 1C bilan almashinuvni alohida muhokama qilamiz.",
          },
          {
            q: '14 kunlik muddat qanday hisoblanadi?',
            a: "Bu materiallar tayyor bo'lganda taxminan 10–15 sahifali struktura uchun muddat. Katta loyihalarni bosqichlarga bo'lamiz va jadvalni brifda kelishamiz.",
          },
        ],
        seoTitle: "Toshkentda korporativ sayt — 7 mln so'mdan | imbim",
        seoDescription: "10–100 sahifali korporativ sayt ishlab chiqish: kalkulyatorlar, kviz-formalar, admin-panel, integratsiya va analitika. Muddat 14 kundan.",
      },
    },
  },
  {
    slug: 'internet-magazin',
    included: [
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
    ],
    copy: {
      ru: {
        name: 'Интернет-магазин',
        pages: '10–1000 страниц',
        deadline: 'Сроки от 20 дней',
        price: 'от 10 млн сум',
        tagline: 'Каталог, корзина и оплата Click / Payme',
        lead: 'Интернет-магазин — это каталог с фильтрами, корзина, личный кабинет покупателя и приём оплаты через Click и Payme. В админке вы ведёте товары, остатки, скидки и заказы. Мы отдельно прорабатываем карточку товара и оформление заказа — именно там теряется большая часть покупателей.',
        suitable: [
          'Розничная торговля, которая переходит из Instagram в свой магазин',
          'Каталог от нескольких десятков товаров с категориями и фильтрами',
          'Бизнес, которому нужна онлайн-оплата и статусы заказов',
          'Оптовые продажи с личным кабинетом и ценами для клиента',
        ],
        faq: [
          {
            q: 'Как подключается оплата Click и Payme?',
            a: 'Вы заключаете договор с платёжной системой как юрлицо или ИП, мы получаем ключи и подключаем приём платежей на сайте. Настройка входит в стоимость, комиссия платёжной системы — отдельно.',
          },
          {
            q: 'Можно загрузить товары списком?',
            a: 'Да, делаем импорт из Excel или выгрузки вашей учётной системы. Разовую загрузку каталога при запуске берём на себя.',
          },
          {
            q: 'Что с доставкой и статусами заказов?',
            a: 'Настраиваем зоны и стоимость доставки, статусы заказа и уведомления покупателю. Заказы дублируются в Telegram, чтобы менеджер не пропустил новый.',
          },
        ],
        seoTitle: 'Создание интернет-магазина в Ташкенте — от 10 млн сум | imbim',
        seoDescription: 'Разработка интернет-магазина под ключ: каталог с фильтрами, корзина, личный кабинет, оплата Click и Payme, админ-панель. Срок от 20 дней.',
      },
      uz: {
        name: "Internet-do'kon",
        pages: '10–1000 sahifa',
        deadline: 'Muddat 20 kundan',
        price: "10 mln so'mdan",
        tagline: "Katalog, savat va Click / Payme to'lovi",
        lead: "Internet-do'kon — bu filtrli katalog, savat, xaridorning shaxsiy kabineti va Click hamda Payme orqali to'lovni qabul qilish. Admin-panelda mahsulot, qoldiq, chegirma va buyurtmalarni yuritasiz. Mahsulot kartochkasi va buyurtma rasmiylashtirishni alohida ishlaymiz — xaridorlarning katta qismi aynan shu yerda yo'qoladi.",
        suitable: [
          "Instagram'dan o'z do'koniga o'tayotgan chakana savdo",
          'Kategoriya va filtrli bir necha o\'nlab mahsulotdan iborat katalog',
          "Onlayn to'lov va buyurtma statuslari kerak bo'lgan biznes",
          'Shaxsiy kabinet va mijoz narxlari bilan ulgurji savdo',
        ],
        faq: [
          {
            q: "Click va Payme to'lovi qanday ulanadi?",
            a: "Siz yuridik shaxs yoki YaTT sifatida to'lov tizimi bilan shartnoma tuzasiz, biz kalitlarni olamiz va saytda to'lovni ulaymiz. Sozlash narxga kiradi, to'lov tizimi komissiyasi — alohida.",
          },
          {
            q: "Mahsulotlarni ro'yxat bilan yuklash mumkinmi?",
            a: "Ha, Excel'dan yoki hisob tizimingizdan importni qilamiz. Ishga tushirishdagi bir martalik katalog yuklashni o'z zimmamizga olamiz.",
          },
          {
            q: 'Yetkazib berish va buyurtma statuslari qanday?',
            a: "Yetkazib berish zonalari va narxini, buyurtma statuslari va xaridorga bildirishnomalarni sozlaymiz. Buyurtmalar Telegramga ham tushadi.",
          },
        ],
        seoTitle: "Toshkentda internet-do'kon yaratish — 10 mln so'mdan | imbim",
        seoDescription: "Kalit topshirish internet-do'kon: filtrli katalog, savat, shaxsiy kabinet, Click va Payme to'lovi, admin-panel. Muddat 20 kundan.",
      },
    },
  },
]

export function planBySlug(slug: string | undefined): Plan | undefined {
  return plans.find(p => p.slug === slug)
}
