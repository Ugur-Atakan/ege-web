import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import { Navbar } from '../components/Navbar'
import dba1 from '../images/dba1.jpg'
import dba2 from '../images/dba2.jpg'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function DoingBusinessAs() {
    const {t,i18n} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText img={dba1} heading={t('dba_header1_uptitle_blue')} title={t('dba_header1_maintitle_black')} desc={t('dba_header1_text')} button={t('dba_header1_button')} href={`/${i18n.language}/products/${productData[15].link}/contact`} />
            <Price price={t('price_package_dba')} href={`/${i18n.language}/products/${productData[15].link}/contact`} />
            <Stats title={t('dba_header3_title')} icontitle1={t('dba_header3_icon1_title')} icondesc1={t('dba_header3_icon1_text')} icontitle2={t('dba_header3_icon2_title')} icondesc2={t('dba_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('dba_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('dba_header3_icon3_text')} />
            <LeftImgRightText img={dba2} desc=<ul>
{t('dba_header4_text1')}<li className='list-disc ml-8 py-1'>{t('dba_header4_text2')}</li><li className='list-disc py-1 ml-8'>{t('dba_header4_text3')}</li>{t('dba_header4_text4')}</ul>/>
            <Footer />
        </main>
    )
}
