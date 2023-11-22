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

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            {/* <div className="md:col-span-1 flex justify-center">
                <Image src={shieldImage} alt="Shield" className="rounded-lg" />
            </div> */}
            <h3 className="mt-2 text-lg font-semibold">Meow mewo</h3>
            <p className="text-gray-600 mt-1 text-sm">
                Receive timely alerts for all your legal documents and official notices, ensuring you{"'"}re always in the loop without the stress of managing them.
            </p>
        </div>

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
