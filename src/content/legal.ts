import type { Locale } from '../locales'

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export type LegalDoc = {
  updated: string
  intro: string
  sections: LegalSection[]
}

// ВНИМАНИЕ: тексты ниже — рабочая основа, а не заключение юриста.
// Перед публикацией подставьте реквизиты вместо REQUISITES_PLACEHOLDER
// и покажите документы юристу.
export const REQUISITES_PLACEHOLDER = '[указать реквизиты: наименование, ИНН, юридический адрес]'

export const privacy: Record<Locale, LegalDoc> = {
  ru: {
    updated: '6 августа 2026',
    intro:
      'Настоящая политика описывает, какие данные собирает сайт imbim.online, зачем они нужны и как мы с ними обращаемся. Отправляя форму на сайте, вы соглашаетесь с условиями этой политики.',
    sections: [
      {
        heading: '1. Кто обрабатывает данные',
        paragraphs: [
          `Оператором данных выступает веб-студия imbim, ${REQUISITES_PLACEHOLDER}. Связаться с нами можно по телефону +998 90 135 96 66 или в Telegram: @imbim2004.`,
        ],
      },
      {
        heading: '2. Какие данные мы собираем',
        paragraphs: ['Мы собираем только то, что вы указываете сами в форме заявки:'],
        list: [
          'контакт для связи — номер телефона или имя пользователя в Telegram;',
          'описание проекта, если вы его заполнили;',
          'удобное время для звонка, если вы его указали;',
          'выбранный язык интерфейса сайта.',
        ],
      },
      {
        heading: '3. Технические данные и аналитика',
        paragraphs: [
          'Сайт использует Meta Pixel и Google Ads (gtag). Эти сервисы собирают обезличенные данные о посещении: страницу, источник перехода, тип устройства и браузера, а также идентификаторы cookie. Мы применяем их, чтобы оценивать эффективность рекламы, и не связываем их с содержанием вашей заявки.',
          'Отключить эти cookie можно в настройках браузера или через настройки рекламных предпочтений соответствующего сервиса.',
        ],
      },
      {
        heading: '4. Зачем нам эти данные',
        list: [
          'связаться с вами по заявке и обсудить проект;',
          'подготовить расчёт стоимости и коммерческое предложение;',
          'исполнить договор, если мы начнём работу;',
          'оценить эффективность рекламных кампаний в обезличенном виде.',
        ],
      },
      {
        heading: '5. Кому передаются данные',
        paragraphs: [
          'Содержимое заявки передаётся в наш рабочий чат в Telegram через Telegram Bot API — доступ к нему есть только у сотрудников студии. Сайт размещён на инфраструктуре Cloudflare. Обезличенная статистика посещений передаётся Meta Platforms и Google в рамках работы рекламных пикселей.',
          'Мы не продаём данные и не передаём их третьим лицам для их собственных рассылок.',
        ],
      },
      {
        heading: '6. Сколько мы храним данные',
        paragraphs: [
          'Заявки хранятся в переписке до тех пор, пока это нужно для работы с обращением, но не дольше трёх лет. По вашему запросу мы удалим переписку раньше.',
        ],
      },
      {
        heading: '7. Ваши права',
        paragraphs: [
          'Вы можете запросить, какие ваши данные у нас есть, потребовать их исправления или удаления, а также отозвать согласие на обработку. Для этого напишите в Telegram @imbim2004 или позвоните по номеру +998 90 135 96 66 — ответим в течение трёх рабочих дней.',
        ],
      },
      {
        heading: '8. Изменения политики',
        paragraphs: [
          'Мы можем обновлять эту политику. Актуальная редакция всегда доступна на этой странице, дата обновления указана в начале документа.',
        ],
      },
    ],
  },
  uz: {
    updated: '2026-yil 6-avgust',
    intro:
      "Ushbu siyosat imbim.online sayti qanday ma'lumotlarni yig'ishini, ular nima uchun kerakligini va biz ular bilan qanday ishlashimizni tavsiflaydi. Saytdagi formani yuborish orqali siz ushbu siyosat shartlariga rozilik bildirasiz.",
    sections: [
      {
        heading: "1. Ma'lumotlarni kim qayta ishlaydi",
        paragraphs: [
          `Ma'lumotlar operatori — imbim veb-studiyasi, ${REQUISITES_PLACEHOLDER}. Biz bilan +998 90 135 96 66 raqami yoki Telegram: @imbim2004 orqali bog'lanish mumkin.`,
        ],
      },
      {
        heading: "2. Qanday ma'lumotlarni yig'amiz",
        paragraphs: ["Faqat siz ariza formasida o'zingiz ko'rsatgan ma'lumotlarni yig'amiz:"],
        list: [
          "aloqa uchun kontakt — telefon raqami yoki Telegramdagi foydalanuvchi nomi;",
          "loyiha tavsifi, agar to'ldirgan bo'lsangiz;",
          "qo'ng'iroq uchun qulay vaqt, agar ko'rsatgan bo'lsangiz;",
          'saytning tanlangan interfeys tili.',
        ],
      },
      {
        heading: "3. Texnik ma'lumotlar va analitika",
        paragraphs: [
          "Sayt Meta Pixel va Google Ads (gtag) dan foydalanadi. Bu xizmatlar tashrif haqida shaxssiz ma'lumotlarni yig'adi: sahifa, o'tish manbasi, qurilma va brauzer turi, shuningdek cookie identifikatorlari. Biz ularni reklama samaradorligini baholash uchun ishlatamiz va arizangiz mazmuni bilan bog'lamaymiz.",
          "Bu cookie-larni brauzer sozlamalarida o'chirish mumkin.",
        ],
      },
      {
        heading: "4. Bu ma'lumotlar nima uchun kerak",
        list: [
          "ariza bo'yicha siz bilan bog'lanish va loyihani muhokama qilish;",
          'narx hisob-kitobi va tijorat taklifini tayyorlash;',
          'ishni boshlasak, shartnomani bajarish;',
          'reklama kampaniyalari samaradorligini shaxssiz shaklda baholash.',
        ],
      },
      {
        heading: "5. Ma'lumotlar kimga uzatiladi",
        paragraphs: [
          "Ariza mazmuni Telegram Bot API orqali bizning ishchi chatimizga uzatiladi — unga faqat studiya xodimlari kira oladi. Sayt Cloudflare infratuzilmasida joylashgan. Tashriflarning shaxssiz statistikasi reklama piksellari doirasida Meta Platforms va Google'ga uzatiladi.",
          "Biz ma'lumotlarni sotmaymiz va uchinchi shaxslarga ularning o'z tarqatmalari uchun bermaymiz.",
        ],
      },
      {
        heading: "6. Ma'lumotlarni qancha saqlaymiz",
        paragraphs: [
          "Arizalar murojaat bilan ishlash uchun zarur bo'lgan muddat davomida, lekin uch yildan ko'p bo'lmagan muddatda saqlanadi. So'rovingiz bo'yicha yozishmani ertaroq o'chiramiz.",
        ],
      },
      {
        heading: '7. Sizning huquqlaringiz',
        paragraphs: [
          "Bizda qanday ma'lumotlaringiz borligini so'rashingiz, ularni tuzatish yoki o'chirishni talab qilishingiz, shuningdek roziligingizni qaytarib olishingiz mumkin. Buning uchun Telegram @imbim2004 ga yozing yoki +998 90 135 96 66 raqamiga qo'ng'iroq qiling.",
        ],
      },
      {
        heading: "8. Siyosatdagi o'zgarishlar",
        paragraphs: [
          "Biz ushbu siyosatni yangilashimiz mumkin. Amaldagi tahrir doim shu sahifada mavjud, yangilanish sanasi hujjat boshida ko'rsatilgan.",
        ],
      },
    ],
  },
}

export const offer: Record<Locale, LegalDoc> = {
  ru: {
    updated: '6 августа 2026',
    intro:
      'Настоящий документ является публичной офертой веб-студии imbim и содержит условия оказания услуг по разработке сайтов. Оставляя заявку на сайте или письменно согласовывая состав работ, заказчик принимает условия оферты.',
    sections: [
      {
        heading: '1. Стороны',
        paragraphs: [
          `Исполнитель — веб-студия imbim, ${REQUISITES_PLACEHOLDER}. Заказчик — физическое или юридическое лицо, принявшее условия настоящей оферты.`,
        ],
      },
      {
        heading: '2. Предмет договора',
        paragraphs: [
          'Исполнитель оказывает услуги по проектированию, дизайну, разработке и запуску сайта, а также сопутствующие услуги, согласованные сторонами. Конкретный состав работ, срок и стоимость фиксируются в счёте, смете или переписке в согласованном канале связи и являются неотъемлемой частью договора.',
        ],
      },
      {
        heading: '3. Стоимость и порядок оплаты',
        list: [
          'Стоимость определяется по тарифам, опубликованным на сайте, либо по индивидуальной смете.',
          'Работа начинается после предоплаты в размере 50% от согласованной стоимости.',
          'Оставшиеся 50% оплачиваются после приёмки работ и до передачи доступов и исходных файлов.',
          'Цены на сайте указаны в сумах и не включают комиссии платёжных систем и стоимость сторонних сервисов, если иное не оговорено.',
        ],
      },
      {
        heading: '4. Сроки',
        paragraphs: [
          'Сроки, указанные в тарифах, отсчитываются с момента получения предоплаты и всех необходимых материалов от заказчика: текстов, изображений, логотипа, доступов. Задержка в предоставлении материалов или согласовании этапов сдвигает срок сдачи на соответствующее количество дней.',
        ],
      },
      {
        heading: '5. Обязанности сторон',
        list: [
          'Исполнитель выполняет работы в согласованном объёме и сроках, информирует заказчика о ходе работ и передаёт результат в согласованном виде.',
          'Заказчик своевременно предоставляет материалы, назначает ответственное лицо для согласований и принимает работу в течение 5 рабочих дней.',
          'Заказчик гарантирует, что переданные материалы не нарушают авторских прав третьих лиц.',
        ],
      },
      {
        heading: '6. Правки и приёмка',
        paragraphs: [
          'В стоимость входят правки в рамках согласованного технического задания на каждом этапе. Изменения, выходящие за рамки задания, оцениваются отдельно и выполняются после согласования стоимости и срока.',
          'Если заказчик не направил замечания в течение 5 рабочих дней с момента передачи результата, работа считается принятой.',
        ],
      },
      {
        heading: '7. Права на результат',
        paragraphs: [
          'После полной оплаты исключительные права на созданные для заказчика дизайн-макеты и исходный код переходят к заказчику. Исполнитель сохраняет право размещать работу в своём портфолио и упоминать проект в рекламных материалах, если стороны письменно не договорились об ином.',
        ],
      },
      {
        heading: '8. Гарантия и поддержка',
        paragraphs: [
          'Исполнитель бесплатно устраняет ошибки, возникшие по его вине, в течение гарантийного периода, предусмотренного тарифом. Гарантия не распространяется на сбои, вызванные изменениями со стороны заказчика, действиями третьих лиц или отказом сторонних сервисов.',
        ],
      },
      {
        heading: '9. Ответственность',
        paragraphs: [
          'Исполнитель не несёт ответственности за упущенную выгоду заказчика и за результаты рекламных кампаний. Ответственность исполнителя ограничена суммой, фактически уплаченной по договору.',
        ],
      },
      {
        heading: '10. Заключительные положения',
        paragraphs: [
          'Стороны стремятся решать разногласия переговорами. Исполнитель вправе изменять условия оферты, публикуя новую редакцию на этой странице; к уже начатым проектам применяется редакция, действовавшая на момент старта работ.',
        ],
      },
    ],
  },
  uz: {
    updated: '2026-yil 6-avgust',
    intro:
      "Ushbu hujjat imbim veb-studiyasining ommaviy ofertasi bo'lib, sayt ishlab chiqish xizmatlarini ko'rsatish shartlarini o'z ichiga oladi. Saytda ariza qoldirib yoki ish tarkibini yozma kelishib, buyurtmachi oferta shartlarini qabul qiladi.",
    sections: [
      {
        heading: '1. Tomonlar',
        paragraphs: [
          `Ijrochi — imbim veb-studiyasi, ${REQUISITES_PLACEHOLDER}. Buyurtmachi — ushbu oferta shartlarini qabul qilgan jismoniy yoki yuridik shaxs.`,
        ],
      },
      {
        heading: '2. Shartnoma predmeti',
        paragraphs: [
          "Ijrochi saytni loyihalash, dizayn, ishlab chiqish va ishga tushirish, shuningdek tomonlar kelishgan qo'shimcha xizmatlarni ko'rsatadi. Ishning aniq tarkibi, muddati va narxi hisob-faktura, smeta yoki kelishilgan aloqa kanalidagi yozishmada qayd etiladi.",
        ],
      },
      {
        heading: "3. Narx va to'lov tartibi",
        list: [
          "Narx saytda e'lon qilingan tariflar yoki individual smeta bo'yicha belgilanadi.",
          "Ish kelishilgan narxning 50% miqdoridagi oldindan to'lovdan keyin boshlanadi.",
          "Qolgan 50% ish qabul qilingandan keyin va kirish ma'lumotlari topshirilishidan oldin to'lanadi.",
          "Saytdagi narxlar so'mda ko'rsatilgan va to'lov tizimlari komissiyasini o'z ichiga olmaydi.",
        ],
      },
      {
        heading: '4. Muddatlar',
        paragraphs: [
          "Tariflarda ko'rsatilgan muddatlar oldindan to'lov va buyurtmachidan barcha kerakli materiallar olingan paytdan hisoblanadi. Materiallarni taqdim etish yoki bosqichlarni kelishishdagi kechikish topshirish muddatini shunga mos ravishda suradi.",
        ],
      },
      {
        heading: '5. Tomonlar majburiyatlari',
        list: [
          "Ijrochi ishni kelishilgan hajm va muddatda bajaradi, ish borishi haqida xabar beradi va natijani kelishilgan shaklda topshiradi.",
          "Buyurtmachi materiallarni o'z vaqtida taqdim etadi, kelishuvlar uchun mas'ul shaxsni tayinlaydi va ishni 5 ish kuni ichida qabul qiladi.",
          "Buyurtmachi topshirilgan materiallar uchinchi shaxslarning mualliflik huquqlarini buzmasligini kafolatlaydi.",
        ],
      },
      {
        heading: '6. Tuzatishlar va qabul qilish',
        paragraphs: [
          "Narxga har bir bosqichda kelishilgan texnik topshiriq doirasidagi tuzatishlar kiradi. Topshiriq doirasidan chiqadigan o'zgarishlar alohida baholanadi.",
          "Agar buyurtmachi natija topshirilgandan keyin 5 ish kuni ichida e'tiroz bildirmasa, ish qabul qilingan hisoblanadi.",
        ],
      },
      {
        heading: '7. Natijaga huquqlar',
        paragraphs: [
          "To'liq to'lovdan keyin buyurtmachi uchun yaratilgan dizayn-maketlar va manba kodiga bo'lgan mutlaq huquqlar buyurtmachiga o'tadi. Ijrochi ishni o'z portfoliosida joylashtirish huquqini saqlab qoladi.",
        ],
      },
      {
        heading: '8. Kafolat va yordam',
        paragraphs: [
          "Ijrochi o'z aybi bilan yuzaga kelgan xatolarni tarifda ko'zda tutilgan kafolat muddati davomida bepul bartaraf etadi. Kafolat buyurtmachi o'zgartirishlari yoki uchinchi shaxslar xizmatlari nosozligi tufayli yuzaga kelgan uzilishlarga taalluqli emas.",
        ],
      },
      {
        heading: '9. Javobgarlik',
        paragraphs: [
          "Ijrochi buyurtmachining boy berilgan foydasi va reklama kampaniyalari natijalari uchun javobgar emas. Ijrochining javobgarligi shartnoma bo'yicha haqiqatda to'langan summa bilan cheklanadi.",
        ],
      },
      {
        heading: '10. Yakuniy qoidalar',
        paragraphs: [
          "Tomonlar kelishmovchiliklarni muzokaralar yo'li bilan hal qilishga intiladi. Ijrochi oferta shartlarini o'zgartirish huquqiga ega; boshlangan loyihalarga ish boshlangan paytda amalda bo'lgan tahrir qo'llaniladi.",
        ],
      },
    ],
  },
}
