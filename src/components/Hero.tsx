import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'

const ease = [0.16, 1, 0.3, 1] as const
const d = 0.4 // base delay — wait for loader to fade

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background — no animation, static */}
      <div className="absolute inset-x-4 md:inset-x-8 top-24 bottom-8 bg-forest rounded-[2.5rem] md:rounded-[3rem] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.1) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.05) 0%, transparent 70%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 md:px-16 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: d, ease }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-mint/15 rounded-pill mb-8"
            >
              <span className="w-2 h-2 bg-mint rounded-full" />
              <span className="text-mint/90 text-sm font-medium">Веб-студия полного цикла</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: d + 0.08, ease }}
              className="text-4xl md:text-6xl lg:text-7xl font-800 text-white tracking-tighter leading-[0.95]"
            >
              Создаём сайты
              <br />
              <span className="text-mint">любой</span>
              <br />
              сложности
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: d + 0.16, ease }}
              className="mt-6 text-white/60 text-lg md:text-xl max-w-[480px] leading-relaxed"
            >
              От лендингов до сложных веб-приложений. Превращаем идеи в цифровые продукты, которые работают на ваш бизнес.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: d + 0.24, ease }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-mint text-forest rounded-pill text-[15px] font-bold hover:brightness-110 transition-[filter] duration-200 active:scale-[0.98]"
              >
                Обсудить проект
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-pill text-[15px] font-medium hover:bg-white/5 transition-colors duration-200"
              >
                Смотреть работы
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: d + 0.1, ease }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="bg-white/10 rounded-[2rem] p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="ml-4 h-7 flex-1 bg-white/5 rounded-pill px-3 flex items-center">
                    <span className="text-white/30 text-xs font-mono">yoursite.uz</span>
                  </div>
                </div>
                <div className="bg-forest-light rounded-[1.5rem] p-6 space-y-4">
                  <div className="h-8 w-1/3 bg-mint/20 rounded-xl" />
                  <div className="h-4 w-full bg-white/10 rounded-lg" />
                  <div className="h-4 w-4/5 bg-white/10 rounded-lg" />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="h-20 bg-mint/10 rounded-xl" />
                    <div className="h-20 bg-mint/10 rounded-xl" />
                    <div className="h-20 bg-mint/10 rounded-xl" />
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 flex-1 bg-mint rounded-xl" />
                    <div className="h-10 w-10 bg-white/10 rounded-xl" />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: d + 0.5, ease }}
                className="absolute -bottom-6 -left-8 bg-forest-light border border-white/10 rounded-[1.5rem] p-4 pr-6 shadow-lg shadow-black/15 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-mint/15 rounded-xl flex items-center justify-center">
                  <span className="text-mint font-bold text-sm">+</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Новая заявка</p>
                  <p className="text-white/50 text-xs">с вашего сайта</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: d + 0.65, ease }}
                className="absolute -top-4 -right-6 bg-forest-light border border-white/10 rounded-[1.25rem] p-3 px-4 shadow-lg shadow-black/15"
              >
                <p className="text-xs text-white/50 font-medium">PageSpeed</p>
                <p className="text-white font-bold text-xl tracking-[0.5px]">98<span className="text-mint ml-[2px]">/100</span></p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 0.8, duration: 0.5 }}
        className="absolute bottom-12 right-8 md:right-12 z-20 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors duration-200"
      >
        <ArrowDown size={18} className="text-forest/60" />
      </motion.a>
    </section>
  )
}
