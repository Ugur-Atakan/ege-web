'use client';

import Header from './components/Header'
import ContactForm from "./components/ContactForm"
import ContactInfo from './components/ContactInfo'
import BookCall from './components/BookCall'
import FAQs from './components/FAQs'
import Footer from "../common/Footer"

export default function Contact() {
  return (
    <main>
        <Header/>
        <ContactForm />
        <ContactInfo/>
        <BookCall/>
        <FAQs/>
        <Footer/> 
    </main>
  )
}
