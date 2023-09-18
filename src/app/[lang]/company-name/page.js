import Navbar from '../components/common/Navbar'
import NameForm from './components/NameForm'

export default function CompanyName ({ params: { lang } }) {
  return (
    <main>
        <Navbar lang={lang} />
        <NameForm lang={lang} />
    </main>
  )
}
