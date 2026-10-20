'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { academicBranch, githubReposUrl, workBranch } from '@/lib/data'
import { Icon } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { Chip, SectionHeading, cardKicker } from '../ui'

type View = 'academic' | 'work'

// Recorte de cada panel: visible deja respirar sombras; oculto se cierra hacia el tronco.
const clips: Record<View, Record<'shown' | 'hidden', string>> = {
  academic: { shown: 'inset(-24px -40px -48px -40px)', hidden: 'inset(-24px calc(100% + 40px) -48px -40px)' },
  work: { shown: 'inset(-24px -40px -48px -40px)', hidden: 'inset(-24px -40px -48px calc(100% + 40px))' },
}

const cardClass =
  'min-w-0 flex-1 rounded-2xl border border-line bg-paper/92 p-5 shadow-[0_18px_44px_color-mix(in_srgb,var(--ink)_7%,transparent)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_38%,var(--line))] sm:p-6 dark:bg-[rgba(17,17,17,.92)]'

// Rama que une una tarjeta con el tronco: línea + nudo.
function Branch({ side }: { side: View }) {
  const line = <span className="h-0.5 w-[calc(var(--trunk)/2+4px)] bg-accent/45" />
  const knot = <span className="size-4 shrink-0 rounded-full border-[3px] border-accent bg-paper shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_16%,transparent)]" />
  return (
    <span className="mt-9 flex shrink-0 items-center" aria-hidden="true">
      {side === 'academic' ? <>{line}{knot}</> : <>{knot}{line}</>}
    </span>
  )
}

function Tree({ view, onToggle, label }: { view: View; onToggle: () => void; label: string }) {
  return (
    <div
      className="journey-tree absolute top-0 bottom-0 z-[2] w-[var(--trunk)]"
      style={{ left: view === 'academic' ? 'calc(100% - var(--trunk))' : '0px' }}
      aria-hidden="true"
    >
      {/* Tronco: más grueso y saturado hacia las raíces */}
      <span className="absolute top-10 bottom-10 left-1/2 w-[5px] -translate-x-1/2 rounded-full bg-linear-to-b from-accent/30 via-accent/70 to-accent" />
      {/* Copa: también funciona como botón */}
      <button
        type="button"
        tabIndex={-1}
        onClick={onToggle}
        title={label}
        className="absolute top-0 left-1/2 grid size-11 -translate-x-1/2 cursor-pointer place-items-center rounded-full bg-accent text-on-accent shadow-[0_10px_26px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-transform duration-300 hover:scale-110"
      >
        <svg viewBox="0 0 60 60" className="pointer-events-none absolute -inset-4 size-[76px] fill-accent/25">
          <path className="journey-leaf" d="M14 22c-6-2-9-8-8-14 7 0 12 4 13 10Z" />
          <path className="journey-leaf [animation-delay:-2s]" d="M46 22c6-2 9-8 8-14-7 0-12 4-13 10Z" />
          <path className="journey-leaf [animation-delay:-1s]" d="M30 6c-3-3-3-6 0-6 3 0 3 3 0 6Z" />
        </svg>
        <Icon name={view === 'academic' ? 'previous' : 'next'} className="relative size-5 stroke-[2.4]" />
      </button>
      {/* Raíces */}
      <svg viewBox="0 0 60 40" className="absolute bottom-0 left-1/2 h-10 w-[60px] -translate-x-1/2 fill-none stroke-accent stroke-[2.5] [stroke-linecap:round]">
        <path d="M30 0v22M30 14c-4 8-12 12-22 14M30 14c4 8 12 12 22 14M30 22c-2 7-6 11-12 14M30 22c2 7 6 11 12 14" />
      </svg>
    </div>
  )
}

export function Journey() {
  const { t } = useLanguage()
  const [view, setView] = useState<View>('academic')
  const [heights, setHeights] = useState<Record<View, number> | null>(null)
  const academicPanel = useRef<HTMLDivElement>(null)
  const workPanel = useRef<HTMLDivElement>(null)
  const academicButton = useRef<HTMLButtonElement>(null)
  const workButton = useRef<HTMLButtonElement>(null)
  const toggled = useRef(false)

  // La altura del escenario sigue al panel desplegado para animar el cambio.
  useEffect(() => {
    const academic = academicPanel.current
    const work = workPanel.current
    if (!academic || !work) return
    const observer = new ResizeObserver(() => setHeights({ academic: academic.offsetHeight, work: work.offsetHeight }))
    observer.observe(academic)
    observer.observe(work)
    return () => observer.disconnect()
  }, [])

  // Tras cambiar de rama, el foco pasa al botón del panel recién desplegado.
  useEffect(() => {
    if (!toggled.current) return
    const target = view === 'academic' ? academicButton.current : workButton.current
    target?.focus({ preventScroll: true })
  }, [view])

  const toggle = () => {
    toggled.current = true
    setView((current) => (current === 'academic' ? 'work' : 'academic'))
  }

  const panelProps = (side: View) => {
    const active = view === side
    return {
      id: `journey-${side}`,
      inert: !active,
      'aria-hidden': !active,
      className: `journey-panel ${active ? 'relative' : 'pointer-events-none absolute inset-x-0 top-0'} ${
        side === 'academic' ? 'mr-[calc(var(--trunk)/2-8px)]' : 'ml-[calc(var(--trunk)/2-8px)]'
      }`,
      style: { clipPath: clips[side][active ? 'shown' : 'hidden'] },
    }
  }

  const toggleButtonClass =
    'inline-flex cursor-pointer items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-paper transition hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent'
  const panelTitleClass = 'flex items-center gap-2.5 font-head text-xl font-extrabold tracking-[-.04em] sm:text-2xl'
  const branchPadding = 'calc(var(--trunk)/2 + 20px)'

  return (
    <section id="trayectoria" className="bg-accent-soft py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} intro={t.journey.intro} />

        <div className="reveal">
          <div
            className="journey-stage relative transition-[height] duration-[900ms] ease-[cubic-bezier(.65,0,.35,1)]"
            style={heights ? { height: heights[view] } : undefined}
          >
            <Tree view={view} onToggle={toggle} label={view === 'academic' ? t.journey.showWork : t.journey.showAcademic} />

            {/* Rama académica: a la izquierda del árbol */}
            <div ref={academicPanel} {...panelProps('academic')}>
              <div className="mb-7 flex min-h-11 flex-wrap items-center justify-between gap-3" style={{ paddingRight: branchPadding }}>
                <h3 className={panelTitleClass}>
                  <Icon name="book" className="size-6 text-accent" />
                  {t.journey.academic}
                </h3>
                <button ref={academicButton} type="button" className={toggleButtonClass} onClick={toggle} aria-controls="journey-work">
                  {t.journey.showWork}
                  <Icon name="next" className="size-4" />
                </button>
              </div>
              <ol className="grid gap-5 pb-12">
                {t.journey.academicItems.map((item, index) => {
                  const { logo, certificate } = academicBranch[index]
                  return (
                    <li key={item.title} className="flex items-start">
                      <article className={`${cardClass} flex items-start gap-4 sm:gap-5`}>
                        {logo && (
                          <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-[#e8e8e8] sm:size-[76px]">
                            <Image src={logo} alt={t.journey.logoAlt} className="size-full object-contain" sizes="76px" />
                          </div>
                        )}
                        {certificate && (
                          <a
                            href={certificate.src}
                            target="_blank"
                            rel="noopener"
                            className="group/cert relative size-16 shrink-0 overflow-hidden rounded-xl border border-line bg-white sm:size-[76px]"
                            aria-label={`${t.journey.viewCertificate}: ${item.title}`}
                          >
                            <Image src={certificate} alt="" className="size-full object-cover transition-transform duration-300 group-hover/cert:scale-110" sizes="76px" />
                          </a>
                        )}
                        <div className="min-w-0">
                          <p className={cardKicker}>{item.kicker}</p>
                          <h4 className="mb-1.5 font-head text-lg leading-tight font-bold tracking-[-.035em] sm:text-[21px]">{item.title}</h4>
                          <p className="text-sm leading-[1.5] text-muted">{item.place}</p>
                          {item.detail && <p className="mt-1 text-xs text-muted">{item.detail}</p>}
                          {certificate && (
                            <a className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold text-accent" href={certificate.src} target="_blank" rel="noopener">
                              {t.journey.viewCertificate}
                              <Icon name="external" className="size-[13px]" />
                            </a>
                          )}
                        </div>
                      </article>
                      <Branch side="academic" />
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Rama laboral: a la derecha del árbol */}
            <div ref={workPanel} {...panelProps('work')}>
              <div className="mb-7 flex min-h-11 flex-wrap-reverse items-center justify-between gap-3" style={{ paddingLeft: branchPadding }}>
                <button ref={workButton} type="button" className={toggleButtonClass} onClick={toggle} aria-controls="journey-academic">
                  <Icon name="previous" className="size-4" />
                  {t.journey.showAcademic}
                </button>
                <h3 className={panelTitleClass}>
                  <Icon name="github" className="size-6 text-accent" />
                  {t.journey.work}
                </h3>
              </div>
              <ol className="grid gap-5 pb-12">
                {t.journey.workItems.map((item, index) => {
                  const { collaboration, tags, links } = workBranch[index]
                  return (
                    <li key={item.title} className="flex items-start">
                      <Branch side="work" />
                      <article className={cardClass}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className={`${cardKicker} mb-0`}>{item.kicker}</p>
                          {collaboration && (
                            <span className="rounded-full bg-accent px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-on-accent">
                              {t.journey.collaboration}
                            </span>
                          )}
                        </div>
                        <h4 className="mt-2 mb-1.5 font-head text-lg leading-tight font-bold tracking-[-.035em] sm:text-[21px]">{item.title}</h4>
                        <p className="mb-2.5 text-sm font-semibold">
                          {item.role} <span className="font-normal text-muted">· {item.place}</span>
                        </p>
                        <p className="text-sm leading-[1.6] text-muted">{item.detail}</p>
                        <div className="mt-3.5 flex flex-wrap gap-2">
                          {tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-x-[18px] gap-y-2">
                          {links.map((link) => {
                            const external = !link.href.startsWith('#')
                            return (
                              <a
                                key={link.href}
                                className="inline-flex items-center gap-[7px] text-xs font-extrabold text-accent"
                                href={link.href}
                                {...(external ? { target: '_blank', rel: 'noopener' } : {})}
                              >
                                <span>{link.text ?? t.projects.links[link.label!]}</span>
                                <Icon name={external ? 'external' : 'arrow'} className="size-[13px]" />
                              </a>
                            )
                          })}
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>

        <a className="reveal mx-auto mt-6 flex w-fit items-center gap-3 border-b border-ink pb-[5px] text-xs font-extrabold" href={githubReposUrl} target="_blank" rel="noopener">
          <span>{t.journey.allRepos}</span>
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}
