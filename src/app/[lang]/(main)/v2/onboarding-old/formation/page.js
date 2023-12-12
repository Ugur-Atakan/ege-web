import React from 'react'
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
        <Content lang={lang} />
    )
}

export default Page