import exaironlogo from '../images/logos/exairon-logo.png'
import mallıqlogo from '../images/logos/mallıq-logo.png'
import cameralyzelogo from '../images/logos/cameralyze-logo.png'
import opsbeaconlogo from '../images/logos/opsbeacon-logo.png'
import finedinelogo from '../images/logos/finedine-logo.png'
import { Container } from '../components/Container'
import { useTranslation } from 'react-i18next'

export default function TestimonialLogos() {
    const {t} = useTranslation();
    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-title"
            className="bg-white py-12 sm:pt-4 sm:pb-24"
        >
            <Container>
                <div>
                    <div className="mx-auto max-w-7xl py-12 border-t border-opacity-[0.20]">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12 grayscale" src={exaironlogo} alt="Tuple"></img>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12 grayscale" src={mallıqlogo} alt="Mirage"></img>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12 grayscale" src={cameralyzelogo} alt="cameralyze"></img>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img className="h-12 grayscale" src={opsbeaconlogo} alt="opsbeacon"></img>
                                <span className="inline-block mt-2 -ml-1"><span className="text-[#808080] font-medium text-xl ">Ops</span><span className="text-[#808080] font-medium text-xl ">Beacon</span></span>
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img className="h-12 grayscale" src={finedinelogo} alt="finedine"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
