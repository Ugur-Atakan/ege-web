'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

// 0,2,4,6 for Reccurring Products
// 1,3,5,7 for One Time
const getSolutions = (lang) => {
  const sol = [
    { 
      name: 'Compliance Reminder', 
      description: 'Get compliance reminders ', 
      href: `/${lang}/product/compliance-reminder`, 
      icon: ChartPieIcon 
    },
    { 
      name: 'Foreign Qualification', 
      description: 'Foreign Qualification', 
      href: `/${lang}/product/foreign-qualification`,
      icon: ChartPieIcon 
    },
    { 
      name: 'Registered Agent', 
      description: 'Get a registered agent', 
      href: `/${lang}/product/registered-agent`,
      icon: ChartPieIcon 
    },
    {
      name: 'Certificate of Good Standing',
      description: 'Certificate of Good Standing',
      href: `/${lang}/product/certificate-of-good-standing`,
      icon: SquaresPlusIcon,
    },
    {
      name: 'Virtual Mailbox',
      description: 'Get a virtual mailbox',
      href: `/${lang}/product/virtual-mailbox`,
      icon: CursorArrowRaysIcon,
    },
    { name: 'EIN', description: 'Get US EIN', href: '#', icon: ArrowPathIcon },
    { name: 'Office Address', description: "Get an office address in US", href: '#', icon: FingerPrintIcon },
  ];
  return sol;
};


export default function HoverMenu({ lang, setShowMenu, showMenu }) {
  const solutions = getSolutions(lang);

  return (
    <Popover 
      className="relative"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <Transition
        show={showMenu}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
            <div className='grid grid-cols-2'>
              <h2 className="ml-[4.5rem] text-md uppercase font-medium text-gray-900 pt-8 px-4">Recurring Products</h2>
              <h2 className="ml-[4.5rem] uppercase text-md font-medium text-gray-900 pt-8 px-4">One Time</h2>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-3 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}