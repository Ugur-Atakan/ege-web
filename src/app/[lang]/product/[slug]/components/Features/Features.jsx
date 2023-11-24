import React from 'react'
import Image from 'next/image'
import hammer from './svg/hammer.svg'
import horse from './svg/horse.svg'
import board from './svg/board.svg'

const Features = () => {
  return (
    <div className="flex justify-between items-center px-[132px] my-[130px]">
      <div className="flex flex-col items-start text-left space-y-4">
        <Image src={hammer} alt="hammer" />
        <h2 className="w-[350px] text-neutral-800 text-[40px] font-semibold font-['Inter'] leading-[44px]">Avoid the risk of non-compliance</h2>
        <p className="w-[336px] text-neutral-800 text-lg font-medium leading-7">Registered Agents are required by law and they{"'"}re the ones who get all your corporation{"'"}s legal papers.</p>
      </div>

      <div className="flex flex-col items-start text-start space-y-4">
        <Image src={horse} alt="horse" />
        <h2 className="w-[350px] text-neutral-800 text-[40px] font-semibold font-['Inter'] leading-[44px]">Spend your time on your business</h2>
        <p className="w-[336px] text-neutral-800 text-lg font-medium leading-7">Compliance tasks can take a lot of time and work, and sometimes involve filling out long, tricky forms.</p>
      </div>

      <div className="flex flex-col items-start text-start space-y-4">
        <Image src={board} alt="board" />
        <h2 className="w-[350px] text-neutral-800 text-[40px] font-semibold font-['Inter'] leading-[44px]">Save money and hassle</h2>
        <p className="w-[336px] text-neutral-800 text-lg font-medium leading-7">Skip the employee standby during business hours. We{"'"}ve got it!</p>
      </div>
    </div>
  );
};

export default Features;
