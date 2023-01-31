import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'

export default function CertifiedCopyRequest() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading='Manage Your Business' title='Certified Copy Request' img={topnotch} desc='Are you in need of a certified copy of a company document?' button='Get Started Now' href='contact' reverse='true' />
            <LeftImgRightText img={whatweneed} desc='Certified Copy is a copy of a company document which includes an endorsement with an accompanying certificate or Seal of the Delaware Secretary of State, stating the document in question is a true copy. In short, when the Delaware Secretary of State issues a Certified Copy, this means that the Certified Copy is a true, accurate and valid copy of the DE Corporate Document that the Secretary of State has on file. On the other hand, Plain Copy is simply a photocopy of the document, bearing no endorsements, stamps or seals. Most institutions require Certified Copies, instead of Plain Copies when processing official matters. You might need certified copies when: Applying for loans, tax filings, appy for Foreign Business Qualification, replacing the original documents, roviding legal proof for the existence of the business.' />
            <Stats title="Features Of A Certified Copy" icontitle1="Fast & Reliable" icondesc1="Have your certified copy as quick as possible." icontitle2="Shipping" icondesc2='Let us know if you need certified copies to be shipped to you or someone else.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Be Prepared & Save Time' icon3=<NewspaperIcon className='w-12' /> icondesc3='Be prepared beforehand and have your certified copies ready for business purposes.' />
            <Price />
            <ExclusiveSolution heading='Exclusive Solution' title='Need your certified copy with apostille certificate?' desc='If you are going to use a certified copy outside of the U.S., you will surely need an apostille certificate. Contact us now if you need one!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More' />
            <Requirements title='Requrements' desc='None! Just decide what documents you want and we are good to go!'/>
            <Footer />
        </main>
    )
}
