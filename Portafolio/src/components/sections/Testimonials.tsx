'use client'

import { useId } from 'react'
import { useLanguage } from '../LanguageProvider'
import { SectionHeading } from '../ui'

const RATING = 4.3

const starPath = 'M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.53L12 17.5l-5.87 3.07 1.12-6.53L2.5 9.41l6.56-.95L12 2.5Z'

// Cada estrella se rellena según la parte de la calificación que le corresponde (4,3 → cuatro llenas y un 30 %).
function Stars({ value, label }: { value: number; label: string }) {
  const id = useId()
  return (
    <div className="flex items-center gap-1" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.max(0, Math.min(1, value - index))
        return (
          <svg key={index} viewBox="0 0 24 24" className="size-6" aria-hidden="true">
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

export function Testimonials() {
  const { t } = useLanguage()
  const testimonial = t.testimonials

  return (
    <section id="testimonios" className="bg-paper py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={testimonial.eyebrow} title={testimonial.title} />
        <figure className="reveal relative mx-auto max-w-[860px] overflow-hidden rounded-[22px] border border-line bg-cream p-7 shadow-[0_24px_60px_color-mix(in_srgb,var(--ink)_8%,transparent)] md:p-12 dark:bg-[rgba(17,17,17,.9)]">
          <span className="pointer-events-none absolute -top-10 right-6 font-serif text-[220px] leading-none text-accent/10 select-none" aria-hidden="true">
            “
          </span>
          <div className="relative mb-7 flex flex-wrap items-center gap-3">
            <Stars value={RATING} label={testimonial.ratingLabel} />
            <span className="font-head text-lg font-extrabold tracking-[-.03em]" aria-hidden="true">
              {testimonial.rating}
              <span className="text-sm font-bold text-muted"> / 5</span>
            </span>
          </div>
          <blockquote className="relative">
            <p className="text-[17px] font-medium leading-[1.8] md:text-[19px]">“{testimonial.quote}”</p>
            {testimonial.note && <p className="mt-3 text-xs italic text-muted">{testimonial.note}</p>}
          </blockquote>
          <figcaption className="relative mt-8 flex items-center gap-4 border-t border-line pt-6">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent font-head text-lg font-extrabold tracking-[-.04em] text-on-accent" aria-hidden="true">
              AJ
            </span>
            <span>
              <strong className="block font-head text-lg tracking-[-.03em]">{testimonial.author}</strong>
              <span className="text-sm text-muted">{testimonial.role}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
