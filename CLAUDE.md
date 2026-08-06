# imbim — Веб-студия

## Проект
Сайт веб-студии imbim (imbim.online). Многостраничный SPA с формой заявок.

## Стек
- React 19 + TypeScript
- React Router 7 (client-side роутинг)
- Vite 8 (rolldown)
- Tailwind CSS 4.2
- Framer Motion (анимации)
- Phosphor Icons

## Дизайн-система
- **Цвета**: forest (#0a3a2a), mint (#3dffa2), cream (#faf8f4), dark (#111111)
- **Шрифты**: Cabinet Grotesk (display), Satoshi (body) — Google Fonts, display=optional
- **Радиусы**: sm (0.75rem), md (1.25rem), lg (1.75rem), xl (2.5rem), pill (9999px)
- **Easing**: cubic-bezier(0.16, 1, 0.3, 1)

## Структура
```
src/
  pages/        — Home, Services, ServiceDetail, PortfolioPage, CasePage,
                  PricingPage, About, Contacts, Legal, NotFound
  components/   — Layout, Header, Footer, Hero, PageHero, ServicesGrid, Pricing,
                  Portfolio, Process, Stats, Team, Contact, CtaBand, Seo, ScrollReveal
  content/      — plans.ts (тарифы + тексты страниц услуг), projects.ts (кейсы),
                  legal.ts (политика и оферта); всё в двух локалях
  hooks/        — useScrollReveal, useProjectTags
  locales.ts    — тип Locale и работа с языковым префиксом в пути (без React)
  i18n.tsx      — словари ru/uz, LanguageProvider, useT
  App.tsx       — дерево маршрутов, подключённое дважды: в корне (ru) и под /uz
  index.css     — дизайн-токены
worker/index.ts — Cloudflare Worker: раздаёт dist/ и обслуживает POST /api/lead
bot/            — Telegram бот (Telegraf + Gemini AI), крутится отдельно от Worker
instagram-content/ — контент для Instagram (в .gitignore)
og-image/       — исходники для генерации OG/рекламных картинок (в .gitignore, не участвует в сборке)
public/demo/    — статичные демо-страницы, на которые ссылаются кейсы
public/og.png   — OG-картинка для превью ссылок
```

## Маршруты
Русская версия в корне, узбекская — с префиксом `/uz`. Локаль берётся из адреса
(`src/locales.ts`), в localStorage ничего не хранится.

```
/                                 /uz
/uslugi                           /uslugi/:slug   (4 тарифа из content/plans.ts)
/portfolio                        /portfolio/:slug (7 кейсов из content/projects.ts)
/tseny  /o-nas  /kontakty
/politika-konfidentsialnosti  /oferta
*                                 → NotFound (noindex)
```

- Мета-теги страницы ставит компонент `Seo`: title, description, canonical,
  hreflang ru/uz/x-default, Open Graph, JSON-LD.
- `sitemap.xml` собирается на билде плагином в `vite.config.ts` из тех же
  `content/*`, что рендерят страницы. Отдельно поддерживать список не нужно.
- `public/demo/` называется так, чтобы не конфликтовать с маршрутом
  `/portfolio/:slug`: Cloudflare отдал бы `/portfolio/<slug>/index.html` вместо SPA.
- Неизвестный путь отдаёт 200 с SPA-заглушкой (ограничение Static Assets),
  поэтому страница 404 помечена `noindex`.

## Интеграции
- **Meta Pixel** (1286110490374446) — в index.html, отложен на window.load. Событие Lead при отправке формы.
- **Google Ads** — два gtag-конфига в index.html и public/thank-you/index.html: AW-18143569795 и AW-18362284145.
- **Telegram Bot API** — форма шлёт POST на `/api/lead`, Worker пересылает в Telegram. Токен и chat_id живут в секретах Worker, в клиентский бандл не попадают.
- **Google Fonts** — display=optional (без layout shift)

## Деплой
- Хостинг: Cloudflare Workers (Static Assets), воркер `imbim-site`
- Репозиторий: github.com/airmalik0/tous
- Домены: imbim.online и www.imbim.online как Custom Domains воркера
- Выкатка: `npm run deploy` (сборка + `wrangler deploy`)
- Локально с воркером: `npm run cf:dev`, переменные из `.dev.vars`

### Секреты Worker
```
wrangler secret put TG_BOT_TOKEN
wrangler secret put TG_CHAT_ID
```
Список — `wrangler secret list`. В код и в .env не класть.

## Оптимизация (PageSpeed Desktop: 99/100/96/100)
- Загрузочный экран (чистый HTML в index.html) — скрывает layout shift
- Code splitting: главная и Hero грузятся сразу, остальные страницы и секции — лениво
- Hero h1/p без анимации (LCP элемент рендерится мгновенно)
- Все blur-эффекты заменены на radial-gradient
- Нет backdrop-blur нигде
- overflow-y: scroll на html (предотвращает scrollbar shift)
- Build target: es2020

## Контакты бизнеса
- Телефон: +998901359666
- Telegram: @imbim_bot (бот), @imbim2004 (личный)
- Instagram: @imbim_web
