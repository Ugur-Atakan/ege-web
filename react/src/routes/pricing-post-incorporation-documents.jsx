import { Navbar } from '../components/Navbar'
import React from "react";

import { Pricing } from '../components/PricingPostIncorporationDocuments'
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';

//Define Pricing component
export function PricingPostIncorporationDocuments () {
  return (
    <main>
        <Navbar />
        <Pricing />
        <Faqs />
        <Footer />
    </main>
  )
}
