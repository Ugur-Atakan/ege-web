import Content from './components/Content'
import NewContent from './components/NewContent'
/**
 * Page route for pricing page
 * @type {function}
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element}
*/

const Page = async ({ params: { lang } }) => {
  return (
    // <Content lang={lang}  />
    <NewContent lang={lang} />
  )
}

export default Page