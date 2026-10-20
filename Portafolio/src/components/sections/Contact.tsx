'use client'

import { githubUrl, instagramUrl } from '@/lib/data'
import { Icon, type IconName } from '../Icon'
import { useLanguage } from '../LanguageProvider'
import { Eyebrow, Html } from '../ui'

const contactLinks: { icon: IconName; label: string; href: string; external?: boolean }[] = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrés-camilo-maya-rosero-4b5702359/', external: true },
  { icon: 'github', label: 'GitHub', href: githubUrl, external: true },
  { icon: 'instagram', label: 'Instagram', href: instagramUrl, external: true },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="bg-cream py-[85px] md:py-[125px] dark:bg-paper">
      <div
        className="wrap reveal relative z-[6] overflow-hidden rounded-[22px] border border-line bg-white px-7 py-[50px] text-ink shadow-[0_24px_60px_color-mix(in_srgb,var(--ink)_8%,transparent)] after:absolute after:-right-[25px] after:-bottom-[95px] after:font-head after:text-[300px] after:font-extrabold after:tracking-[-.12em] after:text-accent/7 after:content-['AM'] md:p-[75px] dark:border-0 dark:bg-black dark:text-white dark:shadow-none dark:after:text-white/[.035]"
      >
        <Eyebrow>{t.contact.eyebrow}</Eyebrow>
        <Html
          as="h2"
          className="relative z-[1] mb-[22px] max-w-[650px] font-head text-[clamp(45px,6vw,72px)] font-bold leading-[.99] tracking-[-.065em]"
          html={t.contact.title}
        />
        <p className="relative z-[1] max-w-[570px] leading-[1.7] text-muted dark:text-white/62">{t.contact.text}</p>
        <a
          className="relative z-[1] mt-[34px] flex w-fit items-center gap-3.5 border-b border-accent pb-[7px] text-[13px] font-semibold text-accent xs:text-[clamp(15px,2vw,20px)]"
          href="mailto:andrescamilomaya07@gmail.com"
        >
          andrescamilomaya07@gmail.com
          <Icon name="arrow" />
        </a>
        <div className="relative z-[1] mt-[55px] flex flex-wrap gap-x-[30px] gap-y-3.5 border-t border-line pt-[27px] dark:border-white/12">
          {contactLinks.map(({ icon, label, href, external }) => (
            <a
              key={label}
              className="flex items-center gap-[9px] text-xs font-semibold text-muted transition-colors hover:text-ink dark:text-white/72 dark:hover:text-white"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              <Icon name={icon} className="size-4 text-accent" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
