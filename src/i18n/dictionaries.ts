import type { Locale } from '../locales'

export type Dict = {
  // Навигация
  navHome: string
  navServices: string
  navPortfolio: string
  navPricing: string
  navAbout: string
  navContacts: string
  ctaDiscuss: string
  ctaGetQuote: string
  ctaAllWorks: string
  ctaAllServices: string
  menuAria: string
  breadcrumbHome: string

  // Hero
  heroBadge: string
  heroTitle1: string
  heroTitle2: string
  heroTitleAccent: string
  heroTitleAfter: string
  heroLead: string
  heroCtaSecondary: string

  // Услуги
  servicesBadge: string
  servicesTitle1: string
  servicesTitle2: string
  servicesLead: string
  serviceFrom: string
  serviceIncluded: string
  serviceSuitable: string
  serviceFaqTitle: string
  serviceOther: string
  serviceOpen: string

  // Процесс
  processBadge: string
  processTitle1: string
  processTitle2: string
  processStep1Title: string
  processStep1Text: string
  processStep2Title: string
  processStep2Text: string
  processStep3Title: string
  processStep3Text: string
  processStep4Title: string
  processStep4Text: string
  processStep5Title: string
  processStep5Text: string

  // Цены
  pricingBadge: string
  pricingTitle1: string
  pricingTitle2: string
  pricingLead: string
  pricingPopular: string
  pricingNote: string

  // Команда
  teamBadge: string
  teamTitle1: string
  teamTitle2: string
  roleDesigner: string
  roleProject: string
  roleDeveloper: string
  roleMarketing: string

  // Портфолио
  portfolioBadge: string
  portfolioTitle1: string
  portfolioTitle2: string
  portfolioLead: string
  portfolioTagKidsShoes: string
  portfolioTagDetailing: string
  portfolioTagPillows: string
  portfolioTagFurniture: string
  portfolioTagBooks: string
  portfolioTagArcade: string
  portfolioTagFlorist: string
  caseOpen: string
  caseTaskTitle: string
  caseSolutionTitle: string
  caseFeaturesTitle: string
  caseLiveSite: string
  caseNext: string
  caseIndustry: string
  caseFormat: string

  // О нас
  aboutBadge: string
  aboutTitle1: string
  aboutTitle2: string
  aboutLead: string
  aboutStoryTitle: string
  aboutStoryP1: string
  aboutStoryP2: string
  aboutValuesTitle: string
  aboutValue1Title: string
  aboutValue1Text: string
  aboutValue2Title: string
  aboutValue2Text: string
  aboutValue3Title: string
  aboutValue3Text: string
  aboutValue4Title: string
  aboutValue4Text: string
  statProjects: string
  statYears: string
  statDays: string
  statSupport: string

  // Контакты
  contactsBadge: string
  contactsTitle1: string
  contactsTitle2: string
  contactsLead: string
  contactsPhoneLabel: string
  contactsTelegramLabel: string
  contactsInstagramLabel: string
  contactsHoursLabel: string
  contactsHoursValue: string

  // Форма
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

  // Юридические страницы
  legalUpdated: string
  privacyTitle: string
  offerTitle: string

  // 404
  notFoundTitle: string
  notFoundLead: string
  notFoundCta: string

  // Подвал
  footerLead: string
  footerNav: string
  footerServices: string
  footerContacts: string
  footerLegal: string
  footerPrivacy: string
  footerOffer: string
  footerCopyright: string
  footerCraft: string
}

const ru: Dict = {
  navHome: 'Главная',
  navServices: 'Услуги',
  navPortfolio: 'Портфолио',
  navPricing: 'Цены',
  navAbout: 'О нас',
  navContacts: 'Контакты',
  ctaDiscuss: 'Обсудить проект',
  ctaGetQuote: 'Получить расчёт',
  ctaAllWorks: 'Все работы',
  ctaAllServices: 'Все услуги',
  menuAria: 'Меню',
  breadcrumbHome: 'Главная',

  heroBadge: '50+ запущенных проектов',
  heroTitle1: 'Создаём сайты,',
  heroTitle2: '',
  heroTitleAccent: 'которые продают',
  heroTitleAfter: '',
  heroLead: 'Сайты от 2.5 млн сум. Сроки — от 3 дней.',
  heroCtaSecondary: 'Все работы',

  servicesBadge: 'Услуги',
  servicesTitle1: 'Что мы',
  servicesTitle2: 'делаем',
  servicesLead: 'От одностраничного лендинга до интернет-магазина с оплатой. Выберите формат — расскажем подробнее и назовём точный срок.',
  serviceFrom: 'от',
  serviceIncluded: 'Что входит',
  serviceSuitable: 'Кому подходит',
  serviceFaqTitle: 'Частые вопросы',
  serviceOther: 'Другие услуги',
  serviceOpen: 'Подробнее',

  processBadge: 'Процесс',
  processTitle1: 'Как проходит',
  processTitle2: 'работа',
  processStep1Title: 'Бриф и расчёт',
  processStep1Text: 'Созваниваемся, разбираем задачу и вашу нишу. Показываем похожие проекты, фиксируем состав работ и точную цену.',
  processStep2Title: 'Структура и прототип',
  processStep2Text: 'Собираем структуру страниц и логику блоков. Вы видите каркас будущего сайта до того, как начнётся дизайн.',
  processStep3Title: 'Дизайн',
  processStep3Text: 'Рисуем уникальный макет под ваш бренд — десктоп и мобильный. Правим, пока не понравится.',
  processStep4Title: 'Разработка',
  processStep4Text: 'Верстаем, подключаем формы в Telegram, админку и аналитику. Проверяем скорость и мобильные устройства.',
  processStep5Title: 'Запуск и поддержка',
  processStep5Text: 'Ставим домен и хостинг, регистрируем в Google и Yandex, обучаем вашу команду. Дальше — техподдержка.',

  pricingBadge: 'Цены',
  pricingTitle1: 'Сколько стоит',
  pricingTitle2: 'ваш сайт',
  pricingLead: 'Цены ниже — стартовые, за них вы получаете полностью готовый и запущенный сайт. Итог зависит от объёма страниц и интеграций.',
  pricingPopular: 'Популярный',
  pricingNote: 'Все тарифы включают уникальный дизайн, адаптив под мобильные и передачу исходников. Хостинг и домен на первый год — в тарифах от «Сайта-визитки».',

  teamBadge: 'Команда',
  teamTitle1: 'Люди, которые',
  teamTitle2: 'создают imbim',
  roleDesigner: 'Дизайнер',
  roleProject: 'Project Manager',
  roleDeveloper: 'Разработчик',
  roleMarketing: 'Маркетолог',

  portfolioBadge: 'Портфолио',
  portfolioTitle1: 'Наши',
  portfolioTitle2: 'работы',
  portfolioLead: 'Интернет-магазины, сайты услуг и промо-страницы. Откройте кейс — покажем задачу и что за неё сделали.',
  portfolioTagKidsShoes: 'Детская обувь',
  portfolioTagDetailing: 'Автодетейлинг',
  portfolioTagPillows: 'Шёлковый текстиль',
  portfolioTagFurniture: 'Мебель',
  portfolioTagBooks: 'Книжный',
  portfolioTagArcade: 'Ретро-аркада',
  portfolioTagFlorist: 'Флористика',
  caseOpen: 'Смотреть кейс',
  caseTaskTitle: 'Задача',
  caseSolutionTitle: 'Что сделали',
  caseFeaturesTitle: 'Ключевые решения',
  caseLiveSite: 'Открыть сайт',
  caseNext: 'Следующий проект',
  caseIndustry: 'Ниша',
  caseFormat: 'Формат',

  aboutBadge: 'О студии',
  aboutTitle1: 'Веб-студия',
  aboutTitle2: 'полного цикла',
  aboutLead: 'Дизайн, разработка, запуск и сопровождение — всё внутри одной команды. Без подрядчиков и переписки в трёх чатах.',
  aboutStoryTitle: 'Как мы работаем',
  aboutStoryP1: 'imbim — небольшая студия из Ташкента. Мы делаем сайты для бизнеса, которому нужен не «сайт для галочки», а инструмент продаж: понятная структура, быстрая загрузка и заявки, которые сразу приходят в Telegram.',
  aboutStoryP2: 'За каждым проектом закреплён менеджер — вы общаетесь с одним человеком и всегда знаете, на каком этапе работа. Дизайн, вёрстка, тексты и аналитика делаются внутри команды, поэтому сроки не плывут.',
  aboutValuesTitle: 'Принципы',
  aboutValue1Title: 'Фиксированная смета',
  aboutValue1Text: 'Цену называем до старта и не меняем по ходу. Если задача выросла — сначала согласовываем, потом делаем.',
  aboutValue2Title: 'Скорость как требование',
  aboutValue2Text: 'Каждый сайт проверяем в PageSpeed. Медленный сайт теряет посетителей ещё до первого экрана.',
  aboutValue3Title: 'Сайт остаётся вашим',
  aboutValue3Text: 'Передаём доступы, исходники и домен. Ничего не держим в заложниках и не привязываем к себе.',
  aboutValue4Title: 'Поддержка после запуска',
  aboutValue4Text: 'Правки, обновления и консультации в течение года. Отвечаем в рабочие часы, а не «когда-нибудь».',
  statProjects: 'запущенных проектов',
  statYears: 'года на рынке',
  statDays: 'дня — минимальный срок',
  statSupport: 'год техподдержки',

  contactsBadge: 'Контакты',
  contactsTitle1: 'Давайте',
  contactsTitle2: 'познакомимся',
  contactsLead: 'Позвоните, напишите в Telegram или оставьте заявку — ответим в течение часа в рабочее время.',
  contactsPhoneLabel: 'Телефон',
  contactsTelegramLabel: 'Telegram',
  contactsInstagramLabel: 'Instagram',
  contactsHoursLabel: 'Время работы',
  contactsHoursValue: 'Пн–Сб, 10:00–19:00 (GMT+5)',

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

  legalUpdated: 'Обновлено',
  privacyTitle: 'Политика конфиденциальности',
  offerTitle: 'Публичная оферта',

  notFoundTitle: 'Страница не найдена',
  notFoundLead: 'Похоже, такой страницы не существует или её адрес изменился.',
  notFoundCta: 'На главную',

  footerLead: 'Веб-студия полного цикла. Создаём сайты и веб-приложения, которые работают на ваш бизнес.',
  footerNav: 'Навигация',
  footerServices: 'Услуги',
  footerContacts: 'Контакты',
  footerLegal: 'Документы',
  footerPrivacy: 'Политика конфиденциальности',
  footerOffer: 'Публичная оферта',
  footerCopyright: '© 2026 imbim. Все права защищены.',
  footerCraft: 'Сделано с заботой о каждом пикселе',
}

const uz: Dict = {
  navHome: 'Bosh sahifa',
  navServices: 'Xizmatlar',
  navPortfolio: 'Portfolio',
  navPricing: 'Narxlar',
  navAbout: 'Biz haqimizda',
  navContacts: 'Aloqa',
  ctaDiscuss: 'Loyihani muhokama qilish',
  ctaGetQuote: 'Hisob-kitob olish',
  ctaAllWorks: 'Barcha ishlar',
  ctaAllServices: 'Barcha xizmatlar',
  menuAria: 'Menyu',
  breadcrumbHome: 'Bosh sahifa',

  heroBadge: '50+ ishga tushirilgan loyihalar',
  heroTitle1: 'Biznesingiz uchun',
  heroTitle2: '',
  heroTitleAccent: 'sotadigan saytlar',
  heroTitleAfter: 'yaratamiz',
  heroLead: "Saytlar 2.5 mln so'mdan. Muddat — 3 kundan.",
  heroCtaSecondary: 'Barcha ishlar',

  servicesBadge: 'Xizmatlar',
  servicesTitle1: 'Biz nima',
  servicesTitle2: 'qilamiz',
  servicesLead: "Bir sahifali lendingdan to'lovli internet-do'kongacha. Formatni tanlang — batafsil aytamiz va aniq muddatni belgilaymiz.",
  serviceFrom: 'boshlab',
  serviceIncluded: 'Nimalar kiradi',
  serviceSuitable: 'Kimga mos keladi',
  serviceFaqTitle: "Ko'p so'raladigan savollar",
  serviceOther: 'Boshqa xizmatlar',
  serviceOpen: 'Batafsil',

  processBadge: 'Jarayon',
  processTitle1: 'Ish qanday',
  processTitle2: 'olib boriladi',
  processStep1Title: 'Brif va hisob-kitob',
  processStep1Text: "Qo'ng'iroq qilamiz, vazifangiz va nishangizni o'rganamiz. O'xshash loyihalarni ko'rsatamiz, ish hajmi va aniq narxni belgilaymiz.",
  processStep2Title: 'Struktura va prototip',
  processStep2Text: "Sahifalar strukturasi va bloklar mantig'ini yig'amiz. Dizayn boshlanishidan oldin saytning karkasini ko'rasiz.",
  processStep3Title: 'Dizayn',
  processStep3Text: "Brendingiz uchun unikal maket chizamiz — desktop va mobil. Yoqmaguncha tuzatamiz.",
  processStep4Title: 'Dasturlash',
  processStep4Text: "Sahifalarni yig'amiz, Telegram formalari, admin-panel va analitikani ulaymiz. Tezlik va mobil qurilmalarni tekshiramiz.",
  processStep5Title: 'Ishga tushirish va yordam',
  processStep5Text: "Domen va hostingni sozlaymiz, Google va Yandexda ro'yxatdan o'tkazamiz, jamoangizni o'qitamiz. Keyin — texnik yordam.",

  pricingBadge: 'Narxlar',
  pricingTitle1: 'Saytingiz',
  pricingTitle2: 'qancha turadi',
  pricingLead: "Quyidagi narxlar — boshlang'ich. Ular uchun to'liq tayyor va ishga tushirilgan sayt olasiz. Yakuniy narx sahifalar soni va integratsiyalarga bog'liq.",
  pricingPopular: 'Ommabop',
  pricingNote: "Barcha tariflar unikal dizayn, mobil moslashuv va manba fayllarni topshirishni o'z ichiga oladi. Birinchi yil uchun domen va hosting — «Sayt-vizitka» tarifidan boshlab.",

  teamBadge: 'Jamoa',
  teamTitle1: 'imbim ortidagi',
  teamTitle2: 'odamlar',
  roleDesigner: 'Dizayner',
  roleProject: 'Project Manager',
  roleDeveloper: 'Dasturchi',
  roleMarketing: 'Marketolog',

  portfolioBadge: 'Portfolio',
  portfolioTitle1: 'Bizning',
  portfolioTitle2: 'ishlarimiz',
  portfolioLead: "Internet-do'konlar, xizmat saytlari va promo-sahifalar. Keysni oching — vazifa va uni qanday hal qilganimizni ko'rsatamiz.",
  portfolioTagKidsShoes: 'Bolalar poyabzali',
  portfolioTagDetailing: 'Avto-deteyling',
  portfolioTagPillows: "Ipak to'shak buyumlari",
  portfolioTagFurniture: 'Mebel',
  portfolioTagBooks: "Kitob do'koni",
  portfolioTagArcade: 'Retro arkada',
  portfolioTagFlorist: 'Floristika',
  caseOpen: "Keysni ko'rish",
  caseTaskTitle: 'Vazifa',
  caseSolutionTitle: 'Nima qildik',
  caseFeaturesTitle: 'Asosiy yechimlar',
  caseLiveSite: 'Saytni ochish',
  caseNext: 'Keyingi loyiha',
  caseIndustry: 'Nisha',
  caseFormat: 'Format',

  aboutBadge: 'Studiya haqida',
  aboutTitle1: "To'liq tsikl",
  aboutTitle2: 'veb-studiya',
  aboutLead: "Dizayn, dasturlash, ishga tushirish va qo'llab-quvvatlash — barchasi bitta jamoa ichida. Pudratchilarsiz va uchta chatdagi yozishmalarsiz.",
  aboutStoryTitle: 'Qanday ishlaymiz',
  aboutStoryP1: "imbim — Toshkentdagi kichik studiya. Biz «shunchaki sayt» emas, sotuv vositasi kerak bo'lgan biznes uchun saytlar yaratamiz: tushunarli struktura, tez yuklanish va to'g'ridan-to'g'ri Telegramga tushadigan arizalar.",
  aboutStoryP2: "Har bir loyihaga menejer biriktiriladi — siz bitta odam bilan muloqot qilasiz va ish qaysi bosqichda ekanini doim bilasiz. Dizayn, verstka, matnlar va analitika jamoa ichida bajariladi, shuning uchun muddatlar suzib ketmaydi.",
  aboutValuesTitle: 'Tamoyillar',
  aboutValue1Title: 'Belgilangan smeta',
  aboutValue1Text: "Narxni ish boshlanishidan oldin aytamiz va jarayonda o'zgartirmaymiz. Vazifa kengaysa — avval kelishamiz, keyin qilamiz.",
  aboutValue2Title: 'Tezlik — talab',
  aboutValue2Text: "Har bir saytni PageSpeed'da tekshiramiz. Sekin sayt tashrifchini birinchi ekrangacha yo'qotadi.",
  aboutValue3Title: "Sayt sizniki bo'lib qoladi",
  aboutValue3Text: "Kirish ma'lumotlari, manba fayllar va domenni topshiramiz. Hech narsani garovda ushlamaymiz.",
  aboutValue4Title: 'Ishga tushirgandan keyingi yordam',
  aboutValue4Text: "Bir yil davomida tuzatishlar, yangilanishlar va maslahatlar. Ish vaqtida javob beramiz.",
  statProjects: 'ishga tushirilgan loyiha',
  statYears: 'yil bozorda',
  statDays: 'kun — minimal muddat',
  statSupport: 'yil texnik yordam',

  contactsBadge: 'Aloqa',
  contactsTitle1: 'Keling,',
  contactsTitle2: 'tanishamiz',
  contactsLead: "Qo'ng'iroq qiling, Telegramga yozing yoki ariza qoldiring — ish vaqtida bir soat ichida javob beramiz.",
  contactsPhoneLabel: 'Telefon',
  contactsTelegramLabel: 'Telegram',
  contactsInstagramLabel: 'Instagram',
  contactsHoursLabel: 'Ish vaqti',
  contactsHoursValue: 'Du–Sha, 10:00–19:00 (GMT+5)',

  contactBadge: 'Bepul konsultatsiya',
  contactTitle1: 'Saytingiz narxini',
  contactTitle2: 'bilib oling',
  contactLead: "Aloqa qoldiring — bir soat ichida qo'ng'iroq qilamiz, o'xshash keyslarni ko'rsatamiz va aniq narxni aytamiz. Bepul.",
  contactOrCall: "Yoki hoziroq qo'ng'iroq qiling",
  contactLabel: 'Telefon yoki Telegram *',
  contactPlaceholder: '+998... yoki @username',
  contactDescLabel: 'Loyiha tavsifi',
  contactDescOptional: '— ixtiyoriy',
  contactDescPlaceholder: 'Loyihangiz haqida qisqacha aytib bering...',
  contactTimeLabel: "Qachon qo'ng'iroq qilish qulay",
  contactTimeOptional: '— ixtiyoriy',
  contactTimePlaceholder: 'Masalan: 15:00 dan keyin',
  contactSubmit: 'Hisob-kitob olish',
  contactSending: 'Yuborilmoqda...',
  contactErrorMsg: "Yuborishda xatolik. Keyinroq urinib ko'ring yoki bizga qo'ng'iroq qiling.",
  tgNewLead: '📩 imbim.online saytidan yangi ariza',
  tgContact: '📱 Aloqa',
  tgDescription: '📝 Loyiha tavsifi',
  tgTime: '🕐 Qulay vaqt',

  legalUpdated: 'Yangilangan',
  privacyTitle: 'Maxfiylik siyosati',
  offerTitle: 'Ommaviy oferta',

  notFoundTitle: 'Sahifa topilmadi',
  notFoundLead: "Bunday sahifa mavjud emas yoki uning manzili o'zgargan.",
  notFoundCta: 'Bosh sahifaga',

  footerLead: "To'liq tsikl veb-studiya. Biznesingiz uchun ishlaydigan saytlar va veb-ilovalar yaratamiz.",
  footerNav: 'Navigatsiya',
  footerServices: 'Xizmatlar',
  footerContacts: 'Aloqalar',
  footerLegal: 'Hujjatlar',
  footerPrivacy: 'Maxfiylik siyosati',
  footerOffer: 'Ommaviy oferta',
  footerCopyright: '© 2026 imbim. Barcha huquqlar himoyalangan.',
  footerCraft: 'Har bir piksel mehr bilan ishlangan',
}

export const dictionaries: Record<Locale, Dict> = { ru, uz }
