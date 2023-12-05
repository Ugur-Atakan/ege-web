import React from 'react'
import Image from 'next/image'

const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-start text-left p-[64px] bg-white rounded-2xl space-y-7">
          <Image 
            src={icon} alt={icon} width={100} height={100}
          />
          <h3 className="text-neutral-800 text-[40px] font-semibold leading-[44px]">{title}</h3>
          <p className="text-neutral-800 text-lg font-medium font-['Inter'] leading-7">{description}</p>
      </div>
    );
};

export default ServiceCard