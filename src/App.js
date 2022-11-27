import './styles/tailwind.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Blog } from './routes/blog'
import { Home } from './routes/home'
import { Onboarding } from './routes/onboardingNext'
import { FormYourCompanyPricing } from './routes/FormYourCompanyPricing'
import { FormYourCompanyStep2 } from './components/FormYourCompanyStep2'
import { PostOrder } from './routes/postorder'
import { GetStarted } from './routes/getstarted'

const App = () => {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/blog" element={<Blog/>}/>
            <Route exact path="/onboarding" element={<Onboarding/>}/>
            <Route exact path="/form-your-company-pricing" element={<FormYourCompanyPricing/>}/>
            <Route exact path="/form-your-company-step2" element={<FormYourCompanyStep2/>}/>
            <Route exact path="/post-order" element={<PostOrder/>}/>
            <Route exact path="/get-started" element={<GetStarted/>}/>
            <Route path="*" elemenvt={<Home/>}/>
          </Routes>
        </div>
      </Router>
  );
}


export default App;