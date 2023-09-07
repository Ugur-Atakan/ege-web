
import Hero from '../components/Hero'
import Features from '../components/Features';
import Complience from '../components/Complience';
import IncorporateBusiness from '../components/IncorporateBusiness';
import Footer from '../components/Footer';
import Faqs from '../components/Faqs';
import React from 'react';
import TestimonialLogos from '../components/TestimonialLogos';
import HowToGetStarted from '../components/HowToGetStarted';
import Compare from '../components/Compare';
import SupportYourBusiness from '../components/PrimaryFeatures';


export function Home() {
    return (
        <>
            <main>
                <Hero />
                <HowToGetStarted />
                <Compare />
                <Complience />
                <IncorporateBusiness />
                <SupportYourBusiness />
                <Features />
                <TestimonialLogos />
                <Faqs/>
                <Footer />
            </main>
        </>
    )
}
