import './style.css'
import profilePhoto from './assets/Andres.jpeg'
import cvFile from './assets/pdf/AndresCV.pdf'

const icon = (name) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/>',
    external: '<path d="M14 4h6v6m0-6-9 9M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L9.1 10.8a16 16 0 0 0 4.1 4.1l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-7 0C5.1-.4 3.9 0 3.9 0A5.4 5.4 0 0 0 3.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4.2-2"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
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

const skills = [
  ['Lenguajes de programación', ['Python', 'Java']],
  ['Frameworks, librerías y protocolos', ['Ollama', 'Django', 'Node.js', 'Spring Boot', 'JWT']],
  ['Bases de datos', ['MySQL', 'MongoDB']],
  ['DevOps y herramientas', ['Docker', 'Git', 'GitHub']],
]

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Ir al contenido</a>
  <header class="navbar" id="navbar">
    <div class="container nav-inner">
      <a class="brand" href="#inicio" aria-label="Ir al inicio"><span class="brand-mark">AM</span><span class="brand-name">Andrés Maya</span></a>
      <nav class="nav-links" id="navLinks" aria-label="Navegación principal">
        <a href="#perfil">Perfil</a><a href="#proyectos">Proyectos</a><a href="#formacion">Formación</a><a href="#habilidades">Habilidades</a><a href="#credenciales">Credenciales</a><a href="#contacto">Contacto</a>
      </nav>
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
      <div class="skills-grid">${skills.map(([title, items], index) => `<article class="skill-card reveal"><span class="skill-index">0${index + 1}</span><h3>${title}</h3><div class="skill-items">${items.map((item) => `<span>${item}</span>`).join('')}</div></article>`).join('')}</div>
      <div class="languages reveal"><div><span>Idioma nativo</span><strong>Español</strong><div class="language-bar"><i style="width:100%"></i></div></div><div><span>Competencia intermedia alta</span><strong>Inglés · B2</strong><div class="language-bar"><i style="width:72%"></i></div></div></div>
    </div></section>

    <section class="section credentials" id="credenciales"><div class="container credentials-inner reveal"><p class="eyebrow"><span></span> Aprendizaje continuo</p><h2>Credenciales</h2><div class="credentials-empty" aria-hidden="true"></div></div></section>

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

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
}), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
document.querySelector('#year').textContent = new Date().getFullYear()
