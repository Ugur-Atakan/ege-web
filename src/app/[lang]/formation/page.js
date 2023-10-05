import React from 'react'
import Navbar from '../components/common/Navbar'
import Content from "./components/Content";

/**
 * Page component for the formation page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered components for the page
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