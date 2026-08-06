import { ScrollReveal } from './ScrollReveal'
import { useT } from '../i18n'

type RoleKey = 'designer' | 'project' | 'developer' | 'marketing'

type Member = {
  slug: string
  name: string
  role: RoleKey
}

const members: Member[] = [
  { slug: 'ibrahim', name: 'Ибрахим', role: 'designer' },
  { slug: 'artemy', name: 'Артемий', role: 'project' },
  { slug: 'ilkhom', name: 'Ильхом', role: 'developer' },
  { slug: 'andrei', name: 'Андрей', role: 'developer' },
  { slug: 'samir', name: 'Самир', role: 'developer' },
  { slug: 'madina', name: 'Мадина', role: 'marketing' },
]

export function Team() {
  const { t } = useT()

  const roles: Record<RoleKey, string> = {
    designer: t.roleDesigner,
    project: t.roleProject,
    developer: t.roleDeveloper,
    marketing: t.roleMarketing,
  }

  return (
    <section id="team" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.08) 0%, transparent 70%)' }} />

          <ScrollReveal>
            <div className="relative z-10 mb-12 md:mb-16">
              <span className="inline-flex items-center px-4 py-2 bg-mint/15 rounded-pill text-mint text-sm font-medium mb-6">
                {t.teamBadge}
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-800 tracking-tighter text-white">
                {t.teamTitle1}
                <br />
                <span className="text-mint">{t.teamTitle2}</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative z-10 grid grid-cols-12 gap-5">
            {members.map((m, i) => (
              <ScrollReveal
                key={m.slug}
                delay={i * 0.08}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="group relative rounded-[1.75rem] overflow-hidden bg-white/5 border border-white/10 h-full transition-transform duration-300 hover:scale-[1.01]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={`/team/${m.slug}.jpg`}
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />

                    <span className="absolute top-4 left-4 inline-flex px-3 py-1.5 rounded-pill text-xs font-medium bg-mint/15 text-mint backdrop-blur-sm">
                      {roles[m.role]}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className="text-white text-xl md:text-2xl font-800 tracking-tight">
                        {m.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
