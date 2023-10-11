import React from 'react'
import Image from 'next/image'
import { creditCards } from 'src/images/main-page'

const Left = () => {
    return (
        <div>
            <div className="w-[720px] h-[800px] relative bg-white">
                <div className="w-[380px] left-[56px] top-[312px] absolute text-black text-lg font-semibold font-['Inter'] leading-normal">Start receiving payments quickly. Get your bank account up and running in no time.</div>
                <div className="w-[628px] left-[56px] top-[96px] absolute text-black text-[64px] font-bold font-['Inter'] leading-[64px]">Open a bank account, no SSN required</div>
                <div className="px-6 py-4 left-[56px] top-[709px] absolute bg-white rounded-2xl justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-blue-600 text-lg font-semibold font-['Inter'] leading-normal">Open my bank account</div>
                </div>
                <div className="w-[911.43px] h-[948.07px] left-[-99px] top-[171px] absolute">
                    <div className="origin-top-left rotate-[-22.37deg] w-[155.95px] h-[155.95px] left-[204px] top-[254.34px] absolute">
                    <div className="w-[155.95px] h-[155.95px] left-0 top-0 absolute origin-top-left rotate-[-22.37deg] bg-neutral-800 rounded-[31.19px]" />
                    </div>
                    <Image className="w-[766.80px] h-[813.50px] left-[159.52px] top-0 absolute origin-top-left rotate-[11.31deg]" src={creditCards} alt="credit-cards" />
                    <div className="origin-top-left rotate-[8.14deg] w-[201.18px] h-[111.80px] left-[584.08px] top-[434.54px] absolute">
                    <div className="w-[201.18px] h-[111.80px] left-0 top-0 absolute origin-top-left rotate-[8.14deg] bg-white rounded-[21.75px] border-2 border-lime-400" />
                    <div className="left-[23.02px] top-[55.46px] absolute origin-top-left rotate-[8.14deg] text-neutral-800 text-3xl font-bold font-['Inter']">+$112</div>
                    <div className="left-[26.17px] top-[27.46px] absolute origin-top-left rotate-[8.14deg] text-neutral-800 text-xl font-bold font-['Inter']">Martin Maeyer</div>
                    </div>
                </div>
                <div className="px-6 py-4 left-[56px] top-[709px] absolute bg-white rounded-2xl justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-blue-600 text-lg font-semibold font-['Inter'] leading-normal">Open my bank account</div>
                </div>
            </div>
        </div>
    );
};

export default Left
