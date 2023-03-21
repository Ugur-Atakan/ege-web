import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import ra1 from '../images/registered-agent.jpg'
import ra2 from '../images/registered-agent2.jpg'
import ra3 from '../images/registered-agent3.jpg'
import ra4 from '../images/registered-agent4.jpg'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import { EnvelopeOpenIcon, InboxStackIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"
import productData from "../assets/productData"
import { useTranslation } from "react-i18next"
export default function RegisteredAgent() {
    const { t } = useTranslation()
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading={t('registered_agent_header1_uptitle_blue')} title={t('registered_agent_header1_uptitle_black')} desc={t('registered_agent_header1_text')} button={t('registered_agent_header1_button')} img={ra1} href={`/products/${productData[1].link}/contact`} />
            <Price price={t('price_package_registered_agent')} />
            <Price price={t('registered_agent_price')} />
            <LeftImgRightText title={t('registered_agent_header3_title')} desc={t('registered_agent_header3_text')} img={ra2} />
            <LeftImgRightText title={t('registered_agent_header4_title')} desc={t('registered_agent_header4_text')} img={ra3} reverse='true' />
            <LeftImgRightText title={t('registered_agent_header5_title')} desc={t('registered_agent_header5_text')} img={ra4} />
            <Stats title={t('registered_agent_header6_title')} icontitle1={t('registered_agent_header6_icon1_title')} icondesc1={t('registered_agent_header6_icon1_text')} icontitle2={t('registered_agent_header6_icon2_title')} icondesc2={t('registered_agent_header6_icon2_text')} icon1=<EnvelopeOpenIcon className="w-12" /> icon2=<InboxStackIcon className='w-12' /> icontitle3={t('registered_agent_header6_icon3_title')} icon3=<CalendarDaysIcon className='w-12' /> icondesc3={t('registered_agent_header6_icon3_text')} />
            <ExclusiveSolution heading={t('registered_agent_header7_uptitle_blue')} title={t('registered_agent_header7_uptitle_black')} desc={t('registered_agent_header7_text_left')} rightdesc={t('registered_agent_header7_text_right')} button={t('registered_agent_header7_button')} />
            <Footer />
        </main>
    )
}
