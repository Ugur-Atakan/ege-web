import { StarIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react'
import HeroImage from '../images/hero.png'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../images/registatelogo.svg'


const navigation = [
  { name: 'Pricing', href: 'pricing' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
]

function TypingHeader() {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    'Incorporator',
    'Legal Clerk',
    'Notary Public',
    'Paralegal',
    'Startup Advisor',
    'Registered Agent',
    'Office Admin',
    'Bookeeper',
    'Consultant',
    'Punching Bag',
    'Best Friend'

  ]

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(messages[messageIndex].substring(0, i));
      i++;
      if (i > messages[messageIndex].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText('');
          setMessageIndex((messageIndex + 1) % messages.length);
        }, 1000);
      }
    }, 100);
  }, [messageIndex]);

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">We are your</span>
      </h1>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-blue-600 xl:inline">{text}</span>
        <span className="text-yellow-500">|</span>
      </h1>
    </>
  );
}

export default function Hero() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 96);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
},[])
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Popover className='fixed left-0 top-0 bg-white w-full'>
              <div className="mx-auto max-w-7xl  p-6">
                <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                  <div className='flex items-center'>
                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                      <div className="flex w-full items-center justify-between md:w-auto">
                        <a href="#.">
                          <span className="sr-only">Your Company</span>
                          <img
                            alt="Your Company"
                            className="h-8 w-auto sm:h-10"
                            src={Logo}
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className=''>
                    <a
                      href="/pricing/form-my-company"
                      className={isScroll ? "shadow rounded-md border border-transparent font-medium text-white bg-blue-600 px-4 py-2 text-md transition-colors duration-1000" : "shadow rounded-md border border-blue-600 font-medium text-blue-600 px-4 py-2 text-md transition-colors duration-1000"}
                    >
                      Form My Company
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={Logo}
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <div className="sm:text-center lg:text-center pt-12">
                <TypingHeader />
                <p className="mt-5 mb-5 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-2xl lg:mx-0">
                  Effortlessly start and manage your company in any US state from anywhere in the world with our comprehensive all-in-one business platform
                </p>
                <a
                  href="/pricing/form-my-company"
                  className="shadow flex w-fit rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-2xl mx-auto mt-5"
                >
                  Form My Company
                </a>
                <div className="inline-flex items-center divide-x divide-gray-300 mx-auto">
                  <div className="flex flex-shrink-0 pr-5">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">Rated 5 stars</span> by over{' '}
                    <span className="font-medium text-blue-600">100+ happy customers</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
