import Hero from '../components/Hero'
import PrimaryFeatures from '../components/PrimaryFeatures';
import SecondaryFeatures from '../components/SecondaryFeatures';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Onboarding() {
  return (
        <main className="mt-s sm:mt-2">
          <Hero />
          <div className="mx-auto max-w-7xl">
            <SecondaryFeatures />
            <PrimaryFeatures />
          </div>
          <Testimonials />
          <Footer />          
        </main>
  )
}


