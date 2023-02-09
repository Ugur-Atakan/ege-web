import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'

export default function DoingBusinessAs() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading='Manage Your Business' title='Doing Business As (DBA)' desc='Do you want to amend your company’s formation documents or need a restated version of them?' button='Get Started Now' href='contact' />
            <Price/>
            <Stats title="Some Advantages of Having a DBA" icontitle1="Provide us with the signed Amendment Certificate" icondesc1="A certificate must be filled out and signed by the company’s authorized signer." icontitle2="Review and assessment" icondesc2='Our team will review the documents you provided and determine whether there are additional fees required to be paid.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Filing the documents' icon3=<NewspaperIcon className='w-12' /> icondesc3='We file the Certificate of Amendment with the State of Delaware Division of Corporations. Once completed, you will be notified and receive the filed Certificate.' />
            <LeftImgRightText img={whatweneed} desc=<ul>
DBA names can be beneficial for sole proprietorships, they’re also helpful for other types of companies, like LLCs and corporations. Here are a couple of reasons a company might want to obtain a DBA name:<li className='list-disc ml-8 py-1'>Registering a domain. Sometimes, the domain you want is unavailable, and you end up marketing your services under a separate name. For example, the owner of “Sharpest Tools, LLC” decides to build a website but can’t secure their LLC name as the domain. Instead, they register the domain “LocalTools.com.” To sell under this name, they obtain a DBA name for “Local Tools.”</li><li className='list-disc py-1 ml-8'>Branching out into new services. You might form a company for one service or product only to branch out in another direction down the road. For instance, if your company, “Luna’s Locks, Co.” sells hair care products and branches out into supplements, you might not want to sell your vitamin and supplement line under the same name. Instead of creating a new company, you can secure a DBA name to sell these products under a separate name.</li>Once you’ve decided you’d like to obtain a DBA name, you’ll need to register for one. Registering a DBA name is typically a straightforward process, but the steps can vary from state to state.</ul>/>
            <ExclusiveSolution heading='Exclusive Solutions' title='Need a certified copy of a Certificate of Dissolution?' desc='If you are in need of additional copies of a Certificate of Dissolution from the State, we can help you getting certified copies!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More'/>
            <Footer />
        </main>
    )
}
