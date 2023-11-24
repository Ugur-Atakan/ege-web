import React from 'react'

const PricingCard = () => {
  return (
    <div className="flex justify-center items-center"> 
        <div className="w-[1104px] h-[448px] relative bg-white rounded-[32px]">
            <div className="w-[484.86px] left-[32px] top-[32px] absolute text-neutral-800 text-[40px] font-semibold font-['Inter'] leading-[44px]">Registered Agent</div>
            <div className="left-[32px] top-[85px] absolute text-blue-600 text-[40px] font-semibold font-['Inter'] leading-[44px]">$6,5/month*</div>
            <div className="h-[248px] left-[517px] top-[36px] absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[526px] justify-start items-start gap-[18px] inline-flex">
                <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">Registered agent available during business hours</div>
                </div>
                <div className="w-[526px] justify-start items-start gap-[18px] inline-flex">
                    <div className="w-5 h-5 relative" />
                        <div className="w-[488px] text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">Centralized dashboard with all documentation</div>
                    </div>
                    <div className="w-[526px] justify-start items-start gap-[18px] inline-flex">
                        <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">Providing updates about all paperwork requiring attention</div>
                </div>
                <div className="w-[526px] justify-start items-start gap-[18px] inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[488px] text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">Maintaining good standing to avoid fines</div>
                </div>
                <div className="w-[526px] justify-start items-start gap-[18px] inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[488px] text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">Pre-filling all required state and federal forms</div>
                </div>
                <div className="w-[526px] justify-start items-start gap-[18px] inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="w-[488px] text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">Operation in any chosen state</div>
                </div>
            </div>
            <div className="px-10 py-4 left-[32px] top-[364px] absolute bg-black rounded-2xl justify-center items-center gap-2 inline-flex">
                <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-normal">Get started</div>
            </div>
            <div className="left-[555px] top-[396px] absolute text-blue-600 text-lg font-semibold font-['Inter'] leading-normal">*Free with Your Business Formation Packages </div>
        </div>
    </div>
  );
};

export default PricingCard