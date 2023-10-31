import Navbar from '@/components/common/Navbar'
import Content from './components/Content'

/**
 * Page route for the company type page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const CompanyType = ({ params: { lang } }) => (
  <main>
    <Navbar lang={lang} />
    <Content lang={lang} />
  </main>
)

export default CompanyType