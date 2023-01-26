import React from 'react';

import './styles/tailwind.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Blog } from './routes/blog'
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

const App = () => {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/post-incorp" element={<PostIncorporation/>}/>
            <Route exact path ="/form-your-company" element={<FormYourCompany/>}/> 
            <Route exact path ="/virtual-mailbox" element={<VirtualMailbox/>}/> 
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/blog" element={<Blog/>}/>
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