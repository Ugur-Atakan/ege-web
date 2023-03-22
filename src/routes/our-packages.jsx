import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import op1 from '../images/our-packages.jpg'
import op2 from '../images/our-packages-2.jpg'
import Price from "../components/Price"
import productData from "../assets/productData"
import { useTranslation } from "react-i18next"

export default function OurPackages() {
    const {t, i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading={t('our_packages_header1_uptitle_blue')} title={t('our_packages_header1_uptitle_black')} desc={t('our_packages_header1_text')} button={t('our_packages_header1_button')} href={`/${i18n.language}/products/${productData[4].link}/contact`} img={op1} />
            <Price href={`/${i18n.language}/products/${productData[4].link}/contact`}/>
            <LeftImgRightText title={t('our_packages_header3_title')}  desc={t('our_packages_header3_text')}  button={t('our_packages_header3_button')} href='contact' img={op2} reverse='true' />
            <Footer />
        </main>
    )
}
