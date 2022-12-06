
import { Navbar } from '../components/Navbar';
import Hero from '../components/Hero'
import PrimaryFeatures from '../components/PrimaryFeatures';
import SecondaryFeatures from '../components/SecondaryFeatures';
import CallToAction from '../components/CallToAction';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Faqs from '../components/Faqs';
import Customers from '../components/Customers';
import Footer from '../components/Footer';
import React from 'react';

export function Home() {
    localStorage.clear()
    return (
        <>
            <main>
                <Hero />
                <Customers />
                <PrimaryFeatures   />
                <SecondaryFeatures />
                <CallToAction />
                <WhyUs />
                <Testimonials />
                <Footer />
            </main>
        </>
    )
}
