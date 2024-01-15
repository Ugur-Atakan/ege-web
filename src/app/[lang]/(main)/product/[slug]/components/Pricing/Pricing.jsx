'use client'

import React, { useState } from 'react'
import PricingCard from './PricingCard'

const Pricing = () => {
  const [renderAnnual, setRenderAnnual] = useState(true)
  
  return (
    <div className="bg-blue-600 text-white px-8 py-[130px]">
      <div className="text-center mb-12">
        <div className='flex justify-center items-center'>
            <h2 className="w-[705px] text-center text-white text-[58px] font-bold leading-[58px]">
                Pricing built for businesses of all sizes
            </h2>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <button onClick={() => setRenderAnnual(true)} className={`w-[198px] h-8 px-3 py-1 rounded-lg justify-center items-start inline-flex ${renderAnnual ? 'bg-white text-blue-600' : 'text-white'}`}>
            <div className="text-lg font-semibold leading-normal">Billed annually</div>
          </button>
          <button onClick={() => setRenderAnnual(false)} className={`w-[198px] h-8 py-1 rounded-lg justify-center items-start gap-2 inline-flex ${!renderAnnual ? 'bg-white text-blue-600' : 'text-white'}`}>
            <div className="text-lg font-semibold leading-normal">Billed monthly</div>
          </button>
        </div>
      </div>

      {renderAnnual ? ( 
          <PricingCard />
        ) : ( 
          <p className='text-center text-white text-[24px] font-semibold'>Coming soon</p>
      )}
        
      </div>
  );
};

export default Pricing
