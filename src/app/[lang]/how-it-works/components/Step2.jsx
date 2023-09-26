import Image from 'next/image'
import { useTranslation } from '../../../i18n/client'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { star } from '../../../../images'

export default function Step2({ lang }) {
    const { t } = useTranslation(lang)
    return(
        <div className='bg-[#ECEFF1] py-16 lg:py-24 px-4 lg:px-0 overflow-hidden'>
        <div className='mx-auto max-w-[1120px]'>
          <div className='mx-auto max-w-[473px]'>
            <div className='text-left lg:text-center pb-12'>
              <h2 className='font-semibold text-[26px] lg:text-[40px] leading-[32px] lg:leading-[44px] text-[#1649FF]'>
                {t("how_it_works_step_2")}
                <span className='text-[#222222]'>{t("how_it_works_help_company_state_title")}</span>
              </h2>
            </div>
          </div>
          <div className='flex-col lg:flex-row flex items-center gap-8 pb-12'>
            <div className='w-[360px] h-[30rem] lg:w-[549px] lg:h-[669px] rounded-[32px] hiw-delaware relative lg:overflow-hidden'>
              <div className='absolute top-[45%] lg:top-[60%] -right-4'>
                <div className='bg-[#9EE248] text-[#222222] py-4 px-6 text-[16px] rounded-2xl rotate-12 font-semibold'>{t('how_it_works_help_company_state_card1_button_on')}</div>
              </div>
              <div className='w-full pr-12 lg:pr-0 bottom-8 left-4 lg:left-8 absolute'>
                <div className='flex items-center gap-4'>
                  <h3 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>{t("how_it_works_help_company_state_card1_title")}</h3>
                  <ArrowRightIcon className='mt-2 h-12 text-white' />
                </div>
                <div className='py-2'>
                  <p className='font-semibold text-white text-[16px] lg:text-[18px] leading-6'>{t('how_it_works_help_company_state_card1_desc')}</p>
                </div>
              </div>
            </div>
            <div className='w-[360px] h-[30rem] lg:w-[549px] lg:h-[669px] rounded-[32px] hiw-wyoming relative'>
              <div className='absolute top-[45%] lg:top-2/3 -right-8'>
                <div className='bg-[#1649FF] text-white py-4 px-6 rounded-2xl -rotate-12 font-semibold'>{t('how_it_works_help_company_state_card2_button_on')}</div>
              </div>
              <div className='bottom-8 left-4 lg:left-8 absolute'>
                <div className='flex items-center gap-4'>
                  <h3 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-white'>{t("how_it_works_help_company_state_card2_title")}</h3>
                  <ArrowRightIcon className='mt-2 h-12 text-white' />
                </div>
                <div className='py-2 pr-2'>
                  <p className='font-semibold text-white text-[16px] lg:text-[18px] leading-6'>{t('how_it_works_help_company_state_card2_desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-[32px]'>
            <div className='flex-col-reverse lg:flex-row flex items-end justify-between relative overflow-hidden'>
              <div className='flex flex-col gap-4 pt-4 pb-8 px-6 lg:p-12'>
                <h4 className='font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#222222]'>{t('how_it_works_all_states_title')}</h4>
                <p className='w-full lg:w-[65%] font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-[#222222]'>{t('how_it_works_all_states_desc')}</p>
              </div>
              <div className='relative -top-8 lg:top-auto lg:-bottom-16 lg:right-12 all-states'>
                <Image src={star} alt='all states' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}