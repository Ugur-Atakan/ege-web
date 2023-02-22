import React from "react"
import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import LeftTextRightImg from "../components/Incorporation"
import LeftImgRightText from "../components/LeftImgRightText"
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import productData from '../assets/productData'

function postincorporation() {
  return (
    <main>
      <Navbar />
      <LeftImgRightText img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" heading="Start Your Business" desc="Once your company has gone through the formation process, it exists and its internal affairs are then governed by the Delaware corporate laws. But this doesn’t mean business set-up is truly over. This process involves certain additional steps, namely drafting a number of legal documents neccessary for your business to be ready to operate and take on investment." title="Post Incorporation" button="Contact Us" href={`/products/${productData[19].link}/contact`} />
      <Price />
      <Stats title=" Features of Post Incorporation" icontitle1="Set-up Your Business" icondesc1="Incorporation is only the first step! Make sure the business setup is completed properly." icontitle2="Ownership" icondesc2='Issue stock, and truly own your company!' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Be Compliant' icon3=<NewspaperIcon className='w-12' /> icondesc3='Ensure your company is compliant according to Delaware laws' />
      <LeftTextRightImg title="Why you need this" />
      <ExclusiveSolution heading='Exclusive Solution' title='Want to be fully compliant?' desc='Maintaining a company is as important as forming one. In order to not face hefty fines or penalties, choose one of our compliance packages!' rightdesc=' We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Contact Us' />
      <Footer />
    </main>
  )
}

export default postincorporation