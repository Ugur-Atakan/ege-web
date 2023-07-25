import Features from '../components/Features';
import SecondaryFeatures from '../components/SecondaryFeatures';
import CallToAction from '../components/CallToAction';
import Complience from '../components/Complience';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import React from 'react';
import { Navbar } from '../components/Navbar';
import TestimonialLogos from '../components/TestimonialLogos';
import Herocopy from '../components/Herocopy';
import IncorporateBusiness from '../components/IncorporateBusiness';

export default function Copylandingpage() {
    return (
        <>
            <main>
                <Navbar/>
                <Herocopy />
                <IncorporateBusiness />
                <TestimonialLogos/>
                <Complience />
                <Features />
                <SecondaryFeatures />
                <CallToAction />
                <Testimonials />
                <Footer />
            </main>
        </>
    )
}
