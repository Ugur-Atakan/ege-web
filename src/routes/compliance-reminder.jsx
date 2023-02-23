import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import cr1 from '../images/compliance-reminder.jpg'
import cr2 from '../images/compliance-reminder-2.jpg'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon} from "@heroicons/react/24/outline"
import productData from "../assets/productData"

function ComplianceReminder() {
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading='Admin Management' title='Compliance Reminder' desc='Do you have difficult time remembering your company’s compliance matters? No need to stress about that anymore! Stay compliant with our Compliance Reminder service.' img={cr1} button='Get Started Now' href={`/products/${productData[0].link}/contact`} />
        <Price/>
        <Stats title="Features of Compliance Reminder" icontitle1="Stay compliant" icondesc1="Avoid hefty fines and other administrative penalties." icontitle2="Be in good standing"  icondesc2='Keep your company in good standing. Companies that are not in good standing face many difficulties.' icon1=<DocumentCheckIcon className="w-12"/> icon2=<CursorArrowRippleIcon className='w-12'/> icontitle3='Ensure on-time filing' icon3=<NewspaperIcon className='w-12'/> icondesc3='No need to worry about deadlines. We take care of it all for you.' />
        <LeftImgRightText  desc='Forming a company is just your first interaction with the State. All states in the U.S., including Delaware, have a number of reporting requirements from companies formed/qualified within their state. For instance, most states will require businesses to file annual reports and/or pay taxes in order to remain compliant and in good standing. Especially with an annual report, states want to be updated with your current registered agent, Officers/Directors and/or members names and addresses. In addition, the State of Delaware further requires current figures for gross assets and issued shares. If the annual report and taxes are not filed and paid by the deadline, the company will likely face late fees, penalties or even be declared inoperative and void. Therefore, such task requires expertise and attention throughout the year.We can provide timely and accurate reminders and assist you in keeping your company compliant!' img={cr2} hreF='contact' reverse='true'/>
        <ExclusiveSolution heading='Exclusive Solution' title='Interested in our “Manage your Business” packages?​' desc='Make managing your company easier! Explore our bundle solutions!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more!' button='Learn More'/>
        <Footer/>
    </main>
  )
}   

export default ComplianceReminder