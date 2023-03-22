import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import oa1 from '../images/office-address.jpg'
import oa2 from '../images/office-adress2.jpg'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {ClockIcon, InboxStackIcon, ShieldCheckIcon} from "@heroicons/react/24/outline"
import productData from "../assets/productData"
import { useTranslation } from "react-i18next"

export default function OfficeAddress() {
    const {t, i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading={t('office_address_header1_uptitle_blue')} title={t('office_address_header1_uptitle_black')} desc={t('office_address_header1_text')} button={t('office_address_header1_button')} href={`/${i18n.language}/products/${productData[3].link}/contact`} img={oa1} />
            <Price href={`/${i18n.language}/products/${productData[3].link}/contact`}/>
            <Stats title={t('office_address_header3_title')} icontitle1={t('office_address_header3_icon1_title')} icondesc1={t('office_address_header3_icon1_text')} icontitle2={t('office_address_header3_icon2_title')} icondesc2={t('office_address_header3_icon2_text')} icon1=<ClockIcon className="w-12" /> icon2=<InboxStackIcon className='w-12' /> icontitle3={t('office_address_header3_icon3_title')} icon3=<ShieldCheckIcon className='w-12' /> icondesc3={t('office_address_header3_icon3_text')} />
            <LeftImgRightText title={t('office_address_header4_title')} desc={t('office_address_header4_text')} img={oa2} reverse='true' />
            <ExclusiveSolution heading={t('office_address_header5_uptitle_blue')} title={t('office_address_header5_uptitle_black')} desc={t('office_address_header5_text_left')} rightdesc={t('office_address_header5_text_right')} button={t('office_address_header5_button')} href={`/${i18n.language}/products/${productData[15].link}/contact`} />
            <Footer />
        </main>
    )
}
