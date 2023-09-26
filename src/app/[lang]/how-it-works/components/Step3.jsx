import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '../../../i18n/client'
import { tick, taq1, taq2 } from '../../../../images'

export default function Step3({ lang }) {
    const { t } = useTranslation(lang)

    return(
        <div className='mx-auto max-w-[1120px] px-4 lg:px-0 py-24 lg:py-48'>
        <div className='flex-col lg:flex-row flex items-start gap-8 lg:gap-32'>
          <div>
            <h2 className='font-semibold text-[26px] lg:text-[40px] leading-8 lg:leading-[44px] text-[#1649FF]'>
              {t('how_it_works_step_3')}
              <span className='text-[#222222]'>{t('how_it_works_take_a_quiz_title')}</span>
            </h2>
            <div className='hidden lg:flex gap-6 py-24'>
              <Image src={taq1} className='w-[305px] h-[415px] object-cover rounded-2xl' alt='Take a quiz, get your business in 1 day' />
              <Image src={taq2} className='mt-24 w-[305px] h-[415px] object-cover rounded-2xl' alt='Take a quiz, get your business in 1 day' />
            </div>
          </div>
          <div>
            <ul className='flex flex-col gap-6 lg:gap-12'>
              <li>
                <div className='flex items-center gap-3'>
                  <Image src={tick} className='h-8 w-8' alt='Company created in any state' />
                  <h3 className='font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item1_title')}</h3>
                </div>
                <div className='block pl-12 py-1 lg:py-4'>
                  <p className='text-[#222222] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]'>{t('how_it_works_take_a_quiz_list_item1_desc')}</p>
                </div>
              </li>
              <li>
                <div className='flex items-center gap-3'>
                  <Image src={tick} className='h-8 w-8' alt='Registered agent' />
                  <h3 className='font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item2_title')}</h3>
                </div>
                <div className='block pl-12 py-1 lg:py-4'>
                  <p className='text-[#222222] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]'>{t('how_it_works_take_a_quiz_list_item2_desc')}</p>
                </div>
              </li>
              <li>
                <div className='flex items-center gap-3'>
                  <Image src={tick} className='h-8 w-8' alt='EIN and bank account setup assistance' />
                  <h3 className='font-semibold text-[20px] lg:text-[28px] leading-[22px] lg:leading-[32px] text-[#222222]'>{t('how_it_works_take_a_quiz_list_item3_title')}</h3>
                </div>
                <div className='block pl-12 py-1 lg:py-4'>
                  <p className='text-[#222222] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-[26px]'>{t('how_it_works_take_a_quiz_list_item3_desc')}</p>
                </div>
              </li>
              <Link href={`/${lang}/company-type`} className='w-full lg:w-1/2 text-center font-semibold text-[18px] leading-6 text-white rounded-2xl bg-[#1649FF] px-6 py-3'>{t('how_it_works_take_a_quiz_list_button')}</Link>
            </ul>
          </div>
        </div>
      </div>
    )

}