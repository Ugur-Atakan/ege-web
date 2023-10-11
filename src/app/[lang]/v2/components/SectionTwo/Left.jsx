import React from 'react'

const Left = () => {
    return (
      <div className='flex flex-col h-full'>
        <div className='py-10'>
          <div className="px-3 py-[7px] rounded-xl border-2 border-lime-400 justify-center items-center gap-2 inline-flex">
            <div className="text-lime-400 text-lg font-medium leading-normal">Starting a business</div>
          </div>
        </div>

        <div className="w-[656px] text-gray-100 text-[64px] font-bold leading-[64px]">Launch your US business, no matter where you are</div> 
        <div className="py-4 w-[446px] text-gray-100 text-lg font-medium leading-normal">Got 5 minutes? Take our quick quiz to find the perfect company type and state for you. We{"'"}ll guide you to the best choice tailored to your needs.</div>
        
        <div className='mt-auto py-10'>
          <div className="w-[238px] h-14  py-4 bg-white rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="text-blue-600 text-lg font-semibold  leading-normal">Kickstart my business</div>
          </div>
        </div>
      </div>

    );
};

export default Left
