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

export default function RenevalRevival() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading='Manage Your Business' title='Renewal & Revival' desc='Does your company fall into a status other than good standing? Get started to return your company back into a good standing status!' button='Get Started Now' href='contact' />
           <Price/>
            <Stats title="Step-By-Step Guide" icontitle1="Payment of due taxes" icondesc1="All outstanding taxes and penalties must be paid before filing for revival." icontitle2="Provide us with the signed revival charter" icondesc2='A revival charter must be filled out and signed by the company’s authorized signer.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='3
Filing of the documents' icon3=<NewspaperIcon className='w-12' /> icondesc3='We file the revival charter with the State of Delaware Division of Corporations. Once completed, you will be notified and receive the filed Certificate of Revival.' />
<LeftImgRightText img={whatweneed} heading title='When you need it' desc='When a company has failed to pay their taxes or maintain a Registered Agent, the company may fall into a status other than good standing, losing its right to transact business. To return your entity back into a good standing status, a Certificate of Renewal and Revival must be filed and all outstanding taxes and filing fees must be paid.'/>
            <ExclusiveSolution heading='Exclusive Solutions' title='Need a certified copy of the Certificate of Conversion?' desc='If you are in need of additional copies of your Certificate of Conversion from the State, we can help you getting certified copies.' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More'/>
            <Footer />
        </main>
    )
}
