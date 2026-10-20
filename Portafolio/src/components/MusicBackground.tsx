'use client'

import { useEffect, useRef } from 'react'

// [símbolo, x %, y %, tamaño px, rotación deg, retraso ms, duración s]
const musicalNotes: [string, number, number, number, number, number, number][] = [
  ['♫', 3, 8, 44, -12, 10, 8.8], ['♪', 10, 31, 30, 9, 18, 7.4],
  ['♬', 6, 62, 50, -8, 26, 10.2], ['♩', 14, 86, 32, 14, 34, 8.1],
  ['♭', 21, 13, 36, 10, 42, 9.4], ['♫', 19, 72, 54, -14, 50, 10.8],
  ['♪', 27, 42, 34, 11, 58, 7.8], ['♬', 31, 94, 46, -9, 66, 9.7],
  ['♩', 35, 22, 28, 13, 74, 8.5], ['♫', 40, 63, 48, -11, 82, 11.2],
  ['♭', 45, 5, 34, 8, 90, 9.1], ['♪', 48, 84, 31, -13, 98, 7.7],
  ['♬', 53, 34, 52, 12, 106, 10.4], ['♩', 57, 70, 29, -8, 114, 8.3],
  ['♫', 61, 12, 45, 10, 122, 9.8], ['♪', 65, 92, 33, -12, 130, 7.5],
  ['♭', 69, 48, 39, 15, 138, 9.2], ['♬', 73, 78, 50, -10, 146, 10.6],
  ['♫', 77, 27, 56, 8, 154, 11.4], ['♩', 81, 60, 30, -15, 162, 8.4],
  ['♪', 85, 6, 36, 12, 170, 7.9], ['♬', 89, 39, 49, -9, 178, 10.1],
  ['♭', 94, 72, 38, 14, 186, 9.3], ['♫', 97, 19, 52, -11, 194, 10.9],
  ['♪', 2, 96, 35, 7, 202, 8.2], ['♩', 24, 57, 29, -14, 210, 7.6],
  ['♬', 37, 80, 44, 11, 218, 9.9], ['♫', 51, 52, 50, -8, 226, 11.1],
  ['♪', 63, 25, 32, 13, 234, 7.8], ['♭', 76, 96, 37, -12, 242, 9.5],
  ['♩', 88, 88, 31, 9, 250, 8.6], ['♬', 98, 52, 48, -10, 258, 10.3],
]

export function MusicBackground() {
  const background = useRef<HTMLDivElement>(null)

  // Desplaza las notas según el puntero y el progreso del scroll.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let pointerX = 0
    let pointerY = 0
    let frameRequested = false

    const update = () => {
      const scrollProgress = window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      background.current?.style.setProperty('--music-x', `${pointerX * 18}px`)
      background.current?.style.setProperty('--music-y', `${pointerY * 12 - scrollProgress * 95}px`)
      frameRequested = false
    }
    const requestFrame = () => {
      if (!frameRequested) {
        frameRequested = true
        requestAnimationFrame(update)
      }
    }
    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth - 0.5
      pointerY = event.clientY / window.innerHeight - 0.5
      requestFrame()
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', requestFrame, { passive: true })
    requestFrame()
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', requestFrame)
    }
  }, [])

  return (
    <div className="music-background" ref={background} aria-hidden="true">
      <div className="music-parallax">
        {musicalNotes.map(([symbol, x, y, size, rotation, delay, duration], index) => (
          <span
            key={index}
            className="music-note"
            style={{ '--x': `${x}%`, '--y': `${y}%`, '--size': `${size}px`, '--rotation': `${rotation}deg`, '--delay': `${delay}ms`, '--duration': `${duration}s` } as React.CSSProperties}
          >
            <i>{symbol}</i>
          </span>
        ))}
      </div>
    </div>
  )
}
