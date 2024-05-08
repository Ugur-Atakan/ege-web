import { Disclosure } from '@headlessui/react'
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

const FaqItem = ({ t , faq}) => {
  return (
    <Disclosure as="div" key={faq.question} className="py-3">
      {({ open }) => (
        <>
          <dt className="text-[20px] leading-[22px] lg:text-lg">
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
              <span className="font-medium text-[16px] leading-[22px] lg:text-[20px] lg:leading-[32px] text-black">{t(faq.question)}</span>
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
              <p className="text-md text-black" key={faq.id + index}>{t(answer)}</p>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default FaqItem