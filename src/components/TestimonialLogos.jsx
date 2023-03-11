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
            className="bg-slate-50 py-20 sm:pt-4 sm:pb-24"
        >
            <Container>
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2
                        id="testimonials-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        {t('section7_title')}
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                    </p>
                </div>
                <div className="bg-white">
                    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
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
