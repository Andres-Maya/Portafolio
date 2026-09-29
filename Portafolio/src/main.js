import './style.css'
import profilePhoto from './assets/profile/Andres.jpeg'
import profileLogo from './assets/profile/logoperfil.png'
import uccLogo from './assets/education/logo_ucc.png'
import rekiemLogo from './assets/work/RËKIËM.png'
import estadoLarvalLogo from './assets/work/Estado_Larval.png'
import tecnodesafioCertificate from './assets/certificates/CertificadoTecnodesafio2019.jpeg'
import heritageCertificate from './assets/certificates/CertificadoInvestigacionParaLaRecuperaciónDelPatrimonioBibliográfico.jpeg'
import scienceClubsCertificate from './assets/certificates/Certificado5taEdicionClubesDeCienciaColombia.jpeg'
import cambridgeDiplomaOne from './assets/certificates/DiplomaCambridge1.jpeg'
import cambridgeDiplomaTwo from './assets/certificates/DiplomaCambridge2.jpeg'
import cambridgeDiplomaThree from './assets/certificates/DiplomaCambridge3.jpeg'
import picnicFestCertificate from './assets/certificates/CertificadoSolistaPrimerPuestoBatallaBandasPicnicFest.jpeg.jpg'
import aiInitiationCertificate from './assets/certificates/Certificado asistencia curso iniciación a la IA.png'
import cvFile from './assets/pdf/AndresCV.pdf'
import smartTunerPreview from './assets/projects/SmatTuner.png'
import stemLabPreview from './assets/projects/StemLab.png'
import htmlLogo from './assets/skills/html5.svg'
import cssLogo from './assets/skills/css3.svg'
import tailwindLogo from './assets/skills/tailwindcss.svg'
import javascriptLogo from './assets/skills/javascript.svg'
import claudeLogo from './assets/skills/claude.svg'
import pythonLogo from './assets/skills/python.svg'
import javaLogo from './assets/skills/java.svg'
import djangoLogo from './assets/skills/django.svg'
import nodejsLogo from './assets/skills/nodejs.svg'
import springBootLogo from './assets/skills/springboot.svg'
import ollamaLogo from './assets/skills/ollama.svg'
import mysqlLogo from './assets/skills/mysql.svg'
import mongodbLogo from './assets/skills/mongodb.svg'
import dockerLogo from './assets/skills/docker.svg'
import gitLogo from './assets/skills/git.svg'
import githubLogo from './assets/skills/github.svg'
import vercelLogo from './assets/skills/vercel.svg'
import codexLogo from './assets/skills/codex.svg'
import opencodeLogo from './assets/skills/opencode.svg'
import { translations, languages } from './i18n.js'

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
    previous: '<path d="m15 18-6-6 6-6"/>',
    next: '<path d="m9 18 6-6-6-6"/>',
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`
}

const projects = [
  { number: '01', image: smartTunerPreview, demo: 'https://smart-tuner-web-simulator.vercel.app/', links: [['repo', 'https://github.com/Andres-Maya/SmartTuner'], ['simulator', 'https://github.com/Andres-Maya/SmartTuner_Web_Simulator']] },
  { number: '02', image: stemLabPreview, demo: 'https://stem-lab-web.vercel.app/', demoLabel: 'webDemo', links: [['repo', 'https://github.com/Andres-Maya/StemLab'], ['webRepo', 'https://github.com/Andres-Maya/StemLabWeb']] },
  { number: '03', links: [['repo', 'https://github.com/Andres-Maya/PLataformaContable']] },
  { number: '04', links: [['repo', 'https://github.com/Andres-Maya/SistemaNotificacionUniversitaria']] },
]

const certificates = [
  { year: '2026', images: [aiInitiationCertificate] },
  { year: '2025', images: [cambridgeDiplomaOne, cambridgeDiplomaTwo, cambridgeDiplomaThree] },
  { year: '2023', images: [picnicFestCertificate] },
  { year: '2019', images: [tecnodesafioCertificate] },
  { year: '2015', images: [heritageCertificate] },
  { year: '2019', images: [scienceClubsCertificate] },
]

const skills = [
  [{ name: 'Python', icon: pythonLogo }, { name: 'Java', icon: javaLogo }, { name: 'JavaScript', icon: javascriptLogo }],
  [{ name: 'HTML', icon: htmlLogo }, { name: 'CSS', icon: cssLogo }, { name: 'Tailwind CSS', icon: tailwindLogo }],
  [{ name: 'Node.js', icon: nodejsLogo }, { name: 'Django', icon: djangoLogo }, { name: 'Spring Boot', icon: springBootLogo }],
  [{ name: 'Docker', icon: dockerLogo }, { name: 'Vercel', icon: vercelLogo, monochrome: true }, { name: 'Git', icon: gitLogo }, { name: 'GitHub', icon: githubLogo, monochrome: true }],
  [{ name: 'MySQL', icon: mysqlLogo }, { name: 'MongoDB', icon: mongodbLogo }],
  [{ name: 'Ollama', icon: ollamaLogo, monochrome: true }, { name: 'Claude', icon: claudeLogo }, { name: 'Codex', icon: codexLogo, monochrome: true }, { name: 'OpenCode', icon: opencodeLogo, monochrome: true }],
]

let language = languages.includes(document.documentElement.lang) ? document.documentElement.lang : 'es'
const t = (key) => key.split('.').reduce((value, part) => value?.[part], translations[language]) ?? key
// Marca un elemento para traducir su contenido y, opcionalmente, atributos ("alt:clave;aria-label:clave").
const i18n = (key, attributes) => `${key ? `data-i18n="${key}"` : ''}${attributes ? ` data-i18n-attr="${attributes}"` : ''}`

const carouselControls = (name) => `
  <div class="carousel-controls">
    <button class="carousel-button carousel-previous" type="button" ${i18n('', `aria-label:carousels.${name}.previous`)}>${icon('previous')}</button>
    <span class="carousel-status" aria-live="polite">1 / 1</span>
    <button class="carousel-button carousel-next" type="button" ${i18n('', `aria-label:carousels.${name}.next`)}>${icon('next')}</button>
  </div>`

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
  <div class="music-background" aria-hidden="true">
    <div class="music-parallax" id="musicParallax">
      ${musicalNotes.map(([symbol, x, y, size, rotation, delay, duration]) => `
        <span class="music-note" style="--x:${x}%;--y:${y}%;--size:${size}px;--rotation:${rotation}deg;--delay:${delay}ms;--duration:${duration}s"><i>${symbol}</i></span>
      `).join('')}
    </div>
  </div>
  <a class="skip-link" href="#main" ${i18n('skip')}></a>
  <header class="navbar" id="navbar">
    <div class="container nav-inner">
      <a class="brand" href="#inicio" ${i18n('', 'aria-label:nav.home')}><span class="brand-avatar"><img src="${profileLogo}" alt=""></span><span class="brand-name">Andrés Maya</span></a>
      <nav class="nav-links" id="navLinks" ${i18n('', 'aria-label:nav.label')}>
        <a href="#perfil" ${i18n('nav.profile')}></a><a href="#proyectos" ${i18n('nav.projects')}></a><a href="#formacion" ${i18n('nav.education')}></a><a href="#experiencia" ${i18n('nav.experience')}></a><a href="#habilidades" ${i18n('nav.skills')}></a><a href="#hobbies" ${i18n('nav.hobbies')}></a><a href="#credenciales" ${i18n('nav.credentials')}></a><a href="#contacto" ${i18n('nav.contact')}></a>
      </nav>
      <button class="language-toggle" id="languageToggle" type="button" ${i18n('', 'aria-label:nav.switchLanguage;title:nav.switchLanguage')}><span data-language="es">ES</span><span data-language="en">EN</span></button>
      <button class="theme-toggle" id="themeToggle" type="button" aria-pressed="true"><span class="theme-icon theme-sun">${icon('sun')}</span><span class="theme-icon theme-moon">${icon('moon')}</span></button>
      <a class="nav-cv" href="${cvFile}" target="_blank" rel="noopener"><span ${i18n('nav.cv')}></span> ${icon('external')}</a>
      <button class="menu-button" id="menuButton" type="button" aria-controls="navLinks" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="inicio">
      <div class="hero-glow hero-glow-one"></div><div class="hero-glow hero-glow-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span> <b ${i18n('hero.eyebrow')}></b></p>
          <h1 ${i18n('hero.title')}></h1>
          <p class="hero-lede" ${i18n('hero.lede')}></p>
          <div class="hero-actions">
            <a class="button button-primary" href="#proyectos"><span ${i18n('hero.cta')}></span> ${icon('arrow')}</a>
            <a class="button button-secondary" href="${cvFile}" target="_blank" rel="noopener">${icon('download')} <span ${i18n('hero.cv')}></span></a>
          </div>
          <div class="hero-facts" ${i18n('', 'aria-label:hero.factsLabel')}>${translations.es.hero.facts.map((_, index) => `<div><strong ${i18n(`hero.facts.${index}.0`)}></strong><span ${i18n(`hero.facts.${index}.1`)}></span></div>`).join('')}</div>
        </div>
        <div class="portrait-wrap reveal">
          <div class="portrait-frame">
            <div class="portrait-label">Pasto · Colombia</div>
            <img src="${profilePhoto}" ${i18n('', 'alt:hero.portraitAlt')}>
            <div class="portrait-caption"><span>Andrés Camilo</span><span ${i18n('hero.caption')}></span></div>
          </div>
        </div>
      </div>
      
    </section>

    <section class="section about" id="perfil"><div class="container">
      <div class="section-heading reveal"><p class="eyebrow"><span></span> <b ${i18n('about.eyebrow')}></b></p><h2 ${i18n('about.title')}></h2></div>
      <div class="about-grid">
        <div class="about-copy reveal">${translations.es.about.paragraphs.map((_, index) => `<p ${i18n(`about.paragraphs.${index}`)}></p>`).join('')}<div class="interest-row">${translations.es.about.interests.map((_, index) => `<span ${i18n(`about.interests.${index}`)}></span>`).join('')}</div></div>
      </div>
    </div></section>

    <section class="section projects" id="proyectos"><div class="container">
      <div class="section-heading section-heading-row reveal"><div><p class="eyebrow"><span></span> <b ${i18n('projects.eyebrow')}></b></p><h2 ${i18n('projects.title')}></h2></div><p ${i18n('projects.intro')}></p></div>
      <div class="carousel reveal" data-carousel>
        <div class="carousel-viewport"><div class="carousel-track project-grid">${projects.map((project, index) => `
        <article class="project-card">
          <div class="project-top"><span class="project-number">${project.number}</span><span class="project-label" ${i18n(`projects.items.${index}.label`)}></span></div>
          ${project.image ? `<a class="project-preview" href="${project.demo}" target="_blank" rel="noopener" ${i18n('', `aria-label:projects.links.${project.demoLabel ?? 'demo'}`)}><img src="${project.image}" ${i18n('', `alt:projects.items.${index}.imageAlt`)} loading="lazy"><span class="project-preview-icon" aria-hidden="true">${icon('external')}</span></a>` : ''}
          <h3 ${i18n(`projects.items.${index}.title`)}></h3><p ${i18n(`projects.items.${index}.description`)}></p>
          <div class="tag-list">${translations.es.projects.items[index].tags.map((_, tagIndex) => `<span ${i18n(`projects.items.${index}.tags.${tagIndex}`)}></span>`).join('')}</div>
          <div class="project-links">${project.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener"><span ${i18n(`projects.links.${label}`)}></span> ${icon('external')}</a>`).join('')}</div>
        </article>`).join('')}</div></div>
        ${carouselControls('projects')}
      </div>
      <a class="all-projects reveal" href="https://github.com/Andres-Maya?tab=repositories" target="_blank" rel="noopener"><span ${i18n('projects.all')}></span> ${icon('arrow')}</a>
    </div></section>

    <section class="section education" id="formacion"><div class="container education-grid">
      <div class="section-heading reveal"><p class="eyebrow"><span></span> <b ${i18n('education.eyebrow')}></b></p><h2 ${i18n('education.title')}></h2></div>
      <article class="education-card reveal"><div class="education-year" ${i18n('education.year')}></div><div class="ucc-mark"><img src="${uccLogo}" ${i18n('', 'alt:education.logoAlt')}></div><div><p class="card-kicker" ${i18n('education.kicker')}></p><h3 ${i18n('education.degree')}></h3><p ${i18n('education.school')}></p><span ${i18n('education.campus')}></span></div></article>
    </div></section>

    <section class="section experience" id="experiencia"><div class="container">
      <div class="section-heading section-heading-row reveal"><div><p class="eyebrow"><span></span> <b ${i18n('experience.eyebrow')}></b></p><h2 ${i18n('experience.title')}></h2></div><p ${i18n('experience.intro')}></p></div>
      <div class="experience-grid">${[
        '<div class="experience-mark mentor-mark" aria-hidden="true">AJ</div>',
        `<div class="experience-mark"><img src="${uccLogo}" ${i18n('', 'alt:education.logoAlt')} loading="lazy"></div>`,
        `<div class="experience-mark"><img src="${uccLogo}" ${i18n('', 'alt:education.logoAlt')} loading="lazy"></div>`,
        `<div class="experience-mark work-mark work-mark-light"><img src="${rekiemLogo}" ${i18n('', 'alt:experience.rekiemAlt')} loading="lazy"></div>`,
        `<div class="experience-mark work-mark work-mark-dark"><img src="${estadoLarvalLogo}" ${i18n('', 'alt:experience.estadoLarvalAlt')} loading="lazy"></div>`,
      ].map((mark, index) => `
        <article class="experience-card reveal">${mark}<div class="experience-content"><p class="card-kicker" ${i18n(`experience.items.${index}.kicker`)}></p><h3 ${i18n(`experience.items.${index}.title`)}></h3><p ${i18n(`experience.items.${index}.place`)}></p><span ${i18n(`experience.items.${index}.detail`)}></span></div></article>`).join('')}
      </div>
    </div></section>

    <section class="section skills" id="habilidades"><div class="container">
      <div class="section-heading section-heading-row reveal"><div><p class="eyebrow"><span></span> <b ${i18n('skills.eyebrow')}></b></p><h2 ${i18n('skills.title')}></h2></div><p ${i18n('skills.intro')}></p></div>
      <div class="carousel reveal" data-carousel>
        <div class="carousel-viewport"><div class="carousel-track skills-grid">${skills.map((items, index) => `<article class="skill-card"><span class="skill-index">0${index + 1}</span><h3 ${i18n(`skills.categories.${index}`)}></h3><div class="skill-items">${items.map((skill) => `<div class="skill-item has-logo ${skill.monochrome ? 'is-monochrome' : ''}"><img src="${skill.icon}" alt="" loading="lazy"><b>${skill.name}</b></div>`).join('')}</div></article>`).join('')}</div></div>
        ${carouselControls('skills')}
      </div>
      <article class="skill-card language-card reveal">
          <span class="skill-index">07</span>
          <h3 ${i18n('skills.languagesTitle')}></h3>
          <div class="language-list">${translations.es.skills.languages.map((_, index) => `
            <div class="language-item"><span ${i18n(`skills.languages.${index}.0`)}></span><strong ${i18n(`skills.languages.${index}.1`)}></strong></div>`).join('')}
          </div>
      </article>
    </div></section>

    <section class="section hobbies" id="hobbies"><div class="container hobbies-grid">
      <div class="section-heading reveal"><p class="eyebrow"><span></span> <b ${i18n('hobbies.eyebrow')}></b></p><h2 ${i18n('hobbies.title')}></h2></div>
      <article class="hobbies-card reveal">
        <p ${i18n('hobbies.intro')}></p>
        <ul>${translations.es.hobbies.items.map((_, index) => `
          <li><strong ${i18n(`hobbies.items.${index}.0`)}></strong> <span ${i18n(`hobbies.items.${index}.1`)}></span></li>`).join('')}
        </ul>
      </article>
    </div></section>

    <section class="section credentials" id="credenciales"><div class="container credentials-inner">
      <div class="credentials-heading reveal"><p class="eyebrow"><span></span> <b ${i18n('credentials.eyebrow')}></b></p><h2 ${i18n('credentials.title')}></h2><p ${i18n('credentials.intro')}></p></div>
      <div class="carousel reveal" data-carousel>
        <div class="carousel-viewport"><div class="carousel-track certificate-grid">${certificates.map((certificate, index) => `
        <article class="certificate-card">
          <div class="certificate-media ${certificate.images.length > 1 ? 'certificate-gallery' : ''}">
            ${certificate.images.map((image, imageIndex) => `
            <a class="certificate-preview" href="${image}" target="_blank" rel="noopener" data-certificate="${index}" data-document="${certificate.images.length > 1 ? imageIndex + 1 : ''}">
              <img src="${image}" alt="" loading="lazy">
              <span><span class="certificate-preview-label"></span> ${icon('external')}</span>
            </a>`).join('')}
          </div>
          <div class="certificate-content"><span>${certificate.year}</span><h3 ${i18n(`credentials.items.${index}.title`)}></h3><p ${i18n(`credentials.items.${index}.issuer`)}></p></div>
        </article>`).join('')}</div></div>
        ${carouselControls('certificates')}
      </div>
    </div></section>

    <section class="section contact" id="contacto"><div class="container contact-card reveal">
      <p class="eyebrow light"><span></span> <b ${i18n('contact.eyebrow')}></b></p><h2 ${i18n('contact.title')}></h2><p ${i18n('contact.text')}></p>
      <a class="contact-email" href="mailto:andrescamilomaya07@gmail.com">andrescamilomaya07@gmail.com ${icon('arrow')}</a>
      <div class="contact-links"><a href="tel:+573164066498">${icon('phone')}<span>316 406 6498</span></a><a href="https://www.linkedin.com/in/andrés-camilo-maya-rosero-4b5702359/" target="_blank" rel="noopener">${icon('linkedin')}<span>LinkedIn</span></a><a href="https://github.com/Andres-Maya" target="_blank" rel="noopener">${icon('github')}<span>GitHub</span></a></div>
    </div></section>
  </main>
  <footer><div class="container footer-inner"><p>© <span id="year"></span> Andrés Camilo Maya Rosero</p><p ${i18n('footer.made')}></p><a href="#inicio" ${i18n('footer.top')}></a></div></footer>
`

const menuButton = document.querySelector('#menuButton')
const navLinks = document.querySelector('#navLinks')
const navbar = document.querySelector('#navbar')
const musicParallax = document.querySelector('#musicParallax')
const musicBackground = document.querySelector('.music-background')
const themeToggle = document.querySelector('#themeToggle')
const languageToggle = document.querySelector('#languageToggle')

const syncThemeToggle = () => {
  const isDark = document.documentElement.dataset.theme === 'dark'
  const label = t(isDark ? 'nav.toLight' : 'nav.toDark')
  themeToggle.setAttribute('aria-pressed', String(isDark))
  themeToggle.setAttribute('aria-label', label)
  themeToggle.title = label
}

const syncMenuButton = () => {
  const isOpen = navLinks.classList.contains('is-open')
  menuButton.classList.toggle('is-open', isOpen)
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', t(isOpen ? 'nav.closeMenu' : 'nav.openMenu'))
}

const applyLanguage = () => {
  document.documentElement.lang = language
  document.title = t('meta.title')
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'))
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18n)
  })
  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    element.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attribute, key] = pair.split(':')
      element.setAttribute(attribute, t(key))
    })
  })
  document.querySelectorAll('.certificate-preview').forEach((preview) => {
    const title = t(`credentials.items.${preview.dataset.certificate}.title`)
    const documentNumber = preview.dataset.document
    const suffix = documentNumber ? `, ${t('credentials.document')} ${documentNumber}` : ''
    preview.setAttribute('aria-label', `${t('credentials.open')} ${title}${suffix}`)
    preview.querySelector('img').alt = `${title}${suffix}`
    preview.querySelector('.certificate-preview-label').textContent = documentNumber ? `${t('credentials.viewDocument')} ${documentNumber}` : t('credentials.viewCertificate')
  })
  languageToggle.querySelectorAll('[data-language]').forEach((option) => {
    option.classList.toggle('is-active', option.dataset.language === language)
  })
  syncThemeToggle()
  syncMenuButton()
}

// Repite la animación de entrada de los bloques visibles: los oculta sin transición y los vuelve a mostrar.
const replayReveal = () => {
  const visibleElements = [...document.querySelectorAll('.reveal.is-visible')]
  visibleElements.forEach((element) => {
    element.style.transition = 'none'
    element.classList.remove('is-visible')
  })
  void document.body.offsetHeight
  visibleElements.forEach((element) => {
    element.style.transition = ''
    element.classList.add('is-visible')
  })
}

languageToggle.addEventListener('click', () => {
  language = language === 'es' ? 'en' : 'es'
  try { localStorage.setItem('portfolio-lang', language) } catch (_) {}
  applyLanguage()
  replayReveal()
})
applyLanguage()

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = nextTheme
  document.documentElement.style.colorScheme = nextTheme
  localStorage.setItem('portfolio-theme', nextTheme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextTheme === 'dark' ? '#0b0e14' : '#f7f5ef')
  syncThemeToggle()
})
document.querySelector('meta[name="theme-color"]')?.setAttribute('content', document.documentElement.dataset.theme === 'dark' ? '#0b0e14' : '#f7f5ef')

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('is-open')
  syncMenuButton()
})
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open')
  syncMenuButton()
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

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const viewport = carousel.querySelector('.carousel-viewport')
  const track = carousel.querySelector('.carousel-track')
  const items = [...track.children]
  const previousButton = carousel.querySelector('.carousel-previous')
  const nextButton = carousel.querySelector('.carousel-next')
  const status = carousel.querySelector('.carousel-status')
  let page = 0

  const getItemsPerPage = () => 1
  const getPageCount = () => Math.ceil(items.length / getItemsPerPage())

  const updateControls = () => {
    const pageCount = getPageCount()
    page = Math.min(page, pageCount - 1)
    status.textContent = `${page + 1} / ${pageCount}`
    previousButton.disabled = page === 0
    nextButton.disabled = page === pageCount - 1
  }

  const goToPage = (nextPage) => {
    page = Math.max(0, Math.min(nextPage, getPageCount() - 1))
    const itemsPerPage = getItemsPerPage()
    const startIndex = Math.min(page * itemsPerPage, items.length - itemsPerPage)
    viewport.scrollTo({ left: items[startIndex].offsetLeft - track.offsetLeft, behavior: 'smooth' })
    updateControls()
  }

  previousButton.addEventListener('click', () => goToPage(page - 1))
  nextButton.addEventListener('click', () => goToPage(page + 1))
  let scrollTimer
  viewport.addEventListener('scroll', () => {
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      const pageCount = getPageCount()
      const maxScroll = viewport.scrollWidth - viewport.clientWidth
      page = maxScroll > 0 ? Math.round((viewport.scrollLeft / maxScroll) * (pageCount - 1)) : 0
      updateControls()
    }, 80)
  }, { passive: true })
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goToPage(page - 1)
    if (event.key === 'ArrowRight') goToPage(page + 1)
  })

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => goToPage(page), 120)
  })
  updateControls()
})

document.querySelector('#year').textContent = new Date().getFullYear()
