import React from 'react'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/common/Navbar/Navbar'))
const ContactForm = dynamic(() => import('./components/ContactForm'))
const ContactInfo = dynamic(() => import('./components/ContactInfo'))
const BookCall = dynamic(() => import('./components/BookCall'))
const FrequentlyAskedQuestions = dynamic(() => import('./components/FrequentlyAskedQuestions'))
const Footer = dynamic(() => import('@/components/common/Footer'))

/**
 * Contact Page component
 * @type {function} Page route
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered components for the page
*/

const Page = async ({ params: { lang } }) => {
  return (
    <main>
        <Navbar lang={lang} />
        <div className='my-14'>
          <ContactForm lang={lang} />
          <ContactInfo lang={lang} />
          <BookCall lang={lang} />
          <FrequentlyAskedQuestions lang={lang} />
          <Footer lang={lang} /> 
        </div>
    </main>
  )
}

export default Page