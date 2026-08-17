export function setupIntro() {
  const overlay = document.querySelector('#introOverlay')
  const stage = document.querySelector('#introNoteStage')
  const guides = document.querySelector('#introGuides')
  const glow = document.querySelector('#introGlow')
  const wordmark = document.querySelector('#introWordmark')
  const skip = document.querySelector('#introSkip')
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!overlay || prefersReduced) {
    overlay?.remove()
    return
  }

  const NOTE_COUNT = 40
  let notes = []
  let animationFrame = 0
  let startTime = 0
  let finished = false
  let exitTimer = 0

  document.body.classList.add('intro-active')

  const easeInOutCubic = (value) => value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2
  const easeOutExpo = (value) => value === 1 ? 1 : 1 - Math.pow(2, -10 * value)

  const buildGuides = () => {
    guides.replaceChildren()
    const centerX = 500
    const centerY = 460
    const maxTheta = 2.1 * Math.PI * 2

    ;[-16, -8, 0, 8, 16].forEach((offset, index) => {
      let pathData = ''
      for (let theta = 0.15; theta <= maxTheta; theta += 0.12) {
        const radius = offset + 46 * theta * 0.55 + 10
        const x = centerX + radius * Math.cos(theta)
        const y = centerY + radius * Math.sin(theta) * 0.72
        pathData += `${theta <= 0.15 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)} `
      }
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', pathData)
      path.classList.add('intro-spiral-arm')
      path.style.opacity = String(0.7 - index * 0.09)
      guides.appendChild(path)
    })
  }

  const buildNotes = () => {
    stage.replaceChildren()
    notes = Array.from({ length: NOTE_COUNT }, (_, index) => {
      const element = document.createElement('div')
      element.className = 'intro-note'
      element.style.color = Math.random() < 0.7 ? 'var(--intro-note-a)' : 'var(--intro-note-b)'
      const symbol = Math.random() < 0.55 ? '#intro-note-eighth' : '#intro-note-quarter'
      element.innerHTML = `<svg viewBox="0 0 24 34" width="100%" height="100%" fill="currentColor"><use href="${symbol}"></use></svg>`
      stage.appendChild(element)

      return {
        element,
        angle: Math.random() * Math.PI * 2,
        turns: 1.5 + Math.random() * 0.9,
        radius: 240 + Math.random() * 260,
        delay: index * 30 + Math.random() * 160,
        spiralDuration: 1500 + Math.random() * 450,
        explodeDuration: 950 + Math.random() * 500,
        explodeAngle: Math.random() * Math.PI * 2,
        explodeDistance: 900 + Math.random() * 500,
        scale: 0.65 + Math.random() * 0.75,
        rotation: Math.random() * 360,
      }
    })
  }

  const finishTime = () => notes.reduce((maximum, note) => Math.max(
    maximum,
    note.delay + note.spiralDuration + note.explodeDuration,
  ), 0)

  const closeIntro = (delay = 1550) => {
    if (finished) return
    finished = true
    wordmark.classList.add('is-visible')
    exitTimer = window.setTimeout(() => {
      overlay.classList.add('is-hidden')
      document.body.classList.remove('intro-active')
      window.setTimeout(() => overlay.remove(), 1100)
    }, delay)
  }

  const drawFrame = (timestamp) => {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const centerX = stage.clientWidth / 2
    const centerY = stage.clientHeight * 0.44

    notes.forEach((note) => {
      let x = 0
      let y = 0
      let opacity = 0
      let scale = note.scale
      let rotation = note.rotation

      if (elapsed >= note.delay && elapsed < note.delay + note.spiralDuration) {
        const progress = (elapsed - note.delay) / note.spiralDuration
        const theta = note.angle + progress * note.turns * Math.PI * 2
        const radius = note.radius * (1 - easeInOutCubic(progress))
        x = radius * Math.cos(theta)
        y = radius * Math.sin(theta) * 0.72
        opacity = Math.min(1, progress * 7)
        rotation += theta * (180 / Math.PI) * 0.4
        scale *= 0.55 + 0.45 * progress
      } else if (elapsed < note.delay + note.spiralDuration + note.explodeDuration && elapsed >= note.delay + note.spiralDuration) {
        const progress = (elapsed - note.delay - note.spiralDuration) / note.explodeDuration
        const easedProgress = easeOutExpo(progress)
        x = easedProgress * note.explodeDistance * Math.cos(note.explodeAngle)
        y = easedProgress * note.explodeDistance * Math.sin(note.explodeAngle) * 0.85
        opacity = progress < 0.55 ? 1 : Math.max(0, 1 - (progress - 0.55) / 0.45)
        rotation += 200 + easedProgress * 260
        scale *= 1 + easedProgress * 0.7
      }

      note.element.style.transform = `translate3d(${centerX + x}px,${centerY + y}px,0) rotate(${rotation}deg) scale(${scale})`
      note.element.style.opacity = opacity
    })

    if (elapsed > 260 && !guides.classList.contains('is-visible')) {
      guides.classList.add('is-visible')
      glow.classList.add('is-visible')
    }

    const end = finishTime()
    if (elapsed > end * 0.72 && !guides.classList.contains('is-fading')) {
      guides.classList.remove('is-visible')
      guides.classList.add('is-fading')
      glow.classList.remove('is-visible')
    }

    if (elapsed > end + 150) {
      closeIntro()
      return
    }
    animationFrame = requestAnimationFrame(drawFrame)
  }

  const skipIntro = () => {
    cancelAnimationFrame(animationFrame)
    clearTimeout(exitTimer)
    guides.classList.remove('is-visible')
    glow.classList.remove('is-visible')
    closeIntro(420)
  }

  skip.addEventListener('click', skipIntro)
  window.addEventListener('resize', buildGuides, { passive: true })
  buildGuides()
  buildNotes()
  animationFrame = requestAnimationFrame(drawFrame)
}
