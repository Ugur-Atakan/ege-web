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
import {useTranslation} from 'react-i18next'
 
export default function AccountOpeningSupport() {
  const {t} = useTranslation();
  return (
    <main>
    <Navbar />
    <LeftImgRightText img={topnotch} heading={t('us_bank_account_header1_uptitle_blue')} title={t('us_bank_account_header1_maintitle_black')} desc={t('us_bank_account_header1_text')} button={t('us_bank_account_header1_button')} href={`/products/${productData[18].link}/contact`} />
    <Price/>
    <Stats title={t('us_bank_account_header3_title')} icontitle1={t('us_bank_account_header3_icon1_title')} icondesc1={t('us_bank_account_header3_icon1_text')} icontitle2={t('us_bank_account_header3_icon2_title')} icondesc2={t('us_bank_account_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('us_bank_account_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('us_bank_account_header3_icon3_text')} />
    <LeftImgRightText img={whatweneed} desc={t('us_bank_account_header4_text')} />
    <ExclusiveSolution heading={t('us_bank_account_header5_uptitle_blue')} title={t('us_bank_account_header5_maintitle_black')} desc={t('us_bank_account_header5_text_left')} rightdesc={t('us_bank_account_header5_text_right')} button={t('us_bank_account_header5_button')}/>
    <Footer />
</main>
  )
}
