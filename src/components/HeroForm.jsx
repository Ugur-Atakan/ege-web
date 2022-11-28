import React, { Fragment, useState } from 'react'

import axios from "axios";
import { Listbox, Transition, RadioGroup } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const companyTypes = [
  { id: 'llc', name: 'LLC' },
  { id: 'corp', name: 'Corporation' }
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HeroForm () {
  let [companyName, setCompanyName] = useState(localStorage.getItem('companyName'))
  let [companyState, setCompanyState] = useState(localStorage.getItem('companyState'))
  let [companyType, setCompanyType] = useState(localStorage.getItem('companyType'))
  let [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'))
  let [selectedState, setSelectedState] = useState(states[7])
  let [selectedType, setSelectedType] = useState(companyTypes[1])

  const handleCompanyNameChange = (e) => {
    console.log("handleCompanyNameChange", e.target.value)
    console.log("e", e)
    setCompanyName(e.target.value)
    localStorage.setItem('companyName', e.target.value)
  }

  const handleCompanyTypeChange = (e) => {
    console.log("handleCompanyTypeChange", e.name)
    setSelectedType(companyTypes.find(type => type.name === e.name))
    localStorage.setItem('companyType', e.name)
    setCompanyType(e.name)
  }

  const handleCompanyStateChange = (e) => {
    console.log("handleCompanyStateChange", e.name)
    setCompanyState(e.name)
    localStorage.setItem('companyState', e.name)
    setSelectedState(states.find(state => state.name === e.name))
  }

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value)
    localStorage.setItem('userEmail', event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')
    let cName = document.getElementById('companyName').value
    let cState = document.getElementById('companyState').innerText
    let cType = document.getElementById('companyType').innerText
    let uEmail = document.getElementById('userEmail').value

    localStorage.setItem('companyName', cName)
    localStorage.setItem('companyState', cState)
    localStorage.setItem('companyType', cType)
    localStorage.setItem('userEmail', uEmail)

    let payload = {
      companyName: cName,
      userEmail: uEmail,
      companyType: cType
    }
    console.log(payload);

    // Onboard company
    axios.post('https://api.registate.net/api/onboard', payload, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer D27F1E98-A574-4BC6-9090-033A85C4A0F6'
    }})
    .then(function (response) {
      var jsonData = JSON.parse(JSON.stringify(response.data));
      if (jsonData.Status) {
          console.log("Company onboarded successfully with id: " + jsonData.data.id);
          localStorage.setItem('onboardingId', jsonData.data.id);
          window.location.href = '/onboarding';
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  return (
    <div className="bg-white">
      <form onSubmit={formSubmit} method="POST" className="space-y-4">
        <div id="companyNameDiv" className="space-y-1">
            <label htmlFor="name" className="sr-only">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              onBlur={handleCompanyNameChange}
              id="companyName"
              autoComplete="companyName"
              placeholder="Company Name"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
        </div>
        <div className="grid grid-cols-2 mx-auto">
          <div id="companyStateDiv" className="flex flex-col pr-1">
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
          <div id="companyTypeDiv" className="flex flex-col pl-1">
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
        <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              autoComplete="email"
              placeholder="Email Address"
              onBlur={handleUserEmailChange}
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-xl font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
             Get Started
            </button>
          </div>
        </form>
    </div>
  );
}

export default HeroForm;