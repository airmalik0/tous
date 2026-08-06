import type { Locale } from '../locales'

export type ProjectTag =
  | 'kidsShoes'
  | 'detailing'
  | 'pillows'
  | 'furniture'
  | 'books'
  | 'arcade'
  | 'florist'

export type ProjectCopy = {
  /** Формат работы: магазин, сайт услуг, промо-страница. */
  format: string
  /** Короткое описание для карточки в списке. */
  summary: string
  task: string
  solution: string
  features: string[]
  seoTitle: string
  seoDescription: string
}

export type Project = {
  slug: string
  brand: string
  tag: ProjectTag
  /** Внешний адрес проекта или локальная демо-страница. */
  url: string
  /** Ширина карточки в мозаике на десктопе. */
  span?: string
  copy: Record<Locale, ProjectCopy>
}

export const projects: Project[] = [
  {
    slug: 'savushka',
    brand: 'Savushka',
    tag: 'kidsShoes',
    url: 'https://savushka.com/',
    span: 'lg:col-span-2',
    copy: {
      ru: {
        format: 'Интернет-магазин',
        summary: 'Магазин детской обуви с каталогом по размерам и возрастам',
        task: 'Детская обувь — покупка, где родитель выбирает не по красоте, а по размеру, сезону и возрасту ребёнка. Нужен был магазин, в котором нужную пару находят за пару касаний, а не листают весь ассортимент.',
        solution: 'Собрали каталог с фильтрами по размеру, сезону и возрасту, переработали карточку товара — размерная сетка, замеры стельки и фотографии обуви с разных ракурсов. Оформление заказа сократили до одного экрана: только контакт, адрес и способ доставки.',
        features: [
          'Фильтры по размеру, сезону и возрасту ребёнка',
          'Карточка товара с размерной сеткой и длиной стельки',
          'Оформление заказа в один экран',
          'Адаптивная вёрстка — большая часть трафика с телефонов',
        ],
        seoTitle: 'Savushka — интернет-магазин детской обуви | Кейс imbim',
        seoDescription: 'Как мы собрали интернет-магазин детской обуви Savushka: каталог с фильтрами по размеру и сезону, карточка товара с размерной сеткой, заказ в один экран.',
      },
      uz: {
        format: "Internet-do'kon",
        summary: "O'lcham va yosh bo'yicha katalogli bolalar poyabzali do'koni",
        task: "Bolalar poyabzali — ota-ona chiroyiga emas, o'lcham, mavsum va bolaning yoshiga qarab tanlaydigan xarid. Kerakli juftlikni butun assortimentni varaqlamasdan, bir necha bosishda topadigan do'kon kerak edi.",
        solution: "O'lcham, mavsum va yosh bo'yicha filtrli katalog yig'dik, mahsulot kartochkasini qayta ishladik — o'lcham jadvali, ichki taglik o'lchamlari va turli rakurslardagi suratlar. Buyurtma rasmiylashtirishni bitta ekranga qisqartirdik.",
        features: [
          "O'lcham, mavsum va bola yoshi bo'yicha filtrlar",
          "O'lcham jadvali va taglik uzunligi ko'rsatilgan kartochka",
          'Bitta ekranda buyurtma rasmiylashtirish',
          "Moslashuvchan verstka — trafikning katta qismi telefonlardan",
        ],
        seoTitle: "Savushka — bolalar poyabzali internet-do'koni | imbim keysi",
        seoDescription: "Savushka bolalar poyabzali internet-do'konini qanday yig'dik: o'lcham va mavsum bo'yicha filtrlar, o'lcham jadvali, bitta ekranda buyurtma.",
      },
    },
  },
  {
    slug: 'detailing-lab',
    brand: 'Detailing Lab',
    tag: 'detailing',
    url: 'https://detailinglab.uz/',
    copy: {
      ru: {
        format: 'Сайт услуг',
        summary: 'Сайт детейлинг-центра с прайсом по типам кузова и записью',
        task: 'У детейлинга десятки услуг — от полировки до защитной плёнки, и цена зависит от класса автомобиля. Клиент звонил только чтобы узнать порядок цен, и менеджер тратил время на одни и те же ответы.',
        solution: 'Развели услуги по отдельным блокам с понятными названиями и вынесли цены по классам кузова прямо на сайт. Добавили галерею «до / после» и форму записи, которая сразу уходит в Telegram менеджеру вместе с выбранной услугой.',
        features: [
          'Прайс по типам кузова — цена видна до звонка',
          'Галерея работ «до / после»',
          'Запись на услугу с передачей выбора в Telegram',
          'Тёмная тема, подчёркивающая фотографии автомобилей',
        ],
        seoTitle: 'Detailing Lab — сайт детейлинг-центра | Кейс imbim',
        seoDescription: 'Кейс imbim: сайт для детейлинг-центра с прайсом по классам автомобилей, галереей «до / после» и записью на услугу в Telegram.',
      },
      uz: {
        format: 'Xizmatlar sayti',
        summary: 'Kuzov turlari bo\'yicha narxlar va yozilish bilan deteyling markazi sayti',
        task: "Deytelingda o'nlab xizmat bor — polirovkadan himoya plyonkasigacha, narx esa avtomobil klassiga bog'liq. Mijoz faqat narx tartibini bilish uchun qo'ng'iroq qilardi.",
        solution: "Xizmatlarni tushunarli nomlar bilan alohida bloklarga ajratdik va kuzov klasslari bo'yicha narxlarni saytga chiqardik. «Oldin / keyin» galereyasi va tanlangan xizmat bilan birga Telegramga tushadigan yozilish formasini qo'shdik.",
        features: [
          "Kuzov turlari bo'yicha narxlar — narx qo'ng'iroqdan oldin ko'rinadi",
          '«Oldin / keyin» ishlar galereyasi',
          'Tanlovni Telegramga uzatuvchi yozilish formasi',
          "Avtomobil suratlarini ajratib ko'rsatuvchi qorong'i mavzu",
        ],
        seoTitle: 'Detailing Lab — deteyling markazi sayti | imbim keysi',
        seoDescription: "imbim keysi: avtomobil klasslari bo'yicha narxlar, «oldin / keyin» galereyasi va Telegramga yozilish bilan deteyling markazi sayti.",
      },
    },
  },
  {
    slug: 'pillo',
    brand: 'Pillo',
    tag: 'pillows',
    url: 'https://pillo-86t.pages.dev/',
    copy: {
      ru: {
        format: 'Интернет-магазин',
        summary: 'Магазин шёлкового текстиля с акцентом на фактуру ткани',
        task: 'Шёлк продаётся ощущением: покупателю нужно понять плотность, оттенок и то, как ткань лежит. На фотографиях в ленте Instagram это теряется, а вопросы «а какой он на ощупь» приходили каждый день.',
        solution: 'Сделали спокойный светлый макет, в котором главное — крупные фотографии ткани. В карточке товара показали состав, плотность и уход, добавили выбор цвета с реальными снимками, а не цветовыми кружками.',
        features: [
          'Крупные фотографии фактуры вместо мелких превью',
          'Состав, плотность и правила ухода в карточке товара',
          'Выбор цвета по реальным фото ткани',
          'Светлая палитра, не спорящая с оттенками товара',
        ],
        seoTitle: 'Pillo — интернет-магазин шёлкового текстиля | Кейс imbim',
        seoDescription: 'Кейс imbim: магазин шёлкового постельного белья Pillo — акцент на фактуре ткани, подробная карточка товара, выбор цвета по реальным фото.',
      },
      uz: {
        format: "Internet-do'kon",
        summary: "Mato fakturasiga urg'u bergan ipak to'shak buyumlari do'koni",
        task: "Ipak his bilan sotiladi: xaridor zichlik, tus va matoning qanday yotishini tushunishi kerak. Instagram lentasidagi suratlarda bu yo'qoladi.",
        solution: "Asosiysi — matoning yirik suratlari bo'lgan tinch, yorug' maket yasadik. Mahsulot kartochkasida tarkib, zichlik va parvarishni ko'rsatdik, rang tanlashni rangli doirachalar emas, haqiqiy suratlar orqali qildik.",
        features: [
          'Mayda prevyular o\'rniga faktura yirik suratlari',
          'Kartochkada tarkib, zichlik va parvarish qoidalari',
          'Matoning haqiqiy suratlari bo\'yicha rang tanlash',
          'Mahsulot tuslariga xalaqit bermaydigan yorug\' palitra',
        ],
        seoTitle: "Pillo — ipak to'shak buyumlari do'koni | imbim keysi",
        seoDescription: "imbim keysi: Pillo ipak to'shak buyumlari do'koni — mato fakturasiga urg'u, batafsil mahsulot kartochkasi, haqiqiy suratlar bo'yicha rang tanlash.",
      },
    },
  },
  {
    slug: 'bron-mebel',
    brand: 'Bron Mebel',
    tag: 'furniture',
    url: 'https://bron-mebel.pages.dev/',
    copy: {
      ru: {
        format: 'Каталог с заявками',
        summary: 'Каталог мебели с расчётом под размеры помещения',
        task: 'Мебель редко покупают «как на картинке» — почти всегда нужны свои размеры, материал и цвет. Обычный магазин с кнопкой «в корзину» здесь не работает: сделка начинается с разговора и замера.',
        solution: 'Собрали каталог, где карточка товара ведёт не в корзину, а к заявке на расчёт: покупатель выбирает модель, указывает габариты и получает ответ менеджера. Категории разложили по комнатам — так, как человек и думает о мебели.',
        features: [
          'Категории по комнатам, а не по внутренней номенклатуре',
          'Заявка на расчёт вместо корзины',
          'Указание габаритов и материала прямо в форме',
          'Крупные фотографии интерьеров в каталоге',
        ],
        seoTitle: 'Bron Mebel — каталог мебели с расчётом | Кейс imbim',
        seoDescription: 'Кейс imbim: каталог мебели Bron Mebel — категории по комнатам, заявка на индивидуальный расчёт вместо корзины, форма с габаритами.',
      },
      uz: {
        format: 'Arizali katalog',
        summary: "Xona o'lchamlari bo'yicha hisob-kitobli mebel katalogi",
        task: "Mebelni kamdan-kam «suratdagidek» sotib olishadi — deyarli doim o'z o'lchamlari, materiali va rangi kerak. «Savatga» tugmasi bo'lgan oddiy do'kon bu yerda ishlamaydi.",
        solution: "Mahsulot kartochkasi savatga emas, hisob-kitob arizasiga olib boradigan katalog yig'dik: xaridor modelni tanlaydi, o'lchamlarni ko'rsatadi va menejerdan javob oladi. Kategoriyalarni xonalar bo'yicha joyladik.",
        features: [
          'Ichki nomenklatura emas, xonalar bo\'yicha kategoriyalar',
          'Savat o\'rniga hisob-kitob arizasi',
          "Formada bevosita o'lcham va materialni ko'rsatish",
          'Katalogda yirik interyer suratlari',
        ],
        seoTitle: 'Bron Mebel — hisob-kitobli mebel katalogi | imbim keysi',
        seoDescription: "imbim keysi: Bron Mebel mebel katalogi — xonalar bo'yicha kategoriyalar, savat o'rniga individual hisob-kitob arizasi.",
      },
    },
  },
  {
    slug: 'paper-cutout',
    brand: 'Слова на ветер',
    tag: 'books',
    url: '/demo/paper-cutout/',
    copy: {
      ru: {
        format: 'Промо-страница',
        summary: 'Книжный магазин в стиле бумажной аппликации',
        task: 'Показать, что книжному магазину не обязательно выглядеть как складская таблица. Нужна была страница с характером — такая, которую хочется долистать до конца, как хороший разворот.',
        solution: 'Построили страницу вокруг приёма бумажной аппликации: слои с мягкими тенями, рваные края, вырезанные из бумаги буквы. Анимации сдержанные — они поддерживают чтение, а не мешают ему.',
        features: [
          'Визуальный приём paper cutout: слои, тени, рваные края',
          'Крупная типографика как основной элемент композиции',
          'Спокойные анимации появления при прокрутке',
          'Полностью адаптивная раскладка',
        ],
        seoTitle: '«Слова на ветер» — промо-страница книжного | Кейс imbim',
        seoDescription: 'Кейс imbim: промо-страница книжного магазина в стиле бумажной аппликации — слои, крупная типографика, сдержанные анимации.',
      },
      uz: {
        format: 'Promo-sahifa',
        summary: "Qog'oz applikatsiya uslubidagi kitob do'koni",
        task: "Kitob do'koni ombor jadvalidek ko'rinishi shart emasligini ko'rsatish. Xarakterga ega sahifa kerak edi — oxirigacha varaqlagingiz keladigan.",
        solution: "Sahifani qog'oz applikatsiya usuli atrofida qurdik: yumshoq soyali qatlamlar, yirtiq chetlar, qog'ozdan qirqilgan harflar. Animatsiyalar vazmin — ular o'qishga xalaqit bermaydi.",
        features: [
          "Paper cutout uslubi: qatlamlar, soyalar, yirtiq chetlar",
          'Kompozitsiyaning asosiy elementi sifatida yirik tipografika',
          'Skroll paytida tinch paydo bo\'lish animatsiyalari',
          "To'liq moslashuvchan joylashuv",
        ],
        seoTitle: "«So'zlar shamolga» — kitob do'koni promo-sahifasi | imbim keysi",
        seoDescription: "imbim keysi: qog'oz applikatsiya uslubidagi kitob do'koni promo-sahifasi — qatlamlar, yirik tipografika, vazmin animatsiyalar.",
      },
    },
  },
  {
    slug: 'mosaic-pixel',
    brand: 'PIXEL ALMATY',
    tag: 'arcade',
    url: '/demo/mosaic-pixel/',
    span: 'lg:col-span-2',
    copy: {
      ru: {
        format: 'Промо-страница',
        summary: 'Ретро-аркада с пиксельной графикой и мозаичной сеткой',
        task: 'Аркадному залу нужна страница, которая передаёт атмосферу зала с автоматами: неон, пиксели, шум ЭЛТ-экрана. При этом она должна оставаться понятной — где расписание, где цены, где адрес.',
        solution: 'Собрали мозаичную сетку из плиток разного размера — она перекликается с пиксельной графикой и одновременно раскладывает информацию по блокам. Пиксельные шрифты применили точечно, в заголовках, чтобы текст оставался читаемым.',
        features: [
          'Мозаичная сетка из плиток разного размера',
          'Пиксельная графика и неоновая палитра',
          'Пиксельные шрифты только в акцентах — ради читаемости',
          'Информационные блоки: расписание, цены, адрес',
        ],
        seoTitle: 'PIXEL ALMATY — промо-страница ретро-аркады | Кейс imbim',
        seoDescription: 'Кейс imbim: промо-страница ретро-аркады PIXEL ALMATY — мозаичная сетка, пиксельная графика, неоновая палитра.',
      },
      uz: {
        format: 'Promo-sahifa',
        summary: 'Piksel grafikasi va mozaik panjarali retro arkada',
        task: "Arkada zaliga avtomatlar muhitini yetkazadigan sahifa kerak: neon, piksellar, ELT-ekran shovqini. Shu bilan birga u tushunarli qolishi kerak.",
        solution: "Turli o'lchamdagi plitkalardan mozaik panjara yig'dik — u piksel grafikasi bilan hamohang va ayni paytda ma'lumotni bloklarga ajratadi. Piksel shriftlarini faqat sarlavhalarda ishlatdik.",
        features: [
          "Turli o'lchamdagi plitkalardan mozaik panjara",
          'Piksel grafikasi va neon palitra',
          "O'qilishi uchun piksel shriftlar faqat urg'ularda",
          "Ma'lumot bloklari: jadval, narxlar, manzil",
        ],
        seoTitle: 'PIXEL ALMATY — retro arkada promo-sahifasi | imbim keysi',
        seoDescription: 'imbim keysi: PIXEL ALMATY retro arkada promo-sahifasi — mozaik panjara, piksel grafikasi, neon palitra.',
      },
    },
  },
  {
    slug: 'spring-blooms',
    brand: 'FLEUREL',
    tag: 'florist',
    url: '/demo/spring-blooms/',
    copy: {
      ru: {
        format: 'Лендинг',
        summary: 'Флористическая студия: букеты, доставка, заявка в один шаг',
        task: 'У цветов короткий цикл решения: человек выбирает букет за минуту и хочет сразу оформить доставку. Любой лишний шаг между «нравится» и «заказать» стоит заявки.',
        solution: 'Сделали лендинг, где букеты показаны крупно и сразу с ценой, а форма заказа доступна с любого экрана. Отдельно вынесли поводы — «день рождения», «извинения», «просто так»: так выбирать проще, чем по сортам цветов.',
        features: [
          'Букеты крупными карточками с ценой на виду',
          'Подбор по поводу, а не по сортам цветов',
          'Форма заказа доступна с любого экрана',
          'Мягкая пастельная палитра под сезонные съёмки',
        ],
        seoTitle: 'FLEUREL — лендинг флористической студии | Кейс imbim',
        seoDescription: 'Кейс imbim: лендинг флористической студии FLEUREL — букеты с ценой, подбор по поводу, заказ в один шаг.',
      },
      uz: {
        format: 'Lending',
        summary: 'Floristika studiyasi: guldastalar, yetkazib berish, bir qadamda ariza',
        task: "Gullarda qaror qabul qilish tsikli qisqa: odam guldastani bir daqiqada tanlaydi va darhol yetkazib berishni rasmiylashtirmoqchi bo'ladi.",
        solution: "Guldastalar yirik va darhol narxi bilan ko'rsatilgan lending yasadik, buyurtma formasi esa istalgan ekrandan ochiladi. Sabablarni alohida chiqardik — «tug'ilgan kun», «uzr so'rash», «shunchaki».",
        features: [
          "Narxi ko'rinib turgan yirik guldasta kartochkalari",
          'Gul navlari bo\'yicha emas, sabab bo\'yicha tanlash',
          'Istalgan ekrandan ochiladigan buyurtma formasi',
          'Mavsumiy suratlarga mos yumshoq pastel palitra',
        ],
        seoTitle: 'FLEUREL — floristika studiyasi lendingi | imbim keysi',
        seoDescription: 'imbim keysi: FLEUREL floristika studiyasi lendingi — narxli guldastalar, sabab bo\'yicha tanlash, bir qadamda buyurtma.',
      },
    },
  },
]

export function projectBySlug(slug: string | undefined): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function nextProject(slug: string): Project {
  const i = projects.findIndex(p => p.slug === slug)
  return projects[(i + 1) % projects.length]
}
