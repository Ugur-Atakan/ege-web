import { readCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import Content from './components/Content'
import Test from './components/NewContent'

/**
 * Page route for the company name page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const Page = async ({ params: { lang } }) => {
  return (
    // <Content 
    //   lang={lang}
    // />
    <Test lang={lang} />
  )
}

export default Page