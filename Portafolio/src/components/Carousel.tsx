'use client'

import { Children, useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { useLanguage } from './LanguageProvider'

type CarouselName = 'projects' | 'skills' | 'certificates'

// Carrusel de una tarjeta por página con scroll-snap, flechas y teclado.
export function Carousel({ name, width, children }: { name: CarouselName; width: string; children: React.ReactNode }) {
  const { t } = useLanguage()
  const viewport = useRef<HTMLDivElement>(null)
  const count = Children.count(children)
  const [page, setPage] = useState(0)

  const goToPage = useCallback((next: number) => {
    const target = Math.max(0, Math.min(next, count - 1))
    const element = viewport.current
    const item = element?.children[0]?.children[target] as HTMLElement | undefined
    if (element && item) element.scrollTo({ left: item.offsetLeft - element.offsetLeft, behavior: 'smooth' })
    setPage(target)
  }, [count])

  useEffect(() => {
    const element = viewport.current
    if (!element) return
    let timer = 0
    const onScroll = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        const maxScroll = element.scrollWidth - element.clientWidth
        setPage(maxScroll > 0 ? Math.round((element.scrollLeft / maxScroll) * (count - 1)) : 0)
      }, 80)
    }
    element.addEventListener('scroll', onScroll, { passive: true })
    return () => element.removeEventListener('scroll', onScroll)
  }, [count])

  const buttonClass =
    'grid size-[42px] cursor-pointer place-items-center rounded-full border border-line bg-paper text-ink transition-[background-color,color,transform,opacity] duration-200 enabled:hover:-translate-y-0.5 enabled:hover:bg-ink enabled:hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-30'

  return (
    <div
      className="reveal relative"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') goToPage(page - 1)
        if (event.key === 'ArrowRight') goToPage(page + 1)
      }}
    >
      <div
        ref={viewport}
        className="mx-auto snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ width: `min(100%, ${width})` }}
      >
        <div className="flex w-full gap-[18px] *:shrink-0 *:grow-0 *:basis-full *:snap-center">{children}</div>
      </div>
      <div className="mt-3.5 flex items-center justify-center gap-3.5 xs:mt-[18px]">
        <button type="button" className={buttonClass} aria-label={t.carousels[name].previous} disabled={page === 0} onClick={() => goToPage(page - 1)}>
          <Icon name="previous" />
        </button>
        <span className="min-w-[46px] text-center font-head text-[11px] font-extrabold tracking-[.08em] text-muted" aria-live="polite">
          {page + 1} / {count}
        </span>
        <button type="button" className={buttonClass} aria-label={t.carousels[name].next} disabled={page === count - 1} onClick={() => goToPage(page + 1)}>
          <Icon name="next" />
        </button>
      </div>
    </div>
  )
}
