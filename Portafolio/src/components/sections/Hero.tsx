'use client'

import Image from 'next/image'
import profilePhoto from '@/assets/profile/Andres.jpeg'
import { cvFile } from '@/lib/data'
import { Icon } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { Eyebrow, Html } from '../ui'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative grid items-center overflow-hidden pt-[115px] pb-20 md:pt-[135px] lg:h-svh lg:max-h-[930px] lg:min-h-[760px] lg:pt-[115px] lg:pb-[70px]"
    >
      {/* Cuadrícula de fondo y brillos */}
      <div className="absolute inset-0 bg-[linear-gradient(color-mix(in_srgb,var(--accent)_8%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--accent)_8%,transparent)_1px,transparent_1px)] bg-size-[70px_70px] opacity-35 [mask-image:linear-gradient(to_right,#000,transparent_70%)] dark:opacity-20" />
      <div className="absolute top-[2%] -right-[120px] size-[480px] rounded-full bg-accent/15" />
      <div className="absolute -bottom-[120px] left-[38%] size-[300px] rounded-full bg-accent/8" />

      <div className="wrap relative z-[6] grid grid-cols-[minmax(0,1fr)] items-center gap-[35px] md:grid-cols-[minmax(0,1fr)_380px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-[70px]">
        <div className="reveal min-w-0 pt-[26px] text-center md:text-left">
          <div className="flex justify-center md:block">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </div>
          <Html
            as="h1"
            className="mb-[26px] font-head text-[48px] font-bold leading-[.99] tracking-[-.065em] xs:text-[clamp(42px,11vw,58px)] md:text-[clamp(54px,6vw,82px)]"
            html={t.hero.title}
          />
          <p className="mx-auto mb-[34px] max-w-[610px] text-base leading-[1.75] text-muted xs:text-lg md:mx-0">{t.hero.lede}</p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              className="inline-flex min-h-[51px] w-full items-center justify-center gap-3 rounded-lg bg-accent px-[21px] text-[13px] font-bold text-on-accent shadow-[0_12px_30px_rgba(22,32,28,.15)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--accent)_84%,#000)] xs:w-auto dark:shadow-[0_12px_32px_rgba(0,0,0,.32)] dark:hover:bg-[color-mix(in_srgb,var(--accent)_82%,#fff)]"
              href="#proyectos"
            >
              <span>{t.hero.cta}</span>
              <Icon name="arrow" />
            </a>
            <a
              className="inline-flex min-h-[51px] w-full items-center justify-center gap-3 rounded-lg border border-line bg-white/50 px-[21px] text-[13px] font-bold transition hover:-translate-y-0.5 xs:w-auto dark:bg-white/[.035]"
              href={cvFile}
              target="_blank"
              rel="noopener"
            >
              <Icon name="download" />
              <span>{t.hero.cv}</span>
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-[17px] xs:gap-[35px] md:justify-start" aria-label={t.hero.factsLabel}>
            {t.hero.facts.map(([value, label]) => (
              <div key={label} className="border-r border-line pr-[17px] last:border-0 last:pr-0 xs:pr-[35px]">
                <strong className="block font-head text-[25px] tracking-[-.05em]">{value}</strong>
                <span className="text-[10px] font-bold uppercase tracking-[.1em] text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative mt-[15px] w-[min(88vw,380px)] justify-self-center md:mt-0 md:w-[min(100%,440px)] md:justify-self-end">
          <div className="relative rounded-[28px] border border-accent/22 bg-paper/72 p-[17px] shadow-[0_30px_70px_color-mix(in_srgb,var(--accent)_13%,transparent)] before:pointer-events-none before:absolute before:inset-[9px] before:z-[2] before:rounded-[21px] before:border before:border-white/80 dark:border-accent/30 dark:bg-[rgba(17,17,17,.74)]">
            <div className="absolute top-[25px] left-1/2 z-[3] -translate-x-1/2 whitespace-nowrap rounded-full bg-[rgba(247,245,239,.86)] px-[13px] py-2 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#111] backdrop-blur-[8px] dark:bg-black/84 dark:text-ink">
              Pasto · Colombia
            </div>
            <Image
              src={profilePhoto}
              alt={t.hero.portraitAlt}
              className="aspect-[.77] w-full rounded-[18px] object-cover object-[center_30%]"
              sizes="(max-width: 760px) 88vw, 440px"
              placeholder="blur"
              priority
            />
            <div className="absolute inset-x-8 bottom-[30px] z-[3] flex justify-between border-t border-white/65 pt-[13px] text-[10px] font-bold uppercase tracking-[.08em] text-white [text-shadow:0_2px_10px_#000]">
              <span>Andrés Camilo</span>
              <Html html={t.hero.caption} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
