import Navbar from '@/components/common/Navbar'
import Content from './components/Content'

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
        <Content lang={lang} />
    </main>
  )
}

export default Page