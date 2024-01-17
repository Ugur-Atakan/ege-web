import React from 'react';
import FeatureItem from './FeatureItem';

const PricingCard = ({ name, priceMonthly, priceYearly, priceOneTime, features }) => {
  return (
      <div className="mx-auto w-full md:w-[80%] lg:w-[60%] xl:w-[70%] bg-white rounded-[32px] p-8 md:p-12 lg:p-16">
        <div className="flex mx-auto flex-col md:flex-row items-center">
        <div className='flex flex-col pr-10'>
          <h2 className="text-black text-3xl md:text-5xl lg:text-5xl font-semibold leading-[1.1] mb-4">{name} </h2>
          <div className="text-blue-600 text-2xl md:text-3xl lg:text-3xl font-semibold leading-[1.1] mb-6">
            {priceMonthly != undefined && priceMonthly != -1 ? `$${priceMonthly} /month` : ''}
            {priceYearly != undefined ? `$${priceYearly} /year` : ''}
            {priceOneTime !== -1  && priceOneTime != undefined ? `$${priceOneTime} /once` : ''}
          </div>
          <div className="mt-6">
            <button className='bg-[#1649FF] text-white px-8 py-3 rounded-3xl font-bold text-lg hover:bg-black hover:text-white  transition duration-300 ease-in-out'>
                Get Started
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          {features.map((feature) => (
            <FeatureItem key={feature.id} text={feature.title} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default PricingCard;
