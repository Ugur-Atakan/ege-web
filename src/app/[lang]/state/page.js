import Navbar from '../components/common/Navbar'
import Pricing from './components/Pricing'

/**
 * Page route for pricing page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element}
*/

const Page = ({ params: { lang } }) => {
  return (
    <main>
        <Navbar lang={lang} />
        <Pricing lang={lang} />
    </main>
  )
}

export default Page