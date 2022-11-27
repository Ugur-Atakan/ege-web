
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero'
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
            <header>
                <title>Registate - Start and manage your business in US</title>
                <meta
                name="description"
                content="Registate is a platform to start and manage your business in US. We provide registered agent service, virtual mailbox, apostille, and more..."
                />
            </header>
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
