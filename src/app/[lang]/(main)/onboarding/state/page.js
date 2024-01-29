import Content from './components/Content'
import NewContent from './components/NewContent'
import { readCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
/**
 * Page route for pricing page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element}
*/

const Page = async ({ params: { lang } }) => {
  const cookie = await readCookieFromStorageServerAction();
  // console.log(cookie);

  return (
    // <Content lang={lang}  />
    cookie && <NewContent lang={lang} cookie={cookie} />
  )
}

export default Page