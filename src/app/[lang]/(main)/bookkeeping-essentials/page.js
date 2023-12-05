import Content from './components/Content'

/**
 * Page component for bookkeeping essentials page
 * @type {function} Page route 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
 */

const Page = ({ params: { lang } }) => (
    <main>
        <Content lang={lang} />
    </main>
)

export default Page