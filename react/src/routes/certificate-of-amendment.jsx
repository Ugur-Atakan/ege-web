import React from 'react'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import amendment1 from '../images/amendment1.jpg'
import amendment2 from '../images/amendment2.jpg'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import productData from '../assets/productData'
import {useTranslation} from 'react-i18next'

export default function DissolutionAndCancellation() {
    const {t, i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={amendment1} heading={t('certificate_of_amendment_header1_uptitle_blue')} title={t('certificate_of_amendment_header1_maintitle_black')} desc={t('certificate_of_amendment_header1_text')} button={t('certificate_of_amendment_header1_button')} href={`/${i18n.language}/products/${productData[14].link}/contact`} />
            <Price price={t('price_package_amendment')} href={`/${i18n.language}/products/${productData[14].link}/contact`}/>
            <Stats title={t('certificate_of_amendment_header3_title')} icontitle1={t('certificate_of_amendment_header3_icon1_title')} icondesc1={t('certificate_of_amendment_header3_icon1_text')} icontitle2={t('certificate_of_amendment_header3_icon2_title')} icondesc2={t('certificate_of_amendment_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('certificate_of_amendment_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('certificate_of_amendment_header3_icon3_text')} />
            <LeftImgRightText img={amendment2} desc={t('certificate_of_amendment_header4_text')}/>
            <ExclusiveSolution heading={t('certificate_of_amendment_header5_uptitle_blue')} title={t('certificate_of_amendment_header5_maintitle_black')} desc={t('certificate_of_amendment_header5_text_left')} rightdesc={t('certificate_of_amendment_header5_text_right')}  button={t('certificate_of_amendment_header5_button')} href={`/${i18n.language}/products/${productData[14].link}/contact`} />
            <Footer />
        </main>
    )
}
