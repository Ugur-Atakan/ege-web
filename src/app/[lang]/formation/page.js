import Navbar from '../components/common/Navbar'
import Content from "./components/Content";

export default function formation({ params: { lang } }) {
    return (
        <>
            <Navbar lang={lang} />
            <Content lang={lang} />
        </>
    )
}
