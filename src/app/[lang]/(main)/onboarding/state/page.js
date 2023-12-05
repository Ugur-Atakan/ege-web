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
        <Content lang={lang} />
    </main>
  )
}

export default Page