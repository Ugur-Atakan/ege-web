
import Hero from '../components/Hero'
import Features from '../components/Features';
import SecondaryFeatures from '../components/SecondaryFeatures';
import CallToAction from '../components/CallToAction';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
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
                <WhyUs />
                <Features />
                <SecondaryFeatures />
                <CallToAction />
                <Testimonials />
                <Footer />
            </main>
        </>
    )
}
