import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import {DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon} from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function CertificateOfGoodStanding() {
  const {t} = useTranslation();
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading={t('certificate_of_good_standing_header1_uptitle_blue')} title={t('certificate_of_good_standing_header1_uptitle_black')} img={topnotch} desc={t('certificate_of_good_standing_header1_text')} button={t('certificate_of_good_standing_header1_button')} href={`/products/${productData[8].link}/contact`}/>
        <Price price={t('price_packages_certificate_of_good_standing')} />
        <Stats title={t('certificate_of_good_standing_header3_title')} icontitle1={t('certificate_of_good_standing_header3_icon1_title')} icondesc1={t('certificate_of_good_standing_header3_icon1_text')} icontitle2={t('certificate_of_good_standing_header3_icon2_title')}  icondesc2={t('certificate_of_good_standing_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12"/> icon2=<CursorArrowRippleIcon className='w-12'/> icontitle3={t('certificate_of_good_standing_header3_icon3_title')} icon3=<NewspaperIcon className='w-12'/> icondesc3={t('certificate_of_good_standing_header3_icon3_text')} />
        <LeftImgRightText img={whatweneed} desc={t('certificate_of_good_standing_header4_text')}/>
        <ExclusiveSolution heading={t('certificate_of_good_standing_header5_uptitle_blue')} title={t('certificate_of_good_standing_header5_uptitle_black')} desc={t('certificate_of_good_standing_header5_text_left')} rightdesc={t('certificate_of_good_standing_header5_text_right')} button={t('certificate_of_good_standing_header5_button')}/>
        <Requirements title={t('certificate_of_good_standing_header5_bottom_title_black')} desc={t('certificate_of_good_standing_header5_bottom_text')}/>
        <Footer/>
    </main>
  )
}
