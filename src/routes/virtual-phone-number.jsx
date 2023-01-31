import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {ClockIcon, BanknotesIcon, UsersIcon} from "@heroicons/react/24/outline"

export default function VirtualPhoneNumber() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading='Manage Your Business' title='Virtual Phone Number' desc='For all of your business phone call needs - instead of having multiple phone systems where messages can be forgotten and misplaced, our Phonecall Forwarding Service directs all of your calls to one place, to keep your communications aligned and centralized.' button='Get Started Now' href='contact' img={topnotch} reverse='true'/>
            <LeftImgRightText title='Access Your Office Communications System Online' desc='We help you keep professionalism and personalism at the forefront of your business without the stress of worrying about missed calls or delayed relay of messages. We keep everything in one place for you where you, and your team members have easy access to all the communication coming in for your business.' img={whatweneed} />
            <Stats title="Features Of A Virtual Phone Number" icontitle1="USA Number" icondesc1="Keep your business communication professional - have a USA phone number with the ability to select your area code." icontitle2="Simple Set Up" icondesc2='No requirements necessary, juat reach out and fill out a simple form with your details to get your professional,virtual phone number set up.' icon1=<UsersIcon className="w-12" /> icon2=<BanknotesIcon className='w-12' /> icontitle3='Stay Updated' icon3=<ClockIcon className='w-12' /> icondesc3='We forward your calls to any phone number you want. So that you can gain access to your business phone messages - and voicemails, from anywhere, anytime, in an efficient manner.' />
            <Price />
            <ExclusiveSolution heading='Exclusive Solution' title='What other business help do you need?' desc='We cater to you, for any request. From startups to medium / large corporations, we have different business service bundle solutions that cover everything you could possibly need on your business journey.' rightdesc='We offer comprehensive services from business formation, post incorporation, compliance, regulatory filings, virtual mailbox and business addresses to bookkeeping, tax filings and more.' button='Learn More' />
            <Footer />
        </main>
    )
}
