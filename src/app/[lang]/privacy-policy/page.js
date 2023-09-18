import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
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
