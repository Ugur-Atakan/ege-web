import '@/app/globals.css'
import { languages } from '@/i18n/settings'
import { dir } from 'i18next'

import React from "react"
import Navbar from './components/Navbar/Navbar'
import PDFSlider from './components/PDFSlider/PDFSlider'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Registate Blog',
  description: 'Research and insights on how to start a business in the USA from anywhere in the world.'
}

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

const BlogLayout = (params) => {
    return (
      <html lang={(params.params.lang)} dir={dir(params.params.lang)} >
        <body>
          <Navbar lang={params.params.lang} />
          {params.children}
          <PDFSlider lang={params.params.lang} />
          <Footer lang={params.params.lang} />
        </body>
      </html>
    )
}

export default BlogLayout