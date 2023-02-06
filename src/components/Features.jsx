import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import mert from '../images/avatars/mert.png'
import ufuk from '../images/avatars/ufuk.png'
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'

const tabs = [
  {
    name: 'Business Formation and EIN',
    features: [
      {
        name: 'Business Formation and EIN',
        description:
          "Fast and simple company formation with worry free services and expert support to help you get filed accurately and on time. We'll also help you get your EIN for US residents and non-residents.",
        button: 'Form My Company',
        href: '/form-my-company',
        icon: InboxIcon,
        executivedesc: 'They registered my company, got EIN instantly, assisted me opening a bank account and help notarization of couple of documents. 5 stars service and a great team!.',
        executivetitle: 'Mert Yildiz, Founder at Bonded Technologies Inc.',
        executiveimg: mert,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Post-Incorporation Documents',
    features: [
      {
        name: 'Post-Incorporation Documents',
        description:
          "We provide a full suite of post-incorporation documents to help you complete your business formation. Stock Issuance to Owners, Corporate Resolutions, Operating Agreement for LLCs, and Bylaws for Corporations, and more.",
        button: 'Learn More',
        href: '/pricing/form-my-company',
        icon: SparklesIcon,
        imageSrc: 'https://registate.net/static/media/features2.fe27dab0a08de2622778.png',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Virtual Mailbox',
    features: [
      {
        name: 'Virtual Mailbox',
        description:
          "A virtual mailbox makes it easier to manage your mail & packages remotely. We'll provide you with a mailbox address in US. You can use this address to receive mail and packages. We'll scan and email you the documents",
        button: 'Get a US Address',
        href: '/pricing/form-my-company',
        icon: InboxIcon,
        executivedesc: "We use Registate's mailbox services and they have helped us to obtain certified copies of some State documents. Smooth, fast and high quality service. Highly recommend them.",
        executivetitle: 'Ufuk Dag, CEO at Cameralyze Inc',
        executiveimg: ufuk,
        imageSrc: 'https://chiselspace.com/wp-content/uploads/2017/09/digital-mail-2-1-850x429.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Apostille and Notarization Services',
    features: [
      {
        name: 'Apostille and Notarization Services',
        description:
          "We provide apostille and notarization services for documents that need to be used in foreign countries. We'll notarize your documents and get them apostilled by the Secretary of State.",
        button: 'Learn More',
        href: '/pricing/form-my-company',
        icon: SparklesIcon,
        imageSrc: 'https://registate.net/static/media/features4.d28d6567c82c0ce9e37a.png',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'US Bank Account Assistance',
    features: [
      {
        name: 'US Bank Account Assistance',
        description:
          "Our team is here to make the process of setting up a US bank account as quick and easy as possible. We will assist you every step of the way, answering any questions you may have and providing all necessary corporate documents for the bank. With our expertise and support, you can have your US bank account up and running in no time.",
        button: 'Open a US Bank Account',
        href: '/pricing/form-my-company',
        icon: InboxIcon,
        executivedesc: "Registate made the process of opening a bank account in the US quick and easy. Their team provided expert guidance and all necessary documents, resulting in a stress-free experience.",
        executivetitle: 'Cihan Sahin, CEO of OpsBeacon Inc.',
        executiveimg: mert,
        imageSrc: 'https://jupiter.money/content/images/2021/11/Savings_Account.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to start and to run your business
            </h2>
            <p className="mt-4 text-gray-500">
              From developing an idea, to making it official, to turning it into a money-making business, our platform have you covered.
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse outline-none lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <div className='flex items-center gap-4'>
                          <div>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                              <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{feature.name}</h2>
                          </div>
                        </div>
                          <div className="mt-6">
                            <p className="mt-4 text-lg text-gray-500">
                              {feature.description}
                            </p>
                          </div>
                          <div className="mt-6">
                            <a
                              href={feature.href}
                              className="inline-flex rounded-lg bg-blue-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                            >
                              {feature.button}
                            </a>
                          </div>
                        {feature.executivetitle && <div className="mt-8 border-t border-gray-200 pt-6">
                          <blockquote>
                            <div>
                              <p className="text-base text-gray-500">
                                &ldquo;{feature.executivedesc}&rdquo;
                              </p>
                            </div>
                            <footer className="mt-3">
                              <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-6 w-6 rounded-full"
                                    src={feature.executiveimg}
                                    alt={feature.executiveimg}
                                  />
                                </div>
                                <div className="text-base font-medium text-gray-700">{feature.executivetitle}</div>
                              </div>
                            </footer>
                          </blockquote>
                        </div>}

                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
              ))}
            </Tab.Panel>
              ))}
          </Tab.Panels>
        </Tab.Group>
    </div>
      </section >
    </div >
  )
}
