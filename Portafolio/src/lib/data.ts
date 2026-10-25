import type { StaticImageData } from 'next/image'
import uccLogo from '@/assets/education/logo_ucc.png'
import rekiemLogo from '@/assets/music/RËKIËM.png'
import estadoLarvalLogo from '@/assets/music/Estado_Larval.png'
import nuPolarisLogo from '@/assets/music/NuPolaris.jpg'
import tecnodesafioCertificate from '@/assets/certificates/CertificadoTecnodesafio2019.jpeg'
import heritageCertificate from '@/assets/certificates/CertificadoInvestigacionParaLaRecuperaciónDelPatrimonioBibliográfico.jpeg'
import scienceClubsCertificate from '@/assets/certificates/Certificado5taEdicionClubesDeCienciaColombia.jpeg'
import cambridgeDiplomaOne from '@/assets/certificates/DiplomaCambridge1.jpeg'
import cambridgeDiplomaTwo from '@/assets/certificates/DiplomaCambridge2.jpeg'
import cambridgeDiplomaThree from '@/assets/certificates/DiplomaCambridge3.jpeg'
import picnicFestCertificate from '@/assets/certificates/CertificadoSolistaPrimerPuestoBatallaBandasPicnicFest.jpeg.jpg'
import aiInitiationCertificate from '@/assets/certificates/Certificado asistencia curso iniciación a la IA.png'
import smartTunerPreview from '@/assets/projects/SmatTuner.png'
import stemLabPreview from '@/assets/projects/StemLab.png'
import turboRatasPreviewOne from '@/assets/projects/TurboRatasGame1.png'
import turboRatasPreviewTwo from '@/assets/projects/TurboRatasGame2.png'
import turboRatasPreviewThree from '@/assets/projects/TurboRatasGame3.png'
import turboRatasPreviewFour from '@/assets/projects/TurboRatasGame4.png'
import turboRatasPreviewFive from '@/assets/projects/TurboRatasGame5.png'
import htmlLogo from '@/assets/skills/html5.svg'
import cssLogo from '@/assets/skills/css3.svg'
import tailwindLogo from '@/assets/skills/tailwindcss.svg'
import javascriptLogo from '@/assets/skills/javascript.svg'
import claudeLogo from '@/assets/skills/claude.svg'
import pythonLogo from '@/assets/skills/python.svg'
import javaLogo from '@/assets/skills/java.svg'
import djangoLogo from '@/assets/skills/django.svg'
import nodejsLogo from '@/assets/skills/nodejs.svg'
import springBootLogo from '@/assets/skills/springboot.svg'
import ollamaLogo from '@/assets/skills/ollama.svg'
import mysqlLogo from '@/assets/skills/mysql.svg'
import mongodbLogo from '@/assets/skills/mongodb.svg'
import postgresqlLogo from '@/assets/skills/postgresql.svg'
import dockerLogo from '@/assets/skills/docker.svg'
import gitLogo from '@/assets/skills/git.svg'
import githubLogo from '@/assets/skills/github.svg'
import vercelLogo from '@/assets/skills/vercel.svg'
import codexLogo from '@/assets/skills/codex.svg'
import opencodeLogo from '@/assets/skills/opencode.svg'
import instagramQr from '@/assets/adittional_items/andresmayk_999_qr.png'
import bloodMeridianCover from '@/assets/adittional_items/blood_meridian.png'
import cobroDeSangreCover from '@/assets/adittional_items/cobro_de_sangre.png'
import laVidaMeViveCover from '@/assets/adittional_items/la_vida_me_vive_amargando_la_vida.png'
import type { Dictionary } from './i18n'

export { uccLogo, rekiemLogo, estadoLarvalLogo, nuPolarisLogo, instagramQr }

export const cvFile = '/AndresCV.pdf'
export const githubUrl = 'https://github.com/Andres-Maya'
export const githubReposUrl = 'https://github.com/Andres-Maya?tab=repositories'
export const instagramUrl = 'https://www.instagram.com/andresmayk_999/'
// Instagram de cada banda (mismo orden que beyond.music.bands).
export const bandInstagrams = ['https://www.instagram.com/rekiem_band/?hl=es', 'https://www.instagram.com/estado.larval/?hl=es', 'https://www.instagram.com/nupolaris/']

// Búsqueda web del libro por título y autor.
export const bookSearchUrl = (title: string, author: string) => `https://www.google.com/search?q=${encodeURIComponent(`"${title}" ${author} libro`)}`

type LinkLabel = keyof Dictionary['projects']['links']

export type Project = {
  number: string
  image?: StaticImageData
  slides?: StaticImageData[]
  demo?: string
  demoLabel?: LinkLabel
  links: [LinkLabel, string][]
}

export const projects: Project[] = [
  { number: '01', image: smartTunerPreview, demo: 'https://smart-tuner-web-simulator.vercel.app/', links: [['repo', 'https://github.com/Andres-Maya/SmartTuner'], ['simulator', 'https://github.com/Andres-Maya/SmartTuner_Web_Simulator']] },
  { number: '02', image: stemLabPreview, demo: 'https://stem-lab-web.vercel.app/', demoLabel: 'webDemo', links: [['repo', 'https://github.com/Andres-Maya/StemLab'], ['webRepo', 'https://github.com/Andres-Maya/StemLabWeb']] },
  { number: '03', image: turboRatasPreviewOne, slides: [turboRatasPreviewTwo, turboRatasPreviewThree, turboRatasPreviewFour, turboRatasPreviewFive], demo: 'https://race-rober-game.vercel.app/', demoLabel: 'play', links: [['repo', 'https://github.com/Andres-Maya/RaceRoberGame']] },
  { number: '04', links: [['repo', 'https://github.com/Andres-Maya/PLataformaContable']] },
  { number: '05', links: [['repo', 'https://github.com/Andres-Maya/SistemaNotificacionUniversitaria']] },
]

export type Skill = { name: string; icon: StaticImageData; monochrome?: boolean }

export const skills: Skill[][] = [
  [{ name: 'Python', icon: pythonLogo }, { name: 'Java', icon: javaLogo }, { name: 'JavaScript', icon: javascriptLogo }],
  [{ name: 'HTML', icon: htmlLogo }, { name: 'CSS', icon: cssLogo }, { name: 'Tailwind CSS', icon: tailwindLogo }],
  [{ name: 'Node.js', icon: nodejsLogo }, { name: 'Django', icon: djangoLogo }, { name: 'Spring Boot', icon: springBootLogo }],
  [{ name: 'Docker', icon: dockerLogo }, { name: 'Vercel', icon: vercelLogo, monochrome: true }, { name: 'Git', icon: gitLogo }, { name: 'GitHub', icon: githubLogo, monochrome: true }],
  [{ name: 'MySQL', icon: mysqlLogo }, { name: 'PostgreSQL', icon: postgresqlLogo }, { name: 'MongoDB', icon: mongodbLogo }],
  [{ name: 'Ollama', icon: ollamaLogo, monochrome: true }, { name: 'Claude', icon: claudeLogo }, { name: 'Codex', icon: codexLogo, monochrome: true }, { name: 'OpenCode', icon: opencodeLogo, monochrome: true }],
]

// Rama académica del árbol de trayectoria (mismo orden que journey.academicItems).
export const academicBranch: { logo?: StaticImageData; certificate?: StaticImageData }[] = [
  { logo: uccLogo },
  { certificate: aiInitiationCertificate },
  { certificate: tecnodesafioCertificate },
  { certificate: scienceClubsCertificate },
]

// Rama laboral: trabajo en GitHub (mismo orden que journey.workItems).
// Cada enlace usa una etiqueta traducida (label) o un nombre propio fijo (text).
export type BranchLink = { href: string; label?: LinkLabel; text?: string }

export const workBranch: { collaboration?: boolean; tags: string[]; links: BranchLink[] }[] = [
  { collaboration: true, tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'JWT'], links: [{ label: 'repo', href: 'https://github.com/Andres-Maya/learn-better_API' }] },
  { tags: ['Kotlin', 'Android', 'JavaScript'], links: [{ label: 'repo', href: 'https://github.com/Andres-Maya/WalkSecurity' }, { label: 'docs', href: 'https://walksecurity.vercel.app' }] },
  { tags: ['Kotlin', 'C++', 'TypeScript', 'Vercel'], links: [{ label: 'projects', href: '#proyectos' }] },
  { tags: ['Java', 'TypeScript', 'Express', 'DDD', 'Docker'], links: [{ text: 'AI Proxy', href: 'https://github.com/Andres-Maya/Pagina-de-consumo-de-IA-Proxy-BACKEND' }, { text: 'Waveline API', href: 'https://github.com/Andres-Maya/TallerReproductorDeMusica' }] },
  { tags: ['Python'], links: [{ label: 'repo', href: 'https://github.com/Andres-Maya/Simulador_bancario' }] },
]

// Certificados que no tienen que ver directamente con software (mismo orden que beyond.credentials.items).
export const extraCertificates: { year: string; images: StaticImageData[] }[] = [
  { year: '2025', images: [cambridgeDiplomaOne, cambridgeDiplomaTwo, cambridgeDiplomaThree] },
  { year: '2023', images: [picnicFestCertificate] },
  { year: '2015', images: [heritageCertificate] },
]

export const picnicFest = picnicFestCertificate

export const books = [bloodMeridianCover, cobroDeSangreCover, laVidaMeViveCover]
