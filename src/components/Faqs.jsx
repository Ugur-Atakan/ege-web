import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faqs() {
  const {t} = useTranslation();
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
    className="py-20 sm:py-32"
  >
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('pricing_header2_title')}
          </h2>
          <h3 className='text-gray-400 text-lg text-center py-6'>{t('pricing_header1_text')}</h3>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
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
                        <p className="text-base text-gray-500 py-2" key={faq.id + index}>{answer}</p>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
  )
}
