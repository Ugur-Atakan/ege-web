import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Content from './components/Content'

/**
 * Page route for the company type page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const Page = ({ params: { lang } }) => {
  return (
    <main>
        <Navbar lang={lang} />
        <Content lang={lang} />
        <Footer />
    </main>
  )
}

export default Page