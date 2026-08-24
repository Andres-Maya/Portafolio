import './style.css'
import profilePhoto from './assets/Andres.jpeg'
import tecnodesafioCertificate from './assets/CertificadoTecnodesafio2019.jpeg'
import heritageCertificate from './assets/CertificadoInvestigacionParaLaRecuperaciónDelPatrimonioBibliográfico.jpeg'
import scienceClubsCertificate from './assets/Certificado5taEdicionClubesDeCienciaColombia.jpeg'
import cvFile from './assets/pdf/AndresCV.pdf'
import { setupIntro } from './intro.js'
import htmlLogo from './assets/skills/html5.svg'
import cssLogo from './assets/skills/css3.svg'
import javascriptLogo from './assets/skills/javascript.svg'
import typescriptLogo from './assets/skills/typescript.svg'
import claudeLogo from './assets/skills/claude.svg'
import pythonLogo from './assets/skills/python.svg'
import javaLogo from './assets/skills/java.svg'
import djangoLogo from './assets/skills/django.svg'
import nodejsLogo from './assets/skills/nodejs.svg'
import springBootLogo from './assets/skills/springboot.svg'
import jwtLogo from './assets/skills/jwt.svg'
import ollamaLogo from './assets/skills/ollama.svg'
import mysqlLogo from './assets/skills/mysql.svg'
import mongodbLogo from './assets/skills/mongodb.svg'
import dockerLogo from './assets/skills/docker.svg'
import gitLogo from './assets/skills/git.svg'
import githubLogo from './assets/skills/github.svg'

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/>',
    external: '<path d="M14 4h6v6m0-6-9 9M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L9.1 10.8a16 16 0 0 0 4.1 4.1l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.1-.4 3.9 0 3.9 0A5.4 5.4 0 0 0 3.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4.2-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
    sun: '<circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>',
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`
}

const projects = [
  {
    number: '01', label: 'Proyecto full-stack destacado', title: 'Plataforma de consumo de IA',
    description: 'Aplicación para consumir servicios de IA mediante una cadena de proxies. Incluye chat, estimación de tokens, control de cuotas, planes de usuario y dashboard de consumo.',
    tags: ['React', 'Spring Boot', 'Java', 'Docker', 'DDD'],
    links: [['Frontend', 'https://github.com/Andres-Maya/Pagina-de-consumo-de-IA-Proxy-FRONTEND'], ['Backend', 'https://github.com/Andres-Maya/Pagina-de-consumo-de-IA-Proxy-BACKEND']],
  },
  {
    number: '02', label: 'Música + estructuras de datos', title: 'Waveline Music Player',
    description: 'API REST para administrar canciones y listas de reproducción. Modela el dominio con TypeScript, Express y una lista doblemente enlazada, aplicando separación por capas.',
    tags: ['TypeScript', 'Node.js', 'Express', 'REST API'],
    links: [['Ver repositorio', 'https://github.com/Andres-Maya/TallerReproductorDeMusica']],
  },
  {
    number: '03', label: 'Arquitectura de software', title: 'Plataforma Contable',
    description: 'Sistema en Java diseñado desde múltiples vistas arquitectónicas: contexto, funcional, lógica, desarrollo y despliegue. Una muestra del proceso de diseño antes de construir.',
    tags: ['Java', 'Arquitectura', 'UML', 'Diseño de software'],
    links: [['Ver repositorio', 'https://github.com/Andres-Maya/PLataformaContable']],
  },
  {
    number: '04', label: 'Diseño orientado a objetos', title: 'Notificaciones Universitarias',
    description: 'Sistema académico de notificaciones construido en Java, acompañado por su diagrama de clases y una estructura orientada a objetos para modelar el dominio universitario.',
    tags: ['Java', 'POO', 'UML', 'Patrones'],
    links: [['Ver repositorio', 'https://github.com/Andres-Maya/SistemaNotificacionUniversitaria']],
  },
]

const certificates = [
  {
    title: 'Tecnodesafío 2019',
    issuer: 'SENA · Tecnoacademia · SENNOVA',
    year: '2019',
    image: tecnodesafioCertificate,
  },
  {
    title: 'Investigación para la Recuperación del Patrimonio Bibliográfico',
    issuer: 'Alcaldía Municipal de Túquerres',
    year: '2015',
    image: heritageCertificate,
  },
  {
    title: '5.ª edición de Clubes de Ciencia Colombia',
    issuer: 'Clubes de Ciencia Colombia · SENA',
    year: '2019',
    image: scienceClubsCertificate,
  },
]

const skills = [
  ['Lenguajes de programación', [{ name: 'Python', icon: pythonLogo }, { name: 'Java', icon: javaLogo }, { name: 'JavaScript', icon: javascriptLogo }, { name: 'TypeScript', icon: typescriptLogo }]],
  ['Desarrollo web, frameworks y protocolos', [{ name: 'HTML', icon: htmlLogo }, { name: 'CSS', icon: cssLogo }, { name: 'Django', icon: djangoLogo }, { name: 'Node.js', icon: nodejsLogo }, { name: 'Spring Boot', icon: springBootLogo }, { name: 'JWT', icon: jwtLogo }]],
  ['IA y asistentes', [{ name: 'Ollama', icon: ollamaLogo }, { name: 'Claude', icon: claudeLogo }]],
  ['Bases de datos', [{ name: 'MySQL', icon: mysqlLogo }, { name: 'MongoDB', icon: mongodbLogo }]],
  ['DevOps y herramientas', [{ name: 'Docker', icon: dockerLogo }, { name: 'Git', icon: gitLogo }, { name: 'GitHub', icon: githubLogo }]],
]

const musicalNotes = [
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

document.querySelector('#app').innerHTML = `
  <div class="intro-overlay" id="introOverlay" aria-label="Presentación de Andrés Maya">
    <svg width="0" height="0" class="intro-defs" aria-hidden="true"><defs>
      <symbol id="intro-note-quarter" viewBox="0 0 24 34"><ellipse cx="7.5" cy="27" rx="6.2" ry="4.4" transform="rotate(-18 7.5 27)"/><rect x="12.4" y="2" width="2.3" height="25.5" rx="1"/></symbol>
      <symbol id="intro-note-eighth" viewBox="0 0 24 34"><ellipse cx="7.5" cy="27" rx="6.2" ry="4.4" transform="rotate(-18 7.5 27)"/><rect x="12.4" y="2" width="2.3" height="25.5" rx="1"/><path d="M14.7 2.2C19 3.4 22.5 6.8 21.6 12.3C21.1 15.2 19.2 16.9 16.9 17.8C19.4 15.9 20 13.6 19.4 11.2C18.8 8.7 16.9 6.5 14.7 5.6Z"/></symbol>
    </defs></svg>
    <svg class="intro-guides" id="introGuides" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg>
    <div class="intro-glow" id="introGlow"></div>
    <div class="intro-note-stage" id="introNoteStage" aria-hidden="true"></div>
    <div class="intro-wordmark" id="introWordmark"><span>AM</span><h1>Andrés Maya</h1><div></div><p>Software · Música · Creatividad</p></div>
    <button class="intro-skip" id="introSkip" type="button">Saltar intro</button>
  </div>
  <div class="music-background" aria-hidden="true">
    <div class="music-parallax" id="musicParallax">
      ${musicalNotes.map(([symbol, x, y, size, rotation, delay, duration]) => `
        <span class="music-note" style="--x:${x}%;--y:${y}%;--size:${size}px;--rotation:${rotation}deg;--delay:${delay}ms;--duration:${duration}s"><i>${symbol}</i></span>
      `).join('')}
    </div>
  </div>
  <a class="skip-link" href="#main">Ir al contenido</a>
  <header class="navbar" id="navbar">
    <div class="container nav-inner">
      <a class="brand" href="#inicio" aria-label="Ir al inicio"><span class="brand-avatar" id="brandAvatar"><span class="brand-initials">AM</span><img src="${profilePhoto}" alt=""></span><span class="brand-name">Andrés Maya</span></a>
      <nav class="nav-links" id="navLinks" aria-label="Navegación principal">
        <a href="#perfil">Perfil</a><a href="#proyectos">Proyectos</a><a href="#formacion">Formación</a><a href="#habilidades">Habilidades</a><a href="#credenciales">Credenciales</a><a href="#contacto">Contacto</a>
      </nav>
      <button class="theme-toggle" id="themeToggle" type="button" aria-label="Cambiar a modo claro" aria-pressed="true"><span class="theme-icon theme-sun">${icon('sun')}</span><span class="theme-icon theme-moon">${icon('moon')}</span></button>
      <a class="nav-cv" href="${cvFile}" target="_blank" rel="noopener">Ver CV ${icon('external')}</a>
      <button class="menu-button" id="menuButton" type="button" aria-label="Abrir menú" aria-controls="navLinks" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="inicio">
      <div class="hero-glow hero-glow-one"></div><div class="hero-glow hero-glow-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span> Hola, soy Andrés</p>
          <h1>Software, música<br>y <em>creatividad.</em></h1>
          <p class="hero-lede">Estudiante de Ingeniería de Software, músico y presentador colombiano. Me interesa crear soluciones digitales claras, útiles y bien diseñadas.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#proyectos">Conoce mi trabajo ${icon('arrow')}</a>
            <a class="button button-secondary" href="${cvFile}" target="_blank" rel="noopener">${icon('download')} Ver CV</a>
          </div>
          <div class="hero-facts" aria-label="Datos destacados"><div><strong>5°</strong><span>Semestre</span></div><div><strong>2</strong><span>Lenguajes</span></div><div><strong>B2</strong><span>Inglés</span></div></div>
        </div>
        <div class="portrait-wrap reveal">
          <div class="portrait-frame">
            <div class="portrait-label">Pasto · Colombia</div>
            <img src="${profilePhoto}" alt="Retrato de Andrés Camilo Maya Rosero">
            <div class="portrait-caption"><span>Andrés Camilo</span><span>Software &amp; Música</span></div>
          </div>
          <div class="floating-note note-code"><span>&lt;/&gt;</span> Desarrollo</div><div class="floating-note note-music"><span>♪</span> Músico</div>
        </div>
      </div>
      <a class="scroll-hint" href="#perfil"><span></span> Descubre más</a>
    </section>

    <section class="section about" id="perfil"><div class="container">
      <div class="section-heading reveal"><p class="eyebrow"><span></span> Perfil</p><h2>Más que código,<br><em>ideas que conectan.</em></h2></div>
      <div class="about-grid">
        <div class="about-lead reveal"><p>Soy estudiante de quinto semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia. Combino mi formación tecnológica con la música y la presentación.</p></div>
        <div class="about-copy reveal"><p>Tengo conocimientos en Java, Python, HTML, GitHub, MongoDB, diseño de software y escritura de prompts para IA. Me motiva aprender mediante proyectos y convertir conceptos en experiencias que otras personas puedan usar.</p><p>En la música interpreto batería, guitarra, bajo y voz, con formación en teoría musical. Ese lado creativo influye en mi forma de comunicar, trabajar en equipo y resolver problemas.</p><div class="interest-row"><span>Desarrollo de software</span><span>Inteligencia artificial</span><span>Música</span><span>Comunicación</span></div></div>
      </div>
    </div></section>

    <section class="section projects" id="proyectos"><div class="container">
      <div class="section-heading section-heading-row reveal"><div><p class="eyebrow"><span></span> Trabajo seleccionado</p><h2>Proyectos<br><em>destacados.</em></h2></div><p>Una selección de proyectos públicos que refleja mi aprendizaje en desarrollo, arquitectura y diseño de software.</p></div>
      <div class="project-grid">${projects.map((project, index) => `
        <article class="project-card reveal ${index === 0 ? 'project-featured' : ''}">
          <div class="project-top"><span class="project-number">${project.number}</span><span class="project-label">${project.label}</span></div>
          <h3>${project.title}</h3><p>${project.description}</p>
          <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          <div class="project-links">${project.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ${icon('external')}</a>`).join('')}</div>
        </article>`).join('')}</div>
      <a class="all-projects reveal" href="https://github.com/Andres-Maya?tab=repositories" target="_blank" rel="noopener">Ver todos los proyectos en GitHub ${icon('arrow')}</a>
    </div></section>

    <section class="section education" id="formacion"><div class="container education-grid">
      <div class="section-heading reveal"><p class="eyebrow"><span></span> Formación</p><h2>Aprender para<br><em>construir mejor.</em></h2></div>
      <article class="education-card reveal"><div class="education-year">Actualidad</div><div class="ucc-mark">UCC</div><div><p class="card-kicker">Pregrado · 5° semestre</p><h3>Ingeniería de Software</h3><p>Universidad Cooperativa de Colombia</p><span>Campus Pasto · Colombia</span></div></article>
    </div></section>

    <section class="section skills" id="habilidades"><div class="container">
      <div class="section-heading section-heading-row reveal"><div><p class="eyebrow"><span></span> Caja de herramientas</p><h2>Habilidades<br><em>técnicas.</em></h2></div><p>Tecnologías y herramientas con las que he trabajado durante mi formación y proyectos personales.</p></div>
      <div class="skills-grid">${skills.map(([title, items], index) => `<article class="skill-card reveal"><span class="skill-index">0${index + 1}</span><h3>${title}</h3><div class="skill-items">${items.map((item) => {
        const skill = typeof item === 'string' ? { name: item } : item
        return `<div class="skill-item ${skill.icon ? 'has-logo' : ''}">${skill.icon ? `<img src="${skill.icon}" alt="" loading="lazy">` : ''}<b>${skill.name}</b></div>`
      }).join('')}</div></article>`).join('')}
        <article class="skill-card language-card reveal">
          <span class="skill-index">06</span>
          <h3>Idiomas</h3>
          <div class="language-list">
            <div class="language-item"><span>Español</span><strong>Nativo</strong></div>
            <div class="language-item"><span>Inglés</span><strong>B2</strong></div>
          </div>
        </article>
      </div>
    </div></section>

    <section class="section credentials" id="credenciales"><div class="container credentials-inner">
      <div class="credentials-heading reveal"><p class="eyebrow"><span></span> Aprendizaje continuo</p><h2>Certificados</h2><p>Reconocimientos y experiencias que han acompañado mi formación académica, tecnológica y creativa.</p></div>
      <div class="certificate-grid">${certificates.map((certificate) => `
        <article class="certificate-card reveal">
          <a class="certificate-preview" href="${certificate.image}" target="_blank" rel="noopener" aria-label="Abrir certificado: ${certificate.title}">
            <img src="${certificate.image}" alt="Certificado ${certificate.title}" loading="lazy">
            <span>Ver certificado ${icon('external')}</span>
          </a>
          <div class="certificate-content"><span>${certificate.year}</span><h3>${certificate.title}</h3><p>${certificate.issuer}</p></div>
        </article>`).join('')}</div>
    </div></section>

    <section class="section contact" id="contacto"><div class="container contact-card reveal">
      <p class="eyebrow light"><span></span> Contacto</p><h2>¿Creamos algo<br><em>juntos?</em></h2><p>Estoy abierto a conversar sobre software, proyectos creativos, música y nuevas oportunidades de aprendizaje.</p>
      <a class="contact-email" href="mailto:andrescamilomaya07@gmail.com">andrescamilomaya07@gmail.com ${icon('arrow')}</a>
      <div class="contact-links"><a href="tel:+573164066498">${icon('phone')}<span>316 406 6498</span></a><a href="https://www.linkedin.com/in/andrés-camilo-maya-rosero-4b5702359/" target="_blank" rel="noopener">${icon('linkedin')}<span>LinkedIn</span></a><a href="https://github.com/Andres-Maya" target="_blank" rel="noopener">${icon('github')}<span>GitHub</span></a></div>
    </div></section>
  </main>
  <footer><div class="container footer-inner"><p>© <span id="year"></span> Andrés Camilo Maya Rosero</p><p>Diseñado y desarrollado en Pasto, Colombia.</p><a href="#inicio">Volver arriba ↑</a></div></footer>
`

const menuButton = document.querySelector('#menuButton')
const navLinks = document.querySelector('#navLinks')
const navbar = document.querySelector('#navbar')
const musicParallax = document.querySelector('#musicParallax')
const musicBackground = document.querySelector('.music-background')
const themeToggle = document.querySelector('#themeToggle')
const portraitImage = document.querySelector('.portrait-frame img')
const brandAvatar = document.querySelector('#brandAvatar')
const heroSection = document.querySelector('#inicio')

const syncThemeToggle = () => {
  const isDark = document.documentElement.dataset.theme === 'dark'
  themeToggle.setAttribute('aria-pressed', String(isDark))
  themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
  themeToggle.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
}

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
  localStorage.setItem('portfolio-theme', nextTheme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextTheme === 'dark' ? '#0b0e14' : '#f7f5ef')
  syncThemeToggle()
})
syncThemeToggle()
document.querySelector('meta[name="theme-color"]')?.setAttribute('content', document.documentElement.dataset.theme === 'dark' ? '#0b0e14' : '#f7f5ef')
setupIntro()

const syncPortraitVisibility = () => {
  const showAvatar = heroSection.getBoundingClientRect().bottom <= navbar.offsetHeight + 120
  portraitImage.classList.toggle('is-hidden', showAvatar)
  brandAvatar.classList.toggle('has-photo', showAvatar)
}

window.addEventListener('scroll', syncPortraitVisibility, { passive: true })
window.addEventListener('resize', syncPortraitVisibility, { passive: true })
syncPortraitVisibility()

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open')
  menuButton.classList.toggle('is-open', isOpen)
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
})
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open'); menuButton.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false')
}))
window.addEventListener('scroll', () => navbar.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true })

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let pointerX = 0
  let pointerY = 0
  let frameRequested = false

  const updateMusicParallax = () => {
    const scrollProgress = window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
    musicBackground.style.setProperty('--music-x', `${pointerX * 18}px`)
    musicBackground.style.setProperty('--music-y', `${(pointerY * 12) - (scrollProgress * 95)}px`)
    frameRequested = false
  }

  const requestMusicFrame = () => {
    if (!frameRequested) {
      frameRequested = true
      requestAnimationFrame(updateMusicParallax)
    }
  }

  window.addEventListener('pointermove', (event) => {
    pointerX = (event.clientX / window.innerWidth) - 0.5
    pointerY = (event.clientY / window.innerHeight) - 0.5
    requestMusicFrame()
  }, { passive: true })
  window.addEventListener('scroll', requestMusicFrame, { passive: true })
  requestMusicFrame()
}

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  entry.target.classList.toggle('is-visible', entry.isIntersecting)
}), { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
document.querySelector('#year').textContent = new Date().getFullYear()
