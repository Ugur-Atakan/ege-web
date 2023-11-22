import React from 'react'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import BusinessShield from './components/BusinessShield/BusinessShield'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Pricing from './components/Pricing/Pricing'

const Page = ({ params: { lang } }) => {
  return(
    <React.Fragment>
      <Hero lang={lang} />
      <Features lang={lang} />
      <BusinessShield />
      <HowItWorks />
      <Pricing />
    </React.Fragment>
  )
}

export default Page 