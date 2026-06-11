import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { ArrowUpRight, PaperPlaneTilt, Check } from '@phosphor-icons/react'

const ease = [0.16, 1, 0.3, 1] as const

/* Демо-варианты hero для выбора. Тексты RU-only, i18n подключим после выбора финального. */

function VariantLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="absolute top-6 left-6 z-30 inline-flex items-center gap-2 px-4 py-2 bg-white border border-dark/10 rounded-pill shadow-sm">
      <span className="text-mint font-display font-800 text-sm">{n}</span>
      <span className="text-dark/60 text-sm font-medium">{title}</span>
    </div>
  )
}

/* ── Вариант 01: Editorial Split — крутящееся слово + clay workspace ── */

const rotatingWords = ['лендинги', 'магазины', 'приложения', 'Telegram-боты']

function HeroV1() {
  const [wi, setWi] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setWi(i => (i + 1) % rotatingWords.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-cream overflow-hidden">
      <VariantLabel n="01" title="Editorial Split" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-36 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forest/5 rounded-pill mb-8"
          >
            <span className="w-2 h-2 bg-mint rounded-full" />
            <span className="text-forest text-sm font-medium">Веб-студия полного цикла</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-800 text-dark tracking-tighter leading-[1.02]">
            Делаем
            <br />
            <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom min-w-[5.5em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wi]}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute left-0 text-forest bg-mint px-3 rounded-2xl whitespace-nowrap"
                >
                  {rotatingWords[wi]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            которые работают
          </h1>

          <p className="mt-6 text-muted text-lg md:text-xl max-w-[460px] leading-relaxed">
            От идеи до запуска за 2–4 недели. Дизайн, код, аналитика — всё внутри одной команды.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center px-8 py-4 bg-forest text-mint rounded-pill text-[15px] font-bold hover:bg-forest-light transition-colors duration-200 active:scale-[0.98]">
              Обсудить проект
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 px-8 py-4 border border-dark/15 text-dark rounded-pill text-[15px] font-medium hover:bg-dark/5 transition-colors duration-200">
              Смотреть работы <ArrowUpRight size={16} weight="bold" />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-[2.5rem] overflow-hidden shadow-xl shadow-forest/10"
          >
            <img src="/hero/hero-workspace.jpg" alt="Рабочее место imbim" className="w-full h-auto block" loading="lazy" decoding="async" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="absolute -bottom-5 -left-6 bg-forest rounded-[1.5rem] p-4 pr-6 shadow-lg shadow-forest/20 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-mint/15 rounded-xl flex items-center justify-center">
              <span className="text-mint font-bold text-sm">+</span>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Новая заявка</p>
              <p className="text-white/50 text-xs">с вашего сайта</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Вариант 02: Type Hero — крупная типографика + marquee ── */

const marqueeItems = ['Лендинги', 'Интернет-магазины', 'Веб-приложения', 'Telegram-боты', 'UI/UX дизайн', 'SEO']

function HeroV2() {
  const lines = ['Сайты,', 'которые', 'продают.']
  return (
    <section className="relative bg-forest overflow-hidden">
      <VariantLabel n="02" title="Type Hero" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 text-center">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="font-display font-800 tracking-tighter leading-[0.92] text-white text-[17vw] md:text-[11vw] lg:text-[10rem]"
        >
          {lines.map((line, li) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { duration: 0.7, ease } } }}
                className={`block ${li === 2 ? 'text-mint' : ''}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
          className="mt-8 text-white/55 text-lg md:text-xl max-w-[520px] mx-auto leading-relaxed"
        >
          Никаких шаблонов. Каждый проект собираем вручную под задачи вашего бизнеса.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55, ease }}
          className="mt-10 flex justify-center"
        >
          <a href="#contact" className="inline-flex items-center px-9 py-4 bg-mint text-forest rounded-pill text-base font-bold hover:brightness-110 transition-[filter] duration-200 active:scale-[0.98]">
            Обсудить проект
          </a>
        </motion.div>
      </div>

      <div className="relative rotate-[-2deg] scale-[1.02] mb-[-1px]">
        <div className="bg-mint py-4 overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-[marquee_24s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center text-forest font-display font-800 text-xl md:text-2xl tracking-tight mx-6">
                {item} <span className="ml-12 text-forest/40">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Вариант 03: Bento Hero — сетка из карточек ── */

function HeroV3() {
  const cell = 'rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1'
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease },
  })

  return (
    <section className="relative bg-cream overflow-hidden">
      <VariantLabel n="03" title="Bento Hero" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-36">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <motion.div {...reveal(0)} className={`${cell} col-span-12 lg:col-span-7 bg-forest p-8 md:p-12 flex flex-col justify-between min-h-[380px]`}>
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 bg-mint/15 rounded-pill">
              <span className="w-2 h-2 bg-mint rounded-full" />
              <span className="text-mint/90 text-sm font-medium">imbim — веб-студия</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-800 text-white tracking-tighter leading-[1.0]">
                Создаём сайты,
                <br />
                <span className="text-mint">собираем заявки</span>
              </h1>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center px-7 py-3.5 bg-mint text-forest rounded-pill text-[15px] font-bold hover:brightness-110 transition-[filter] duration-200">
                  Обсудить проект
                </a>
                <a href="#portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-pill text-[15px] font-medium hover:bg-white/5 transition-colors duration-200">
                  Портфолио <ArrowUpRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal(0.1)} className={`${cell} col-span-12 sm:col-span-6 lg:col-span-5 overflow-hidden min-h-[280px] relative`}>
            <img src="/hero/hero-browser.jpg" alt="Сайт" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
          </motion.div>

          <motion.div {...reveal(0.18)} className={`${cell} col-span-12 sm:col-span-6 lg:col-span-4 bg-white border border-dark/5 p-7 flex flex-col justify-between min-h-[170px]`}>
            <p className="text-muted text-sm font-medium">Команда</p>
            <div className="flex items-center">
              {['ibrahim', 'madina', 'samir', 'artemy'].map((s, i) => (
                <img key={s} src={`/team/${s}.jpg`} alt="" loading="lazy" decoding="async"
                  className={`w-12 h-12 rounded-full object-cover border-[3px] border-white ${i > 0 ? '-ml-3' : ''}`} />
              ))}
              <span className="-ml-3 w-12 h-12 rounded-full bg-forest text-mint text-sm font-bold flex items-center justify-center border-[3px] border-white">+3</span>
            </div>
          </motion.div>

          <motion.div {...reveal(0.26)} className={`${cell} col-span-6 lg:col-span-4 bg-mint p-7 flex flex-col justify-between min-h-[170px]`}>
            <p className="text-forest/70 text-sm font-medium">Проектов сделали</p>
            <p className="text-forest font-display font-800 text-5xl md:text-6xl tracking-tight">50+</p>
          </motion.div>

          <motion.div {...reveal(0.34)} className={`${cell} col-span-6 lg:col-span-4 bg-white border border-dark/5 p-7 flex flex-col justify-between min-h-[170px]`}>
            <p className="text-muted text-sm font-medium">Google PageSpeed</p>
            <p className="text-dark font-display font-800 text-5xl md:text-6xl tracking-tight">98<span className="text-mint">/100</span></p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Вариант 04: Orbit — плавающие тайлы проектов с parallax за мышью ── */

const orbitTiles = [
  { img: 'savushka', cls: 'top-[12%] left-[6%] w-24 md:w-32', factor: 28, dur: 5.6 },
  { img: 'spring-blooms', cls: 'top-[8%] right-[10%] w-20 md:w-28', factor: -36, dur: 6.4 },
  { img: 'detailing-lab', cls: 'bottom-[16%] left-[12%] w-20 md:w-28', factor: -22, dur: 7.1 },
  { img: 'mosaic-pixel', cls: 'bottom-[10%] right-[6%] w-24 md:w-32', factor: 32, dur: 5.2 },
  { img: 'pillo', cls: 'top-[42%] left-[1%] w-16 md:w-24', factor: 44, dur: 6.8 },
  { img: 'bron-mebel', cls: 'top-[38%] right-[2%] w-16 md:w-24', factor: -48, dur: 5.9 },
]

function OrbitTile({ tile, mx, my }: { tile: (typeof orbitTiles)[number]; mx: MotionValue<number>; my: MotionValue<number> }) {
  const x = useTransform(mx, v => v * tile.factor)
  const y = useTransform(my, v => v * tile.factor)
  return (
    <motion.div style={{ x, y }} className={`absolute ${tile.cls} hidden sm:block`}>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: tile.dur, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-3xl overflow-hidden shadow-xl shadow-black/20 border border-white/10"
      >
        <img src={`/portfolio-illust/${tile.img}.jpg`} alt="" className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
      </motion.div>
    </motion.div>
  )
}

function HeroV4() {
  const ref = useRef<HTMLElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 50, damping: 16 })
  const my = useSpring(rawY, { stiffness: 50, damping: 16 })

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    rawX.set((e.clientX - r.left) / r.width - 0.5)
    rawY.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section ref={ref} onMouseMove={onMove} className="relative bg-forest overflow-hidden min-h-[92svh] flex items-center">
      <VariantLabel n="04" title="Orbit Parallax" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.12) 0%, transparent 70%)' }} />

      {orbitTiles.map(tile => (
        <OrbitTile key={tile.img} tile={tile} mx={mx} my={my} />
      ))}

      <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center py-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-mint/15 rounded-pill mb-8"
        >
          <span className="w-2 h-2 bg-mint rounded-full" />
          <span className="text-mint/90 text-sm font-medium">50+ запущенных проектов</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
          className="text-4xl md:text-6xl lg:text-7xl font-800 text-white tracking-tighter leading-[0.98]"
        >
          Ваш бизнес
          <br />
          заслуживает <span className="text-mint">сайт лучше</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22, ease }}
          className="mt-7 text-white/55 text-lg md:text-xl max-w-[480px] mx-auto leading-relaxed"
        >
          Вокруг — наши живые проекты. Подвигайте мышкой. Следующим может быть ваш.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.34, ease }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a href="#contact" className="inline-flex items-center px-9 py-4 bg-mint text-forest rounded-pill text-base font-bold hover:brightness-110 transition-[filter] duration-200 active:scale-[0.98]">
            Обсудить проект
          </a>
          <a href="#portfolio" className="inline-flex items-center gap-2 px-9 py-4 border border-white/20 text-white rounded-pill text-base font-medium hover:bg-white/5 transition-colors duration-200">
            Все работы <ArrowUpRight size={16} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Вариант 05: Chat Hero — диалог, который оживает ── */

type ChatStep = { from: 'client' | 'studio' | 'system'; text: string }

const chatScript: ChatStep[] = [
  { from: 'client', text: 'Привет! Нужен сайт для магазина детской обуви 👟' },
  { from: 'studio', text: 'Привет! Покажем похожий кейс — Savushka. Созвон завтра в 15:00?' },
  { from: 'client', text: 'Да, отлично!' },
  { from: 'system', text: 'Проект запущен за 18 дней' },
]

function ChatDemo() {
  const [visible, setVisible] = useState(0)
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let alive = true
    const run = async () => {
      const wait = (ms: number) => new Promise(r => setTimeout(r, ms))
      while (alive) {
        setVisible(0)
        await wait(800)
        for (let i = 0; i < chatScript.length; i++) {
          if (!alive) return
          setTyping(true)
          await wait(900)
          setTyping(false)
          setVisible(i + 1)
          await wait(1300)
        }
        await wait(2600)
      }
    }
    run()
    return () => { alive = false }
  }, [])

  return (
    <div className="bg-white rounded-[2rem] border border-dark/5 shadow-xl shadow-forest/8 p-6 md:p-7 w-full max-w-[440px]">
      <div className="flex items-center gap-3 pb-4 border-b border-dark/5 mb-5">
        <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
          <PaperPlaneTilt size={18} weight="fill" className="text-mint" />
        </div>
        <div>
          <p className="text-dark font-bold text-sm">imbim</p>
          <p className="text-mint text-xs font-medium">онлайн</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 min-h-[230px]">
        <AnimatePresence>
          {chatScript.slice(0, visible).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease }}
              className={
                m.from === 'system'
                  ? 'self-center inline-flex items-center gap-2 px-4 py-2 bg-mint/15 text-forest text-xs font-semibold rounded-pill'
                  : m.from === 'client'
                    ? 'self-start max-w-[85%] bg-cream border border-dark/5 text-dark text-sm px-4 py-3 rounded-2xl rounded-bl-md leading-snug'
                    : 'self-end max-w-[85%] bg-forest text-white text-sm px-4 py-3 rounded-2xl rounded-br-md leading-snug'
              }
            >
              {m.from === 'system' && <Check size={14} weight="bold" className="text-mint" />}
              {m.text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex gap-1.5 px-4 py-3.5 rounded-2xl w-fit ${visible % 2 === 0 ? 'self-start bg-cream border border-dark/5' : 'self-end bg-forest'}`}
            >
              {[0, 1, 2].map(j => (
                <motion.span
                  key={j}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: j * 0.18 }}
                  className={`w-1.5 h-1.5 rounded-full ${visible % 2 === 0 ? 'bg-dark/40' : 'bg-mint'}`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function HeroV5() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <VariantLabel n="05" title="Chat Hero" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-36 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-forest/5 rounded-pill mb-8"
          >
            <span className="w-2 h-2 bg-mint rounded-full" />
            <span className="text-forest text-sm font-medium">Отвечаем в течение часа</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-800 text-dark tracking-tighter leading-[0.98]">
            Расскажите идею —
            <br />
            <span className="text-forest">остальное</span>
            <br />
            <span className="text-mint">сделаем мы</span>
          </h1>

          <p className="mt-6 text-muted text-lg md:text-xl max-w-[460px] leading-relaxed">
            Один диалог в Telegram — и через пару недель у вас работающий сайт с заявками.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-mint rounded-pill text-[15px] font-bold hover:bg-forest-light transition-colors duration-200 active:scale-[0.98]">
              <PaperPlaneTilt size={18} weight="fill" /> Написать нам
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative flex justify-center lg:justify-end"
        >
          <ChatDemo />
          <motion.img
            src="/hero/hero-plane.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 -left-2 lg:left-6 w-28 md:w-36 rounded-3xl shadow-lg shadow-forest/10 hidden md:block"
          />
        </motion.div>
      </div>
    </section>
  )
}

export function HeroVariants() {
  return (
    <div id="hero-variants">
      <HeroV1 />
      <HeroV2 />
      <HeroV3 />
      <HeroV4 />
      <HeroV5 />
    </div>
  )
}
