import React from 'react'
import Content from "./components/Content";
import { readCookieFromStorageServerAction } from '@/app/lib/session/serverActions'
import { getLLCSilver, getLLCGold, getCorpSilver, getCorpGold, getCorpPlat } from './api/index.js'

/**
 * Page component for the formation page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered components for the page
*/

const Page = async ({ params: { lang } }) => {
    const cookie = await readCookieFromStorageServerAction();
    let silverProduct, goldProduct, platProduct;

    if (cookie.companyType === 'LLC') {
        const silverProductData = getLLCSilver();
        silverProduct = await Promise.all([silverProductData]);

        const goldProductData = getLLCGold();
        goldProduct = await Promise.all([goldProductData]);
    } else if (cookie.companyType === 'Corporation') {
        const silverProductData = getCorpSilver();
        silverProduct = await Promise.all([silverProductData]);

        const goldProductData = getCorpGold();
        goldProduct = await Promise.all([goldProductData]);

        const platProductData = getCorpPlat();
        platProduct = await Promise.all([platProductData]);
    }

    return (
        cookie.companyType === 'LLC' ? (
          <Content
            lang={lang}
            silverProduct={silverProduct}
            goldProduct={goldProduct}
          />
        ) : (
          <Content
            lang={lang}
            silverProduct={silverProduct}
            goldProduct={goldProduct}
            platProduct={platProduct}
          />
        )
    )
}

export default Page