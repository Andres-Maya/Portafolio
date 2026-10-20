'use client'

import { useLanguage } from './LanguageProvider'
import { MusicBackground } from './MusicBackground'
import { Navbar } from './Navbar'
import { RevealController } from './RevealController'
import { About } from './sections/About'
import { Beyond } from './sections/Beyond'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Journey } from './sections/Journey'
import { Projects } from './sections/Projects'
import { Testimonials } from './sections/Testimonials'

export function Portfolio() {
  const { t } = useLanguage()

  return (
    <>
      <MusicBackground />
      <a className="fixed -top-[60px] left-5 z-[200] rounded-lg bg-ink px-[18px] py-3 text-paper focus:top-4" href="#main">
        {t.skip}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Journey />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <RevealController />
    </>
  )
}
