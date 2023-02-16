import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import { EnvelopeOpenIcon, InboxStackIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"
export default function RegisteredAgent() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading='Admin Management' title='Registered Agent' desc="Are you in the process of forming your company but you don't have a registered agent yet? Appoint us as your registered agent! Or, you already have a registered agent but want to change it? Appoint your Delaware registered agent to Registate!" button='Get Started Now' img={whatweneed} href='contact' />
            <Price />
            <LeftImgRightText title='Every company in Delaware is required to appoint a registered agent by law' desc='The State of Delaware requires that businesses have a contact person during business hours, to receive official and legal documents, including but not limited to services of process and state notifications, on behalf of the company. Basically, every company in Delaware is required to appoint a registered agent.' img={topnotch} />
            <LeftImgRightText title='We are available 9AM to 5PM as your Registered Agent' desc="In principle, you or someone else from the company can be appointed as your registered agent. Yet, it can be burdensome to comply with this requirement as the registered agent must have a physical address in Delaware and be available during business hours. It is important to note that a P.O. box is not sufficient to fulfil the address requirement. It should also be noted that the name and the physical street address are available to the general public and must be easily accessible." img={whatweneed} reverse='true' />
            <LeftImgRightText title='Having a professional registered agent keeps you compliant' desc="As stated before, a registered agent is responsible to process notices, communication from the Secretary of State, and other official government notifications (including tax forms and court documents) on behalf of the company. If you don’t appoint a registered agent, it can cause major problems with your business. For instance, without a registered agent, you may not know that your LLC is being sued. The court could award a judgment against you without you having the opportunity to defend yourself." img={whatweneed} />
            <Stats title="Features Of A Registered Agent" icontitle1="Avoid the risk of non-compliance" icondesc1="Required by the law Registered Agent is a contact person (e.g. Delaware State lawyer) or agent that receives legal papers for your corporation." icontitle2="Spend your time on your business" icondesc2='Compliance requirements can be both time- and labor-intensive, often requiring the completion of lengthy and sometimes confusing forms.' icon1=<EnvelopeOpenIcon className="w-12" /> icon2=<InboxStackIcon className='w-12' /> icontitle3='Save money' icon3=<CalendarDaysIcon className='w-12' /> icondesc3='The registered agent requires an employee to be available during normal business. By hiring us you can avoid this requirement.' />
            <ExclusiveSolution heading='Exclusive Solution' title='Interested in our “Manage your Business” packages?​' desc='Make managing your company easier! Explore our bundle solutions!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more!' button='Learn More' />
            <Footer />
        </main>
    )
}
