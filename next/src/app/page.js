import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import Compare from './components/Compare';
import Compliance from './components/Compliance';
import IncorporateBusiness from './components/IncorporateBusiness';
import SupportBusiness from './components/SupportBusiness';
import Features from './components/Features';
import TestimonialLogos from './components/TestimonialLogos';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <GetStarted />
      <Compare />
      <Compliance />
      <IncorporateBusiness />
      <SupportBusiness />
      <Features />
      <TestimonialLogos />
      <Faqs />
      <Footer />
    </main>
  )
}
