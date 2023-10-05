import React from 'react';
import Content from './components/Content'

/**
 * Page route for start-my-business page
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