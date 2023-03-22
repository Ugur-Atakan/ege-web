import React from "react"
import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import LeftTextRightImg from "../components/Incorporation"
import LeftImgRightText from "../components/LeftImgRightText"
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

function Postincorporation() {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <Navbar />
      <LeftImgRightText img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" heading={t('post_incorp_header1_uptitle_blue')} desc={t('post_incorp_header1_text')} title={t('post_incorp_header1_maintitle_black')} button={t('post_incorp_header1_button')} href={`/${i18n.language}/products/${productData[19].link}/contact`} />
      <Price />
      <Stats title={t('post_incorp_header3_title')} icontitle1={t('post_incorp_header3_icon1_title')} icondesc1={t('post_incorp_header3_icon1_text')} icontitle2={t('post_incorp_header3_icon2_title')} icondesc2={t('post_incorp_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('post_incorp_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('post_incorp_header3_icon3_text')} />
      <LeftTextRightImg title={t('post_incorp_header4_title')} />
      <ExclusiveSolution heading={t('post_incorp_header5_uptitle_blue')} title={t('post_incorp_header5_maintitle_black')} desc={t('post_incorp_header5_text_left')} rightdesc={t('post_incorp_header5_text_right')} button={t('post_incorp_header5_button')} />
      <Footer />
    </main>
  )
}

export default Postincorporation