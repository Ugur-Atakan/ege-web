import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'

export default function AccountOpeningSupport() {
  return (
    <main>
    <Navbar />
    <LeftImgRightText img={topnotch} heading='International Entity Services' title='US Bank Account Opening Support' desc='A bank account is essential for a new business. Yet, it could be a hassle. Let us assist it you!' button='Get Started Now' href='contact' reverse='true' />
    <LeftImgRightText img={whatweneed} desc=<ul>
Our parner, Mercury, provides full-stack banking for startups, including FDIC-insured bank accounts, physical & virtual debit cards, domestic & international wires, and more.<li className='py-4'>Registering a domain. Sometimes, the domain you want is unavailable, and you end up marketing your services under a separate name. For example, the owner of “Sharpest Tools, LLC” decides to build a website but can’t secure their LLC name as the domain. Instead, they register the domain “LocalTools.com.” To sell under this name, they obtain a DBA name for “Local Tools.”</li></ul>/>
    <Stats title="Benefits of our Bank Account Opening Support" icontitle1="Save Time" icondesc1="No need to worry about the process and necessary documents" icontitle2="Open account virtually" icondesc2='No need to go to a bank. Do it with your laptop instead!' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='FDIC-insured bank account' icon3=<NewspaperIcon className='w-12' /> icondesc3='Keep your funds protected' />
    <Price />
    <ExclusiveSolution heading='Exclusive Solutions' title='Also need an office address for your bank account?' desc='Need an office space/address for your business? Look no more!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More'/>
    <Footer />
</main>
  )
}
