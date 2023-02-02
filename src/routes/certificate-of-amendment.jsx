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

export default function DissolutionAndCancellation() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading='Manage Your Business' title='Certificate of Amendment' desc='Do you want to amend your company’s formation documents or need a restated version of them?' button='Get Started Now' href='contact' reverse='true' />
            <LeftImgRightText img={whatweneed} desc='If you need to make changes to your company’s original Certificate of Incorporation (Corporation) or Certificate of Formation (LLC), then filing an amendment with the State of Delaware is what you must do. In other words, state governments, including Delaware, require that a company files a Certificate of Amendment when making an addition to, deleting from, or otherwise altering the existing provisions of the formation documents. For instance, if you think your company’s name is outdated, or not sufficient for business operations, you should file a Certificate of Amendment with the state, instead of forming a new company. Again, if you need to increase the number of shares that your corporation can authorize, filing an amendment is what you need. But you do not need to do this by yourself. We, as Registate, can file an amendment quickly and efficiently for you. Or you would like to gather all amendment certificates and have one single, consolidated Certificate of Incorporation/Formation to reflect the current situation of the company. Then, restatement is what you need.'/>
            <Stats title="Step-By-Step Guide" icontitle1="Provide us with the signed Amendment Certificate" icondesc1="A certificate must be filled out and signed by the company’s authorized signer." icontitle2="Review and assessment" icondesc2='Our team will review the documents you provided and determine whether there are additional fees required to be paid.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Filing the documents' icon3=<NewspaperIcon className='w-12' /> icondesc3='We file the Certificate of Amendment with the State of Delaware Division of Corporations. Once completed, you will be notified and receive the filed Certificate.' />
            <Price />
            <ExclusiveSolution heading='Exclusive Solutions' title='Need a certified copy of a Certificate of Dissolution?' desc='If you are in need of additional copies of a Certificate of Dissolution from the State, we can help you getting certified copies!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More'/>
            <Footer />
        </main>
    )
}
