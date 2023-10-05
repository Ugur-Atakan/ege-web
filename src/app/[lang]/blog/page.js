import React from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from '../components/common/Footer'

/**
 * Page component for the blog page
 * @type {function} Page route for the blog page
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
 */

const Page = ({ params: { lang } }) => (
  <main>
    <Header lang={lang} />
    <Posts />
    <Footer lang={lang} />
  </main>
)

export default Page
