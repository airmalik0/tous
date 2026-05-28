import { useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { PaperPlaneTilt, Phone, CircleNotch } from '@phosphor-icons/react'
import { useT } from '../i18n'

const BOT_TOKEN = '8324034030:AAGRPx6LQxINwGPnWXrz9tlJx78G9JAAWjc'
const CHAT_ID = '531955649'

export function Contact() {
  const { t, locale } = useT()
  const [contact, setContact] = useState('')
  const [description, setDescription] = useState('')
  const [callTime, setCallTime] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contact.trim() || status === 'sending') return

    setStatus('sending')

    const lines = [
      t.tgNewLead,
      '',
      `🌐 ${locale.toUpperCase()}`,
      `${t.tgContact}: ${contact}`,
    ]
    if (description.trim()) {
      lines.push('', `${t.tgDescription}:`, description)
    }
    if (callTime.trim()) {
      lines.push('', `${t.tgTime}: ${callTime}`)
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
        window.fbq?.('track', 'Lead')
        window.location.href = '/thank-you/'
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
                  {t.contactBadge}
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-white mb-6">
                  {t.contactTitle1}
                  <br />
                  <span className="text-mint">{t.contactTitle2}</span>
                </h2>
                <p className="text-white/50 text-lg leading-relaxed max-w-[480px] mb-8">
                  {t.contactLead}
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
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-5"
              >
                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    {t.contactLabel}
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    placeholder={t.contactPlaceholder}
                    required
                    className="w-full bg-white/8 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/25 transition-colors text-base"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    {t.contactDescLabel} <span className="text-white/25">{t.contactDescOptional}</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder={t.contactDescPlaceholder}
                    rows={3}
                    className="w-full bg-white/8 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/25 transition-colors text-base resize-none"
                  />
                </div>

                <div>
                  <label className="text-white/60 text-sm mb-2 block">
                    {t.contactTimeLabel} <span className="text-white/25">{t.contactTimeOptional}</span>
                  </label>
                  <input
                    type="text"
                    value={callTime}
                    onChange={e => setCallTime(e.target.value)}
                    placeholder={t.contactTimePlaceholder}
                    className="w-full bg-white/8 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/25 outline-none focus:border-mint/50 focus:ring-1 focus:ring-mint/25 transition-colors text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || !contact.trim()}
                  className="mt-2 w-full bg-mint text-forest font-bold text-lg rounded-xl px-5 py-4 flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <CircleNotch size={22} className="animate-spin" />
                      {t.contactSending}
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={22} weight="fill" />
                      {t.contactSubmit}
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    {t.contactErrorMsg}
                  </p>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
