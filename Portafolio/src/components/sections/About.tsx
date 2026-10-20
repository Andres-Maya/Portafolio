'use client'

import Image from 'next/image'
import { skills } from '@/lib/data'
import { Carousel } from '../Carousel'
import { useLanguage } from '../LanguageProvider'
import { Chip, Eyebrow, Html, headingClass } from '../ui'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="bg-paper py-[85px] md:py-[125px]">
      <div className="wrap relative z-[6] grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
        <div>
          <div className="reveal mb-[42px] md:mb-12">
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <Html as="h2" className={headingClass} html={t.about.title} />
          </div>
          <div className="reveal">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="mb-[18px] text-justify text-lg font-medium leading-[1.75] hyphens-auto">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.interests.map((interest) => (
                <Chip key={interest} strong>{interest}</Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-[110px]">
          <div className="reveal mb-6">
            <h3 className="mb-2 font-head text-[26px] font-bold tracking-[-.04em]">{t.about.skillsTitle}</h3>
            <p className="text-[15px] leading-[1.7] text-muted">{t.about.skillsIntro}</p>
          </div>
          <Carousel name="skills" width="860px">
            {skills.map((items, index) => (
              <article key={index} className="relative min-h-[240px] rounded-2xl border border-line bg-paper p-[34px] transition-colors duration-200 hover:bg-accent-soft">
                <span className="mb-[45px] block font-head text-[11px] font-extrabold text-accent">0{index + 1}</span>
                <h3 className="mb-[22px] font-head text-xl font-bold tracking-[-.03em]">{t.about.categories[index]}</h3>
                <div className="flex flex-wrap items-stretch gap-2">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex min-h-[88px] min-w-[82px] flex-[1_1_calc(25%-8px)] flex-col items-center justify-center gap-2 rounded-[7px] bg-cream px-3 py-2.5 text-center text-[11px] text-muted dark:bg-[#111]"
                    >
                      <Image
                        src={skill.icon}
                        alt=""
                        className={`size-9 object-contain transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-[1.06] ${skill.monochrome ? 'dark:[filter:invert(1)_brightness(1.15)_drop-shadow(0_5px_7px_rgba(0,0,0,.18))]' : ''}`}
                      />
                      <b className="font-semibold">{skill.name}</b>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
