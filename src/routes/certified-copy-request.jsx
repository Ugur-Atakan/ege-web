import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import ccr1 from '../images/ccr1.jpg'
import ccr2 from '../images/ccr2.jpg'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function CertifiedCopyRequest() {
    const {t,i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading={t('certified_copy_request_header1_uptitle_blue')} title={t('certified_copy_request_header1_uptitle_black')} img={ccr1} desc={t('certified_copy_request_header1_text')} button={t('certified_copy_request_header1_button')}  href={`/${i18n.language}/products/${productData[17].link}/contact`} />
            <Price price={t('price_package_certified_copy_request')} href={`/${i18n.language}/products/${productData[17].link}/contact`}/>
            <Stats title={t('certified_copy_request_header3_title')} icontitle1={t('certified_copy_request_header3_icon1_title')} icondesc1={t('certified_copy_request_header3_icon1_text')} icontitle2={t('certified_copy_request_header3_icon2_title')} icondesc2={t('certified_copy_request_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('certified_copy_request_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('certified_copy_request_header3_icon3_text')}/>
            <LeftImgRightText img={ccr2} desc={t('certified_copy_request_header4_text')} />
            <ExclusiveSolution heading={t('certified_copy_request_header5_uptitle_blue')} title={t('certified_copy_request_header5_maintitle_black')} desc={t('certified_copy_request_header5_text_left')} rightdesc={t('certified_copy_request_header5_text_right')} button={t('certified_copy_request_header5_button')} href={`/${i18n.language}/products/${productData[17].link}/contact`} />
            <Requirements title={t('certified_copy_request_header5_bottom_title_blue')} desc={t('certified_copy_request_header5_bottom_title_black')}/>
            <Footer />
        </main>
    )
}
