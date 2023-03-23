import React from 'react';
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
import Company from './routes/company';
import AllProducts from './routes/all-products';
import '../src/locales/language.js'
import StartCompany from './routes/start-company';
import ProductSpecificContactUs from './routes/product-specific-contact-us';
import Copylandingpage from './routes/copy-landing-page';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}`} />} />
          <Route exact path="/:lang/" element={<Home />} />
          <Route exact path="/:lang/home" element={<Home />} />
          <Route exact path="/:lang/post-incorp" element={<PostIncorporation />} />
          <Route exact path="/:lang/compliance-reminder" element={<ComplianceReminder />} />
          <Route exact path="/:lang/registered-agent" element={<RegisteredAgent />} />
          <Route exact path="/:lang/office-address" element={<OfficeAddress />} />
          <Route exact path="/:lang/our-packages" element={<OurPackages />} />
          <Route exact path="/:lang/virtual-phone-number" element={<VirtualPhoneNumber />} />
          <Route exact path="/:lang/dedicated-receptionist" element={<DedicatedReceptionist />} />
          <Route exact path="/:lang/form-your-company" element={<FormYourCompany />} />
          <Route exact path="/:lang/virtual-mailbox" element={<VirtualMailbox />} />
          <Route exact path="/:lang/foreign-qualification" element={<ForeignQualification />} />
          <Route exatc path="/:lang/certificate-of-good-standing" element={<CertificateOfGoodStanding />} />
          <Route exatc path="/:lang/certified-copy-request" element={<CertifiedCopyRequest />} />
          <Route exatc path="/:lang/ein" element={<Ein />} />
          <Route exatc path="/:lang/entity-type-conversion" element={<EntityTypeConversion />} />
          <Route exact path="/:lang/renewal-and-revival" element={<RenevalRevival />} />
          <Route exact path="/:lang/dissolution-and-cancellation" element={<DissoluitonAndCancellation />} />
          <Route exact path="/:lang/certificate-of-amendment" element={<CertificateOfAmendment />} />
          <Route exact path="/:lang/doing-business-as" element={<DoingBusinessAs />} />
          <Route exact path="/:lang/apostille" element={<Apostille />} />
          <Route exact path="/:lang/us-bank-account-opening-support" element={<AccountOpeningSupport />} />
          <Route exact path="/:lang/company" element={<Company />} />
          <Route exact path="/:lang/contact" element={<Contact />} />
          <Route exact path="/:lang/blog" element={<Blog />} />
          <Route exact path="/:lang/blog/:id" element={<Blog />} />
          <Route exact path="/:lang/terms-of-service" element={<TermsOfService />} />
          <Route exact path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/:lang/faq" element={<Faqs />} />
          <Route exact path="/:lang/onboarding" element={<Onboarding />} />
          <Route exact path="/:lang/pricing/form-my-company" element={<PricingFormMyCompany />} />
          <Route exact path="/:lang/pricing/post-incorporation-documents" element={<PricingPostIncorporationDocuments />} />
          <Route exact path="/:lang/pricing/apostille-and-notarization-services" element={<PricingApostilleAndNotorizationServices />} />
          <Route exact path="/:lang/pricing/virtual-mailbox" element={<PricingVirtualMailbox />} />
          <Route path="/post-order" element={<Navigate to={`/${i18n.language}/post-order`} />} />
          <Route exact path="/:lang/post-order" element={<PostOrder />} />
          <Route path="*" element={<Home />} />
          <Route exact path="/:lang/all-products" element={<AllProducts />} />
          <Route exact path="/:lang/start-my-business" element={<StartCompany />} />
          <Route path="/:lang/products/:productlink/contact" element={<ProductSpecificContactUs />} />
          <Route path="/:lang/copy-landing-page" element={<Copylandingpage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;