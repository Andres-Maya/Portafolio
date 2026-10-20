'use client'

import Image, { type StaticImageData } from 'next/image'
import { useId } from 'react'
import anaLuciaPhoto from '@/assets/testimonials/AnaLuciaRosero.png'
import armandoPhoto from '@/assets/testimonials/ArmandoJavierArteaga.png'
import { Carousel } from '../Carousel'
import { useLanguage } from '../LanguageProvider'
import { SectionHeading } from '../ui'

// Mismo orden que t.testimonials.items.
const testimonialMeta: { photo: StaticImageData; rating: number }[] = [
  { photo: armandoPhoto, rating: 4.3 },
  { photo: anaLuciaPhoto, rating: 5 },
]

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
  const testimonials = t.testimonials

  return (
    <section id="testimonios" className="bg-paper py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6]">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <Carousel name="testimonials" width="980px">
          {testimonials.items.map((testimonial, index) => {
            const { photo, rating } = testimonialMeta[index]
            return (
              <article
                key={testimonial.author}
                className="relative grid overflow-hidden rounded-[22px] border border-line bg-cream shadow-[0_24px_60px_color-mix(in_srgb,var(--ink)_8%,transparent)] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] dark:bg-[rgba(17,17,17,.9)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-line md:aspect-auto md:min-h-[440px]">
                  <Image
                    src={photo}
                    alt={testimonials.photoAlt.replace('{author}', testimonial.author)}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 92vw, 392px"
                  />
                </div>
                <div className="relative flex flex-col p-7 md:p-10">
                  <span className="pointer-events-none absolute -top-10 right-6 font-serif text-[220px] leading-none text-accent/10 select-none" aria-hidden="true">
                    “
                  </span>
                  <div className="relative mb-6 flex flex-wrap items-center gap-3">
                    <Stars value={rating} label={testimonials.ratingLabel.replace('{rating}', testimonial.rating)} />
                    <span className="font-head text-lg font-extrabold tracking-[-.03em]" aria-hidden="true">
                      {testimonial.rating}
                      <span className="text-sm font-bold text-muted"> / 5</span>
                    </span>
                  </div>
                  <blockquote className="relative">
                    <p className="text-[16px] font-medium leading-[1.8] md:text-[17px]">“{testimonial.quote}”</p>
                    {testimonial.note && <p className="mt-3 text-xs italic text-muted">{testimonial.note}</p>}
                  </blockquote>
                  <div className="mt-auto pt-8">
                    <footer className="relative border-t border-line pt-6">
                      <strong className="block font-head text-lg tracking-[-.03em]">{testimonial.author}</strong>
                      {testimonial.role && <span className="text-sm text-muted">{testimonial.role}</span>}
                    </footer>
                  </div>
                </div>
              </article>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}
