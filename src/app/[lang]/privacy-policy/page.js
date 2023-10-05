import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Content from './components/Content'

/**
 * Page route for privacy policy page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} 
*/

const Page = ({ params: { lang } }) => {
  return (
    <main>
        <Navbar lang={lang} />
        <Content />
        <Footer lang={lang} />
    </main>
  )
}

export default Page