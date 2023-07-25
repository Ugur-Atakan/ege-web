import dataicon from '../images/data.png';
import feathericon from '../images/feather.png';
import bagicon from '../images/bag.png';


export function Complience() {


  return (
    <div className='bg-white'>
      <div className="mx-auto max-w-7xl p-6 lg:px-12">
        <div className='items-start justify-between flex gap-x-72 py-24'>
          <div className='w-[50%]'>
            <h1 className='font-bold  text-[64px] text-black leading-[64px]'>Compliance in just one click</h1>
            <p className='font-semibold text-lg leading-[24px] pt-6'>We will guide you through all the documents required to complete the incorporation.</p>
          </div>
          <div className='w-1/2'>
            <div className='block'>
              <div className='flex items-center gap-4'>
                <img src={dataicon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>Save money and time </p>
              </div>
              <div className='ml-12 mt-4 border-b border-[#C8C8C8] pb-12'>
                <p className='font-semibold text-lg leading-[24px] text-black'>Set up a company in 24 hours with the most necessary services. Fill your documents.</p>
              </div>
            </div>
            <div className='block pt-12'>
              <div className='flex items-center gap-4'>
                <img src={feathericon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>US based lawyers and CPAs </p>
              </div>
              <div className='ml-12 mt-4 border-b border-[#C8C8C8] pb-12'>
                <p className='font-semibold text-lg leading-[24px] text-black'>We are here to provide top-notch legal and financial support.</p>
              </div>
            </div>
            <div className='block pt-12'>
              <div className='flex items-center gap-4'>
                <img src={bagicon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>Your all-inclusive one stop-shop</p>
              </div>
              <div className='ml-12 mt-4'>
                <p className='font-semibold text-lg leading-[24px] text-black'>Get your legal, accounting and business formation service from one company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complience