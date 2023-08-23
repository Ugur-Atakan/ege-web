import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HowToGetStarted() {
    const { i18n } = useTranslation();
    return (
        <>
            <div className="mx-auto max-w-xl p-6 lg:px-8">
                <div className="text-left text-[26px] leading-8 lg:text-center lg:text-[40px] lg:leading-[44px] text-black font-semibold">
                    How to get started in 4 minutes
                </div>
            </div>
            <div className="mx-auto max-w-[966px] p-6 lg:px-12">
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-3 gap-[14px]">
                        <div className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">Define type of company and state </h1>
                            <p className="text-lg text-[#070707] leading-6 text-opacity-[30%] mt-4 text-on pb-6 ">Wyoming is the best option for an LLC, Delaware for a C-Corp. </p>
                            <Link to={`/${i18n.language}/start-my-business`} className="btn-on text-[#1649FF] font-semibold text-lg relative text-left bottom-0">Take a 3-minute quiz</Link>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 relative  hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">Start your business</h1>
                            <p className="text-lg text-[#070707] text-opacity-[30%] leading-6 mt-4 text-on pb-6">Verify that your desired name is available. We’ll file all the paperwork. </p>
                            <Link to={`/${i18n.language}/company-type`} className="btn-on text-[#1649FF] font-semibold text-lg text-left bottom-0">Completed application</Link>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">Get your EIN and run your business</h1>
                            <p className="text-on pb-6 text-lg text-[#070707] leading-6 text-opacity-[30%] mt-4">We will provide you with the basic documents to get started quickly.</p>
                            <Link to={`/${i18n.language}/company-type`} className="btn-on text-[#1649FF] font-semibold text-lg text-left bottom-0">Start today</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl p-6 lg:px-8">
                <div className="text-left lg:text-center text-lg text-[#545454] font-semibold block lg:flex items-center justify-start lg:justify-center gap-2">
                    All essentials included in Starter <span className="flex items-center gap-1 text-[#1649FF]">from $232 <ArrowSmallDownIcon className="w-5 h-5" /></span>
                </div>
            </div>
        </>
    )
}
