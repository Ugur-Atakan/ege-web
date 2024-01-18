/* eslint-disable */
'use client'

import React, { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { HomeIcon } from '@heroicons/react/24/outline'

import { useSession } from 'next-auth/react'
import AddCompany from './AddCompany'
import { useRouter, usePathname } from 'next/navigation'

const CompanyNav = ({ lang }) => {
  const [companies, setCompanies] = useState(null);
  const [companyName, setCompanyName] = useState('Your companies'); 
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useSession(); 

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await fetch(`/api/dashboard/workspace/get-companies?email=${data.user.email}`);
        const jsonData = await res.json();
        setCompanies(jsonData);

        if (jsonData && jsonData.length > 0) {
          const company = jsonData.find(item => item._id === pathname.split('/')[3]);
          if (company) {
            setCompanyName(company.companyName);
          }
        }
      } catch (err) {
        console.log(err);
        setCompanies(null);
      }
    }
    getCompanies();
  }, [pathname]);

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
        <span className='uppercase text-[14px]'>{companyName}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-24 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
          <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <button 
              onClick={() => router.push(`/${lang}/dashboard`)}
              className="flex flex-row rounded-full bg-[#0b2347] p-1 px-8 text-white hover:bg-gray-500"
            >
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2">Home</span>
            </button>
            {companies && companies.map((item, index) => (
              <button 
                onClick={() => { 
                  router.push(`/${lang}/dashboard/${item._id}`) 
                  router.refresh();
                }}
                key={index} 
                className="block p-2 hover:text-gray-500"
              >
                {item.companyName}
              </button>
            ))}
            
            {/* <AddCompany lang={lang} /> */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default CompanyNav;
