'use client'

import React from 'react'
import { Navbar, Content, Hero, Step1, Step2, 
         Step3, Step4, Step5, StartBusiness 
} from './components'
import Footer from '../components/common/Footer'

export default function Page({ params: { lang } }) {
  return (
    <React.Fragment>
      <div className="hiw-section h-screen">
        <Navbar lang={lang} />
        <Hero lang={lang} />
        <Step1 lang={lang} />
        <Step2 lang={lang} />
        <Step3 lang={lang} />
        <Step4 lang={lang} />
        <Step5 lang={lang} />
        <StartBusiness lang={lang} />
        <Footer lang={lang} />
      </div>
    </React.Fragment>
  )
}