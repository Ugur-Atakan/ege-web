import Navbar from './Navbar'
import Top from './Top'
import Mid from './Mid'
import Last from './Last'

const Hero = ({ lang }) => {
    return (
        <div>
            <Navbar />
            <Top lang={lang} />
            <Mid lang={lang} />
            <Last />
        </div>
    );
}

export default Hero
