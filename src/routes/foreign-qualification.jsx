import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { MegaphoneIcon } from '@heroicons/react/24/outline'
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'

export default function ForeignQualification() {
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading='Manage Your Business' title='Foreign Qualification' img={topnotch} desc='Is your company planning to conduct business in a state that is not the company’s state of incorporatiton? Then, you may need to apply for foreign qualification.' button='Get Started Now' href={`/products/${productData[7].link}/contact`}/>
        <Price/>
        <Stats title='Step-By-Step Guide' icon1=<MegaphoneIcon className="w-12"/> icontitle1='Provide us with the necessary information' icondesc1='Fill out the form and complete the payment.' icon2=<MegaphoneIcon className="w-12"/> icontitle2='Obtain required certificates from the state of formation' icondesc2="Our experts will compile, and if necessary, send the relevant documents for the authorized person's signature." icon3=<MegaphoneIcon className="w-12"/> icontitle3='Filing the documents' icondesc3='We file the necessary documents with the State of Delaware Division of Corporations. Once completed, you will be notified and receive the Certificate of Authority.' />
        <LeftImgRightText heading='Do not be mistaken! “Foreign qualification” does not mean being qualified to conduct business abroad.' img={whatweneed} desc='In the U.S., an entity that seeks to conduct business outside of its state of formation is considered “foreign”. States may require “foreign qualifications” from the “foreign” entities before transacting any business.In short, if you wish to register your business (foreign qualification) in a state in which your business is considered to be “alien”, you need to file for a Certificate of Authority.
What constitutes transacting business varies by state, yet it often includes hiring employees or opening an office. If you think you need legal advice on your specific situation, please seek the counsel of an attorney.
Failure to comply with such registration can result in hefty fines and back taxes. The company without proper registration could also lose access to that state’s court system.'/>
        <ExclusiveSolution heading='Exclusive Solution' title='Need a certified copy of the Certificate of Authority?' desc='If you are in need of additional copies of the Certificate of Authority from the State, we can help you get your certified copies.' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More' />
        <Requirements title='Requrements' desc='States usually require a Certificate of Existence/Certificate of Good Standing, often dated within six months prior to the filing (subject to change according to the state you are applying for), from the foreign company’s jurisdiction of incorporation to be submitted.Please note that the company must be in a good standing with the state of incorporation. If not, we will contact you as soon as possible to resolve the situation.'/>
        <Footer/>
    </main>
  )
}
