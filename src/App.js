import React from 'react';
import './styles/tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Blog  from './routes/blog'
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
const App = () => {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/post-incorp" element={<PostIncorporation/>}/>
            <Route exact path="/compliance-reminder" element={<ComplianceReminder/>}/>
            <Route exact path="/registered-agent" element={<RegisteredAgent/>}/>
            <Route exact path="/office-address" element={<OfficeAddress/>}/>
            <Route exact path="/our-packages" element={<OurPackages/>}/>
            <Route exact path="/virtual-phone-number" element={<VirtualPhoneNumber/>}/>
            <Route exact path="/dedicated-receptionist" element={<DedicatedReceptionist/>}/>
            <Route exact path ="/form-your-company" element={<FormYourCompany/>}/> 
            <Route exact path ="/virtual-mailbox" element={<VirtualMailbox/>}/> 
            <Route exact path ="/foreign-qualification" element={<ForeignQualification/>}/> 
            <Route exatc path='/certificate-of-good-standing' element={<CertificateOfGoodStanding/>}/> 
            <Route exatc path='/certified-copy-request' element={<CertifiedCopyRequest/>}/> 
            <Route exatc path='/ein' element={<Ein/>}/> 
            <Route exatc path='/entity-type-conversion' element={<EntityTypeConversion/>}/>
            <Route exact path='/renewal-and-revival' element={<RenevalRevival/>}/>
            <Route exact path='/dissolution-and-cancellation' element={<DissoluitonAndCancellation/>}/>
            <Route exact path='/certificate-of-amendment' element={<CertificateOfAmendment/>}/>
            <Route exact path='/doing-business-as' element={<DoingBusinessAs/>}/>
            <Route exact path='/apostille' element={<Apostille/>}/>
            <Route exact path='/us-bank-account-opening-support' element={<AccountOpeningSupport/>}/>
            <Route exact path='/company' element={<Company/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/blog" element={<Blog/>}/>
            <Route exact path="/blog/:id" element={<Blog/>}/>
            <Route exact path="/terms-of-service" element={<TermsOfService/>}/>
            <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route exact path="/faq" element={<Faqs/>}/>
            <Route exact path="/onboarding" element={<Onboarding/>}/>
            <Route exact path="/pricing/form-my-company" element={<PricingFormMyCompany/>}/>
            <Route exact path="/pricing/post-incorporation-documents" element={<PricingPostIncorporationDocuments/>}/>
            <Route exact path="/pricing/apostille-and-notarization-services" element={<PricingApostilleAndNotorizationServices/>}/>
            <Route exact path="/pricing/virtual-mailbox" element={<PricingVirtualMailbox/>}/>
            <Route exact path="/post-order" element={<PostOrder/>}/>
            <Route path="*" elemenvt={<Home/>}/>
          </Routes>
        </div>
      </Router>
  );
}


export default App;