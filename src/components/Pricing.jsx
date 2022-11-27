import clsx from 'clsx'

import { Container } from '../components/Container'
import { useState, useEffect, Fragment } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition, RadioGroup } from '@headlessui/react'

const states = [
  { id: 1, name: 'Alabama' },
  { id: 2, name: 'Alaska' },
  { id: 3, name: 'Arizona' },
  { id: 4, name: 'Arkansas' },
  { id: 5, name: 'California' },
  { id: 6, name: 'Colorado' },
  { id: 7, name: 'Connecticut' },
  { id: 8, name: 'Delaware' },
  { id: 9, name: 'Florida' },
  { id: 10, name: 'Georgia' },
  { id: 11, name: 'Hawaii' },
  { id: 12, name: 'Idaho' },
  { id: 13, name: 'Illinois' },
  { id: 14, name: 'Indiana' },
  { id: 15, name: 'Iowa' },
  { id: 16, name: 'Kansas' },
  { id: 17, name: 'Kentucky' },
  { id: 18, name: 'Louisiana' },
  { id: 19, name: 'Maine' },
  { id: 20, name: 'Maryland' },
  { id: 21, name: 'Massachusetts' },
  { id: 22, name: 'Michigan' },
  { id: 23, name: 'Minnesota' },
  { id: 24, name: 'Mississippi' },
  { id: 25, name: 'Missouri' },
  { id: 26, name: 'Montana' },
  { id: 27, name: 'Nebraska' },
  { id: 28, name: 'Nevada' },
  { id: 29, name: 'New Hampshire' },
  { id: 30, name: 'New Jersey' },
  { id: 31, name: 'New Mexico' },
  { id: 32, name: 'New York' },
  { id: 33, name: 'North Carolina' },
  { id: 34, name: 'North Dakota' },
  { id: 35, name: 'Ohio' },
  { id: 36, name: 'Oklahoma' },
  { id: 37, name: 'Oregon' },
  { id: 38, name: 'Pennsylvania' },
  { id: 39, name: 'Rhode Island' },
  { id: 40, name: 'South Carolina' },
  { id: 41, name: 'South Dakota' },
  { id: 42, name: 'Tennessee' },
  { id: 43, name: 'Texas' },
  { id: 44, name: 'Utah' },
  { id: 45, name: 'Vermont' },
  { id: 46, name: 'Virginia' },
  { id: 47, name: 'Washington' },
  { id: 48, name: 'West Virginia' },
  { id: 49, name: 'Wisconsin' },
  { id: 50, name: 'Wyoming' }
]

const packageDetails = {
"llc1": {
    title: 'Registate LLC Gold',
    frequency: '',
    description: 'Expedited Filing (1-3 business days).',
    description2: 'Everything you need to perfectly start your company.',
    features: [
        '1 Year Registered Agent Fee',
        'Company Formation State Filing Fees',
        'EIN Application Fee',
        'Free Company Name Check', 
        'Certificate of Formation', 
        'Lifetime Customer Support (Phone & Email)',
        'Customizable Banking Resolution',
        'Electronic Delivery of State Documents',
        'Customizable Members Meeting Minutes',
        'Access to Digital Copies of the Documents',
        'Access to Registate Online Dashboard',
        ],
    cta: 'Select LLC Gold',
    mostPopular: false,
    id: 'llc1'
},
"llc2": {
    title: 'Registate LLC Premium',
    frequency: '',
    description: 'Expedited Filing (1-3 business days).',
    description2: 'Everything you need to diligently operate and manage your company.',
    features: [
    'Everything in Gold',
    '1 Year Free Virtual Mailbox Service',
    '1 Year Free Compliance Calendar',
    'Assisting payment of franchise tax and annual report filing fees',
    'Operating Agreement',
    'LLC Interest Purchase Agreement',
    'Business Contract Templates',
    ],
    cta: 'Select LLC Premium',
    mostPopular: true,
    id: 'llc2'
},
"llc3": {
},
"corporation1": {
    title: 'Starter',
    href: '/form-your-company-step2?packageType=inc1',
    price: 369,
    frequency: '',
    description: 'Expedited Filing (1-3 business days).',
    description2: 'Everything you need to perfectly start your company.',
    features: [
        '1 Year Registered Agent Fee',
        'Company Formation State Filing Fees',
        'EIN Application Fee',
        'Free Company Name Check', 
        'Certificate of InCorporation', 
        'Statement of Incorporator',
        'Lifetime Customer Support (Phone & Email)',
        'Customizable Corporation Bylaws',
        'Customizable Corporate Banking Resolution',
        'Customizable Corporate Meeting Minutes',
        'Electronic Delivery of State Documents',
        'Access to Digital Copies of the Documents',
        'Access to Registate Online Dashboard'    
    ],
    cta: 'Select Starter',
    mostPopular: false,
    id: 'corp1'
},
"corporation2": {
    title: 'Start Up',
    href: '/form-your-company-step2?packageType=inc2',
    price: 769,
    frequency: '',
    description: 'Expedited Filing (1-3 business days).',
    description2: 'Everything you need to diligently operate and manage your company.',
    features: [
        'Everything in Starter',
        '1 Year Free Virtual Mailbox Service',
        '1 Year Free Compliance Calendar',
        'Assisting payment of franchise tax and annual report filing fees',
        'Stock Issuance to Shareholders',
        'Stock Purchase Agreements',
        'Vesting Schedules for Founders - Recommended for Tech Founders',
        'Captable/Stock Ledger',
        '83b IRS forms for Founders',
        'Initial Board and Stockholder Resolutions'
    ],
    cta: 'Select Start Up',
    mostPopular: true,
    id: 'corp2'
},
"corporation3": {
    title: 'Scale Up',
    href: '/form-your-company-step2?packageType=inc3',
    price: 1769,
    frequency: '',
    description: 'Expedited Filing (1-3 business days). ',
    description2: 'Everything you need to operate, manage and grow your company.',
    features: [
        'Everything in Startup',
        'Confidential Information and Inventions Assignment Agreement',
        'Technology Transfer Agreement',
        'Mutual Non Disclosure Agreement',
        'ESOP Reservation Documents',
        'Stock Option Grant Contract Templates',
        'Option Plan for Employees/Consultants and Advisors',
        'SAFE Financing Documents',
        'Convertible Note Financing Documents',
        'All template documents to be ready for funding'
    ],
    cta: 'Select Scale Up',
    mostPopular: false,
    id: 'corp3'
}
}

const pricing= {
"Alabama" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Alaska" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Arizona" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Arkansas" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"California" : {
    "Corporation": [ 369, 769, 1769],
    "LLC": [ 299, 599]
},
"Colorado" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Connecticut" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Delaware" : {
    "Corporation": [ 369, 769, 1769],
    "LLC": [ 299, 599]
},
"Florida" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Georgia" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Hawaii" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Idaho" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Illinois" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Indiana" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Iowa" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Kansas" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Kentucky" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Louisiana" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Maine" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Maryland" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Massachusetts" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},  
"Michigan" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Minnesota" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Mississippi" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Missouri" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Montana" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Nebraska" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Nevada" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"New Hampshire" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"New Jersey" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"New Mexico" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"New York" : {
    "Corporation": [ 369, 769, 1769],
    "LLC": [ 299, 599]
},
"North Carolina" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"North Dakota" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Ohio" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Oklahoma" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Oregon" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Pennsylvania" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Rhode Island" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"South Carolina" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"South Dakota" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Tennessee" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Texas" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Utah" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Vermont" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Virginia" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Washington" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"West Virginia" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Wisconsin" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
},
"Wyoming" : {
    "Corporation": [ 369, 769],
    "LLC": [ 299, 599]
}
}

const companyTypes = [
  { name: 'LLC'},
  { name: 'Corporation'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Plan({ name, price, description, description2, href, features, featured = false }) {

  return (
    <section
      className={clsx('flex flex-col rounded-3xl px-6 sm:px-8', {
        'order-first bg-blue-600 py-8 lg:order-none': featured,
        'lg:py-8': !featured,
      })}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx('mt-2 text-base', {
          'text-white': featured,
          'text-slate-400': !featured,
        })}
      >
        {description}
        {description2}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        ${price}
      </p>
      <ul
        className={clsx('order-last mt-10 space-y-3 text-sm', {
          'text-white': featured,
          'text-slate-200': !featured,
        })}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <svg
              aria-hidden="true"
              className={clsx('h-6 w-6 flex-none', {
                'fill-white stroke-white': featured,
                'fill-slate-400 stroke-slate-400': !featured,
              })}
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                strokeWidth={0}
              />
              <circle
                cx={12}
                cy={12}
                r={8.25}
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      {/* if selected */}
      {featured && (
      <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8" aria-label="Get started with the Small business plan for $15" href="/onboarding">Get started</a>
      )}
      {/* if not selected */}
      {!featured && (
        <a className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with the Starter plan for ${price}" href="/onboarding">Get started</a>
      )}
    </section>
  )
}

export function Pricing() {
  let [companyState, setCompanyState] = useState(localStorage.getItem('companyState') || 'Delaware')
  let [companyType, setCompanyType] = useState(localStorage.getItem('companyType') || 'Corporation')
  let [packagePrices, setPackagePrices] = useState(pricing[companyState][companyType])
  let [selectedState, setSelectedState] = useState(states.find(state => state.name === companyState))
  let [selectedType, setSelectedType] = useState(companyTypes.find(type => type.name === companyType))

  const updatePricing = () => {
    console.log("updatePricing")
    companyState = localStorage.getItem('companyState')
    companyType = localStorage.getItem('companyType')
    console.log({"companyState": companyState, "companyType": companyType})

    if (companyType && companyState) {
      setPackagePrices(pricing[companyState][companyType])
      console.log("packagePrices", pricing[companyState][companyType])
    }
  }

  useEffect(() => {
    localStorage.setItem('companyState', companyState)
    localStorage.setItem('companyType', companyType)
    updatePricing()
  }, [])

  const handleCompanyTypeChange = (e) => {
    console.log("handleCompanyTypeChange", e.name)
    setSelectedType(companyTypes.find(type => type.name === e.name))
    localStorage.setItem('companyType', e.name)
    setCompanyType(e.name)
    updatePricing()
  }

  const handleCompanyStateChange = (e) => {
    console.log("handleCompanyStateChange", e.name)
    setCompanyState(e.name)
    localStorage.setItem('companyState', e.name)
    setSelectedState(states.find(state => state.name === e.name))
    updatePricing()
  }


  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <h2 id="pricing-title" className="sr-only">
        Pricing
      </h2>
      <Container>
        <div className="md:text-center">
          <p className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 281 40"
                className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400"
                preserveAspectRatio="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                />
              </svg>
              <span className="relative">Simple pricing </span>
            </span>{' '}
            for your business
          </p>
          <p className="mt-4 text-lg text-slate-400 max-w-6xl justify-center">
            It doesn't matter if you're just starting or scaling up your business, we have a carefully crafted and the most cost efficient plan for you.
          </p>
        </div>
        <div className="grid grid-cols-2 px-12 py-6">
          <div id="companyStateDiv" className="flex flex-col px-12">
          <Listbox value={selectedState} onChange={handleCompanyStateChange}>
                  {({ open }) => (
                      <>
                      <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                          <span id="companyState" className="block truncate">{selectedState.name}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                          </Listbox.Button>

                          <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {states.map((state) => (
                              <Listbox.Option
                                  id={"state" + state.id}
                                  key={state.id}
                                  className={({ active }) =>
                                  classNames(
                                      active ? 'text-white bg-blue-600' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                  )
                                  }
                                  value={state}
                              >
                                  {({ selected, active }) => (
                                  <>
                                      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                      {state.name}
                                      </span>

                                      {selected ? (
                                      <span
                                          className={classNames(
                                          active ? 'text-white' : 'text-blue-600',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                      >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                      ) : null}
                                  </>
                                  )}
                              </Listbox.Option>
                              ))}
                          </Listbox.Options>
                          </Transition>
                      </div>
                      </>
                  )}
          </Listbox>
          </div>
          <div id="companyTypeDiv" className="flex flex-col px-12">
            <Listbox value={selectedType} onChange={handleCompanyTypeChange}>
                  {({ open }) => (
                      <>
                      <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                          <span id="companyType" className="block truncate">{selectedType.name}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                          </Listbox.Button>

                          <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {companyTypes.map((option) => (
                              <Listbox.Option
                                  id={"companyType" + option.id}
                                  key={option.id}
                                  className={({ active }) =>
                                  classNames(
                                      active ? 'text-white bg-blue-600' : 'text-gray-900',
                                      'relative cursor-default select-none py-2 pl-3 pr-9'
                                  )
                                  }
                                  value={option}
                              >
                                  {({ selected, active }) => (
                                  <>
                                      <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                      {option.name}
                                      </span>

                                      {selected ? (
                                      <span
                                          className={classNames(
                                          active ? 'text-white' : 'text-blue-600',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                      >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                      ) : null}
                                  </>
                                  )}
                              </Listbox.Option>
                              ))}
                          </Listbox.Options>
                          </Transition>
                      </div>
                      </>
                  )}
            </Listbox>
          </div>
        </div>
        <div className="mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
        {
          packagePrices.map((packagePrice, index) => {
              let item = packageDetails[companyType.toLowerCase()+(index+1)]
              console.log("packageDetail[" + companyType.toLowerCase()+(index+1) + "]")
              console.log(item)
              return (
                <Plan
                  name={item.title}
                  price={packagePrice}
                  description={item.description}
                  description2={item.description2}
                  href="/onboarding"
                  features={item.features}
                  featured={index === 1}
                />
              )
          })
        }
        </div>
      </Container>
    </section>
  )
}

export default Pricing