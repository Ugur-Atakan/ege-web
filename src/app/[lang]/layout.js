import '../globals.css'
import { Inter } from 'next/font/google'
import { languages } from '../i18n/settings'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Registate',
  description: '',
}

import { dir } from 'i18next'

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}


export default function RootLayout({
  children,
  params: {
    lang
  }
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
