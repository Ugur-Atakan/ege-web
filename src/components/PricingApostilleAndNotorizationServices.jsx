import clsx from 'clsx'
import { Container } from '../components/Container'
import { useState, useEffect, useRef } from 'react'

import React from 'react'

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
  { id: 48, name: 'Washington DC' },
  { id: 49, name: 'West Virginia' },
  { id: 50, name: 'Wisconsin' },
  { id: 51, name: 'Wyoming' }
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
    '1 Year Free Compliance Calendar',
    'Assisting payment of franchise tax and annual report filing fees',
    'Operating Agreement',
    'LLC Membership Certificate',
    'LLC Interest Purchase Agreement',
    'Business Contract Templates',
    ],
    cta: 'Select LLC Premium',
    mostPopular: true,
    id: 'llc2'
},
"llc3": {
  title: 'Registate LLC Premium',
  frequency: '',
  description: 'Expedited Filing (1-3 business days).',
  description2: 'Everything you need to diligently operate and manage your company.',
  features: [
  'Everything in Gold',
  '1 Year Free Compliance Calendar',
  'Assisting payment of franchise tax and annual report filing fees',
  'Operating Agreement',
  'LLC Membership Certificate',
  'LLC Interest Purchase Agreement',
  'Business Contract Templates',
  ],
  cta: 'Select LLC Premium',
  mostPopular: true,
  id: 'llc3'
},
"corporation1": {
    title: 'Starter',
    price: 349,
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
    id: 'corporation1'
},
"corporation2": {
    title: 'Start Up',
    price: 769,
    frequency: '',
    description: 'Expedited Filing (1-3 business days).',
    description2: 'Everything you need to diligently operate and manage your company.',
    features: [
        'Everything in Starter',
        '1 Year Free Compliance Calendar',
        'Assisting payment of franchise tax and annual report filing fees',
        'Stock Issuance to Shareholders',
        'Stock Purchase Agreements',
        'Stock Certificates',
        'Vesting Schedules for Founders - Recommended for Tech Founders',
        'Captable/Stock Ledger',
        '83b IRS forms for Founders',
        'Initial Board and Stockholder Resolutions'
    ],
    cta: 'Select Start Up',
    mostPopular: true,
    id: 'corporation2'
},
"corporation3": {
    title: 'Scale Up',
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
    id: 'corporation3'
}
}

const pricing= {
  "Alabama" : {
      "Corporation": [ 395, 595],
      "LLC": [ 395, 595]
  },
  "Alaska" : {
      "Corporation": [ 409, 609],
      "LLC": [ 409, 609]
  },
  "Arizona" : {
      "Corporation": [ 250, 450],
      "LLC": [ 276, 476]
  },
  "Arkansas" : {
      "Corporation": [ 198, 398],
      "LLC": [ 198, 398]
  },
  "California" : {
      "Corporation": [ 157, 557, 1557],
      "LLC": [ 157, 357]
  },
  "Colorado" : {
      "Corporation": [ 189, 389],
      "LLC": [ 139, 339]
  },
  "Connecticut" : {
      "Corporation": [ 409, 609],
      "LLC": [ 276, 476]
  },
  "Delaware" : {
      "Corporation": [ 349, 649, 1449],
      "LLC": [ 322, 622]
  },
  "Florida" : {
      "Corporation": [ 210, 410],
      "LLC": [ 266, 466]
  },
  "Georgia" : {
      "Corporation": [ 333, 533],
      "LLC": [ 333, 533]
  },
  "Hawaii" : {
      "Corporation": [ 230, 430],
      "LLC": [ 230, 430]
  },
  "Idaho" : {
      "Corporation": [ 261, 461],
      "LLC": [ 261, 461]
  },
  "Illinois" : {
      "Corporation": [ 349, 769],
      "LLC": [ 299, 599]
  },
  "Indiana" : {
      "Corporation": [ 441, 641],
      "LLC": [ 416, 616]
  },
  "Iowa" : {
      "Corporation": [ 203, 403],
      "LLC": [ 203, 403]
  },
  "Kansas" : {
      "Corporation": [ 244, 444],
      "LLC": [ 323, 523]
  },
  "Kentucky" : {
      "Corporation": [ 209, 409],
      "LLC": [ 193, 393]
  },
  "Louisiana" : {
      "Corporation": [ 286, 486],
      "LLC": [ 286, 486]
  },
  "Maine" : {
      "Corporation": [ 356, 556],
      "LLC": [ 387, 587]
  },
  "Maryland" : {
      "Corporation": [ 377, 577],
      "LLC": [ 355, 555]
  },
  "Massachusetts" : {
      "Corporation": [ 425, 625],
      "LLC": [ 688, 888]
  },  
  "Michigan" : {
      "Corporation": [ 214, 414],
      "LLC": [ 203, 403]
  },
  "Minnesota" : {
      "Corporation": [ 312, 512],
      "LLC": [ 203, 403]
  },
  "Mississippi" : {
      "Corporation": [ 349, 769],
      "LLC": [ 299, 599]
  },
  "Missouri" : {
      "Corporation": [ 208, 408],
      "LLC": [ 208, 408]
  },
  "Montana" : {
      "Corporation": [ 245, 445],
      "LLC": [ 245, 445]
  },
  "Nebraska" : {
      "Corporation": [ 258, 458],
      "LLC": [ 264, 464]
  },
  "Nevada" : {
      "Corporation": [ 884, 1084],
      "LLC": [ 575, 775]
  },
  "New Hampshire" : {
      "Corporation": [ 312, 512],
      "LLC": [ 288, 488]
  },
  "New Jersey" : {
      "Corporation": [ 286, 486],
      "LLC": [ 286, 486]
  },
  "New Mexico" : {
      "Corporation": [ 241, 441],
      "LLC": [ 189, 389]
  },
  "New York" : {
      "Corporation": [ 286, 486, 999],
      "LLC": [ 363, 563]
  },
  "North Carolina" : {
      "Corporation": [ 284, 484],
      "LLC": [ 284, 484]
  },
  "North Dakota" : {
      "Corporation": [ 281, 481],
      "LLC": [ 317, 517]
  },
  "Ohio" : {
      "Corporation": [ 281, 481],
      "LLC": [ 254, 454]
  },
  "Oklahoma" : {
      "Corporation": [ 206, 406],
      "LLC": [ 259, 459]
  },
  "Oregon" : {
      "Corporation": [ 241, 441],
      "LLC": [ 241, 441]
  },
  "Pennsylvania" : {
      "Corporation": [ 287, 487],
      "LLC": [ 287, 487]
  },
  "Rhode Island" : {
      "Corporation": [ 397, 597],
      "LLC": [ 313, 513]
  },
  "South Carolina" : {
      "Corporation": [ 487, 687],
      "LLC": [ 288, 488]
  },
  "South Dakota" : {
      "Corporation": [ 306, 506],
      "LLC": [ 306, 506]
  },
  "Tennessee" : {
      "Corporation": [ 263, 463],
      "LLC": [ 469, 669   ]
  },
  "Texas" : {
      "Corporation": [ 447, 647],
      "LLC": [ 447, 647]
  },
  "Utah" : {
      "Corporation": [ 209, 409],
      "LLC": [ 209, 409]
  },
  "Vermont" : {
      "Corporation": [ 281, 481],
      "LLC": [ 281, 481]
  },
  "Virginia" : {
      "Corporation": [ 229, 429],
      "LLC": [ 255, 455]
  },
  "Washington" : {
      "Corporation": [ 368, 568],
      "LLC": [ 368, 568]
  },
  "Washington DC" : {
      "Corporation": [ 305, 505],
      "LLC": [ 305, 505]
  },
  "West Virginia" : {
      "Corporation": [ 281, 481],
      "LLC": [ 306, 506]
  },
  "Wisconsin" : {
      "Corporation": [ 255, 455],
      "LLC": [ 286, 486]
  },
  "Wyoming" : {
      "Corporation": [ 232, 432],
      "LLC": [ 232, 432]
  }
}

const companyTypes = [
  { name: 'LLC'},
  { name: 'Corporation'}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Plan(props) {

  const clickHandler = () => {
      localStorage.setItem("packageId", props.packageId)
      localStorage.setItem("packageName", props.name)
      localStorage.setItem("packageType", props.packageType)
      localStorage.setItem("packagePrice", props.price)
      window.location.href = props.href
  }
  return (
    <section 
      className={clsx('flex flex-col rounded-3xl px-6 sm:px-8', {
        'order-first bg-blue-600 py-8 lg:order-none': props.featured,
        'lg:py-8': !props.featured,
      })}
    >
      <h3 className="mt-5 font-display text-lg text-white">{props.name}</h3>
      <p
        className={clsx('mt-2 text-base', {
          'text-white': props.featured,
          'text-slate-400': !props.featured,
        })}
      >
        {props.description}
        {props.description2}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        ${props.price}
      </p>
      <ul
        className={clsx('order-last mt-10 space-y-3 text-sm', {
          'text-white': props.featured,
          'text-slate-200': !props.featured,
        })}
      >
        {props.features.map((feature) => (
          <li key={feature} className="flex">
            <svg
              aria-hidden="true"
              className={clsx('h-6 w-6 flex-none', {
                'fill-white stroke-white': props.featured,
                'fill-slate-400 stroke-slate-400': !props.featured,
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
            <span className="ml-4" >{feature}</span>
          </li>
        ))}
      </ul>
      {/* if selected */}
      {props.featured && (
      <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8" aria-label="Get started with the Small business plan for $15"  onClick={clickHandler.bind(this)} >Get started</button>
      )}
      {/* if not selected */}
      {!props.featured && (
        <button className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" aria-label="Get started with the Starter plan for ${price}" onClick={clickHandler.bind(this)}>Get started</button>
      )}
    </section>
  )
}

export function Pricing() {
  let [companyState, setCompanyState] = useState("");
  let [companyType, setCompanyType] = useState("");
  let [showPricingPackages, setShowPricingPackages] = useState(false);
  let [packagePrices, setPackagePrices] = useState()
  const pricingPackagesRef = useRef(null);


  const updatePricing = () => {
    companyState = localStorage.getItem('companyState')
    companyType = localStorage.getItem('companyType')
    console.log("updatePricing to", companyState, companyType)

    if (companyType && companyState) {
      setPackagePrices(pricing[companyState][companyType])
      console.log("packagePrices", pricing[companyState][companyType])
    }

    if (companyState !== "" && companyType !== "") {
      setShowPricingPackages(true);
    } else {
      setShowPricingPackages(false);
    }
  }

  useEffect(() => {
    localStorage.setItem('companyState', companyState)
    localStorage.setItem('companyType', companyType)
    updatePricing()
  }, [])

  const handleCompanyTypeChange = (name) => {
    console.log("handleCompanyTypeChange", name)
    setCompanyType(name)
    localStorage.setItem('companyType', name)
    updatePricing()
    if (companyState !== "") {
      // Wait for the pricingPackages element to be available in the DOM
      setTimeout(() => {
        document.getElementById("pricingPackages").scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }

  const handleCompanyStateChange = (name) => {
    console.log("handleCompanyStateChange", name)
    setCompanyState(name)
    localStorage.setItem('companyState', name)
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
        <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 mx-auto py-12 max-w-4xl">
          <div id="companyStateDiv" className="flex flex-col pr-1">
            <div>
            <select
              id="companyState"
              name="companyState"
              value={companyState}
              placeholder="Select State"
              className="mt-1 block w-full rounded-md px-4 py-3 pl-3 pr-10 text-2xl focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 h-18 border-blue-400 border-4"
              onChange={(e) => handleCompanyStateChange(e.target.value)}
            >
              <option value=""> Select State </option>
              {states.map((state) => (
                <option 
                  key={state.name} 
                  value={state.name}
                >
                  {state.name}
                </option>
              ))}
            </select>

            </div>
          </div>
          <div id="companyTypeDiv" className="flex flex-col pl-1">
            <select
              id="companyType"
              name="companyType"
              value={companyType}
              className="mt-1 block w-full rounded-md px-4 py-3 pl-3 pr-10 text-2xl focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 h-18 border-4 border-blue-400"
              onChange={(e) => handleCompanyTypeChange(e.target.value)}
            >
              <option value=""> Select Company Type </option>
              {companyTypes.map((type) => (
                <option 
                  key={type.name} 
                  value={type.name} 
                >
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {showPricingPackages && (
        <div id="pricingPackages" className="flex flex-col-reverse lg:flex lg:justify-center mx-4 mt-16 max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
        {
          packagePrices.map((packagePrice, index) => {
              let item = packageDetails[companyType.toLowerCase()+(index+1)]
              if (companyState !== "Delaware") {
                if (index === 0) {
                  //if item.features doesn't include Business Address Fee, add it
                  if (!item.features.includes("1 Year Business Address Fee")) {
                    item.features.splice(1, 0, "1 Year Business Address Fee")
                  }
                }
                if (index === 1) {
                  //if item.features includes it remove it
                  if (item.features.includes("1 Year Virtual Mailbox Fee")) {
                    item.features.splice(1, 2)
                  }
                }
              }
              if (companyState === "Delaware") {
                if (index === 0) {
                  //if item.features include it remove it
                  if (item.features.includes("1 Year Business Address Fee")) {
                    item.features.splice(1, 1)
                  }
                }
                if (index === 1) {
                  if (!item.features.includes("1 Year Virtual Mailbox Fee")) {
                    item.features.splice(1, 0, "1 Year Virtual Mailbox Fee")
                  }
                  if (!item.features.includes("1 Year Business Address Fee")) {
                    item.features.splice(2, 0, "1 Year Business Address Fee")
                  }
                }
              }
              console.log("packageDetail[" + companyType.toLowerCase()+(index+1) + "]")
              console.log(item)
              return (
                <div key={item.id + index}>
                <Plan
                  name={item.title}
                  price={packagePrice}
                  description={item.description}
                  description2={item.description2}
                  packageId={companyState.toLocaleLowerCase() + "_" + item.id}
                  href="/onboarding"
                  features={item.features}
                  featured={index === 1}
                  keyName={item.id + index}
                  packageType={item.id}
                />
                </div>
              )
          })
        }
        </div>
        )}
      </Container>
    </section>
  )
}

export default Pricing