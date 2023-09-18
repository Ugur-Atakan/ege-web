import Navbar from '../components/common/Navbar'
import Content from './components/Content'

export default function CompanyType({ params: { lang } }) {
    return (
        <section>
            <Navbar lang={lang} />
            <Content lang={lang} />
        </section>
    )
}