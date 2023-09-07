import { React  } from 'react';
import './styles/tailwind.css'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Blog from './routes/blog'
import { Home } from './routes/home'
import { Onboarding } from './routes/onboarding'
import { PostOrder } from './routes/postorder'
import { PricingFormMyCompany } from './routes/pricing-form-my-company'
import { PricingPostIncorporationDocuments } from './routes/pricing-post-incorporation-documents'
import { PricingVirtualMailbox } from './routes/pricing-virtual-mailbox'
import { PricingApostilleAndNotorizationServices } from './routes/pricing-apostille-and-notarization-services'
import PostIncorporation from './routes/post-incorporation'
import Contact from './routes/contact'
import FormYourCompany from './routes/form-your-company'
import VirtualMailbox from './routes/virtual-mailbox';
import ComplianceReminder from './routes/compliance-reminder';
import RegisteredAgent from './routes/registered-agent';
import OfficeAddress from './routes/office-address';
import OurPackages from './routes/our-packages';
import VirtualPhoneNumber from './routes/virtual-phone-number';
import DedicatedReceptionist from './routes/dedicated-receptionist';
import TermsOfService from './routes/terms-of-service';
import PrivacyPolicy from './routes/privacy-policy';
import Faqs from './routes/faq';
import ForeignQualification from './routes/foreign-qualification';
import CertificateOfGoodStanding from './routes/certificate-of-good-standing';
import CertifiedCopyRequest from './routes/certified-copy-request';
import Ein from './routes/ein';
import EntityTypeConversion from './routes/entity-type-conversion';
import RenevalRevival from './routes/reneval-revival';
import DissoluitonAndCancellation from './routes/dissolution-and-cancellation';
import CertificateOfAmendment from './routes/certificate-of-amendment';
import DoingBusinessAs from './routes/doing-business-as';
import Apostille from './routes/apostille';
import AccountOpeningSupport from './routes/account-opening-support';
import Company from './routes/company-type';
import AllProducts from './routes/all-products';
import './i18n.js'
import StartCompany from './routes/start-company';
import ProductSpecificContactUs from './routes/product-specific-contact-us';
import Copylandingpage from './routes/copy-landing-page';
import { useTranslation } from 'react-i18next';
import  {Navbar}  from './components/Navbar';
import ExitIndent from './components/ExitIndent';
import Freetaxconsultation from './routes/free-tax-consultation';
import Notfound from './routes/notfound';
import Formation from './routes/formation';
import Review from './routes/review';
import BlogDetail from './components/BlogDetail';

const App = () => {
  const { i18n } = useTranslation();

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
          <Route  path="/:lang" element={<Home />} />
          <Route exact path="/:lang/home" element={<Home />} />
          <Route exact path="/:lang/company-type" element={<Company />} />
          <Route exact path="/:lang/contact" element={<Contact />} />
          <Route
            path="/:lang/blog/"
            element={<Blog />}
          />
          <Route exact path="/:lang/terms-of-service" element={<TermsOfService />} />
          <Route exact path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/:lang/faq" element={<Faqs />} />
          <Route exact path="/:lang/company-name" element={<Onboarding />} />
          <Route exact path="/:lang/formation" element={<Formation />} />
          <Route exact path="/:lang/review" element={<Review />} />
          <Route exact path="/:lang/state" element={<PricingFormMyCompany />} />
          <Route path="/post-order" element={<PostOrder/>} />
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/:lang/notfound" element={<Notfound />} />
          <Route exact path="/:lang/start-my-business" element={<StartCompany />} />
          <Route path="/:lang/blog/:slug" element={<BlogDetail />}/>
        </Routes>
    </Router>
  );
}

export default App;