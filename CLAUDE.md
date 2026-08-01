# imbim — Веб-студия

## Проект
Сайт веб-студии imbim (imbim.online). Одностраничный лендинг с формой заявок.

## Стек
- React 19 + TypeScript
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
  components/   — Header, Hero, Services, Process, Portfolio, Stats, Contact, Footer, ScrollReveal
  hooks/        — useScrollReveal
  App.tsx       — lazy load компонентов ниже fold
  index.css     — дизайн-токены
worker/index.ts — Cloudflare Worker: раздаёт dist/ и обслуживает POST /api/lead
bot/            — Telegram бот (Telegraf + Gemini AI), крутится отдельно от Worker
instagram-content/ — контент для Instagram (в .gitignore)
og-image/       — исходники для генерации OG/рекламных картинок (в .gitignore, не участвует в сборке)
public/og.png   — OG-картинка для превью ссылок
```

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
- Code splitting: lazy load Services, Process, Portfolio, Stats, Contact, Footer
- Hero h1/p без анимации (LCP элемент рендерится мгновенно)
- Все blur-эффекты заменены на radial-gradient
- Нет backdrop-blur нигде
- overflow-y: scroll на html (предотвращает scrollbar shift)
- Build target: es2020

## Контакты бизнеса
- Телефон: +998901359666
- Telegram: @imbim_bot (бот), @imbim2004 (личный)
- Instagram: @imbim_web
