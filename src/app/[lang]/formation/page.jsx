import Navbar from '../../common/Navbar'
import Content from "./components/Content";

export default function formation({ params: { lang } }) {

    return (
        <>
            <Navbar />
            <Content lang={lang} />
        </>
    )
}
