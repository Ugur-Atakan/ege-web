import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import cover from './img/cover-1.jpg'
import Image from 'next/image'

const icons = { 
  CloudArrowUpIcon: CloudArrowUpIcon,
  LockClosedIcon: LockClosedIcon,
  ServerIcon: ServerIcon,
}

const HIWNew = ({ features}) => {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it Works</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                It is very easy to buy any product you want through our simplified process. Just follow the steps below and you will be done in no time.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => {
                  const Icon = icons[feature.icon];  // Assign the correct icon for each feature
                  return (
                    <div key={feature.id} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {Icon && <Icon className="absolute left-1 top-1 h-6 w-6 text-black" aria-hidden="true" />}
                      <h2 className='text-3xl'>{feature.name} </h2>
                    </dt>{' '}
                    <dd className="block text-justify">{feature.description}</dd>
                  </div>
                 )
                })}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={cover}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HIWNew