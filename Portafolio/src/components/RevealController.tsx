'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from './LanguageProvider'

// Muestra los bloques .reveal al entrar en pantalla y repite la animación al cambiar de idioma.
export function RevealController() {
  const { language } = useLanguage()
  const firstRender = useRef(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)),
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const visible = [...document.querySelectorAll<HTMLElement>('.reveal.is-visible')]
    visible.forEach((element) => {
      element.style.transition = 'none'
      element.classList.remove('is-visible')
    })
    void document.body.offsetHeight
    visible.forEach((element) => {
      element.style.transition = ''
      element.classList.add('is-visible')
    })
  }, [language])

  return null
}
