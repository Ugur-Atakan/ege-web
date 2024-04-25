import React from 'react'
import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer'
import NewFeatures from './components/Features/NewFeatures'
import { getProduct } from './util/util'
import HIWNew from './components/HowItWorks/HIWNew'

const Page = async ({ params: { lang, slug } }) => {
  const product = await getProduct(slug);

  return(
    <React.Fragment>
      <Hero 
        lang={lang} 
        id={product.id}
        name={product.name} 
        description={product.description}
        pricing={product?.pricing}
      />
      <NewFeatures lang={lang} features={product.features }/>
      <HIWNew lang={lang} features={product.hiw} />
      {/* <Pricing 
        lang={lang}
        name={product.name}
        pricing={product?.pricing}
        type={product.type}
        pricingFeatures={product?.pricingFeatures}
      /> */}
      <Faq lang={lang} faqs={product.faq} />
      <Footer lang={lang} />
    </React.Fragment>
  )
}

export default Page 