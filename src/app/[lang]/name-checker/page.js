import React from 'react';
import Content from './components/Content'

/**
 * Page route for name-checker
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} 
*/

const Page = ({ params: { lang } }) => {
    return (
      <Content lang={lang} />
    );
}

export default Page