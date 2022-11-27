import { CheckIcon } from '@heroicons/react/24/outline'
import { Navbar } from '../components/Navbar'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

import {
  useSearchParams
} from "react-router-dom";

const pricing = {
  corp_tiers: [
    {
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
        'Certificate of Incorporation', 
        'Statement of Incorporator',
        'Lifetime Customer Support (Phone & Email)',
        'Customizable Corporation Bylaws',
        'Customizable Corporate Banking Resolution',
        'Customizable Corporate Meeting Minutes',
        'Electronic Delivery of State Documents',
        'Access to Digital Copies of the Documents',
        'Access to Registate Online Dashboard',
    ],
      cta: 'Get Started Now',
      mostPopular: false,
      id: 'corp1'
    },
    {
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
      cta: 'Get Started Now',
      mostPopular: true,
      id: 'corp2'
    },
    {
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
        'All template documents to be ready for funding',
      ],
      cta: 'Get Started Now',
      mostPopular: false,
      id: 'corp3'
    },
  ],
  llc_tiers: [
    {
      title: 'Registate LLC Gold',
      href: '/form-your-company-step2?packageType=llc1',
      price: 299,
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
      cta: 'Get Started Now',
      mostPopular: false,
      id: 'llc1'
    },
    {
      title: 'Registate LLC Premium',
      href: '/form-your-company-step2?packageType=llc2',
      price: 599,
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
      cta: 'Get Started Now',
      mostPopular: true,
      id: 'llc2'
    }
  ],
  partnership_tiers: [
    {
      title: 'Starter',
      href: '/form-your-company-step2?packageType=partnership1',
      price: 369,
      frequency: '',
      description: 'Expedited Filing (1-3 business days).',
      description2: 'Everything you need to perfectly start your company.',
      features: [
        '1 Year Registered Agent Fee',
        'Company Formation State Filing Fees',
        'EIN Application Fee',
        'Free Company Name Check', 
        'Certificate of Incorporation', 
        'Statement of Incorporator',
        'Lifetime Customer Support (Phone & Email)',
        'Customizable Corporation Bylaws',
        'Customizable Corporate Banking Resolution',
        'Customizable Corporate Meeting Minutes',
        'Electronic Delivery of State Documents',
        'Access to Digital Copies of the Documents',
        'Access to Registate Online Dashboard',
    ],
      cta: 'Get Started Now',
      mostPopular: false,
      id: 'partnership1'
    },
    {
      title: 'Start Up',
      href: '/form-your-company-step2?packageType=partnership2',
      price: 769,
      frequency: '/year',
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
      cta: 'Get Started Now',
      mostPopular: true,
      id: 'partnership2'
    }
  ]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//Define Pricing component
export function FormYourCompanyPricing () {
  let [searchParams, setSearchParams] = useSearchParams();

  //Read onboardingId from URL  
  let onboardingId = searchParams.get("onboardingId");
  let companyName = searchParams.get("companyName");
  let companyState = searchParams.get("companyState");
  let companyType = searchParams.get("companyType");

  console.log("onboardingId: " + onboardingId);
  console.log("companyName: " + companyName);
  console.log("companyState: " + companyState);
  console.log("companyType: " + companyType);

  if (companyName == null) {
    document.getElementById("banner").style.display = "none";
  }

  let tiers = [];
  if (companyType == "LLC") {
    tiers = pricing.llc_tiers;
  } else if (companyType == "Corporation") {
    tiers = pricing.corp_tiers;
  } else if (companyType == "Partnership") {
    tiers = pricing.partnership_tiers;
  }

  function bannerDismissClicked() {
    console.log("bannerDismissClicked");
    document.getElementById("banner").style.display = "none";
  }

  // Define package click action handler
  function packageClickHandler (tier) {
    console.log("packageClickHandler: " + tier.id);

    // redirect page to /form-your-company-step2
    console.log('/form-your-company-step2?onboardingId=' + onboardingId + '&companyName=' + companyName + '&companyState=' + companyState + '&companyType=' + companyType + '&packageType=' + tier.id)
    window.location.href = '/form-your-company-step2?onboardingId=' + onboardingId + '&companyName=' + companyName + '&companyState=' + companyState + '&companyType=' + companyType + '&packageType=' + tier.id;
  }
  return (
    <main className="mt-16 sm:mt-24">
      <Navbar />
      <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div id="banner" className="py-8 rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-10 w-10 text-green-400" aria-hidden="false" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">Congratulations. Looks like <span className="font-bold text-xl">{companyName}</span> should be available to be registered in <span className="font-bold text-2xl">{companyState}</span>. </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={bannerDismissClicked}
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="false" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
        Simple and clear pricing pla  ns
        </h2>
        <p className="mt-6 max-w-2xl text-xl text-gray-500">
        We make pricing simple and clear to ensure you are never caught off guard by any hidden fees
        </p>
        <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {
            tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 py-1.5 px-4 text-sm font-semibold text-white">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>
                  <p className="mt-6 text-gray-800 font-bold">{tier.description2}</p>

                  {/* Feature list */}
                  <ul className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              <button
                type="submit"
                onClick={() => packageClickHandler(tier)}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                  'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                )}
                >
                {tier.cta}
              </button>
           </div>
          ))}
        </div>
      </div>
    </main>
  )
}
