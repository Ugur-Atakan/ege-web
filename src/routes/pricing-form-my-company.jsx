import { Navbar } from '../components/Navbar'
import React from "react";

import { Pricing } from '../components/PricingFormMyCompany'
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';

//Define Pricing component
export function PricingFormMyCompany () {
  return (
    <main>
        <Navbar />
        <Pricing />
        <Faqs />
        <Footer />
    </main>
  )
}
