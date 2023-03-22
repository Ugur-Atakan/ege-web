import Footer from "../components/Footer"
import LeftImgRightText from "../components/LeftImgRightText"
import { Navbar } from "../components/Navbar"
import dr from '../images/dedicated-receptionist.jpg'
import dr2 from '../images/dedicated-receptionist-2.jpg'
import Stats from "../components/Stats"
import Price from "../components/Price"
import ExclusiveSolution from "../components/ExclusiveSolution"
import { PresentationChartBarIcon, ArrowPathIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import productData from '../assets/productData'
import { useTranslation } from "react-i18next"

export default function DedicatedReceptionist() {
  const {t,i18n} = useTranslation();
  return (
    <main>
      <Navbar />
      <LeftImgRightText heading={t('dedicated_receptionist_header1_uptitle_blue')} title={t('dedicated_receptionist_header1_uptitle_black')} desc={t('dedicated_receptionist_header1_text')} button={t('dedicated_receptionist_header1_button')}  href={`/${i18n.language}/products/${productData[6].link}/contact`} img={dr} />
      <Price href={`/${i18n.language}/products/${productData[6].link}/contact`}/>
      <Stats title={t('dedicated_receptionist_header3_title')} icontitle1={t('dedicated_receptionist_header3_icon1_title')} icondesc1={t('dedicated_receptionist_header3_icon1_text')} icontitle2={t('dedicated_receptionist_header3_icon2_title')} icondesc2={t('dedicated_receptionist_header3_icon2_text')} icon1=<PresentationChartBarIcon className="w-12" /> icon2=<ArrowPathIcon className='w-12' /> icontitle3={t('dedicated_receptionist_header3_icon3_title')} icon3=<GlobeAltIcon className='w-12' /> icondesc3={t('dedicated_receptionist_header3_icon3_text')} />
      <LeftImgRightText title={t('dedicated_receptionist_header4_title')} desc={t('dedicated_receptionist_header4_text')} button={t('dedicated_receptionist_header4_button')} img={dr2} />
      <ExclusiveSolution heading={t('dedicated_receptionist_header5_uptitle_blue')} title={t('dedicated_receptionist_header1_uptitle_black')} desc={t('dedicated_receptionist_header5_text_left')} rightdesc={t('dedicated_receptionist_header5_text_right')} button={t('dedicated_receptionist_header5_button')} />
      <Footer />
    </main>
  )
}
