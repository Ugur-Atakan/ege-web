import React from 'react';

import './styles/tailwind.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Blog } from './routes/blog'
import { Home } from './routes/home'
import { Onboarding } from './routes/onboarding'
import { PostOrder } from './routes/postorder'
import { PricingPage } from './routes/pricing'

const App = () => {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/blog" element={<Blog/>}/>
            <Route exact path="/onboarding" element={<Onboarding/>}/>
            <Route exact path="/pricing" element={<PricingPage/>}/>
            <Route exact path="/post-order" element={<PostOrder/>}/>
            <Route path="*" elemenvt={<Home/>}/>
          </Routes>
        </div>
      </Router>
  );
}


export default App;