import Navbar from '../blog/components/Navbar'
import ContactForm from "./components/ContactForm"
import ContactInfo from './components/ContactInfo'
import BookCall from './components/BookCall'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions'
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
        <Navbar lang={lang} />
        <div className='my-14'>
          <ContactForm />
          <ContactInfo/>
          <BookCall lang={lang} />
          <FrequentlyAskedQuestions lang={lang} />
          <Footer lang={lang} /> 
        </div>
    </main>
  )
}

export default Page