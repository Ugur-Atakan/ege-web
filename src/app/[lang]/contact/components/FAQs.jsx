'use client';
import { Disclosure } from '@headlessui/react'
import { ArrowRightIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import navigatoricon from '../../../../images/navigator.png'
import { useTranslation } from '../../../i18n/client';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FaqsWhite({ lang }) {
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
        <section
            id="faqs"
            aria-labelledby="faqs-title"
            className='bg-white'
        >
            <div className="mx-auto max-w-5xl py-12 px-6 sm:py-24 sm:px-6">
                <div className='text-center]'>
                    <h2 className="text-center font-semibold text-[26px] leading-[32px] lg:text-[40px] lg:leading-[44px] text-[#222222]">
                        {t('pricing_header2_title')}
                    </h2>
                </div>
                <div className="mx-auto max-w-5xl">
                    <dl className="mt-12 space-y-6 divide-y divide-[#222222] divide-opacity-[0.2]">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-[20px] leading-[22px] lg:text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left">
                                                <span className="font-semibold text-[20px] leading-[22px] lg:text-[28px] lg:leading-[32px] text-[#222222]">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform text-[#222222]')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 lg:pr-12">
                                            {faq.answers.map((answer, index) => (
                                                <p className="text-lg text-[#222222]" key={faq.id + index}>{answer}</p>
                                            ))}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
