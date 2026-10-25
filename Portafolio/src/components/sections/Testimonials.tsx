'use client'

import Image, { type StaticImageData } from 'next/image'
import { useId, useRef, useState } from 'react'
import adrianaPhoto from '@/assets/testimonials/AdrianaBenavides.png'
import anaLuciaPhoto from '@/assets/testimonials/AnaLuciaRosero.png'
import armandoPhoto from '@/assets/testimonials/ArmandoJavierArteaga.png'
import elsyPhoto from '@/assets/testimonials/ElsyLilianaSalazar.png'
import johanaPhoto from '@/assets/testimonials/JohanaCarolinaCastilloSolarte.png'
import manuelPhoto from '@/assets/testimonials/ManuelDavidMaya.png'
import mariaIsabelLagosPhoto from '@/assets/testimonials/MariaIsabelLagos.png'
import mariaIsabelMattaPhoto from '@/assets/testimonials/MariaIsabelMatta.png'
import ximenaPhoto from '@/assets/testimonials/XimenaTermalPenia.png'
import { useTrackpadSwipe } from '@/lib/useTrackpadSwipe'
import { Icon } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { arrowButtonClass, SectionHeading } from '../ui'

// Encuadre de la foto en el marco circular, en proporciones de la imagen:
// (x, y) es el centro de la cara y size la fracción del alto de la foto que cabe en el marco.
type Framing = { x: number; y: number; size: number }

// Mismo orden que t.testimonials.items.
const testimonialMeta: { photo: StaticImageData; rating: number; year: number; linkedin?: string; framing: Framing }[] = [
  { photo: manuelPhoto, rating: 5, year: 2026, linkedin: 'https://www.linkedin.com/in/manueldmaya', framing: { x: 0.5, y: 0.5, size: 0.96 } },
  { photo: armandoPhoto, rating: 4.3, year: 2026, framing: { x: 0.52, y: 0.4, size: 0.8 } },
  { photo: anaLuciaPhoto, rating: 5, year: 2026, framing: { x: 0.52, y: 0.45, size: 0.76 } },
  { photo: adrianaPhoto, rating: 5, year: 2026, framing: { x: 0.47, y: 0.2, size: 0.36 } },
  { photo: mariaIsabelLagosPhoto, rating: 4, year: 2026, framing: { x: 0.475, y: 0.42, size: 0.68 } },
  { photo: mariaIsabelMattaPhoto, rating: 4.5, year: 2026, framing: { x: 0.45, y: 0.43, size: 0.45 } },
  { photo: elsyPhoto, rating: 5, year: 2026, framing: { x: 0.46, y: 0.38, size: 0.6 } },
  { photo: johanaPhoto, rating: 5, year: 2026, framing: { x: 0.5, y: 0.33, size: 0.58 } },
  { photo: ximenaPhoto, rating: 5, year: 2026, framing: { x: 0.42, y: 0.45, size: 0.72 } },
]

// Tarjetas visibles detrás de la del frente y cuánto se desvanece cada una según su profundidad.
const visibleBehind = 4
const behindFade = [0, 0.42, 0.56, 0.68, 0.78]

const starPath = 'M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.53L12 17.5l-5.87 3.07 1.12-6.53L2.5 9.41l6.56-.95L12 2.5Z'

// Cada estrella se rellena según la parte de la calificación que le corresponde (4,3 → cuatro llenas y un 30 %).
function Stars({ value, label }: { value: number; label: string }) {
  const id = useId()
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.max(0, Math.min(1, value - index))
        return (
          <svg key={index} viewBox="0 0 24 24" className="size-[18px] md:size-5" aria-hidden="true">
            <defs>
              <clipPath id={`${id}-${index}`}>
                <rect x="0" y="0" width={24 * fill} height="24" />
              </clipPath>
            </defs>
            <path d={starPath} className="fill-line" />
            <path d={starPath} className="fill-accent" clipPath={`url(#${id}-${index})`} />
          </svg>
        )
      })}
    </div>
  )
}

// Recorta la foto en un círculo centrando la cara, sin dejar huecos aunque la foto sea vertical o pequeña.
function Avatar({ photo, framing, alt }: { photo: StaticImageData; framing: Framing; alt: string }) {
  const size = Math.min(framing.size, 1, photo.width / photo.height)
  const width = photo.width / photo.height / size
  const height = 1 / size
  const offset = (center: number, span: number) => Math.max(1 - span, Math.min(0, 0.5 - center * span)) * 100
  return (
    <div className="shrink-0 rounded-full border-2 border-accent p-[3px]">
      <div className="relative size-16 overflow-hidden rounded-full bg-line md:size-[84px]">
        <Image
          src={photo}
          alt={alt}
          sizes={`${Math.ceil(84 * width)}px`}
          className="absolute max-w-none"
          style={{ width: `${width * 100}%`, height: `${height * 100}%`, left: `${offset(framing.x, width)}%`, top: `${offset(framing.y, height)}%` }}
        />
      </div>
    </div>
  )
}

export function Testimonials() {
  const { t } = useLanguage()
  const testimonials = t.testimonials
  const count = testimonials.items.length
  const [current, setCurrent] = useState(0)
  // Desplazamiento en px de la tarjeta del frente mientras se arrastra con el dedo.
  const [drag, setDrag] = useState<number | null>(null)
  const dragStart = useRef<number | null>(null)
  const stack = useRef<HTMLDivElement>(null)

  const goTo = (next: number) => setCurrent(Math.max(0, Math.min(next, count - 1)))

  useTrackpadSwipe(stack, (direction) => goTo(current + direction))

  // En los extremos del mazo la tarjeta se resiste a moverse hacia donde no hay más.
  const dragDistance = (clientX: number) => {
    const distance = clientX - (dragStart.current ?? clientX)
    const atEdge = (current === 0 && distance > 0) || (current === count - 1 && distance < 0)
    return atEdge ? distance / 4 : distance
  }

  const endDrag = (clientX?: number) => {
    if (dragStart.current === null) return
    const distance = clientX === undefined ? 0 : clientX - dragStart.current
    dragStart.current = null
    setDrag(null)
    if (distance < -50) goTo(current + 1)
    if (distance > 50) goTo(current - 1)
  }

  return (
    <section id="testimonios" className="overflow-x-clip bg-paper py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div
          className="reveal relative"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') goTo(current - 1)
            if (event.key === 'ArrowRight') goTo(current + 1)
          }}
        >
          {/* Mazo de tarjetas: todas ocupan la misma celda; las de atrás se asoman a la derecha y la que se va sale por la izquierda */}
          <div
            ref={stack}
            className="mx-auto grid w-full max-w-[660px] touch-pan-y pr-[calc(var(--step)*4)] [--step:11px] md:[--step:28px]"
            onPointerDown={(event) => {
              if (event.pointerType !== 'mouse') dragStart.current = event.clientX
            }}
            onPointerMove={(event) => {
              if (dragStart.current === null) return
              const distance = dragDistance(event.clientX)
              if (drag !== null || Math.abs(distance) > 6) setDrag(distance)
            }}
            onPointerUp={(event) => endDrag(event.clientX)}
            onPointerCancel={() => endDrag()}
          >
            {testimonials.items.map((testimonial, index) => {
              const { photo, rating, year, linkedin, framing } = testimonialMeta[index]
              const depth = index - current
              const gone = depth < 0
              const stackDepth = Math.min(Math.max(depth, 0), visibleBehind)
              const dragging = depth === 0 && drag !== null
              return (
                <article
                  key={testimonial.author}
                  aria-hidden={depth !== 0}
                  inert={depth !== 0}
                  className={`relative col-start-1 row-start-1 flex origin-right flex-col overflow-hidden rounded-[22px] border border-line bg-cream p-6 shadow-[0_18px_45px_color-mix(in_srgb,var(--ink)_9%,transparent)] transition-[transform,opacity] motion-reduce:transition-none md:p-8 dark:bg-[#161616] ${
                    gone ? 'duration-300 ease-in' : 'duration-500 ease-[cubic-bezier(.22,1,.36,1)]'
                  }`}
                  style={{
                    zIndex: gone ? 2 * count + depth : count - depth,
                    opacity: gone || depth > visibleBehind ? 0 : 1,
                    transform: gone
                      ? 'translateX(calc(-100% - 80px)) rotate(-5deg)'
                      : dragging
                        ? `translateX(${drag}px) rotate(${drag / 40}deg)`
                        : `translateX(calc(var(--step) * ${stackDepth})) scale(${1 - stackDepth * 0.06})`,
                    transitionDuration: dragging ? '0ms' : undefined,
                  }}
                >
                  <span className="pointer-events-none absolute -top-8 right-5 font-serif text-[170px] leading-none text-accent/10 select-none" aria-hidden="true">
                    “
                  </span>
                  <header className="relative flex items-center gap-4">
                    <Avatar photo={photo} framing={framing} alt={testimonials.photoAlt.replace('{author}', testimonial.author)} />
                    <div className="min-w-0">
                      <strong className="block font-head text-[17px] leading-tight tracking-[-.03em] md:text-lg">{testimonial.author}</strong>
                      {testimonial.role && <span className="mt-1 block text-[13px] leading-snug text-muted">{testimonial.role}</span>}
                      {linkedin && (
                        <a
                          href={linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={testimonials.linkedinLabel.replace('{author}', testimonial.author)}
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                          <Icon name="linkedin" className="size-3.5" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </header>
                  <blockquote className="relative mt-6 flex-1">
                    <p className="whitespace-pre-line text-[15px] font-medium leading-[1.75] md:text-base">“{testimonial.quote}”</p>
                    {testimonial.note && <p className="mt-3 text-xs italic text-muted">{testimonial.note}</p>}
                  </blockquote>
                  <footer className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                    <div className="flex items-center gap-2.5">
                      <Stars value={rating} label={testimonials.ratingLabel.replace('{rating}', testimonial.rating)} />
                      <span className="font-head text-base font-extrabold tracking-[-.03em]" aria-hidden="true">
                        {testimonial.rating}
                        <span className="text-xs font-bold text-muted"> / 5</span>
                      </span>
                    </div>
                    <time dateTime={String(year)} className="font-head text-xs font-extrabold tracking-[.08em] text-muted">
                      {year}
                    </time>
                  </footer>
                  {/* Velo que apaga las tarjetas de atrás según su profundidad */}
                  <span
                    className="pointer-events-none absolute inset-0 z-10 bg-paper transition-opacity duration-500 motion-reduce:transition-none"
                    style={{ opacity: behindFade[stackDepth] }}
                    aria-hidden="true"
                  />
                </article>
              )
            })}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3.5 md:mt-8">
            <button type="button" className={arrowButtonClass} aria-label={t.carousels.testimonials.previous} disabled={current === 0} onClick={() => goTo(current - 1)}>
              <Icon name="previous" />
            </button>
            <span className="min-w-[46px] text-center font-head text-[11px] font-extrabold tracking-[.08em] text-muted" aria-live="polite">
              {current + 1} / {count}
            </span>
            <button type="button" className={arrowButtonClass} aria-label={t.carousels.testimonials.next} disabled={current === count - 1} onClick={() => goTo(current + 1)}>
              <Icon name="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
