import {Navbar} from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import cogs1 from '../images/cogs1.jpg'
import cogs2 from '../images/cog2.jpg'
import Stats from '../components/Stats'
import {DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon} from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function CertificateOfGoodStanding() {
  const {t,i18n} = useTranslation();
  return (
    <main>
        <Navbar/>
        <LeftImgRightText heading={t('certificate_of_good_standing_header1_uptitle_blue')} title={t('certificate_of_good_standing_header1_uptitle_black')} img={cogs1} desc={t('certificate_of_good_standing_header1_text')} button={t('certificate_of_good_standing_header1_button')} href={`/${i18n.language}/products/${productData[8].link}/contact`}/>
        <Price price={t('price_package_certificate_of_good_standing')} href={`/${i18n.language}/products/${productData[8].link}/contact`} />
        <Stats title={t('certificate_of_good_standing_header3_title')} icontitle1={t('certificate_of_good_standing_header3_icon1_title')} icondesc1={t('certificate_of_good_standing_header3_icon1_text')} icontitle2={t('certificate_of_good_standing_header3_icon2_title')}  icondesc2={t('certificate_of_good_standing_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12"/> icon2=<CursorArrowRippleIcon className='w-12'/> icontitle3={t('certificate_of_good_standing_header3_icon3_title')} icon3=<NewspaperIcon className='w-12'/> icondesc3={t('certificate_of_good_standing_header3_icon3_text')} />
        <LeftImgRightText img={cogs2} desc={t('certificate_of_good_standing_header4_text')}/>
        <ExclusiveSolution heading={t('certificate_of_good_standing_header5_uptitle_blue')} title={t('certificate_of_good_standing_header5_uptitle_black')} desc={t('certificate_of_good_standing_header5_text_left')} rightdesc={t('certificate_of_good_standing_header5_text_right')} button={t('certificate_of_good_standing_header5_button')} href={`/${i18n.language}/products/${productData[8].link}/contact`}/>
        <Requirements title={t('certificate_of_good_standing_header5_bottom_title_black')} desc={t('certificate_of_good_standing_header5_bottom_text')}/>
        <Footer/>
    </main>
  )
}
