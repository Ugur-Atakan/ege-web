import HeroForm from './HeroForm'

import {
    BuildingOfficeIcon,
    EnvelopeOpenIcon,
    UserIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline'


const menu1 = [
    {
        name: 'Form Your Company',
        description: 'Turning your idea into business',
        href: '/onboarding',
        icon: BuildingOfficeIcon,
      },
      {
        name: 'Registered Agent',
        description: 'Secure registered agent service online',
        href: '/registered-agent',
        icon: UserIcon,
      },
      {
          name: 'Virtual MailBox',
          description: 'Peace of minde mail processing',
          href: '/virtual-mailbox',
          icon: EnvelopeOpenIcon,
      },
      {
        name: 'Apostille',
        description: 'Document for use in another country',
        href: '/apostille',
        icon: DocumentDuplicateIcon,
      }
]

const navigation = [
  { name: 'Start Your Business', href: '#' },
  { name: 'Manage Your Business', href: '#' },
  { name: 'International Services', href: '#' },
  { name: 'Blog', href: '#' },
]

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-800">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Start and Manage Your Business in US With <span className="text-indigo-400">Registate</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Let us be your lifetime partners in maintaining and achieving your business goals. We are here to help you with all your business needs.
                  </p>

                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-8 sm:px-10">
                    <div className="mt-6">
                        <HeroForm />
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Terms
                      </a>
                      ,{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Data Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="font-medium text-gray-900 hover:underline">
                        Cookies Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero