import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { useT } from '../i18n'
import { offer, privacy } from '../content/legal'

type Props = {
  doc: 'privacy' | 'offer'
}

export function Legal({ doc }: Props) {
  const { t, locale } = useT()
  const data = doc === 'privacy' ? privacy[locale] : offer[locale]
  const title = doc === 'privacy' ? t.privacyTitle : t.offerTitle

  return (
    <>
      <Seo title={`${title} | imbim`} description={data.intro.slice(0, 180)} />

      <PageHero badge={t.footerLegal} title1={title} crumbs={[{ label: title }]} />

      <section className="pb-20 md:pb-28">
        {/* Контейнер как у шапки страницы, текст ограничен по длине строки. */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 [&>*]:max-w-[70ch]">
          <p className="text-muted text-sm">
            {t.legalUpdated}: {data.updated}
          </p>
          <p className="mt-6 text-dark/75 text-lg leading-relaxed">{data.intro}</p>

          {data.sections.map(section => (
            <div key={section.heading} className="mt-10">
              <h2 className="text-xl md:text-2xl font-800 tracking-tight text-dark">{section.heading}</h2>
              {section.paragraphs?.map(p => (
                <p key={p} className="mt-4 text-muted leading-relaxed">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 flex flex-col gap-2.5 list-none p-0">
                  {section.list.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-forest/40" />
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
