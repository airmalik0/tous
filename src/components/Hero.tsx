import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useT } from '../i18n'

const ease = [0.16, 1, 0.3, 1] as const

const orbitTiles = [
  { img: 'savushka', cls: 'top-[22%] left-[6%] w-24 md:w-32', factor: 28, dur: 5.6 },
  { img: 'spring-blooms', cls: 'top-[20%] right-[10%] w-20 md:w-28', factor: -36, dur: 6.4 },
  { img: 'detailing-lab', cls: 'bottom-[10%] left-[12%] w-20 md:w-28', factor: -22, dur: 7.1 },
  { img: 'mosaic-pixel', cls: 'bottom-[6%] right-[6%] w-24 md:w-32', factor: 32, dur: 5.2 },
  { img: 'pillo', cls: 'top-[50%] left-[1%] w-16 md:w-24', factor: 44, dur: 6.8 },
  { img: 'bron-mebel', cls: 'top-[46%] right-[2%] w-16 md:w-24', factor: -48, dur: 5.9 },
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
        <img src={`/portfolio-illust/${tile.img}.jpg`} alt="" className="w-full aspect-square object-cover" decoding="async" />
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const { t, href } = useT()
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
    <section ref={ref} onMouseMove={onMove} className="relative bg-forest overflow-hidden min-h-[100svh] flex items-center">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.12) 0%, transparent 70%)' }} />

      {orbitTiles.map(tile => (
        <OrbitTile key={tile.img} tile={tile} mx={mx} my={my} />
      ))}

      <div className="relative z-10 max-w-[820px] mx-auto px-6 text-center pt-32 pb-24">
        {/* Бейдж, заголовок и лид — без entry-анимации: LCP-элементы рендерятся мгновенно */}
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-mint/15 rounded-pill mb-8">
          <span className="w-2 h-2 bg-mint rounded-full" />
          <span className="text-mint/90 text-sm font-medium">{t.heroBadge}</span>
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-800 text-white tracking-tighter leading-[0.98]">
          {t.heroTitle1}
          <br />
          {t.heroTitle2 && `${t.heroTitle2} `}
          <span className="text-mint">{t.heroTitleAccent}</span>
          {t.heroTitleAfter && ` ${t.heroTitleAfter}`}
        </h1>

        <p className="mt-7 text-white/55 text-lg md:text-xl max-w-[480px] mx-auto leading-relaxed">
          {t.heroLead}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link to={href('/kontakty')} className="inline-flex items-center px-9 py-4 bg-mint text-forest rounded-pill text-base font-bold hover:brightness-110 transition-[filter] duration-200 active:scale-[0.98]">
            {t.ctaDiscuss}
          </Link>
          <Link to={href('/portfolio')} className="inline-flex items-center gap-2 px-9 py-4 border border-white/20 text-white rounded-pill text-base font-medium hover:bg-white/5 transition-colors duration-200">
            {t.heroCtaSecondary} <ArrowUpRight size={16} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
