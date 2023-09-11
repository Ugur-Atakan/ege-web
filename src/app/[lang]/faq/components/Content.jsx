'use client';

import { Disclosure } from '@headlessui/react'
import { ArrowRightIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import  Link  from 'next/link'
import Image from 'next/image'
import navigatoricon from '../../../../images/navigator.png'
import { useTranslation } from '../../../i18n/client';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Content({ lang }) {
  const { t } = useTranslation();

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
    <section
      id="faqs"
      aria-labelledby="faqs-title"
    >
      <div className="bg-black py-24">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className='mx-auto max-w-[330px]'>
            <h2 className="text-center font-semibold text-[26px] leading-[32px] lg:text-[40px] lg:leading-[44px] text-white">
              {t('pricing_header2_title')}
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <dl className="mt-12 space-y-6 divide-y divide-white divide-opacity-[0.2]">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-[20px] leading-[22px] lg:text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-semibold text-[20px] leading-[22px] lg:text-[28px] lg:leading-[32px] text-white">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 lg:pr-12">
                        {faq.answers.map((answer, index) => (
                          <p className="text-lg text-white" key={faq.id + index}>{answer}</p>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
        <div className="mx-auto max-w-2xl relative">
          <div className=' relative -bottom-16  lg:-bottom-24 lg:-right-12'>
            <Image src={navigatoricon} className='w-128 h-128' alt='navigator icon' />
          </div>
          <div className='text-center px-12 lg:px-0'>
            <h1 className='relative font-bold text-[32px] leading-[38px] lg:text-[64px] lg:leading-[64px] text-white'>{t('pricing_header2_footer_title')}</h1>
          </div>
        </div>
        <div className='mx-auto max-w-lg px-4 lg:px-0'>
          <div className='py-6'>
            <label for="businessName" class="mb-2 text-sm font-medium sr-only">Search</label>
            <div class="relative mb-4">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              </div>
              <input type="text" id="businessName" class="block w-full p-6 pl-6 text-lg text-[#8A8A8A] rounded-[20px] bg-[#1B1B1B] focus:outline-none border-none focus:border-none focus:ring-0" placeholder={t('pricing_header2_footer_input_text')} required />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-4 px-7 rounded-2xl">{t('pricing_header2_footer_input_button')}</button>
            </div>
            <Link href={`/${lang}/start-my-business`} className='text-center' >
              <p className='text-[#8A8A8A] block lg:flex items-center justify-center gap-1'>{t('pricing_header2_footer_text_gray')} <span className='flex justify-center items-center gap-1 text-[#9EE248] cursor-pointer'>{t('pricing_header2_footer_text_green')} <ArrowRightIcon className='w-4 h-4' /> </span></p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
