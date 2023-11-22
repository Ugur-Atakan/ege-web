'use client'

import React, { useState } from 'react'

const Pricing = () => {
  const [renderAnnual, setRenderAnnual] = useState(true)
  
  return (
    <div className="bg-blue-600 text-white p-8">
      <div className="text-center mb-12">
        <div className='flex justify-center items-center py-10'>
            <h2 className="w-[705px] text-center text-white text-[58px] font-bold leading-[58px]">
                Pricing built for businesses of all sizes
            </h2>
        </div>
        <div className="flex justify-center space-x-2 mt-4">

          <button className="bg-blue-800 py-1 px-3 rounded-full text-sm">Billed annually -30%</button>
          <button className="py-1 px-3 rounded-full text-sm">Billed monthly</button>
        </div>
      </div>

      {renderAnnual ? ( 
            <div className="max-w-md mx-auto bg-white text-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold">Registered Agent</h3>
                <p className="text-4xl font-bold my-4">$6,5/month*</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Registered agent available during business hours</li>
                <li>Centralized dashboard with all documentation</li>
                <li>Providing updates about all paperwork requiring attention</li>
                <li>Maintaining good standing to avoid fines</li>
                <li>Pre-filling all required state and federal forms</li>
                <li>Operation in any chosen state</li>
                </ul>
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 w-full">Get started</button>
                <p className="text-sm mt-4 text-blue-600 hover:text-blue-800 cursor-pointer">*Free with Your Business Formation Packages →</p>
            </div>
        ) : ( 
            <>
            </> 
        )}
        
      </div>
  );
};

export default Pricing
