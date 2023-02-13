import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import { PresentationChartBarIcon, ArrowPathIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

export default function DedicatedReceptionist() {
  return (
    <main>
      <Navbar />
      <LeftImgRightText heading='Manage Your Business' title='Dedicated Receptionist Every Second Of Every Day' desc='Here at Registate, we take your calls without you having to lift a finger. We take care of every aspect of your business needs - including being your personal native-English speaking receptionist. Why? We work for you, to make your business work - and we never turn off, it really is that simple.' button='Get Started Now' href='contact' img={topnotch} />
      <Price/>
      <Stats title="Why Choose Us As Your Online Support…" icontitle1="Drop The Stress, Grow Your Business" icondesc1="Focus on the important stuff, we’ll take care of all the other bits" icontitle2="Personalized & Timely Responses" icondesc2='We already know the ins-and-outs of your business' icon1=<PresentationChartBarIcon className="w-12" /> icon2=<ArrowPathIcon className='w-12' /> icontitle3='Be In Control, Wherever You Are' icon3=<GlobeAltIcon className='w-12' /> icondesc3='We’ll handle it all while keeping you updated with the most important info' />
      <LeftImgRightText title='Phone Support - All Of The Time' desc='We believe that it’s the customers and clients that really make the business, so customer service should always be the top priority. That’s why we’re here to act as your phone support system – to answer your incoming calls on your company’s behalf via phone.' button='Get Started Now' img={whatweneed} />
      <ExclusiveSolution heading='Exclusive Solution' title='What other business help do you need?' desc='We cater to you, for any request. From startups to medium / large corporations, we have different business service bundle solutions that cover everything you could possibly need on your business journey.' rightdesc='We offer comprehensive services from business formation, post incorporation, compliance, regulatory filings, virtual mailbox and business addresses to bookkeeping, tax filings and more.' button='Learn More' />
      <Footer />
    </main>
  )
}
