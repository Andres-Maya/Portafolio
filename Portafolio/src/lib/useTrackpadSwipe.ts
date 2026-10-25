import { useEffect, useRef, type RefObject } from 'react'

// Convierte el gesto horizontal del trackpad (dos dedos) en pasos de una tarjeta:
// un gesto pasa una sola, aunque el trackpad siga enviando inercia.
export function useTrackpadSwipe(target: RefObject<HTMLElement | null>, onStep: (direction: 1 | -1) => void) {
  const step = useRef(onStep)
  useEffect(() => {
    step.current = onStep
  })

  useEffect(() => {
    const element = target.current
    if (!element) return
    let accumulated = 0
    let locked = false
    let lastStep = -Infinity
    let timer = 0
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
      event.preventDefault()
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        accumulated = 0
        locked = false
      }, 180)
      // Además de esperar a que el gesto termine, deja pasar la animación antes de otro paso.
      if (locked || event.timeStamp - lastStep < 600) return
      accumulated += event.deltaX
      if (Math.abs(accumulated) > 60) {
        step.current(accumulated > 0 ? 1 : -1)
        locked = true
        lastStep = event.timeStamp
      }
    }
    element.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      element.removeEventListener('wheel', onWheel)
      window.clearTimeout(timer)
    }
  }, [target])
}
