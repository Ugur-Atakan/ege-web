import React from 'react'
import { 
  Compare, Compliance, Features, Footer, Faqs, Testimonials,
  GetStarted, Hero, IncorporateBusiness, SupportBusiness, TestimonialLogos 
} from '@/components/index'
import HoverMenu from '@/components/Hero/HoverMenu'
/**
 * Home page route
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const Page = ({ params: { lang  } }) => {
  return(
    <React.Fragment>
      <Hero lang={lang} />
      <GetStarted lang={lang} />
      <Compare lang={lang} />
      <Compliance lang={lang} />
      <IncorporateBusiness lang={lang} />
      <SupportBusiness lang={lang} />
      {/* Old testimonials */}
      {/* <Features lang={lang} /> */} 
      <Testimonials lang={lang} />
      <TestimonialLogos />
      <Faqs lang={lang} />
      <Footer lang={lang} /> 
    </React.Fragment>
  )
}

export default Page