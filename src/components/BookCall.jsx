import { Link } from 'react-router-dom';
import calendar from '../images/calendar-dynamic.png';
export default function BookCall() {
    return (
        <div className="bg-white">
            <div className="hidden lg:block mx-auto max-w-5xl px-6 py-12">
                <div className="bg-[#1649FF] rounded-3xl">
                    <div className='flex items-center justify-between pr-16  relative'>
                        <div className='w-[68%]'>
                            <div className='flex items-center'>
                                <img src={calendar} className='h-36' alt='calendar' />
                                <h2 className='text-[28px] font-semibold leading-8 text-white'>Book a free call with an experienced attorney</h2>
                            </div>
                        </div>
                        <div className='w-[22%] rounded-[20px] py-4 text-[#222222] bg-white text-center cursor-pointer'>
                            <span className='text-lg leading-[26px] font-semibold'>Book a call </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden mx-auto max-w-5xl px-6 py-12">
                <div className="bg-[#1649FF] rounded-3xl">
                    <div className='flex items-center flex-col px-6 pt-12'>
                        <div className='w-full'>
                            <div className='block'>
                                <h2 className='text-[20px] font-semibold leading-[22px] text-white'>Book a free call with an experienced attorney</h2>
                                <div className='my-6 py-5 w-full bg-white text-center cursor-pointer rounded-[20px]'>
                                <Link className='text-lg leading-[26px] font-semibold py-4 text-[#222222]'>Book a call </Link>
                                </div>
                                <img src={calendar} className='h-36' alt='calendar' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}