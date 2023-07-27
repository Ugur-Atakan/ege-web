import { Link } from "react-router-dom";
import videoasian from "../videos/video-asian.mp4"
import videoeurope from "../videos/video-europe.mp4"
import videoturkey from "../videos/video-turkey.mp4"
import thaiflag from '../images/thailand-flag.png'
import turkeyflag from '../images/turkey-flag.png'
import italiaflag from '../images/italia-flag.png'
import { useState } from "react";

export default function IncorporateBusiness() {
    const [videoSource, setVideoSource] = useState(videoasian);

    const handleTurkey = () => {
        setVideoSource(videoturkey);
    }

    const handleAsian = () => {
        setVideoSource(videoasian);
    }

    const handleEurope = () => {
        setVideoSource(videoeurope);
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl p-6 lg:px-12">
                <div className="relative">
                    <video
                        autoPlay
                        muted
                        loop
                        width="2432" height="1442"
                        alt="product video"
                        key={videoSource}
                        className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 outline-none"
                    >
                        <source
                            src={videoSource}
                            type="video/mp4" />
                    </video>
                    <div className="absolute bottom-6 right-6 text-white">
                        <div className='flex items-center gap-4'>
                            <img src={thaiflag} onClick={handleAsian} className='w-24 h-24 cursor-pointer' alt='thailand flag' />
                            <img src={turkeyflag} onClick={handleTurkey} className='w-24 h-24 cursor-pointer' alt='thailand flag' />
                            <img src={italiaflag} onClick={handleEurope} className='w-24 h-24 cursor-pointer' alt='thailand flag' />
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-between pt-12 pb-24 px-12">
                    <div className="w-[60%]">
                        <h1 className='font-bold  text-[64px] text-black leading-[64px] mb-24'>Incorporate business from anywhere</h1>
                        <Link
                            to="#"
                            className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                        >
                            Open a business
                        </Link>
                    </div>
                    <div className="w-[40%] mt-4">
                        <div>
                            <p className="font-semibold text-lg leading-[24px]">You can incorporate a US business from almost anywhere on Earth. We’ll get you set up with a US business address.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
