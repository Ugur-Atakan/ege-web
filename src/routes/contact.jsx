import Header from '../components/Header'
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import ContactInformation from '../components/ContactInformation'
import BookCall from '../components/BookCall'
import FaqsWhite from '../components/FaqsWhite'
import BlogPost from '../components/BlogPost'

function contact() {
  return (
    <main>
        <Header/>
        <Contact/>
        <ContactInformation/>
        <BookCall/>
        <FaqsWhite/>
        <Footer/>
    </main>
  )
}

export default contact