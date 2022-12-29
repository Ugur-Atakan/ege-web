import { Navbar } from '../components/Navbar'
import React from "react";

import { Pricing } from '../components/PricingApostilleAndNotorizationServices'
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';

//Define Pricing component
export function PricingApostilleAndNotorizationServices () {
  return (
    <main>
        <Navbar />
        <Pricing />
        <Faqs />
        <Footer />
    </main>
  )
}
