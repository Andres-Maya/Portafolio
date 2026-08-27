export function setupIntro() {
  const overlay = document.querySelector('#introOverlay')
  const keyboard = document.querySelector('#introKeyboard')
  const wordmark = document.querySelector('#introWordmark')
  const skip = document.querySelector('#introSkip')
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!overlay || prefersReduced) {
    overlay?.remove()
    return
  }

  const NUM_KEYS = 3
  const NOTE_DURATION = 260
  const GAP = 90
  const RUN_LOOPS = 2
  const WORDMARK_DELAY = 700

  let loopTimer = 0
  let stepIndex = 0
  let note = 0
  let finished = false
  let exitTimer = 0

  document.body.classList.add('intro-active')

  const placeBlackKeys = () => {
    keyboard.querySelectorAll('.intro-black').forEach((el) => el.remove())
    const keys = Array.from(keyboard.children)
    for (let index = 0; index < keys.length - 1; index += 1) {
      const boundary = keys[index].offsetLeft + keys[index].offsetWidth + 1.5
      const black = document.createElement('div')
      black.className = 'intro-black'
      black.style.left = `${boundary}px`
      keyboard.appendChild(black)
    }
  }

  const pressKey = (index, duration) => {
    const key = keyboard.children[index]
    if (!key) return
    key.classList.add('is-on')
    window.setTimeout(() => key.classList.remove('is-on'), duration)
  }

  const runLoop = () => {
    if (finished) return
    pressKey(stepIndex % NUM_KEYS, NOTE_DURATION)
    stepIndex += 1
    note += 1
    if (note > RUN_LOOPS * NUM_KEYS) {
      closeIntro()
      return
    }
    loopTimer = window.setTimeout(runLoop, NOTE_DURATION + GAP)
  }

  const showWordmark = window.setTimeout(() => {
    if (!finished) wordmark.classList.add('is-visible')
  }, WORDMARK_DELAY)

  const closeIntro = (delay = 550) => {
    if (finished) return
    finished = true
    clearTimeout(loopTimer)
    clearTimeout(showWordmark)
    wordmark.classList.add('is-visible')
    exitTimer = window.setTimeout(() => {
      overlay.classList.add('is-hidden')
      document.body.classList.remove('intro-active')
      window.setTimeout(() => overlay.remove(), 1100)
    }, delay)
  }

  const skipIntro = () => {
    clearTimeout(loopTimer)
    clearTimeout(showWordmark)
    clearTimeout(exitTimer)
    closeIntro(220)
  }

  for (let index = 0; index < NUM_KEYS; index += 1) {
    const key = document.createElement('div')
    key.className = 'intro-white'
    keyboard.appendChild(key)
  }
  placeBlackKeys()

  skip.addEventListener('click', skipIntro)
  window.addEventListener('resize', placeBlackKeys, { passive: true })

  runLoop()
}
