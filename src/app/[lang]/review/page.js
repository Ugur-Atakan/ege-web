import React from 'react'
import Navbar from '../components/common/Navbar'
import Content from './components/Content'

/**
 * Page route for review page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} 
*/

const Page = ({ params: { lang } }) => {
  return (
    <React.Fragment>
        <Navbar lang={lang} />
        <Content lang={lang} />
    </React.Fragment>
  )
}

export default Page