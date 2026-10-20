import type { ElementType, ComponentPropsWithoutRef } from 'react'

// Renderiza textos de traducción que incluyen HTML simple (<br>, <em>, &amp;).
export function Html<T extends ElementType = 'span'>({ as, html, ...props }: { as?: T; html: string } & Omit<ComponentPropsWithoutRef<T>, 'children' | 'dangerouslySetInnerHTML'>) {
  const Tag = (as ?? 'span') as ElementType
  return <Tag {...props} dangerouslySetInnerHTML={{ __html: html }} />
}

export function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`mb-6 flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[.16em] text-accent ${center ? 'justify-center' : ''}`}>
      <span className="h-0.5 w-7 bg-accent" />
      <b className="font-[inherit]">{children}</b>
    </p>
  )
}

export const headingClass = 'mb-[26px] max-w-[780px] font-head text-[clamp(40px,5vw,65px)] font-bold leading-[.99] tracking-[-.065em]'

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="reveal mb-[42px] md:mb-[65px] md:flex md:items-end md:justify-between md:gap-[35px] lg:gap-20">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Html as="h2" className={headingClass} html={title} />
      </div>
      {intro && <p className="-mt-2.5 max-w-[390px] text-[15px] leading-[1.75] text-muted md:mt-0 md:mb-[30px]">{intro}</p>}
    </div>
  )
}

export function Chip({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return strong ? (
    <span className="rounded-full border border-[color-mix(in_srgb,var(--accent)_55%,var(--line))] bg-[color-mix(in_srgb,var(--accent-soft)_72%,var(--paper))] px-[11px] py-2 text-[11px] font-bold tracking-[.04em] text-ink shadow-[0_5px_16px_rgba(22,32,28,.08)]">
      {children}
    </span>
  ) : (
    <span className="rounded-full border border-line px-[11px] py-2 text-[10px] font-bold tracking-[.04em]">{children}</span>
  )
}

export const cardKicker = 'mb-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-accent'
