import { readCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import Content from './components/Content'

/**
 * Page route for the company name page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
*/

const Page = async ({ params: { lang } }) => {
  const cookie = await readCookieFromStorageServerAction();

  return (
    <Content 
      lang={lang} 
      cookie={cookie}
    />
  )
}

export default Page