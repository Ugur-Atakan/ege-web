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
import Requirements from '../components/Requirements'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function DissolutionAndCancellation() {
    const {t,i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading={t('dissolution_header1_uptitle_blue')} title={t('dissolution_header1_maintitle_black')} desc={t('dissolution_header1_text')} button={t('dissolution_header1_button')}  href={`/${i18n.language}/products/${productData[13].link}/contact`} />
            <Price price={t('price_package_dissolution')} />
            <Stats title={t('dissolution_header3_title')} icontitle1={t('dissolution_header3_icon1_title')} icondesc1={t('dissolution_header3_icon1_text')} icontitle2={t('dissolution_header3_icon2_title')} icondesc2={t('dissolution_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('dissolution_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('dissolution_header3_icon3_text')} />
            <LeftImgRightText img={whatweneed} desc=<ul>{t('dissolution_header4_text1')}
            <li className='ml-8 py-1 list-disc'>{t('dissolution_header4_text2')}</li>
            <li className='ml-8 py-1 list-disc'>{t('dissolution_header4_text3')}</li>
            <li className='ml-8 py-1 list-disc'>{t('dissolution_header4_text4')}</li>{t('dissolution_header4_text5')}</ul>/>
            <ExclusiveSolution heading={t('dissolution_header5_uptitle_blue')} title={t('dissolution_header5_maintitle_black')} desc={t('dissolution_header5_text_left')} rightdesc={t('dissolution_header5_text_right')} button={t('dissolution_header5_button')} />
            <Requirements title={t('dissolution_header5_bottom_title_blue')} desc={t('dissolution_header5_bottom_title_black')} />
            <Footer />
        </main>
    )
}
