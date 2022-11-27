
import { Navbar } from '../components/Navbar';
import { HeroNext } from '../components/HeroNext'
import PrimaryFeatures from '../components/PrimaryFeaturesNext';
import SecondaryFeatures from '../components/SecondaryFeaturesNext';
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
                <HeroNext />
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
