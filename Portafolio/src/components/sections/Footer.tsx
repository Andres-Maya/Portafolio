'use client'

import { useLanguage } from '../LanguageProvider'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line bg-paper py-[30px]">
      <div className="wrap relative z-[6] flex flex-col items-center justify-between gap-5 text-center text-[10px] text-muted md:flex-row md:text-left">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Andrés Camilo Maya Rosero</p>
        <p>{t.footer.made}</p>
        <a className="font-bold text-ink" href="#inicio">{t.footer.top}</a>
      </div>
    </footer>
  )
}
