import React from 'react'
import ServiceCard from './ServiceCard'
import { shield, pen, up } from './svg/index.js'

const BusinessShield = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className='flex justify-center items-center'>
        <h2 className="w-[550px] text-center text-neutral-800 text-[58px] font-bold leading-[58px]">Your business, our shield</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[215px] py-[5%]">
        <ServiceCard
          icon={up}
          title="Always in good standing"
          description="We ensure all your legal documents and notices are received and managed proficiently, keeping your business compliant and in good standing with ease."
        />

        <ServiceCard
          icon={pen}
          title="Never miss a beat"
          description="Receive timely alerts for all your legal documents and official notices, ensuring you're always in the loop without the stress of managing them."
        />
        
        <ServiceCard
          icon={up}
          title="Always in good standing"
          description="We ensure all your legal documents and notices are received and managed proficiently, keeping your business compliant and in good standing with ease."
        />
        
        <ServiceCard
          icon={pen}
          title="Never miss a beat"
          description="Receive timely alerts for all your legal documents and official notices, ensuring you're always in the loop without the stress of managing them."
        />
      </div>
    </div>
  );
};

export default BusinessShield
