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
    const observeAll = (root: ParentNode) => {
      if (root instanceof Element && root.matches('.reveal')) observer.observe(root)
      root.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    }
    observeAll(document)
    // Los .reveal que React monte después (p. ej. al cambiar de idioma) también se observan.
    const mutations = new MutationObserver((records) =>
      records.forEach((record) => record.addedNodes.forEach((node) => node instanceof Element && observeAll(node))),
    )
    mutations.observe(document.body, { childList: true, subtree: true })
    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
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
