
import { Navbar } from '../components/Navbar';
import Hero from '../components/Hero'
import PrimaryFeatures from '../components/PrimaryFeatures';
import SecondaryFeatures from '../components/SecondaryFeatures';
import CallToAction from '../components/CallToAction';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Faqs from '../components/Faqs';

export function Home() {
    localStorage.clear()
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <PrimaryFeatures   />
                <SecondaryFeatures />
                <CallToAction />
                <WhyUs />
                <Testimonials />
                <Pricing />
                <Faqs />
            </main>
        </>
    )
}
