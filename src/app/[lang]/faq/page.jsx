import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Content from './components/Content'

export default function Faqs({ params: { lang }}) {
  return (
    <main>
        <Navbar/>
        <Content lang={lang} />
        <Footer/>
    </main>
  )
}
