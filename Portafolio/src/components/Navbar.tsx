'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import profileLogo from '@/assets/profile/logoperfil.png'
import { cvFile } from '@/lib/data'
import { Icon } from './Icon'
import { useLanguage } from './LanguageProvider'

export const navSections = [
  ['sobre-mi', 'about'],
  ['proyectos', 'projects'],
  ['testimonios', 'testimonials'],
  ['trayectoria', 'journey'],
  ['mas-de-mi', 'beyond'],
  ['contacto', 'contact'],
] as const

type Theme = 'light' | 'dark'

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0e14' : '#f7f5ef')
  }, [theme])

  // Resalta en el menú la sección que ocupa el centro de la pantalla.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navSections.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
    try { localStorage.setItem('portfolio-theme', next) } catch {}
    setTheme(next)
  }

  const themeLabel = theme === 'dark' ? t.nav.toLight : t.nav.toDark

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 h-[72px] transition-[background-color,box-shadow] duration-300 md:h-[82px] ${
        scrolled ? 'bg-cream/90 shadow-[0_1px_color-mix(in_srgb,var(--ink)_8%,transparent)] backdrop-blur-[16px] dark:bg-black/90' : ''
      }`}
    >
      <div className="wrap flex h-full items-center gap-[18px] md:gap-[30px]">
        <a className="mr-auto inline-flex items-center gap-3 font-head text-[15px] font-extrabold" href="#inicio" aria-label={t.nav.home}>
          <span className="relative block size-[38px] shrink-0 overflow-hidden rounded-full bg-[#050505]">
            <Image src={profileLogo} alt="" className="size-full object-cover" sizes="38px" priority />
          </span>
          <span className="hidden md:inline">Andrés Maya</span>
        </a>

        <nav
          id="navLinks"
          aria-label={t.nav.label}
          className={`fixed inset-x-6 top-[72px] flex-col items-stretch rounded-[14px] border border-line bg-paper p-3 shadow-[0_20px_50px_rgba(22,32,28,.16)] dark:bg-[#111] xl:static xl:flex xl:flex-row xl:items-center xl:gap-[27px] xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none dark:xl:bg-transparent ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          {navSections.map(([id, key]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={active === id ? 'true' : undefined}
              data-active={active === id ? '' : undefined}
              className="group relative px-3.5 py-[13px] text-[13px] font-semibold text-muted transition-colors hover:text-ink data-active:text-ink xl:p-0"
            >
              {t.nav[key]}
              <span className="absolute -bottom-[7px] left-0 hidden h-0.5 w-0 bg-accent transition-[width] duration-200 group-hover:w-full group-data-active:w-full xl:block" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.nav.switchLanguage}
            title={t.nav.switchLanguage}
            className="inline-flex h-10 shrink-0 cursor-pointer items-center gap-0.5 rounded-full border border-line bg-white/20 p-1 font-head text-[11px] font-extrabold tracking-[.04em] text-muted transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent dark:bg-white/5"
          >
            {(['es', 'en'] as const).map((option) => (
              <span key={option} className={`min-w-7 rounded-full py-1.5 text-center transition-colors ${language === option ? 'bg-accent text-on-accent' : ''}`}>
                {option.toUpperCase()}
              </span>
            ))}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={themeLabel}
            title={themeLabel}
            className="relative size-10 shrink-0 cursor-pointer rounded-full border border-line bg-white/20 text-ink transition-[transform,border-color] duration-300 hover:rotate-[8deg] hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent dark:bg-white/5"
          >
            <span className="absolute inset-0 grid place-items-center opacity-0 transition-[opacity,transform] duration-300 [transform:rotate(-45deg)_scale(.65)] dark:opacity-100 dark:[transform:none]">
              <Icon name="sun" className="size-[17px]" />
            </span>
            <span className="absolute inset-0 grid place-items-center opacity-100 transition-[opacity,transform] duration-300 dark:opacity-0 dark:[transform:rotate(45deg)_scale(.65)]">
              <Icon name="moon" className="size-[17px]" />
            </span>
          </button>
        </div>

        <a
          className="hidden items-center gap-2 rounded-full border border-ink px-[15px] py-2.5 text-xs font-bold transition-colors hover:bg-ink hover:text-paper md:inline-flex"
          href={cvFile}
          target="_blank"
          rel="noopener"
        >
          <span>{t.nav.cv}</span>
          <Icon name="external" className="size-[13px]" />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-controls="navLinks"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          className="block size-[42px] cursor-pointer rounded-full bg-ink p-2.5 dark:bg-accent xl:hidden"
        >
          {[menuOpen ? 'translate-y-[5.5px] rotate-45' : '', menuOpen ? 'opacity-0' : '', menuOpen ? '-translate-y-[5.5px] -rotate-45' : ''].map((state, index) => (
            <span key={index} className={`mx-auto my-1 block h-[1.5px] w-[19px] bg-paper transition-all duration-200 dark:bg-black ${state}`} />
          ))}
        </button>
      </div>
    </header>
  )
}
