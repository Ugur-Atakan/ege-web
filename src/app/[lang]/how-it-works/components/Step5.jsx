import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '../../../i18n/client'
import { tick } from '../../../../images'

export default function Step5({ lang }) {
    const { t } = useTranslation(lang)

    return (
      <div className='hiw-section7'>
        <div className='mx-auto max-w-[851px] px-6 lg:px-0  py-12 lg:py-24'>
          <h1 className='text-left lg:text-center font-bold text-[32px] lg:text-[64px] leading-[38px] lg:leading-[64px] text-[#1649FF]'>
            {t('how_it_works_step_5')}
            <span className='text-[#ECEFF1]'>{t("how_it_works_just_1_day_title")}</span>
          </h1>
        </div>
        <div className='lg:mx-auto max-w-[938px] lg:px-4 mx-6 py-12 rectangle'>
          <div className='block lg:flex items-start justify-between gap-24 px-4 lg:px-12'>
            <div className='w-[80%] lg:w-[40%]'>
              <div className='flex flex-col gap-16'>
                <div>
                  <h3 className='font-semibold  text-[20px] lg:text-[22px] leading-[22px] lg:leading-[26px] text-white'>{t("how_it_works_just_1_day_desc")}</h3>
                </div>
                <div className='hidden lg:block'>
                  <Link href={`/${lang}/company-type`} className='rounded-2xl bg-[#1649FF] text-white font-semibold p-4'>{t("how_it_works_just_1_day_button")}</Link>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-[60%]'>
              <ul className='flex flex-col gap-12 pt-6 lg:pt-0 lg:pb-24'>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8 w-8' alt='Company created in any state' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list1_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list1_desc")}</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8 w-8' alt='Registered agent' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list2_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list2_desc")}</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8 w-8' alt='EIN and bank account setup assistance' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list3_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list3_desc")}</p>
                  </div>
                </li>
                <li>
                  <div className='flex items-center gap-3'>
                    <Image src={tick} className='h-8 w-8' alt='Access to Registate online dashboard' />
                    <h3 className='font-semibold text-[16px] lg:text-[18px] leading-[22px] lg:leading-6 text-white'>{t("how_it_works_just_1_day_list4_title")}</h3>
                  </div>
                  <div className='block pl-12'>
                    <p className='text-[#ECEFF1] text-opacity-[30%] font-semibold text-lg lg:leading-6 lg:text-[16px] leading-[22px]'>{t("how_it_works_just_1_day_list4_desc")}</p>
                  </div>
                </li>
              </ul>
              <Link href={`/${lang}/company-type`} className='w-full block mt-12 mb-0 lg:hidden text-center rounded-2xl bg-[#1649FF] text-white font-semibold p-4'>{t("how_it_works_just_1_day_button")}</Link>
            </div>
          </div>
        </div>
      </div>
    )
}