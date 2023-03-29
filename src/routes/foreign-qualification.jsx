import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import foreign1 from '../images/foreign1.jpg'
import foreign2 from '../images/foreign2.jpg'
import Stats from '../components/Stats'
import { MegaphoneIcon } from '@heroicons/react/24/outline'
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function ForeignQualification() {
  const {t, i18n} = useTranslation();
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading={t('foreign_qualification_header1_uptitle_blue')} title={t('foreign_qualification_header1_uptitle_black')}  img={foreign1} desc={t('foreign_qualification_header1_text')} button={t('foreign_qualification_header1_button')}   href={`/${i18n.language}/products/${productData[7].link}/contact`}/>
        <Price href={`/${i18n.language}/products/${productData[7].link}/contact`}/>
        <Stats title={t('foreign_qualification_header3_title')}  icon1=<MegaphoneIcon className="w-12"/> icontitle1={t('foreign_qualification_header3_icon1_title')}  icondesc1={t('foreign_qualification_header3_icon1_text')}  icon2=<MegaphoneIcon className="w-12"/> icontitle2={t('foreign_qualification_header3_icon2_title')}   icondesc2={t('foreign_qualification_header3_icon2_text')}  icon3=<MegaphoneIcon className="w-12"/> icontitle3={t('foreign_qualification_header3_icon3_title')}  icondesc3={t('foreign_qualification_header3_icon3_text')}  />
        <LeftImgRightText desc={t('foreign_qualification_header4_text')}  img={foreign2} />
        <ExclusiveSolution heading={t('foreign_qualification_header5_uptitle_blue')}  title={t('foreign_qualification_header5_uptitle_black')}  desc={t('foreign_qualification_header5_text_left')}  rightdesc={t('foreign_qualification_header5_text_right')} button={t('foreign_qualification_header5_button')} href={`/${i18n.language}/products/${productData[15].link}/contact`} />
        <Footer/>
    </main>
  )
}
