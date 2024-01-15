import React from 'react';
import FeatureItem from './FeatureItem';

const PricingCard = () => {
  return (
      <div className="mx-auto w-full md:w-[80%] lg:w-[80%] xl:w-[80%] bg-white rounded-[32px] p-8 md:p-12 lg:p-16">
        <div className="flex mx-auto flex-col md:flex-row items-center">
        <div className='flex flex-col pr-10'>
          <h2 className="text-black text-3xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] mb-4">Registered Agent</h2>
          <div className="text-blue-600 text-2xl md:text-3xl lg:text-3xl font-semibold leading-[1.1] mb-6">$ 6.5 / month</div>
          <div className="mt-6">
            <button className='bg-[#1649FF] text-white px-8 py-3 rounded-3xl font-bold text-lg hover:bg-black hover:text-white  transition duration-300 ease-in-out'>
                Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <FeatureItem text="Registered agent available during business hours" />
          <FeatureItem text="Centralized dashboard with all documentation" />
          <FeatureItem text="Providing updates about all paperwork requiring attention" />
          <FeatureItem text="Maintaining good standing to avoid fines" />
          <FeatureItem text="Pre-filling all required state and federal forms" />
          <FeatureItem text="Operation in any chosen state" />
        </div>
      </div>
    </div>
  );
};


export default PricingCard;
