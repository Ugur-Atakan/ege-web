import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
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

export default function StateListBox() {
  const [selected, setSelected] = useState(states[7])

  const handleChange = (e) => {
    setSelected(e)
    localStorage.setItem('companyState', e.name)
  }

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span id="companyState" className="block truncate">{selected.name}</span>
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
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
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
                              active ? 'text-white' : 'text-indigo-600',
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
  )
}
