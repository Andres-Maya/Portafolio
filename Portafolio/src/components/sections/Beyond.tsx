'use client'

import Image, { type StaticImageData } from 'next/image'
import { bandInstagrams, bookSearchUrl, books, estadoLarvalLogo, extraCertificates, instagramQr, instagramUrl, nuPolarisLogo, picnicFest, rekiemLogo, uccLogo } from '@/lib/data'
import { Carousel } from '../Carousel'
import { Icon, type IconName } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { Chip, Eyebrow, SectionHeading, cardKicker } from '../ui'

const cardClass =
  'reveal rounded-[18px] border border-[color-mix(in_srgb,var(--accent)_25%,var(--line))] bg-paper/90 p-6 shadow-[0_22px_55px_color-mix(in_srgb,var(--ink)_8%,transparent)] sm:p-8 lg:p-9 dark:bg-[rgba(17,17,17,.9)]'

function CardTitle({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <h3 className="mb-4 flex items-center gap-3 font-head text-[22px] font-bold tracking-[-.04em] sm:text-2xl">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent dark:bg-accent/15">
        <Icon name={icon} className="size-5" />
      </span>
      {children}
    </h3>
  )
}

const markClass = 'grid size-[70px] shrink-0 place-items-center overflow-hidden rounded-xl border border-line sm:size-[84px] sm:rounded-2xl'

// Con `link`, la fila completa abre un enlace externo (por ejemplo, el Instagram de una banda).
function ExperienceRow({ mark, kicker, title, place, detail, link }: { mark: React.ReactNode; kicker: string; title: string; place: string; detail: string; link?: { href: string; label: string } }) {
  const className =
    'grid grid-cols-[70px_1fr] items-center gap-[17px] rounded-2xl border border-line bg-cream/60 p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_38%,var(--line))] hover:shadow-[0_20px_44px_color-mix(in_srgb,var(--ink)_9%,transparent)] sm:grid-cols-[84px_1fr] sm:gap-5 sm:p-5 dark:bg-white/[.02]'
  const content = (
    <>
      {mark}
      <div className="min-w-0">
        <p className={cardKicker}>{kicker}</p>
        <h4 className="mb-1.5 font-head text-lg leading-[1.18] font-bold tracking-[-.035em]">{title}</h4>
        <p className="mb-1 text-sm leading-[1.45] text-muted">{place}</p>
        <span className="text-xs leading-[1.45] text-muted">{detail}</span>
        {link && (
          <span className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-accent">
            <Icon name="instagram" className="size-3.5" />
            Instagram
            <Icon name="external" className="size-3" />
          </span>
        )}
      </div>
    </>
  )

  return link ? (
    <a className={className} href={link.href} target="_blank" rel="noopener" aria-label={link.label}>
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  )
}

function CertificateCard({ year, images, title, issuer }: { year: string; images: StaticImageData[]; title: string; issuer: string }) {
  const { t } = useLanguage()
  const copy = t.beyond.credentials
  const gallery = images.length > 1

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_16px_40px_rgba(22,32,28,.06)] transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_42%,var(--line))] dark:bg-[rgba(17,17,17,.9)] dark:shadow-[0_16px_40px_rgba(0,0,0,.2)]">
      <div className={`grid h-[190px] overflow-hidden xs:h-[220px] md:h-[260px] ${gallery ? 'grid-cols-3 gap-px bg-line' : 'grid-cols-1 bg-white'}`}>
        {images.map((image, index) => {
          const suffix = gallery ? `, ${copy.document} ${index + 1}` : ''
          return (
            <a
              key={image.src}
              className="group/cert relative block h-full min-w-0 overflow-hidden bg-white after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,14,20,.7),transparent_48%)] after:opacity-0 after:transition-opacity hover:after:opacity-100"
              href={image.src}
              target="_blank"
              rel="noopener"
              aria-label={`${copy.open} ${title}${suffix}`}
            >
              <Image src={image} alt={`${title}${suffix}`} className="size-full object-cover transition-transform duration-[350ms] group-hover/cert:scale-[1.035]" sizes={gallery ? '200px' : '600px'} />
              <span className="absolute bottom-4 left-[18px] z-[1] flex translate-y-2 items-center gap-2 text-[11px] font-bold text-white opacity-0 transition-[opacity,transform] group-hover/cert:translate-y-0 group-hover/cert:opacity-100">
                <span>{gallery ? `${copy.viewDocument} ${index + 1}` : copy.viewCertificate}</span>
                <Icon name="external" className="size-3.5" />
              </span>
            </a>
          )
        })}
      </div>
      <div className="px-4 pt-3.5 pb-4 xs:px-5 xs:pt-4 xs:pb-[18px]">
        <span className="font-head text-[11px] font-extrabold text-accent">{year}</span>
        <h3 className="mt-1.5 mb-[7px] font-head text-[17px] leading-tight font-bold tracking-[-.035em]">{title}</h3>
        <p className="text-[11px] leading-[1.55] text-muted">{issuer}</p>
      </div>
    </article>
  )
}

export function Beyond() {
  const { t } = useLanguage()
  const { music, art, reading, sports, pets, languages, experience, credentials } = t.beyond

  const experienceMarks = [
    <div key="aj" className={`${markClass} border-0 bg-accent font-head text-2xl font-extrabold tracking-[-.04em] text-on-accent`} aria-hidden="true">AJ</div>,
    <div key="ucc-1" className={`${markClass} bg-white`}><Image src={uccLogo} alt={experience.logoAlt} className="size-full object-contain" sizes="84px" /></div>,
    <div key="ucc-2" className={`${markClass} bg-white`}><Image src={uccLogo} alt={experience.logoAlt} className="size-full object-contain" sizes="84px" /></div>,
  ]
  const bandMarks = [
    <div key="rekiem" className={`${markClass} bg-white`}><Image src={rekiemLogo} alt={music.bands[0].alt} className="size-full object-contain p-2.5" sizes="84px" /></div>,
    <div key="larval" className={`${markClass} bg-black`}><Image src={estadoLarvalLogo} alt={music.bands[1].alt} className="size-full object-contain p-2.5" sizes="84px" /></div>,
    <div key="nupolaris" className={`${markClass} bg-black`}><Image src={nuPolarisLogo} alt={music.bands[2].alt} className="size-full object-cover" sizes="84px" /></div>,
  ]

  return (
    <section id="mas-de-mi" className="bg-cream py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={t.beyond.eyebrow} title={t.beyond.title} intro={t.beyond.intro} />

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Música */}
          <article className={`${cardClass} lg:col-span-2`}>
            <CardTitle icon="music">{music.title}</CardTitle>
            {music.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mb-3 leading-[1.72] text-muted">{paragraph}</p>
            ))}
            <div className="mt-5 mb-7 flex flex-wrap gap-2">
              {music.skills.map((skill) => <Chip key={skill} strong>{skill}</Chip>)}
            </div>
            <p className={cardKicker}>{music.bandsTitle}</p>
            <div className="mt-3 grid gap-3.5 md:grid-cols-2">
              {music.bands.map((band, index) => (
                <ExperienceRow
                  key={band.title}
                  mark={bandMarks[index]}
                  kicker={music.title}
                  title={band.title}
                  place={band.place}
                  detail={band.detail}
                  link={{ href: bandInstagrams[index], label: `${music.bandInstagram} ${band.place}` }}
                />
              ))}
            </div>
            {/* Diploma del primer puesto */}
            <a
              className="group/award mt-5 grid items-center gap-4 rounded-2xl border border-dashed border-accent/50 p-4 transition-colors hover:bg-accent-soft sm:grid-cols-[220px_1fr] sm:gap-6 dark:hover:bg-accent/10"
              href={picnicFest.src}
              target="_blank"
              rel="noopener"
            >
              <span className="block overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_28px_color-mix(in_srgb,var(--ink)_14%,transparent)]">
                <Image src={picnicFest} alt={music.awardAlt} className="h-auto w-full transition-transform duration-300 group-hover/award:scale-[1.03]" sizes="(max-width: 560px) 90vw, 220px" />
              </span>
              <span className="min-w-0">
                <span className={`${cardKicker} flex items-center gap-2`}>
                  <Icon name="award" className="size-4" />
                  {music.awardKicker}
                </span>
                <strong className="block font-head text-lg leading-snug tracking-[-.03em]">{music.award}</strong>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold text-accent">
                  {music.awardView}
                  <Icon name="external" className="size-[13px]" />
                </span>
              </span>
            </a>
          </article>

          {/* Columna junto a Música: escritura y dibujo, deportes, mascotas e idiomas */}
          <div className="flex flex-col gap-5">
            <article className={cardClass}>
              <CardTitle icon="pen">{art.title}</CardTitle>
              <p className="mb-5 leading-[1.72] text-muted">{art.text}</p>
              <div className="flex items-center gap-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener"
                  className="block w-[108px] shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_14px_34px_color-mix(in_srgb,var(--ink)_12%,transparent)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image src={instagramQr} alt={art.qrAlt} className="h-auto w-full" sizes="108px" placeholder="blur" />
                </a>
                <div className="min-w-0">
                  <p className="text-xs leading-[1.6] text-muted">{art.instagram}</p>
                  <a className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-accent" href={instagramUrl} target="_blank" rel="noopener">
                    <Icon name="instagram" className="size-4" />
                    @andresmayk_999
                  </a>
                </div>
              </div>
            </article>
            <article className={cardClass}>
              <CardTitle icon="ball">{sports.title}</CardTitle>
              <p className="leading-[1.72] text-muted">{sports.text}</p>
            </article>
            <article className={cardClass}>
              <CardTitle icon="paw">{pets.title}</CardTitle>
              <p className="leading-[1.72] text-muted">{pets.text}</p>
              <a className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-accent" href={instagramUrl} target="_blank" rel="noopener">
                <Icon name="instagram" className="size-4" />
                @andresmayk_999
              </a>
            </article>
            <article className={cardClass}>
              <CardTitle icon="globe">{languages.title}</CardTitle>
              <div className="grid gap-2.5">
                {languages.items.map(([language, level]) => (
                  <div key={language} className="flex items-center justify-between gap-5 rounded-[7px] bg-cream px-[15px] py-[13px] dark:bg-white/5">
                    <span className="text-xs font-semibold text-muted">{language}</span>
                    <strong className="font-head text-[13px] text-accent">{level}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Lectura: texto a un lado y portadas al otro para no alargar la sección */}
          <article className={`${cardClass} grid items-center gap-6 lg:col-span-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12`}>
            <div>
              <CardTitle icon="book">{reading.title}</CardTitle>
              <p className="mb-6 leading-[1.72] text-muted">{reading.text}</p>
              <p className={`${cardKicker} mb-0`}>{reading.favorites}</p>
            </div>
            <div className="grid max-w-[560px] grid-cols-3 gap-3 sm:gap-6 lg:justify-self-end">
              {reading.books.map((book, index) => (
                <a key={book.author} className="group block" href={bookSearchUrl(book.title, book.author)} target="_blank" rel="noopener">
                  <figure>
                    <div className="overflow-hidden rounded-lg shadow-[0_16px_30px_color-mix(in_srgb,var(--ink)_18%,transparent)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-1">
                      <Image src={books[index]} alt={`${reading.coverAlt} ${book.title}`} className="aspect-[2/3] h-auto w-full object-cover" sizes="(max-width: 560px) 30vw, 170px" />
                    </div>
                    <figcaption className="mt-3">
                      <strong className="block font-head text-[13px] leading-tight tracking-[-.02em] group-hover:text-accent sm:text-[15px]">{book.title}</strong>
                      <span className="text-[11px] text-muted sm:text-xs">{book.author}</span>
                      <span className="mt-1.5 flex items-center gap-1 text-[11px] font-extrabold text-accent">
                        {reading.find}
                        <Icon name="external" className="size-3" />
                      </span>
                    </figcaption>
                  </figure>
                </a>
              ))}
            </div>
          </article>

          {/* Comunicación y experiencias fuera del software */}
          <article className={`${cardClass} lg:col-span-3`}>
            <CardTitle icon="mic">{experience.title}</CardTitle>
            <p className="mb-6 max-w-[620px] leading-[1.72] text-muted">{experience.intro}</p>
            <div className="grid gap-3.5 lg:grid-cols-3">
              {experience.items.map((item, index) => (
                <ExperienceRow key={item.title} mark={experienceMarks[index]} {...item} />
              ))}
            </div>
          </article>
        </div>

        {/* Certificados adicionales */}
        <div className="mt-[85px] md:mt-[110px]">
          <div className="reveal mx-auto mb-[38px] max-w-[720px] text-center md:mb-[52px]">
            <Eyebrow center>{credentials.eyebrow}</Eyebrow>
            <h2 className="mb-4 font-head text-[clamp(36px,5vw,56px)] font-bold tracking-[-.05em]">{credentials.title}</h2>
            <p className="text-[15px] leading-[1.7] text-muted">{credentials.intro}</p>
          </div>
          <Carousel name="certificates" width="600px">
            {extraCertificates.map((certificate, index) => (
              <CertificateCard key={certificate.year} {...certificate} {...credentials.items[index]} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
