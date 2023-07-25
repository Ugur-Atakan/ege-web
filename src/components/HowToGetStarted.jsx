import {ArrowSmallDownIcon } from "@heroicons/react/24/outline";

export default function HowToGetStarted() {
    return (
        <>
            <div className="mx-auto max-w-xl p-6 lg:px-8">
                <div className="text-center text-[40px] text-black font-semibold">
                    How to get started in 4 minutes
                </div>
            </div>
            <div className="mx-auto max-w-4xl p-6 lg:px-12">
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-3 gap-[14px]">
                        <div className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px]">Define type of company and state  </h1>
                            <p className="text-lg text-[#070707] text-opacity-[30%] mt-2 text-on ">Wyoming is the best option for an LLC, Delaware for a C-Corp. </p>
                            <button className="btn-on text-[#1649FF] font-semibold text-lg relative text-left bottom-0 mt-8">Take a 3-minute quiz</button>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 relative  hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px]">Start your business</h1>
                            <p className="text-lg text-[#070707] text-opacity-[30%] mt-2 text-on">Verify that your desired name is available. We’ll file all the paperwork. </p>
                            <button className="btn-on text-[#1649FF] font-semibold text-lg text-left bottom-0 mt-8">Completed application</button>
                        </div>
                        <div className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px]">Get your EIN and run your business</h1>
                            <p className="text-on text-lg text-[#070707] text-opacity-[30%] mt-2">We will provide you with the basic documents to get started quickly.</p>
                            <button className="btn-on text-[#1649FF] font-semibold text-lg text-left bottom-0 mt-8">Start today</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl p-6 lg:px-8">
                <div className="text-center text-lg text-[#545454] font-semibold flex items-center justify-center gap-2">
                    How to get started in 4 minutes <span className="flex items-center gap-1 text-[#1649FF]">from $232 <ArrowSmallDownIcon className="w-5 h-5"/></span>
                </div>
            </div>
        </>
    )
}
