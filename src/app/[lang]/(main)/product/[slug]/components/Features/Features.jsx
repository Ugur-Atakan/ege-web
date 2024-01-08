/* eslint-disable */
import React from 'react';
import Image from 'next/image';
import hammer from './svg/hammer.svg';
import horse from './svg/horse.svg';
import board from './svg/board.svg';

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 my-8 md:my-12 lg:my-16">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        <Image src={hammer} alt="hammer" width={120} height={120} />
        <h2 className="w-full md:w-[350px] text-neutral-800 text-xl md:text-3xl lg:text-4xl font-semibold font-['Inter'] leading-[1.5] md:leading-[44px]">
          Avoid the risk of non-compliance
        </h2>
        <p className="w-full md:w-[336px] text-neutral-800 text-base md:text-lg lg:text-xl font-medium leading-[1.5] md:leading-7">
          Registered Agents are required by law and they're the ones who get all your corporation's legal papers.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mt-8 md:mt-0">
        <Image src={horse} alt="horse" width={120} height={120} />
        <h2 className="w-full md:w-[350px] text-neutral-800 text-xl md:text-3xl lg:text-4xl font-semibold font-['Inter'] leading-[1.5] md:leading-[44px]">
          Spend your time on your business
        </h2>
        <p className="w-full md:w-[336px] text-neutral-800 text-base md:text-lg lg:text-xl font-medium leading-[1.5] md:leading-7">
          Compliance tasks can take a lot of time and work, and sometimes involve filling out long, tricky forms.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mt-8 md:mt-0">
        <Image src={board} alt="board" width={120} height={120} />
        <h2 className="w-full md:w-[350px] text-neutral-800 text-xl md:text-3xl lg:text-4xl font-semibold font-['Inter'] leading-[1.5] md:leading-[44px]">
          Save money and hassle
        </h2>
        <p className="w-full md:w-[336px] text-neutral-800 text-base md:text-lg lg:text-xl font-medium leading-[1.5] md:leading-7">
          Skip the employee standby during business hours. We've got it!
        </p>
      </div>
    </div>
  );
};

export default Features;
