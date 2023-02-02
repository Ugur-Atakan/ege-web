import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import Delaware from '../components/Delaware'

export default function Apostille() {
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading='International Entity Services' title='Apostille' desc='Are you in need of apostilled documents? Do you need to use your notarized/certified documents outside of the U.S.? We can obtain Certificate of Apostille / Certificate of Authentication, depending on the country that the document will be used.' button='Get Started Now' href='contact' reverse='true' />
            <Delaware/>
            <Stats title="Features of Apostille" icontitle1="Use your documents abroad" icondesc1="If you are in need of a company document that has been filed with Delaware Division of Corporations with an apostille certificate, contact us now!." icontitle2="Shipping" icondesc2='We’ll ship your documents wherever you want.' icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12'/>/>
            <Price />
            <ExclusiveSolution heading='Exclusive Solutions' title='Need a certified copy of an apostille certificate?' desc='If you are in need of additional copies of a Certificate of Dissolution from the State, we can help you getting certified copies!' rightdesc='We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.' button='Learn More' />
            <Requirements title='Requirements' desc=<ul className='list-disc'><li>Whenever an apostille service is requested for documents that have been filed with the Delaware Secretary of State, each document must be certified separatel</li><li>Any document that is in a foreign language must have the English translation attached to it. The English version must be notarized.</li></ul> />
            <Footer />
        </main>
    )
}
