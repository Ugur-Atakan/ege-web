import React from "react"
import Navbar from './components/Navbar/Navbar'
import PDFSlider from './components/PDFSlider/PDFSlider'
import Footer from '@/components/common/Footer'

export const metadata = {
  title: 'Registate Blog',
  description: 'Research and insights on how to start a business in the USA from anywhere in the world.'
}


const BlogLayout = (params) => {
    return (
      <section>
        <Navbar lang={params.params.lang} />
        {params.children}
        <PDFSlider lang={params.params.lang} />
        <Footer lang={params.params.lang} />
      </section>
    )
}

export default BlogLayout