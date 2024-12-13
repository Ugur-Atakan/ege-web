'use client'

// This file is created to render the layout of the dashboard.
// The dashboard template is copy paste from here: https://tailwindui.com/components/application-ui/application-shells/sidebar#component-5548358cb34897c6b28551f2ad885eec
// Template name: Dark sidebar with header

import React, { Fragment }  from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { usePathname, useRouter } from 'next/navigation'
import registateLogo from '@/assets/images/logos/registate-white-logo.png'
import { teams, getSidebarNav } from '../util/const'
import CompanyNav from './CompanyNav'
import { useSession } from 'next-auth/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = ({ lang, sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname()
  const router = useRouter()
  const { data, update } = useSession();

  if (data === undefined || data === null) {
    router.push(`/${lang}/dashboard/login`);
  } 

  const navigation = getSidebarNav(pathname, data.user.level);
  const [showSubNav, setShowSubNav] = React.useState(false);

  return (
    <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
            
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#0b2347] px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      {data.user.level !== 'admin' && <CompanyNav lang={lang} />}
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <button
                                  onClick={() => {}}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'uppercase group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {item.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#0b2347] px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              {data.user.level !== 'admin' ? 
                <CompanyNav lang={lang} /> : 
                <Image 
                  src={registateLogo}
                  alt="Registate Logo"
                  width={120}
                  className='cursor-pointer my-10 pt-10  mx-auto'
                  height={90}
                  onClick={() => router.push(`/${lang}/dashboard`)}
                />
              }
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <div
                          onClick={() => router.push(item.href)}
                          className={classNames(
                            item.current
                              ? 'bg-white/10 text-white'
                              : 'text-white hover:text-white hover:bg-white/10',
                            'cursor-pointer group flex flex-col gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <div className='flex gap-x-3 flex-row'>
                              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                              {item.name}
                              {item.subNav ? ( 
                                  <React.Fragment>
                                      <button onClick={() => setShowSubNav(!showSubNav) }>
                                          <svg className="text-gray-400 ml-28 h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                          </svg>
                                      </button>
                                  </React.Fragment>
                              ) : null}
                            </div>
                          </div>

                          {showSubNav && item.subNav ? (
                            <div className='mt-1'>
                            {item.subNav.map((subItem) => (
                              <div key={subItem.name} className="flex flex-col">
                                <div
                                  onClick={() => router.push(subItem.href)}
                                  className={classNames(
                                    subItem.current
                                      ? 'bg-white/10 text-white'
                                      : 'text-white hover:text-white hover:bg-white/10',
                                    'cursor-pointer group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <subItem.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                  {subItem.name}
                                </div>
                              </div>
                            ))}
                            </div> 
                          ) : null}
                      </li>
                    ))}
                  </ul>
                </li>
               
                <li className="mt-auto">
                  <Link
                    href={`/${lang}/dashboard/settings`}
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </div>
  );
};

export default Sidebar
