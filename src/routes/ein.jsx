import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import LeftImgRightText from '../components/LeftImgRightText'
import topnotch from '../images/topnotch.jpg'
import whatweneed from '../images/professionals-high-five.webp'
import Stats from '../components/Stats'
import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from "@heroicons/react/24/outline"
import Price from '../components/Price'
import ExclusiveSolution from '../components/ExclusiveSolution'
import Requirements from '../components/Requirements'
import productData from '../assets/productData'
import { useTranslation } from 'react-i18next'

export default function Ein() {
    const {t} = useTranslation();
    return (
        <main>
            <Navbar />
            <LeftImgRightText heading={t('ein_header1_uptitle_blue')} title={t('ein_header1_maintitle_black')} img={topnotch} desc={t('ein_header1_text')} button={t('ein_header1_button')}  href={`/products/${productData[10].link}/contact`}/>
            <Price/>
            <Stats title={t('ein_header3_title')} icontitle1={t('ein_header3_icon1_title')} icondesc1={t('ein_header3_icon1_text')} icontitle2={t('ein_header3_icon2_title')} icondesc2={t('ein_header3_icon2_text')} icon1=<DocumentCheckIcon className="w-12" /> icon2=<CursorArrowRippleIcon className='w-12' /> icontitle3={t('ein_header3_icon3_title')} icon3=<NewspaperIcon className='w-12' /> icondesc3={t('ein_header3_icon3_text')} />
            <LeftImgRightText img={whatweneed} desc={t('ein_header4_text')} />
            <ExclusiveSolution heading={t('ein_header5_uptitle_blue')} title={t('ein_header5_maintitle_black')} desc={t('ein_header5_text_left')} rightdesc={t('ein_header5_text_right')} button={t('ein_header5_button')} />
            <Requirements title={t('ein_header5_bottom_title_blue')} desc=<ul className='list-disc '>{t('ein_header5_bottom_text_black')}
            <li>{t('ein_header6_list1')}</li>
            <li>{t('ein_header6_list2')}</li>
            <li>{t('ein_header6_list3')}</li>
            <li>{t('ein_header6_list4')}</li>
            <li>{t('ein_header6_list5')}</li>
            <li>{t('ein_header6_list6')}</li>
            <li>{t('ein_header6_list7')}</li>
            <li>{t('ein_header6_list8')}</li>
            <li>{t('ein_header6_list9')}</li>
            <li>{t('ein_header6_list10')}</li>
            <li>{t('ein_header6_list11')}</li>
            <li>{t('ein_header6_list12')}</li>
            </ul>/>
            <Footer />
        </main>
    )
}
