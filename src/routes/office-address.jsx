import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {ClockIcon, InboxStackIcon, ShieldCheckIcon} from "@heroicons/react/24/outline"

export default function OfficeAddress() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading='Admin Management' title='Physical Office Suite' desc='Have a professional business address for your company in Delaware!' button='Get Started Now' href='contact' img={topnotch} />
            <LeftImgRightText title='Why have an Office Business Address' desc='Certain people or institutions may be discouraged if the company they are in contact with only has a P.O. box, instead of a proper business address. You can build trust and crebility by having an business address. If you are a home-based business, it can be difficult to portray a  professional image, no matter how professional your business may be. A business address can provide that for.' img={whatweneed} reverse='true' />
            <Stats title="Benefits Of Our Office Business Address" icontitle1="Base For Your Business" icondesc1="Every business needs a base to expand. Have yours!" icontitle2="Official Documentation" icondesc2='You can use the lease on official documentation, i.e. your bank account, amazon, etc.' icon1=<ClockIcon className="w-12" /> icon2=<InboxStackIcon className='w-12' /> icontitle3='1 Year Lease' icon3=<ShieldCheckIcon className='w-12' /> icondesc3='Reliable, easy, fast-leasing transaction.' />
            <Price />
            <ExclusiveSolution heading='Exclusive Solution' title='Interested in our “Manage your Business” packages?​' desc='Make managing your company easier! Explore our bundle solutions!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more!' button='Learn More' />
            <Footer />
        </main>
    )
}
