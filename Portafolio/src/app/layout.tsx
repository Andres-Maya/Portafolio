import type { Metadata, Viewport } from 'next'
// Fuentes autoalojadas (Fontsource): next/font/google falla en `next dev` con Turbopack.
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/manrope'
import '@fontsource/playfair-display/600-italic.css'
import { InlineScript } from '@/components/InlineScript'
import { PageLoader } from '@/components/PageLoader'
import { LanguageProvider } from '@/components/LanguageProvider'
import { translations } from '@/lib/i18n'
import './globals.css'

export const metadata: Metadata = {
  title: translations.es.meta.title,
  description: translations.es.meta.description,
}

export const viewport: Viewport = {
  themeColor: '#0b0e14',
}

// Aplica idioma y tema guardados antes del primer pintado para evitar parpadeos.
const preferencesScript = `
try {
  var savedLanguage = localStorage.getItem('portfolio-lang');
  document.documentElement.lang = savedLanguage === 'en' || savedLanguage === 'es'
    ? savedLanguage
    : (navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
} catch (_) { document.documentElement.lang = 'es'; }
try {
  var theme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
} catch (_) {
  document.documentElement.dataset.theme = 'dark';
  document.documentElement.style.colorScheme = 'dark';
}`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={preferencesScript} />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <PageLoader />
      </body>
    </html>
  )
}
