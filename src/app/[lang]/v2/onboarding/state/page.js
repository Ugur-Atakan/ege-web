import Content from './components/Content'
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

  return (
    <Content lang={lang} companyType={cookie.companyType} />
  )
}

export default Page