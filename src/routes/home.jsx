
import Hero from '../components/Hero'
import Features from '../components/Features';
import SecondaryFeatures from '../components/SecondaryFeatures';
import CallToAction from '../components/CallToAction';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Customers from '../components/Customers';
import Footer from '../components/Footer';
import React from 'react';
import { Navbar } from '../components/Navbar';
import TestimonialLogos from '../components/TestimonialLogos';

export function Home() {
    return (
        <>
            <main>
            <Navbar/>
                <Hero />
                <Customers />
                <TestimonialLogos/>
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
