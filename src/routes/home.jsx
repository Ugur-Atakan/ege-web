
import Hero from '../components/Hero'
import Features from '../components/Features';
import SecondaryFeatures from '../components/SecondaryFeatures';
import CallToAction from '../components/CallToAction';
import Complience from '../components/Complience';
import Testimonials from '../components/Testimonials';
import IncorporateBusiness from '../components/IncorporateBusiness';
import Footer from '../components/Footer';
import React from 'react';
import { Navbar } from '../components/Navbar';
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
                <TestimonialLogos />
                <Features />
                <SecondaryFeatures />
                <CallToAction />
                <Testimonials />
                <Footer />
            </main>
        </>
    )
}
