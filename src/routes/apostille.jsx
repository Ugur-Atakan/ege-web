import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import topnotch from '../images/topnotch.jpg'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import Delaware from '../components/Delaware'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function Apostille() {
    const {t} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={topnotch} heading={t('apostille_header1_uptitle_blue')} title={t('apostille_header1_maintitle_black')} desc={t('apostille_header1_text')} button={t('apostille_header1_button')} href={`/products/${productData[16].link}/contact`}/>
            <Price/>
            <Stats title={t('apostille_header3_title')} icontitle1={t('apostille_header3_icon1_title')} icondesc1={t('apostille_header3_icon1_text')} icontitle2={t('apostille_header3_icon2_title')} icondesc2={t('apostille_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12'/>/>
            <Delaware/>
            <ExclusiveSolution heading={t('apostille_header5_uptitle_blue')} title={t('apostille_header5_maintitle_black')} desc={t('apostille_header5_text_left')} rightdesc={t('apostille_header5_text_right')} button={t('apostille_header5_button')}  />
            <Requirements title={t('apostille_header5_maintitle2_title')} desc=<ul className='list-disc'><li>{t('apostille_header5_text2_1')}</li><li>{t('apostille_header5_text2_2')}</li></ul> />
            <Footer />
        </main>
    )
}
