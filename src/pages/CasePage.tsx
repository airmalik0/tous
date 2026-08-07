import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from '@phosphor-icons/react'
import { PageHero } from '../components/PageHero'
import { CtaBand } from '../components/CtaBand'
import { ScrollReveal } from '../components/ScrollReveal'
import { useProjectTags } from '../hooks/useProjectTags'
import { Seo } from '../components/Seo'
import { seoFor } from '../content/seo'
import { NotFound } from './NotFound'
import { useT } from '../i18n'
import { nextProject, projectBySlug } from '../content/projects'

export function CasePage() {
  const { slug } = useParams()
  const { t, locale, href } = useT()
  const tags = useProjectTags()
  const project = projectBySlug(slug)

  if (!project) return <NotFound />

  const copy = project.copy[locale]
  const next = nextProject(project.slug)
  const external = project.url.startsWith('http')

  return (
    <>
      <Seo {...seoFor(`/portfolio/${project.slug}`, locale)} />

      <PageHero
        badge={tags[project.tag]}
        title1={project.brand}
        lead={copy.summary}
        crumbs={[{ label: t.navPortfolio, to: href('/portfolio') }, { label: project.brand }]}
      />

      {/* Обложка */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            {/* Иллюстрации квадратные. Широкая полоса срезала бы объект,
                а вписывание в неё оставляло видимый шов между фоном картинки
                и подложкой — поэтому кадр повторяет пропорции исходника. */}
            <div className="mx-auto w-full max-w-[600px] aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
              <img
                src={`/portfolio-illust/${project.slug}.jpg`}
                alt={project.brand}
                className="w-full h-full object-cover"
                decoding="async"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Мета и ссылка на проект */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            <ScrollReveal>
              <div className="h-full bg-cream rounded-[1.75rem] p-6 md:p-7">
                <p className="text-muted text-xs uppercase tracking-wide font-semibold">{t.caseIndustry}</p>
                <p className="mt-2 font-display font-800 text-xl tracking-tight text-forest">
                  {tags[project.tag]}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className="h-full bg-cream rounded-[1.75rem] p-6 md:p-7">
                <p className="text-muted text-xs uppercase tracking-wide font-semibold">{t.caseFormat}</p>
                <p className="mt-2 font-display font-800 text-xl tracking-tight text-forest">{copy.format}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full flex items-center justify-between gap-4 bg-forest rounded-[1.75rem] p-6 md:p-7 no-underline"
              >
                <span className="font-display font-800 text-xl tracking-tight text-mint">
                  {t.caseLiveSite}
                </span>
                <span className="w-10 h-10 shrink-0 rounded-full bg-mint/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight size={18} weight="bold" className="text-mint" />
                </span>
              </a>
            </ScrollReveal>
          </div>
          {!external && (
            <p className="mt-4 text-muted text-xs">
              {locale === 'uz' ? 'Demo-sahifa yangi oynada ochiladi.' : 'Демо-страница откроется в новой вкладке.'}
            </p>
          )}
        </div>
      </section>

      {/* Задача и решение */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-5">
          <ScrollReveal>
            <div className="h-full bg-white border border-dark/5 rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-800 tracking-tight text-dark mb-5">
                {t.caseTaskTitle}
              </h2>
              <p className="text-muted text-lg leading-relaxed">{copy.task}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="h-full bg-white border border-dark/5 rounded-[2rem] p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-800 tracking-tight text-dark mb-5">
                {t.caseSolutionTitle}
              </h2>
              <p className="text-muted text-lg leading-relaxed">{copy.solution}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ключевые решения */}
      <section className="py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative overflow-hidden bg-forest rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14">
            <div
              className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(61,255,162,0.09) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <ScrollReveal>
                <h2 className="text-2xl md:text-4xl font-800 tracking-tighter text-white mb-9">
                  {t.caseFeaturesTitle}
                </h2>
              </ScrollReveal>
              <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5 list-none p-0 m-0">
                {copy.features.map((f, i) => (
                  <ScrollReveal key={f} delay={i * 0.06}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-mint/15 flex items-center justify-center">
                        <Check size={13} weight="bold" className="text-mint" />
                      </span>
                      <span className="text-white/80 text-lg leading-snug">{f}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Следующий проект */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <Link
              to={href(`/portfolio/${next.slug}`)}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-cream rounded-[2rem] p-8 md:p-10 no-underline"
            >
              <div>
                <p className="text-muted text-sm">{t.caseNext}</p>
                <p className="mt-1.5 font-display font-800 text-2xl md:text-3xl tracking-tight text-dark">
                  {next.brand}
                </p>
                <p className="mt-1 text-muted text-sm">{next.copy[locale].summary}</p>
              </div>
              <span className="w-12 h-12 shrink-0 rounded-full bg-forest flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={20} weight="bold" className="text-mint" />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand title={`${t.contactTitle1} ${t.contactTitle2.toLowerCase()}`} lead={t.contactLead} />
    </>
  )
}
