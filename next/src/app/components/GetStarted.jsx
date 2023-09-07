import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";

export default function GetStarted() {
    return (
        <div className="bg-[#ECEFF1]">
            <div className="mx-auto max-w-xl p-6 lg:px-8 bg-[#ECEFF1]">
                <div className="text-left text-[26px] leading-8 lg:text-center lg:text-[40px] lg:leading-[44px] text-black font-semibold">
                    {'Title'}
                </div>
            </div>
            <div className="mx-auto max-w-[996px] p-6 lg:px-12">
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-3 gap-[14px]">
                        <div className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started pb-16">
                            <h1 className="font-semibold text-[22px] leading-6"> {'Get Started'}</h1>
                            <p className="text-lg text-[#070707] leading-6 text-opacity-[30%] mt-4 text-on pb-6 ">{'Loreum Ipsum'}</p>
                            <a to={`/`} className="btn-on text-[#1649FF] font-semibold text-lg absolute text-left bottom-5">{'Loreum Ipsum'}</a>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 relative  hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">{'Loreum Ipsum'}</h1>
                            <p className="text-lg text-[#070707] text-opacity-[30%] leading-6 mt-4 text-on pb-6">{'Loreum Ipsum'}</p>
                            <a to={`/`} className="btn-on text-[#1649FF] font-semibold absolute text-lg text-left bottom-5">{'Loreum Ipsum'}</a>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">{'Loreum Ipsum'}</h1>
                            <p className="text-on pb-6 text-lg text-[#070707] leading-6 text-opacity-[30%] mt-4">{'Loreum Ipsum'}</p>
                            <a to={`/`} className="btn-on text-[#1649FF] font-semibold absolute text-lg text-left bottom-5">{'Loreum Ipsum'}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl p-6 lg:px-8">
                <div className="text-left lg:text-center text-lg text-[#545454] font-semibold block lg:flex items-center justify-start lg:justify-center gap-2">
                {'Get started'} <span className="flex items-center gap-1 text-[#1649FF]">{'Loreum Ipsum'}<ArrowSmallDownIcon className="w-5 h-5" /></span>
                </div>
            </div>
        </div>
    )
}
