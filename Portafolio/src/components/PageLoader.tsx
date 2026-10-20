'use client'

import { useEffect, useState } from 'react'

// Teclado de tres teclas que se ilumina con CSS mientras carga la página.
export function PageLoader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const hide = () => setHidden(true)
    if (document.readyState === 'complete') {
      hide()
      return
    }
    window.addEventListener('load', hide)
    const fallback = window.setTimeout(hide, 4000)
    return () => {
      window.removeEventListener('load', hide)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div className={`page-loader ${hidden ? 'is-hidden' : ''}`} role="status" aria-hidden={hidden}>
      <div className="flex flex-col items-center gap-[22px]">
        <div className="relative flex" aria-hidden="true">
          <div className="page-loader-key" />
          <div className="page-loader-key" />
          <div className="page-loader-key" />
          <div className="page-loader-black" style={{ left: 17 }} />
          <div className="page-loader-black" style={{ left: 34 }} />
        </div>
        <div className="page-loader-label" lang="es">Cargando</div>
        <div className="page-loader-label" lang="en">Loading</div>
      </div>
    </div>
  )
}
