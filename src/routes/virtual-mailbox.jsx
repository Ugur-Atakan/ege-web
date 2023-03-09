import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import vmb from '../images/virtual-mailbox.jpg'
import vmb2 from '../images/virtual-mailbox-section-2.jpg'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {EnvelopeOpenIcon, InboxStackIcon, CalendarDaysIcon} from "@heroicons/react/24/outline"
import productData from "../assets/productData"
import { useTranslation } from "react-i18next"

function VirtualMailbox() {
  const {t} = useTranslation();
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading={t('virtual_mailbox_header1_uptitle_blue')} title={t('virtual_mailbox_header1_uptitle_black')} desc={t('virtual_mailbox_header1_text')} button={t('virtual_mailbox_header1_button')} href={`/products/${productData[2].link}/contact`} img={vmb} />
        <Price/>
 <Stats title={t('virtual_mailbox_header3_title')}icontitle1={t('virtual_mailbox_header3_icon1_title')} icondesc1={t('virtual_mailbox_header3_icon1_text')} icontitle2={t('virtual_mailbox_header3_icon2_title')} icondesc2={t('virtual_mailbox_header3_icon2_text')} icon1=<EnvelopeOpenIcon className="w-12"/> icon2=<InboxStackIcon className='w-12'/> icontitle3={t('virtual_mailbox_header3_icon3_title')} icon3=<CalendarDaysIcon className='w-12'/> icondesc3={t('virtual_mailbox_header3_icon3_text')} />
 <LeftImgRightText  title={t('virtual_mailbox_header4_title')} desc={t('virtual_mailbox_header4_text')} button={t('virtual_mailbox_header4_button')} img={vmb2} reverse='true' />
        <ExclusiveSolution heading={t('virtual_mailbox_header5_uptitle_blue')} title={t('virtual_mailbox_header5_uptitle_black')} desc={t('virtual_mailbox_header5_text_left')} rightdesc={t('virtual_mailbox_header5_text_right')} button={t('virtual_mailbox_header5_button')}/>
        <Footer/>
    </main>
  )
}

export default VirtualMailbox