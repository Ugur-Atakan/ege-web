import Navbar from '../../common/Navbar'
import NameForm from './components/NameForm'

export default function CompanyName ({ params: { lang } }) {
  return (
    <main>
        <Navbar />
        <NameForm lang={lang} />
    </main>
  )
}
