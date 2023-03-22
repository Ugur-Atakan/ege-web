import React from 'react'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function EntityTypeConversion() {
    const {t, i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading={t('entity_type_conversion_header1_uptitle_blue')} title={t('entity_type_conversion_header1_maintitle_black')} desc={t('entity_type_conversion_header1_text')} button={t('entity_type_conversion_header1_button')} href={`/${i18n.language}/products/${productData[11].link}/contact`} />
            <Price/>
            <Stats title={t('entity_type_conversion_header3_title')} icontitle1={t('entity_type_conversion_header3_icon1_title')} icondesc1={t('entity_type_conversion_header3_icon1_text')} icontitle2={t('entity_type_conversion_header3_icon2_title')} icondesc2={t('entity_type_conversion_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('entity_type_conversion_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('entity_type_conversion_header3_icon3_text')} />
            <LeftImgRightText img={whatweneed} heading title={t('entity_type_conversion_header4_title')} desc={t('entity_type_conversion_header4_text')} />
            <ExclusiveSolution heading={t('entity_type_conversion_header5_uptitle_blue')} title={t('entity_type_conversion_header5_maintitle_black')} desc={t('entity_type_conversion_header5_text_left')} rightdesc={t('entity_type_conversion_header5_text_right')} button={t('entity_type_conversion_header5_button')}/>
            <Footer />
        </main>
    )
}
