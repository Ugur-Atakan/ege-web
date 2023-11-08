import Navbar from '@/components/common/Navbar'
import Content from './components/Content'

/**
 * Page route for the company name page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const Page = ({ params: { lang } }) => {
  return (
    <Content lang={lang} />
  )
}

export default Page