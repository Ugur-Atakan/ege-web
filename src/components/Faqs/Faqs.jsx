'use client'

import Image from 'next/image'
import navigatoricon from '@/assets/images/navigator.png'
import FooterComponent from './FooterComponent'
import FaqsList from './FaqsList'
import Bottom from './Bottom'

import { useTranslation } from '@/i18n/client'

const Faqs = ({ lang }) => {
  const { t } = useTranslation(lang);
  
  const faqs = [
    {
      id: 1,
      question: t('pricing_header2_Question_1'),
      answers: [
        t('pricing_header2_Answer_1_1'),
        t('pricing_header2_Answer_1_2'),
        t('pricing_header2_Answer_1_3'),
      ]
    },
    {
      id: 2,
      question: t('pricing_header2_Question_2'),
      answers: [
        t('pricing_header2_Answer_2_1'),
        t('pricing_header2_Answer_2_2'),
        t('pricing_header2_Answer_2_3'),
      ]
    },
    {
      id: 3,
      question: t('pricing_header2_Question_3'),
      answers: [
        t('pricing_header2_Answer_3')
      ]
    },
    {
      id: 4,
      question: t('pricing_header2_Question_4'),
      answers: [
        t('pricing_header2_Answer_4') 
      ]
    },
    {
      id: 5,
      question: t('pricing_header2_Question_5'),
      answers: [
        t('pricing_header2_Answer_5_1'),
        t('pricing_header2_Answer_5_2'),
        t('pricing_header2_Answer_5_3'),
      ]
    }
  ]

  return (
      <section id="faqs" aria-labelledby="faqs-title">
        <div className="bg-black pt-24">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className='mx-auto max-w-[330px]'>
              <h2 className="text-center font-medium text-[26px] leading-[32px] lg:text-[40px] lg:leading-[44px] text-white">
                {t('pricing_header2_title')}
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <FaqsList faqs={faqs} />
            </div>
          </div>
        </div>

        <div className='faq-background pb-24'>
            <div className="mx-auto max-w-2xl pb-12 ">
              <div className='lg:-bottom-24 lg:-right-12'>
                <Image src={navigatoricon} className='w-128 h-128' alt='navigator icon' />
              </div>
              <div className='text-center px-12 lg:px-0'>
                <h2 className='relative font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px] text-white'>{t('pricing_header2_footer_title')}</h2>
              </div>
              <FooterComponent lang={lang} t={t} />
            </div>
        </div>
        <Bottom />      
      </section>
  )
}

export default Faqs
