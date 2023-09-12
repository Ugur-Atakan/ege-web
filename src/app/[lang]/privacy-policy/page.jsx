import Navbar from '../component/common/Navbar'
import Footer from '../component/common/Footer'
import Content from './components/Content'

export default function PrivacyPolicy({ params: { lang } }) {
  return (
    <main>
        <Navbar lang={lang} />
        <Content />
        <Footer lang={lang} />
    </main>
  )
}
