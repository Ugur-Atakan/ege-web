import Link from 'next/link';
import Image from 'next/image';
import calendar from '../../../../images/calendar-dynamic.png';
import { useTranslation } from '../../../i18n/client';

export default function BookCall({ lang }) {
    const { t } = useTranslation(lang);

    return (
        <div className="bg-white">
            <div className="hidden lg:block mx-auto max-w-5xl px-6 py-12">
                <div className="bg-[#1649FF] rounded-3xl">
                    <div className='flex items-center justify-between pr-16  relative'>
                        <div className='w-[68%]'>
                            <div className='flex items-center'>
                                <Image src={calendar} className='h-36' alt='calendar' />
                                <h2 className='text-[28px] font-semibold leading-8 text-white'>{t('contact_book_a_free_call_title')}</h2>
                            </div>
                        </div>
                        <Link href="#" className='w-[22%] rounded-[20px] py-4 text-[#222222] bg-white text-center cursor-pointer'>
                            <span className='text-lg leading-[26px] font-semibold'>{t('contact_book_a_free_call_button')} </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden mx-auto max-w-5xl px-6 py-12">
                <div className="bg-[#1649FF] rounded-3xl">
                    <div className='flex items-center flex-col px-6 pt-12'>
                        <div className='w-full'>
                            <div className='block'>
                                <h2 className='text-[20px] font-semibold leading-[22px] text-white'>{t('contact_book_a_free_call_title')}</h2>
                                <div className='my-6 py-5 w-full bg-white text-center cursor-pointer rounded-[20px]'>
                                <Link href='#' className='text-lg leading-[26px] font-semibold py-4 text-[#222222]'>{t('contact_book_a_free_call_button')}</Link>
                                </div>
                                <Image src={calendar} className='h-36' alt='calendar' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
