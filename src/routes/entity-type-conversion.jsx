import React from 'react'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'

export default function EntityTypeConversion() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading='Manage Your Business' title='Entity Type Conversion' desc='Do you want to convert your company’s entity type to something else? Get started now!' button='Get Started Now' href='contact' reverse='true' />
            <LeftImgRightText img={whatweneed} heading title='When you need this' desc='For various reasons, you may need to convert your LLC to Corporation or Corporation to LLC, etc. This process is called “conversion.” To do so, you need to complete proper state filing with appropriate documents (Certificate of Conversion). As converting entity type may pose significant legal, tax and accounting implications, the process must be done seamlessly. If you need any legal advice, please consult an attorney.If you are all good to go and need assistance in filing your conversion documents, we are always happy to assist you!' button='Contact Us' href='contact' />
            <Stats title="Step-By-Step Guide" icontitle1="Provide us with the necessary documents" icondesc1="E-mail us over whatever you need, while providing the necessary documents." icontitle2="Review and assessing costs" icondesc2='Our experts will assess the cost in accordance with the information you provided. Complete the payment.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Filing the documents' icon3=<NewspaperIcon className='w-12' /> icondesc3='We file the necessary documents with the State of Delaware Division of Corporations. Once completed, you will be notified and receive the filed Certificate of Conversion.' />
            <Price />
            <ExclusiveSolution heading='Exclusive Solutions' title='Need a certified copy of the Certificate of Conversion?' desc='If you are in need of additional copies of your Certificate of Conversion from the State, we can help you getting certified copies.' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More'/>
            <Footer />
        </main>
    )
}
