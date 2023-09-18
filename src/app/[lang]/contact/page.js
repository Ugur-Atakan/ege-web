'use client';

import Header from './components/Header'
import ContactForm from "./components/ContactForm"
import ContactInfo from './components/ContactInfo'
import BookCall from './components/BookCall'
import FAQs from './components/FAQs'
import Footer from '../components/common/Footer'

export default function Contact({ params: { lang } }) {
  return (
    <main>
        <Header lang={lang} />
        <ContactForm />
        <ContactInfo/>
        <BookCall lang={lang} />
        <FAQs lang={lang} />
        <Footer lang={lang} /> 
    </main>
  )
}
