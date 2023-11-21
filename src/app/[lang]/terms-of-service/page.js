import Navbar from '@/app/[lang]/onboarding/components/common/Navbar'
import Footer from '@/components/common/Footer'
import Content from './components/Content'

/**
 * Home page route
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} 
*/

const Page = () => {
  return (
    <main>
      <Navbar/>
      <Content/>
      <Footer/>
    </main>
  )
}

export default Page