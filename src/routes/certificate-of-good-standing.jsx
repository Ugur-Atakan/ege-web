import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import {DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon} from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'

export default function CertificateOfGoodStanding() {
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading='Manage Your Business' title='Certificate of Good Standing' img={topnotch} desc='Are you registering your company to another state and in need of a Certificate of Good standing? Or do you need it for something else?' button='Get Started Now' href={`/products/${productData[8].link}/contact`}/>
        <Price/>
        <Stats title="Features Of A Certificate Of Good Standing" icontitle1="Excellent Support" icondesc1="Our representatives will assist you to meet your company’s need." icontitle2="Expedited Services"  icondesc2='Are you in rush? We can expedite your order!' icon1=<DocumentCheckIcon className="w-12"/> icon2=<CursorArrowRippleIcon className='w-12'/> icontitle3='Save on time' icon3=<NewspaperIcon className='w-12'/> icondesc3='You can prove that your company is in good standing.' />
        <LeftImgRightText img={whatweneed} desc='A Certificate of Good Standing (also known as a Certificate of Status, a Certificate of Existence, or a Certificate of Fact) demonstrates that your company has submitted all required reports and paid all required fees/taxes to the state, therefore verifying its existence in that state. Issued by the state authorities, the document is evidence that your company is legally permitted to conduct business activities as a properly registered company within that particular state. However, it is important to note that the Certificate of Good Standing is not a business license, which is in fact required to be obtained in order to legally conduct business. Usually, a company can legally conduct business without obtaining a Certificate of Good Standing. '/>
        <ExclusiveSolution heading='Exclusive Solution' title='Need a good standing certificate for a foreign qualification?' desc='If you are in need of a Certificate of Good Standing for a registration in a different state, we can certainly help you in this regard too!' rightdesc='We provide comprehensive services from compliance, filing, need business set up, mailbox, bookkeeping and tax filing' button='Learn More' />
        <Requirements title='Requrements' desc='
If a company is not in a good standing status, it is not possible to obtain the Certificate of Good Standing. To maintain or to be reinstated to good standing status, you must pay all due State fees and completed annual tax reports.'/>
        <Footer/>
    </main>
  )
}
