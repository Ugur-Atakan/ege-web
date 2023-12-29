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
  console.log('Formation ', cookie);

  let silverProduct = null, goldProduct, platProduct;
  if (cookie.companyType === 'LLC') {
      silverProduct = await getLLCSilver(cookie.companyState);
      goldProduct = await getLLCGold(cookie.companyState);
  } else if (cookie.companyType === 'C-Corp') {
      silverProduct = await getCorpSilver(cookie.companyState);
      goldProduct = await getCorpGold(cookie.companyState);
      platProduct = await getCorpPlat(cookie.companyState);
  }

  return (
    silverProduct !== null && (
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