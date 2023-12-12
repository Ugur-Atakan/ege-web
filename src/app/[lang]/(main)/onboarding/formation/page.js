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
        silverProduct = await getLLCSilver(cookie.companyState);
        goldProduct = await getLLCGold();
    } else if (cookie.companyType === 'Corporation') {
      silverProduct = await getCorpSilver();
        goldProduct = await getCorpGold();
        platProduct = await getCorpPlat();
    }

    return (
        cookie.companyType === 'LLC' ? (
          <Content
            lang={lang}
            cookie={cookie}
            silverProduct={silverProduct}
            goldProduct={goldProduct}
          />
        ) : (
          <Content
            lang={lang}
            cookie={cookie}
            silverProduct={silverProduct}
            goldProduct={goldProduct}
            platProduct={platProduct}
          />
        )
    )
}

export default Page