import React from 'react'
import Content from './components/Content'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getLLCSilver, getLLCGold, getCorpSilver, getCorpGold, getCorpPlat } from './api/index.js'

const Page = async ({ params: { lang } }) => {
  const session = await getServerSession(options);

  let silverProduct, goldProduct, platProduct;
  if (session.companyType === 'LLC') {
    silverProduct = await getLLCSilver(session.companyState);
    goldProduct = await getLLCGold(session.companyState);
  } else if (session.companyType === 'C-Corp') {
      silverProduct = await getCorpSilver(session.companyState);
      goldProduct = await getCorpGold(session.companyState);
      platProduct = await getCorpPlat(session.companyState);
  }
  
 
  return (
    session.companyType === 'LLC' ? (
      <Content
        cookie={session}
        lang={lang}
        silverProduct={silverProduct}
        goldProduct={goldProduct}
      />
    ) : (
      <Content
        cookie={session}
        lang={lang}
        silverProduct={silverProduct}
        goldProduct={goldProduct}
        platProduct={platProduct}
      />
    )
  )
}

export default Page