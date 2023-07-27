import { Disclosure } from '@headlessui/react'
import { ArrowRightIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import navigatoricon from '../images/navigator.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faqs() {
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
    // More questions...
  ]
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
    >
      <div className="bg-black py-24">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className='mx-auto max-w-[300px]'>
            <h2 className="text-center font-semibold text-[40px] leading-[44px] text-white">
              {t('pricing_header2_title')}
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <dl className="mt-12 space-y-6 divide-y divide-white divide-opacity-[0.2]">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-semibold text-[28px] leading-[32px] text-white">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
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
          <div className='relative -bottom-24 -right-12'>
            <img src={navigatoricon} className='w-128 h-128'  alt='navigator icon'/>
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-[64px] leading-[64px] text-white'>Get your business ready in 24 hours</h1>
          </div>
        </div>
        <div className='mx-auto max-w-lg'>
          <div className='py-6'>
            <label for="businessName" class="mb-2 text-sm font-medium sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              </div>
              <input type="text" id="businessName" class="block w-full p-6 pl-6 text-lg text-[#8A8A8A] rounded-[20px] bg-[#1B1B1B] focus:outline-none border-none focus:border-none focus:ring-0" placeholder="Your preferred business name" required />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#1649FF] py-4 px-7 rounded-2xl">Start now</button>
            </div>
            <div className='text-center py-2'>
              <p className='text-[#8A8A8A] flex items-center justify-center gap-1'>or take a quiz to choose a <span className='flex items-center gap-1 text-[#9EE248] cursor-pointer'>company type first <ArrowRightIcon className='w-4 h-4'/> </span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
