import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { PaperPlaneTilt, Phone, CheckCircle, CircleNotch } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN
const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID

export function Contact() {
  const [contact, setContact] = useState('')
  const [description, setDescription] = useState('')
  const [callTime, setCallTime] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contact.trim() || status === 'sending') return

    setStatus('sending')

    const lines = [
      '📩 Новая заявка с сайта imbim.online',
      '',
      `📱 Контакт: ${contact}`,
    ]
    if (description.trim()) {
      lines.push('', `📝 Описание проекта:`, description)
    }
    if (callTime.trim()) {
      lines.push('', `🕐 Удобное время: ${callTime}`)
    }

    try {
      const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: lines.join('\n'),
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setContact('')
        setDescription('')
        setCallTime('')
        window.fbq?.('track', 'Lead')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.08) 0%, transparent 70%)' }} />
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.05) 0%, transparent 70%)' }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center px-4 py-2 bg-mint/15 rounded-pill text-mint text-sm font-medium mb-8">
                  Оставьте заявку
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-white mb-6">
                  Давайте создадим
                  <br />
                  <span className="text-mint">что-то крутое</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-[480px] mb-8">
                  Оставьте контакт — мы свяжемся, обсудим проект и предложим решение.
                </p>

                <a
                  href="tel:+998901359666"
                  className="inline-flex items-center gap-3 text-white/40 hover:text-white/60 transition-colors"
                >
                  <Phone size={20} weight="fill" />
                  <span className="text-sm">+998 90 135 96 66</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal delay={0.15}>
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center min-h-[380px] text-center"
                  >
                    <div className="w-16 h-16 bg-mint/15 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={32} weight="fill" className="text-mint" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Заявка отправлена!</h3>
                    <p className="text-white/40 text-sm">Мы свяжемся с вами в ближайшее время</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-5"
                  >
                    {/* Contact — required */}
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">
                        Телефон или Telegram *
                      </label>
                      <input
                        type="text"
                        value={contact}
                        onChange={e => setContact(e.target.value)}
                        placeholder="+998... или @username"
                        required
                        className="w-full bg-white/8 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/25 transition-colors text-base"
                      />
                    </div>

                    {/* Description — optional */}
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">
                        Описание проекта <span className="text-white/25">— необязательно</span>
                      </label>
                      <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Расскажите коротко о вашем проекте..."
                        rows={3}
                        className="w-full bg-white/8 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/25 transition-colors text-base resize-none"
                      />
                    </div>

                    {/* Call time — optional */}
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">
                        Когда удобно позвонить <span className="text-white/25">— необязательно</span>
                      </label>
                      <input
                        type="text"
                        value={callTime}
                        onChange={e => setCallTime(e.target.value)}
                        placeholder="Например: после 15:00"
                        className="w-full bg-white/8 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/25 transition-colors text-base"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending' || !contact.trim()}
                      className="mt-2 w-full bg-mint text-forest font-bold text-lg rounded-xl px-5 py-4 flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === 'sending' ? (
                        <>
                          <CircleNotch size={22} className="animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt size={22} weight="fill" />
                          Отправить заявку
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-400 text-sm text-center">
                        Ошибка отправки. Попробуйте позже или позвоните нам.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
