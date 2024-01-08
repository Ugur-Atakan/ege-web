import React from 'react'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import BusinessShield from './components/BusinessShield/BusinessShield'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing/Pricing'
import Faq from './components/Faq/Faq'
import StartNow from './components/StartNow'
import Footer from './components/Footer'

import products from '@/assets/json/products.json'
import { Product } from './classes/Product'

const Page = ({ params: { lang, slug } }) => {
  const productJSON = products.find(product => product.slug === slug)

  const product = new Product(productJSON.id, productJSON.name, productJSON.description, 
                              productJSON.slug, productJSON.state, productJSON.type,
                              productJSON.pricing, productJSON.features, productJSON.faq)

  return(
    <React.Fragment>
      <Hero lang={lang} id={product.id} name={product.name} description={product.description}/>
      <Features lang={lang} />
      {/* <BusinessShield /> */}
      <HowItWorks />
      <Pricing />
      <Faq lang={lang} faqs={product.faq} />
      <StartNow lang={lang} />
      <Footer lang={lang} />
    </React.Fragment>
  )
}

export default Page 