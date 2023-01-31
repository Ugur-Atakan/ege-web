import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {EnvelopeOpenIcon, InboxStackIcon, CalendarDaysIcon} from "@heroicons/react/24/outline"

function VirtualMailbox() {
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading='Admin Management' title='Virtual MailBox' desc='A virtual mailbox makes it easier to manage your mail & packages remotely. Choose our virtual mailbox service and secure the privacy of your mail.' button='Get Started Now' href='contact' img={topnotch} />
        <LeftImgRightText  title='What we need' desc='When you sign up for our virtual mailbox service, our representatives will reach out with a set of instructions to activate your account. You will be asked to fill out a USPS 1583 Form, get it notarized and submit it back along with two types of ID (e.g. Valid State ID, Passport, Current Lease, Voter or Vehicle Registration Card).
Your Virtual Mailbox account will be activated once we receive a signed and notarized USPS 1583 Form, and copies of your ID.' button='Get Started Now' img={whatweneed} reverse='true' />
 <Stats title="Features of Virtual Mailbox" icontitle1="Real Street Business Address" icondesc1="Use your address to manage your mail." icontitle2="Scan & Upload"  icondesc2='We scan and upload your mail items to your dashboard.' icon1=<EnvelopeOpenIcon className="w-12"/> icon2=<InboxStackIcon className='w-12'/> icontitle3='Forward Or Shred' icon3=<CalendarDaysIcon className='w-12'/> icondesc3='As per your instructions, we can forward your mail to the address you provide or shred your mail at our base.' />
        <Price/>
        <ExclusiveSolution heading='Exclusive Solution' title='Interested in our “Manage your Business” packages?​' desc='Make managing your company easier! Explore our bundle solutions!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more!' button='Learn More'/>
        <Footer/>
    </main>
  )
}

export default VirtualMailbox