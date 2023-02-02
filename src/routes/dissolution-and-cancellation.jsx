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
import Requirements from '../components/Requirements'

export default function DissolutionAndCancellation() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading='Manage Your Business' title='Dissolution/Cancellation' desc='Are you winding-down the operations of your company? Then the dissolution is the procedure that you must start.' button='Get Started Now' href='contact' reverse='true' />
            <LeftImgRightText img={whatweneed} desc=<ul>If you are to wind-down the operations of your corporation, then the dissolution is the procedure that you must start. If you wish to dissolve your Delaware Corporation formally, a Certificate of Dissolution must be prepared and filed. As for LLCs, a Certificate of Cancellation needs to be filed to terminate an LLC. But why should you go ahead with these formal procedures? Why not just leave the company as it is?
            <li className='ml-8 py-1 list-disc'>This is a legal requirement by the State</li>
            <li className='ml-8 py-1 list-disc'>To avoid fees and taxes</li>
            <li className='ml-8 py-1 list-disc'>To put creditors on notice</li>By dissolving, the company’s responsibility for future annual Franchise Tax payments will also end. Company assets must be distributed among the owners based on the percentage of ownership complying with state law. Please do not forget to notify appropriate federal, state and local authorities that your company will be closing.</ul>/>
            <Stats title="Step-By-Step Guide" icontitle1="Payment of due taxes" icondesc1="All outstanding taxes and penalties must be paid before filing for dissolution/cancellation. All delinquent annual reports must be filed as well. If you need assistance with either of these, please contact us." icontitle2="Provide us with the signed Certificate of Dissolution / Cancellation" icondesc2='A certificate must be filled out and signed by the company’s authorized signer.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Filing the documents' icon3=<NewspaperIcon className='w-12' /> icondesc3='We file the Certificate of Dissolution/Cancellation with the State of Delaware Division of Corporations. Once completed, you will be notified and receive the filed Certificate.' />
            <Price />
            <ExclusiveSolution heading='Exclusive Solutions' title='Need a certified copy of a Certificate of Dissolution?' desc='If you are in need of additional copies of a Certificate of Dissolution from the State, we can help you getting certified copies!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More'/>
            <Requirements title='Requirements' desc='The stockholders/members of the company must approve of the dissolution/cancellation.All taxes, fees and annual reports must be up to date and filed with the State. All due Franchise Taxes, including any late penalties and interest, must be paid before the company can be dissolved.' />
            <Footer />
        </main>
    )
}
