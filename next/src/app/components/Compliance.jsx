import Image from 'next/image';
import dataicon from '../../images/data.png';
import feathericon from '../../images/feather.png';
import bagicon from '../../images/bag.png';

export default function Compliance() {
  return (
    <div className='bg-white'>
      <div className="mx-auto max-w-7xl p-6 lg:px-12">
        <div className='items-start justify-between block lg:flex lg:gap-x-72 py-24'>
          <div className='w-full lg:w-[50%]'>
            <h1 className='font-bold text-[32px] leading-[38px] lg:text-[64px] text-black lg:leading-[64px]'>{'Loreum Ipsum'}</h1>
            <p className='font-semibold text-lg leading-[24px] pt-6'>{'Loreum Ipsum'}</p>
          </div>
          <div className='w-full lg:w-1/2 py-12 lg:py-0'>
            <div className='block border-b border-[#C8C8C8] lg:border-none'>
              <div className='flex items-center gap-4'>
                <Image src={dataicon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>{'Loreum Ipsum'}</p>
              </div>
              <div className='ml-12 mt-4 lg:border-b lg:border-[#C8C8C8] pb-12'>
                <p className='font-semibold text-lg leading-[24px] text-black'>{'Loreum Ipsum'}</p>
              </div>
            </div>
            <div className='block pt-12 border-b border-[#C8C8C8] lg:border-none'>
              <div className='flex items-center gap-4'>
                <Image src={feathericon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>{'Loreum Ipsum'}</p>
              </div>
              <div className='ml-12 mt-4 lg:border-b lg:border-[#C8C8C8] pb-12'>
                <p className='font-semibold text-lg leading-[24px] text-black'>{'Loreum Ipsum'}</p>
              </div>
            </div>
            <div className='block pt-12'>
              <div className='flex items-center gap-4'>
                <Image src={bagicon} className='w-[28px] h-[28px]' alt='icon' />
                <p className='font-semibold text-[28px] leading-[32px] text-black'>{'Loreum Ipsum'}</p>
              </div>
              <div className='ml-12 mt-4'>
                <p className='font-semibold text-lg leading-[24px] text-black'>{'Loreum Ipsum'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}