import Header from './components/Header'
import ContactForm from "./components/ContactForm"
import ContactInfo from './components/ContactInfo'
import BookCall from './components/BookCall'
import FAQs from './components/FAQs'
import Footer from '../components/common/Footer'

/**
 * Contact Page component
 * @type {function} Page route
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered components for the page
*/

const Page = ({ params: { lang } }) => {
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

export default Page