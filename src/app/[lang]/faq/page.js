import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Content from './components/Content'

export default function Faqs({ params: { lang }}) {
  return (
    <main>
        <Navbar lang={lang} />
        <Content lang={lang} />
        <Footer />
    </main>
  )
}
