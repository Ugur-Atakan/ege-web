
import React, { Fragment, useState, useEffect, useRef } from 'react'
import { Listbox, Transition, RadioGroup } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from "axios";

const companyTypes = [
    { name: 'LLC'},
    { name: 'Corporation'}
]

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
        "Corporation": [ 349, 599, 1299],
        "LLC": [ 322, 522]
    },
    "Florida" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Georgia" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Hawaii" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Idaho" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Illinois" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Indiana" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Iowa" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Kansas" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Kentucky" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Louisiana" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Maine" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Maryland" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Massachusetts" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },  
    "Michigan" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Minnesota" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Mississippi" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Missouri" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Montana" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Nebraska" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Nevada" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "New Hampshire" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "New Jersey" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "New Mexico" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "New York" : {
        "Corporation": [ 349, 769, 1769],
        "LLC": [ 299, 599]
    },
    "North Carolina" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "North Dakota" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Ohio" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Oklahoma" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Oregon" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Pennsylvania" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Rhode Island" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "South Carolina" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "South Dakota" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Tennessee" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Texas" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Utah" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Vermont" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Virginia" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Washington" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "West Virginia" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Wisconsin" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    },
    "Wyoming" : {
        "Corporation": [ 349, 769],
        "LLC": [ 299, 599]
    }
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
    

function OnboardingForm() {
    const dataFetchedRef = useRef(false);
    let [companyName, setCompanyName] = useState(localStorage.getItem('companyName'))
    let [companyState, setCompanyState] = useState(localStorage.getItem('companyState'))
    let [companyType, setCompanyType] = useState(localStorage.getItem('companyType'))
    let [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'))
    let [onboardingId, setOnboardingId] = useState(localStorage.getItem('onboardingId'))
    let [tiers, setTiers] = useState([])
    let [showPricing, setShowPricing] = useState(false)
    let [showSubmitButton, setShowSubmitButton] = useState(false)
    let [selectedState, setSelectedState] = useState(states[7])
    let [selectedType, setSelectedType] = useState(companyType)
    let [showCompanyInfo, setShowCompanyInfo] = useState(false)
    let [packageType, setPackageType] = useState(localStorage.getItem('packageType'))
    let [packagePrices, setPackagePrices] = useState(JSON.parse(localStorage.getItem('packagePrices'), []))

    const updateTiers = (state, type) => {
        console.log("Updating tiers with state", state, "and", type)
        tiers = pricing[state][type]
        console.log("tiers: ", tiers)
        localStorage.setItem('packagePrices', JSON.stringify(tiers))
        setPackagePrices(tiers)
    }

    const updatePricing = () => {
        console.log("updatePricing")
        companyState = localStorage.getItem('companyState')
        companyType = localStorage.getItem('companyType')
        if (companyState) {
            console.log("Setting selectedState to:", companyState)
            setSelectedState(states.find(state => state.name === companyState))
        }
        else {
            localStorage.setItem('companyState', selectedState.name)
        }
        if (companyType) {
            console.log("Setting selectedType to:", companyType)
            setCompanyType(companyType)
        }
        if (companyType && companyState) {
            setShowPricing(true)
            console.log("showPricing: true")
            updateTiers(companyState, companyType)
        }
    }

    const updateCompanyInfo = () => {
        console.log("updateCompanyInfo")
        packageType = localStorage.getItem('packageType')
        if (packageType) {
            setShowCompanyInfo(true)
        }
    }


    const stateChangeHandler = (e) => {
        console.log("stateChangeHandler")
        console.log("e:", e)
        localStorage.setItem('companyState', e.name)
        setSelectedState(states.find(state => state.name === e.name))
        setCompanyState(e.name)
        updatePricing()
    }

    const typeChangeHandler = (e) => {
        console.log("typeChangeHandler")
        console.log("e:", e)
        localStorage.removeItem('packageType')
        setShowCompanyInfo(false)
        localStorage.setItem('companyType', e)
        setCompanyType(e)
        updatePricing()
        submitOnboardingRequest()
    }

    const nameChangeHandler = (e) => {
        console.log("nameChangeHandler")
        localStorage.setItem('companyName', e.target.value)
        setCompanyName(e.target.value)
        submitOnboardingRequest()
    }

    const emailChangeHandler = (e) => {
        console.log("emailChangeHandler")
        if (e.target.value) {
            localStorage.setItem('userEmail', e.target.value)
            submitOnboardingRequest()
        }
    }

    const submitOnboardingRequest = () => {
        console.log("submitOnboardingRequest")
        onboardingId = localStorage.getItem('onboardingId')
        if (onboardingId) {
            console.log("onboardingId already exists")
            return
        }
        
        companyName = localStorage.getItem('companyName')
        userEmail = localStorage.getItem('userEmail')
        companyType = localStorage.getItem('companyType')
        if (companyName && companyType && userEmail) {
            console.log("Submit Onboarding Request")
            let payload = {
                companyName: companyName,
                userEmail: userEmail,
                companyType: companyType
            }
            console.log(payload);
            axios.post('https://api.registate.net/api/onboard', payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
            }})
            .then(function (response) {
                //Parse the returned json data
                var jsonData = JSON.parse(JSON.stringify(response.data));
                if (jsonData.Status) {
                    console.log("Company registered successfully with id: " + jsonData.data.id);
                    localStorage.setItem('onboardingId', jsonData.data.id);
                }
            })
            .catch(function (error) {
                console.log(error);
            });    
        }
        else {
            console.log("Missing company name, type, or email")
        }
    }

    const selectPackageHandler = (e) => {
        console.log("selectPackageHandler")
        setShowCompanyInfo(true)
        setPackageType(e)
        localStorage.setItem('packageType', e)
        console.log("Sending request to create onboarding")            
    }
    
    useEffect(() => {
        if (dataFetchedRef.current) return;

        console.log("useEffect starting")
        setCompanyType(localStorage.getItem('companyType'))
        setCompanyState(localStorage.getItem('companyState'))

        updatePricing()
        updateCompanyInfo()

        dataFetchedRef.current = true;
    }, [updateCompanyInfo, updatePricing]);

    function formSubmitHandler(event) {
        event.preventDefault()

        console.log('Form submitted')
        let companyContactName = document.getElementById('contactName').value;
        let companyContactEmail = document.getElementById('contactEmail').value;
        let companyContactPhone = document.getElementById('contactPhone').value;
        let companyContactAddress = document.getElementById('contactAddress').value;
        
        onboardingId = localStorage.getItem('onboardingId')
        packageType = localStorage.getItem('packageType')

        let payload = {
            "companyContactName": companyContactName,
            "companyContactEmail": companyContactEmail,
            "companyContactPhone": companyContactPhone,
            "companyContactAddress": companyContactAddress,
            "onBoardId": onboardingId,
            "packageType": packageType
        }
        console.log(payload);

        //Complete Onboarding Order with backend
        axios.post('https://api.registate.net/api/onboard-order', payload, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
        }})
        .then(function (response) {
            //Parse the returned json data
            var jsonData = JSON.parse(JSON.stringify(response.data));
            console.log(jsonData)
            // If the status is true, then redirect to the payment page
            if (jsonData.Status) {
                let stripeUrl = jsonData.data.stripeUrl;
                console.log(stripeUrl)
                window.location.href = stripeUrl;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        <form onSubmit={formSubmitHandler} method="POST" className="space-y-6">
            <div>
            <label htmlFor="name" className="sr-only">
                Company Name
            </label>
            <input
                type="text"
                name="companyName"
                id="companyName"
                onBlur={nameChangeHandler}
                autoComplete="companyName"
                placeholder="Company Name"
                defaultValue={ companyName }
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            </div>
            <Listbox value={selectedState} onChange={stateChangeHandler}>
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
            <div id="companyTypeDiv" className="flex items-center justify-between">
                <legend className="sr-only">Company Type</legend>
                <RadioGroup value={companyType} onChange={typeChangeHandler} className="mt-2">
                    <RadioGroup.Label className="sr-only"> Choose a corporate type </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {companyTypes.map((option) => (
                        <RadioGroup.Option
                        key={option.name}
                        value={option.name}
                        className={({ active, checked }) =>
                            classNames(
                            active ? 'ring-2 ring-offset-2 ring-blue-500' : '',
                            checked
                                ? 'bg-blue-400 border-transparent text-white hover:bg-blue-500'
                                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                            'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                            )
                        }
                        >
                        <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                    </div>
                </RadioGroup>
            </div>
            <div id="userEmailDiv">
            <label htmlFor="email" className="sr-only">
                Email address
            </label>
            <input
                type="text"
                name="userEmail"
                id="userEmail"
                autoComplete="email"
                placeholder="Your Email"
                defaultValue={ userEmail }
                required
                onBlur={emailChangeHandler}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            </div>
            <section
                id="pricing"
            >
                <div id="pricingTableDiv" className="float-center">
                    { showPricing &&  (
                        <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {
                            packagePrices.map((packagePrice, index) => {
                                let item = packageDetails[companyType.toLowerCase()+(index+1)]

                                console.log("packageDetail[" + companyType.toLowerCase()+(index+1) + "]")
                                return (
                                        <div
                                        key={item.id}
                                        className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                                        > 
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                                {item.mostPopular ? (
                                                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-blue-500 py-1.5 px-4 text-sm font-semibold text-white">
                                                    Most popular
                                                    </p>
                                                ) : null}
                                                <p className="mt-4 flex items-baseline text-gray-900">
                                                    <span className="text-5xl font-bold tracking-tight">${packagePrice}</span>
                                                    <span className="ml-1 text-xl font-semibold">{item.frequency}</span>
                                                </p>
                                                <p className="mt-6 text-gray-500">{item.description}</p>
                                                <p className="mt-6 text-gray-800 font-bold">{item.description2}</p>

                                                {/* Feature list */}
                                                <ul className="mt-6 space-y-6">
                                                    {item.features.map((feature) => (
                                                    <li key={feature} className="flex">
                                                        <CheckIcon className="h-6 w-6 flex-shrink-0 text-blue-500" aria-hidden="true" />
                                                        <span className="ml-3 text-gray-500">{feature}</span>
                                                    </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={ selectPackageHandler.bind(this, item.id) }
                                                className={classNames(
                                                    item.mostPopular
                                                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
                                                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                                )}
                                                >
                                                {item.cta}
                                            </button>
                                        </div>
                                        )
                            })
                        }
                        </div>                
                )}
                </div>
            </section>

            <div id="companyInfoDiv" className="float-cente bg-red-300">
                { showCompanyInfo && (
                <div className="overflow-hidden bg-white py-4 px-4 sm:px-6 lg:px-8 lg:py-4">
                    <div className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
                    <div className="relative mx-auto max-w-4xl">
                        <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                        </svg>
                        <svg className="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                        </svg>
                        <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Company Contact Information</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">This is the company contact information where you can physically receive mails.</p>
                        </div>
                        <div className="mt-12">
                            <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1">
                                <input type="text" name="first-name" id="contactName" autoComplete="given-name" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"></input>
                            </div>
                            </div>
                            <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1">
                                <input id="contactEmail" defaultValue={userEmail} name="email" type="email" autoComplete="email" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"></input>
                            </div>
                            </div>
                            <div className="sm:col-span-2" >
                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <input type="text" name="phone-number" id="contactPhone" autoComplete="tel" className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-blue-500 focus:ring-blue-500" placeholder="+1 (555) 987-6543"></input>
                            </div>
                            </div>
                            <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <div className="mt-1">
                                <textarea id="contactAddress" name="address" rows="4" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                            </div>
                            </div>
                            <div className="sm:col-span-2">
                            <button 
                                onClick={formSubmitHandler} 
                                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Review and Pay
                            </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </form>
    )
  }

  export default OnboardingForm