'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { academicBranch, githubReposUrl, workBranch } from '@/lib/data'
import { Icon } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { Chip, SectionHeading, cardKicker } from '../ui'

type View = 'academic' | 'work'

// Recorte de cada panel: visible deja respirar sombras; oculto se cierra hacia la cuerda.
const clips: Record<View, Record<'shown' | 'hidden', string>> = {
  academic: { shown: 'inset(-24px -40px -48px -40px)', hidden: 'inset(-24px calc(100% + 40px) -48px -40px)' },
  work: { shown: 'inset(-24px -40px -48px -40px)', hidden: 'inset(-24px -40px -48px calc(100% + 40px))' },
}

const cardClass =
  'min-w-0 flex-1 rounded-2xl border border-line bg-paper/92 p-5 shadow-[0_18px_44px_color-mix(in_srgb,var(--ink)_7%,transparent)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_38%,var(--line))] sm:p-6 dark:bg-[rgba(17,17,17,.92)]'

// Rama que une una tarjeta con la cuerda: línea + nudo.
function Branch({ side }: { side: View }) {
  const line = <span className="h-0.5 w-[calc(var(--trunk)/2+4px)] bg-accent/45" />
  const knot = <span className="size-4 shrink-0 rounded-full border-[3px] border-accent bg-paper shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_16%,transparent)]" />
  return (
    <span className="mt-9 flex shrink-0 items-center" aria-hidden="true">
      {side === 'academic' ? <>{line}{knot}</> : <>{knot}{line}</>}
    </span>
  )
}

// Síntesis Karplus-Strong de una cuerda pulsada con el dedo; los buffers se reutilizan por nota.
let audioContext: AudioContext | null = null
const pluckBuffers = new Map<number, AudioBuffer>()

function pluckBuffer(ctx: AudioContext, frequency: number) {
  const cached = pluckBuffers.get(frequency)
  if (cached) return cached
  const length = Math.floor(ctx.sampleRate * 2.4)
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  const ring = new Float32Array(Math.round(ctx.sampleRate / frequency))
  ring.forEach((_, i) => (ring[i] = Math.random() * 2 - 1))
  // Suaviza el ruido inicial para que suene a dedo y no a púa.
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < ring.length; i++) ring[i] = (ring[i] + ring[(i + 1) % ring.length]) / 2
  }
  for (let i = 0, index = 0; i < length; i++) {
    const next = (index + 1) % ring.length
    data[i] = ring[index]
    ring[index] = 0.997 * 0.5 * (ring[index] + ring[next])
    index = next
  }
  pluckBuffers.set(frequency, buffer)
  return buffer
}

function playBassNote(frequency: number, volume = 0.55) {
  try {
    audioContext ??= new AudioContext()
    const ctx = audioContext
    if (ctx.state === 'suspended') void ctx.resume()
    const source = ctx.createBufferSource()
    source.buffer = pluckBuffer(ctx, frequency)
    const tone = ctx.createBiquadFilter()
    tone.type = 'lowpass'
    tone.frequency.value = 950
    const gain = ctx.createGain()
    gain.gain.setValueAtTime(volume, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.2)
    source.connect(tone).connect(gain).connect(ctx.destination)
    source.start()
  } catch {
    // Sin Web Audio la cuerda solo vibra.
  }
}

// Cuerdas al aire del bajo: La al ir a la experiencia laboral, Mi al volver.
const notes: Record<View, number> = { work: 55, academic: 41.2 }
const maxPull = 26

// Curva de la cuerda con su desplazamiento máximo `peak` (px) a la altura `y` (0-100).
const curve = (peak: number, y = 50) => `M12 0Q${12 + 2 * peak} ${y} 12 100`
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function BassString({ view, onToggle, label }: { view: View; onToggle: () => void; label: string }) {
  const string = useRef<SVGPathElement>(null)
  const echo = useRef<SVGPathElement>(null)
  const hitArea = useRef<HTMLSpanElement>(null)
  const previousView = useRef(view)
  const frame = useRef(0)
  const pull = useRef<{ x: number; y: number } | null>(null)

  const shape = (main: string, ghost = main) => {
    string.current?.setAttribute('d', main)
    echo.current?.setAttribute('d', ghost)
  }

  // Oscilación amortiguada; al soltarla parte del punto estirado (coseno), al cambiar de lado desde reposo (seno).
  const vibrate = (amplitude: number, y: number, fromRest: boolean) => {
    cancelAnimationFrame(frame.current)
    if (reducedMotion()) return shape(curve(0))
    const start = performance.now()
    const draw = (now: number) => {
      const t = (now - start) / 1000
      const phase = 2 * Math.PI * 13 * t
      const offset = t < 1.6 ? amplitude * Math.exp(-t / 0.45) * (fromRest ? Math.sin(phase) : Math.cos(phase)) : 0
      shape(curve(offset, y), curve(-offset, y))
      if (offset !== 0) frame.current = requestAnimationFrame(draw)
    }
    frame.current = requestAnimationFrame(draw)
  }

  // Al cambiar de lado la cuerda se pulsa: suena y vibra.
  useEffect(() => {
    if (previousView.current === view) return
    previousView.current = view
    playBassNote(notes[view])
    vibrate(6, 50, true)
  }, [view])

  useEffect(() => () => cancelAnimationFrame(frame.current), [])

  // Mantener el clic sobre la cuerda la estira hacia el puntero; al soltarla suena según la fuerza.
  const pointerPosition = (event: React.PointerEvent) => {
    const rect = hitArea.current!.getBoundingClientRect()
    const x = Math.max(-maxPull, Math.min(maxPull, event.clientX - (rect.left + rect.width / 2)))
    const y = Math.max(5, Math.min(95, ((event.clientY - rect.top) / rect.height) * 100))
    return { x, y }
  }

  const onPointerDown = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    cancelAnimationFrame(frame.current)
    pull.current = pointerPosition(event)
    shape(`M12 0L${12 + pull.current.x} ${pull.current.y}L12 100`)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (!pull.current) return
    pull.current = pointerPosition(event)
    shape(`M12 0L${12 + pull.current.x} ${pull.current.y}L12 100`)
  }

  const release = (silent = false) => {
    if (!pull.current) return
    const { x, y } = pull.current
    pull.current = null
    const strength = Math.max(Math.abs(x), 4) / maxPull
    if (!silent) playBassNote(notes[view], 0.2 + 0.45 * strength)
    vibrate(silent ? 0 : Math.sign(x || 1) * Math.max(Math.abs(x), 4), y, false)
  }

  return (
    <div
      className="journey-tree absolute top-0 bottom-0 z-[2] w-[var(--trunk)]"
      style={{ left: view === 'academic' ? 'calc(100% - var(--trunk))' : '0px' }}
    >
      {/* Cuerda: el eco opuesto dibuja la envolvente de la vibración */}
      <svg aria-hidden="true" viewBox="0 0 24 100" preserveAspectRatio="none" className="pointer-events-none absolute top-10 bottom-[26px] left-1/2 h-[calc(100%-66px)] w-6 -translate-x-1/2 overflow-visible fill-none [stroke-linecap:round] [stroke-linejoin:round]">
        <path ref={echo} d="M12 0Q12 50 12 100" className="stroke-accent/30" strokeWidth="4" vectorEffect="non-scaling-stroke" />
        <path ref={string} d="M12 0Q12 50 12 100" className="stroke-accent" strokeWidth="4" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* Zona para agarrar la cuerda; deja el scroll vertical libre en pantallas táctiles */}
      <span
        ref={hitArea}
        aria-hidden="true"
        className="absolute top-10 bottom-[26px] left-1/2 w-8 -translate-x-1/2 cursor-grab touch-pan-y active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => release()}
        onPointerCancel={() => release(true)}
      />
      {/* Clavija: también funciona como botón y gira hacia el lado que se muestra */}
      <button
        type="button"
        onClick={onToggle}
        title={label}
        aria-label={label}
        aria-controls={view === 'academic' ? 'journey-work' : 'journey-academic'}
        className="absolute top-0 left-1/2 size-11 -translate-x-1/2 cursor-pointer rounded-full transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span
          className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.65,0,.35,1)]"
          style={{ transform: `rotate(${view === 'academic' ? 180 : 0}deg)` }}
        >
          <svg aria-hidden="true" viewBox="0 0 26 18" className="absolute top-1/2 right-[calc(100%-6px)] h-[18px] w-[26px] -translate-y-1/2 fill-accent">
            <rect x="15" y="6.5" width="11" height="5" rx="1.5" />
            <rect x="0" y="0" width="18" height="18" rx="7" />
            <circle cx="9" cy="9" r="3" className="fill-accent-soft" />
          </svg>
          <span className="absolute inset-0 grid place-items-center rounded-full bg-accent text-on-accent shadow-[0_10px_26px_color-mix(in_srgb,var(--accent)_35%,transparent),0_0_0_4px_color-mix(in_srgb,var(--accent)_16%,transparent)]">
            <Icon name="previous" className="size-5 stroke-[2.4]" />
          </span>
        </span>
      </button>
      {/* Puente: silleta donde apoya la cuerda sobre la placa atornillada */}
      <svg aria-hidden="true" viewBox="0 0 60 30" className="absolute bottom-0 left-1/2 h-[30px] w-[60px] -translate-x-1/2">
        <rect x="6" y="14" width="48" height="14" rx="4" className="fill-accent/20 stroke-accent" strokeWidth="2" />
        <rect x="22" y="4" width="16" height="13" rx="3" className="fill-accent" />
        <circle cx="14" cy="21" r="2.5" className="fill-accent-soft stroke-accent" strokeWidth="1.5" />
        <circle cx="46" cy="21" r="2.5" className="fill-accent-soft stroke-accent" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

// Pista junto al título que señala la clavija; también cambia de lado al pulsarla.
function Hint({ side, onClick, children }: { side: View; onClick: () => void; children: string }) {
  const arrow = <Icon name={side === 'academic' ? 'next' : 'previous'} className="journey-hint-arrow size-3.5 shrink-0 stroke-[2.6] text-accent" />
  return (
    <span
      onClick={onClick}
      aria-hidden="true"
      className={`journey-hint flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink ${side === 'work' ? 'journey-hint-back' : ''}`}
    >
      {side === 'work' && arrow}
      {children}
      {side === 'academic' && arrow}
    </span>
  )
}

export function Journey() {
  const { t } = useLanguage()
  const [view, setView] = useState<View>('academic')
  const [heights, setHeights] = useState<Record<View, number> | null>(null)
  const academicPanel = useRef<HTMLDivElement>(null)
  const workPanel = useRef<HTMLDivElement>(null)

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

  const toggle = () => {
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

  const panelTitleClass = 'flex items-center gap-2.5 font-head text-xl font-extrabold tracking-[-.04em] sm:text-2xl'
  const branchPadding = 'calc(var(--trunk)/2 + 20px)'

  return (
    <section id="trayectoria" className="overflow-x-clip bg-accent-soft py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} intro={t.journey.intro} />

        <div className="reveal">
          <div
            className="journey-stage relative transition-[height] duration-[900ms] ease-[cubic-bezier(.65,0,.35,1)]"
            style={heights ? { height: heights[view] } : undefined}
          >
            <BassString view={view} onToggle={toggle} label={view === 'academic' ? t.journey.showWork : t.journey.showAcademic} />

            {/* Rama académica: a la izquierda de la cuerda */}
            <div ref={academicPanel} {...panelProps('academic')}>
              <div className="mb-7 flex min-h-11 flex-wrap items-center justify-between gap-3" style={{ paddingRight: branchPadding }}>
                <h3 className={panelTitleClass}>
                  <Icon name="book" className="size-6 text-accent" />
                  {t.journey.academic}
                </h3>
                <Hint side="academic" onClick={toggle}>{t.journey.hintWork}</Hint>
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

            {/* Rama laboral: a la derecha de la cuerda */}
            <div ref={workPanel} {...panelProps('work')}>
              <div className="mb-7 flex min-h-11 flex-wrap-reverse items-center justify-between gap-3" style={{ paddingLeft: branchPadding }}>
                <Hint side="work" onClick={toggle}>{t.journey.hintAcademic}</Hint>
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
