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
import { useTranslation } from "react-i18next"

function ComplianceReminder() {
  const {t} = useTranslation();
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading={t('compliance_reminder_header1_uptitle_blue')} title={t('compliance_reminder_header1_uptitle_black')} desc={t('compliance_reminder_header1_text')} img={cr1} button={t('compliance_reminder_header1_button')} href={`/products/${productData[0].link}/contact`} />
        <Price price={t('compliance_reminder_price')} price={t('price_package_compliance_reminder')}/>
        <Stats title={t('compliance_reminder_header3_title')} icontitle1={t('compliance_reminder_header3_icon1_title')} icondesc1={t('compliance_reminder_header3_icon1_text')} icontitle2={t('compliance_reminder_header3_icon2_title')}  icondesc2={t('compliance_reminder_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12"/> icon2=<CursorArrowRippleIcon className='w-12'/> icontitle3={t('compliance_reminder_header3_icon3_title')} icon3=<NewspaperIcon className='w-12'/> icondesc3={t('compliance_reminder_header3_icon3_text')} />
        <LeftImgRightText  desc={t('compliance_reminder_header4_text')} img={cr2} href='contact' reverse='true'/>
        <ExclusiveSolution heading={t('compliance_reminder_header5_uptitle_blue')} title={t('compliance_reminder_header5_uptitle_black')} desc={t('compliance_reminder_header5_text_left')} rightdesc={t('compliance_reminder_header5_text_right')} button={t('compliance_reminder_header5_button')}/>
        <Footer/>
    </main>
  )
}   

export default ComplianceReminder