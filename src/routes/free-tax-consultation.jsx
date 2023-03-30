import Footer from "../components/Footer";
import LeftImgRightText from "../components/LeftImgRightText";
import { Navbar } from "../components/Navbar";
import freetaximg from "../images/freetaximg.jpg"
import { useTranslation } from 'react-i18next'
import Price from "../components/Price";
import Calendly from "../components/Calendly";

export default function Freetaxconsultation() {
    const {t,i18n} = useTranslation();
  return (
    <>
    <Navbar/>
    <LeftImgRightText img={freetaximg} title={t('free_tax_consultant_title')} desc={t('free_tax_consultant_desc')} calendly={<Calendly/> }/>
    <Price price={t('free_tax_consultant_price')}/>
    <Footer/>
    </>
  )
}

