import Navbar from '../components/common/Navbar'
import Content from './components/Content'

export default function CompanyName ({ params: { lang } }) {
  return (
    <main>
        <Navbar lang={lang} />
        <Content lang={lang} />
    </main>
  )
}
