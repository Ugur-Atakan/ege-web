import { Container } from './common/Container'
import Image from 'next/image';
import exaironlogo from '@/assets/images/logos/exairon-logo.png'
import malliqlogo from '@/assets/images/logos/malliq-logo.png'
import cameralyzelogo from '@/assets/images/logos/cameralyze-logo.png'
import opsbeaconlogo from '@/assets/images/logos/opsbeacon-logo.png'
import finedinelogo from '@/assets/images/logos/finedine-logo.png'

export default function TestimonialLogos() {
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
                                <Image className="h-12 w-48 grayscale" src={exaironlogo} alt="Tuple"></Image>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <Image className="h-12 w-48 grayscale" src={malliqlogo} alt="Mirage"></Image>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <Image className="h-12 w-48 grayscale" src={cameralyzelogo} alt="cameralyze"></Image>
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <Image className="h-12 w-48 grayscale" src={opsbeaconlogo} alt="opsbeacon"></Image>
                                <span className="inline-block mt-2 -ml-1"><span className="text-[#808080] font-medium text-xl ">Ops</span><span className="text-[#808080] font-medium text-xl ">Beacon</span></span>
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <Image className="h-12 w-48 grayscale" src={finedinelogo} alt="finedine"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
