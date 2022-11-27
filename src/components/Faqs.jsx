import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const faqs = [
  { 
    id: 1,
    question: "Why should I choose Delaware to form my company?",
    answers: [
      "Companies choose Delaware for many reasons. The State administration is business-friendly and highly accessible. The Delaware General Corporation Law is enormously flexible in company formation and management. Existence of the famous “Delaware Court of Chancery”, a business court consisting of expert judges in the field of commercial law, provides a legal certainty.",
      "In technical perspective, company owners do not have to be present in Delaware when incorporating. No minimum capital is required to start a company. The state held a limited information concerning a company. The structure of the company and other information about the internal workings of the company are not generally available to the public.",
      "Culmination all these factors makes Delaware a great place to incorporate. ",
    ]
  },
  {
    id: 2,
    question: "What is a Registered Agent?",
    answers: [
      "A Registered Agent is a person or a company that is authorized to accept legal documents on behalf of a company. The Registered Agent is responsible for receiving and forwarding legal documents to the company. The Registered Agent is also responsible for maintaining the company’s records and ensuring that the company is in compliance with the state’s laws.",
      "The Registered Agent is required to be a resident of the state where the company is incorporated. The Registered Agent must have a physical address in the state where the company is incorporated. The Registered Agent must be available during normal business hours to receive legal documents.",
      "Registate is a Delaware Registered Agent and can help you form your company in Delaware.",
    ]
  },
  {
    id: 3,
    question: "Do I have to live in the US to form a company?",
    answers: [
      "No. You don't have to live in the US to form a company. Registate can help you start and manage your company remotely from anywhere in the world.",
    ]
  },
  {
    id: 4,
    question: "What is a Franchise Tax?",
    answers: [
      "Franchise Tax is a type of state tax imposed by the state of Delaware levied on companies. Save for a few exceptions, any company that is incorporated in Delaware, regardless of where the company conducts business, must pay Franchise Tax for incorporating in Delaware."
    ]
  },
  {
    id: 5,
    question: "How much do I have to pay for Franchise Tax?",
    answers: [
      "The Franchise Tax is based on the company’s authorized capital. The Franchise Tax is due annually and is payable in two installments. The first installment is due on the 15th day of the 4th month after the company’s incorporation date. The second installment is due on the 15th day of the 10th month after the company’s incorporation date. The Franchise Tax is calculated as follows:",
      "Franchise Tax = Authorized Capital x 0.0015",
      "For example, if the company’s authorized capital is $100,000, the Franchise Tax is $150.00 ($100,000 x 0.0015).",
    ]
  }
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Faqs2() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
        <div className="mt-12">
          <dl className="space-y-10 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-1">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                  {faq.answers.map((answer, index) => (
                    <dd className="mt-2 text-base text-gray-500" key={faq.id + index}>{answer}</dd>
                   ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default function Faqs() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
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
  )
}
