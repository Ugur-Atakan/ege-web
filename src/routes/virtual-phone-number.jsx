import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import vpn from '../images/virtual-phone-number.jpg'
import vpn2 from '../images/virtual-phone-number-section-2.jpg'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import {ClockIcon, BanknotesIcon, UsersIcon} from "@heroicons/react/24/outline"
import productData from "../assets/productData"
import { useTranslation } from "react-i18next"

export default function VirtualPhoneNumber() {
    const {t, i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading={t('virtual_phone_number_header1_uptitle_blue')} title={t('virtual_phone_number_header1_maintitle_black')} desc={t('virtual_phone_number_header1_text')} button={t('virtual_phone_number_header1_button')} href={`/${i18n.language}/products/${productData[5].link}/contact`} img={vpn} />
            <Price href={`/${i18n.language}/products/${productData[5].link}/contact`}/>
            <Stats title={t('virtual_phone_number_header3_title')} icontitle1={t('virtual_phone_number_header3_icon1_title')} icondesc1={t('virtual_phone_number_header3_icon1_text')} icontitle2={t('virtual_phone_number_header3_icon2_title')} icondesc2={t('virtual_phone_number_header3_icon2_text')} icon1=<UsersIcon className="w-12" /> icon2=<BanknotesIcon className='w-12' /> icontitle3={t('virtual_phone_number_header3_icon3_title')} icon3=<ClockIcon className='w-12' /> icondesc3={t('virtual_phone_number_header3_icon3_text')} />
            <LeftImgRightText title={t('virtual_phone_number_header4_title')} desc={t('virtual_phone_number_header4_text')} img={vpn2} />
            <ExclusiveSolution heading={t('virtual_phone_number_header5_uptitle_blue')} title={t('virtual_phone_number_header5_maintitle_black')} desc={t('virtual_phone_number_header5_text_left')} rightdesc={t('virtual_phone_number_header5_text_right')} button='Learn More' href={`/${i18n.language}/products/${productData[5].link}/contact`} />
            <Footer />
        </main>
    )
}
