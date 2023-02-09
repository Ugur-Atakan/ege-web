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

export default function Ein() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading='Manage Your Business' title='EIN' img={topnotch} desc='Do you need assistance with filing SS-4 Form and obtaining EIN? Registate is the right choice!' button='Get Started Now' href='contact'/>
            <Price/>
            <Stats title="Why EIN" icontitle1="To Open Bank Account" icondesc1="Banks and other financial institutions require an EIN to open an account." icontitle2="To Hire Employees" icondesc2='You need an EIN when hiring new employees as it will be used for payroll and other tax matters.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3='Need for tax filing' icon3=<NewspaperIcon className='w-12' /> icondesc3='When a tax return is filed for the company, EIN often is required to identify the company.' />
            <LeftImgRightText img={whatweneed} desc='
After forming company, the next step is likely to get an an Employer Identification Number (EIN) number. EIN -also known as Federal Tax ID Number-, is a nine-digit number assigned to a business for the purpose of identification with the IRS. It is, in a sense, a social security number for business entities. EIN is usually required to open bank accounts, apply for loans, hire employees, withhold taxes from employees and any application that requires a business to validate its authenticity. Usually, an EIN is valid indefinitely. Yet, for instance, if your business is converted to another entity type (for example, from LLC to Corporation), a new EIN might be needed.' />
            <ExclusiveSolution heading='Exclusive Solution' title='Need a mailling address for EIN?' desc='Get our Virtual Mailbox service and do not worry about mails anymore!' rightdesc='We provide comprehensive services from compliance, filing, need business set up, mailbox, bookkeeping and tax filing' button='Learn More' />
            <Requirements title='Requrements' desc=<ul className='list-disc '>The following is required for an EIN application:
            <li>The full legal name of the entity</li>
            <li>If applicable, any trade name (or known as “doing business as” or “DBA name” or fictitious name”)</li>
            <li>The type of entity</li>
            <li>The name of a “responsible party. This is a person who controls, manages, or directs the business operations of the company.</li>
            <li>The responsible party’s Social Security number (SSN), Individual Taxpayer Identification Number (ITIN)</li>
            <li>The date the business was started or acquired.</li>
            <li>The closing month of the company’s accounting year.</li>
            <li>The maximum number of employees the company expects to have in the next twelve months.</li>
            <li>The first date employee wages were paid if any.</li>
            <li>The principal activity of the business / the principal goods or services provided by the business.</li>
            <li>Please note that if you are an international customer (which means if you do not have a U.S.</li>
            <li>Address or a Social Security Number), you will be required to provide a copy of the passport</li>
            </ul>/>
            <Footer />
        </main>
    )
}
