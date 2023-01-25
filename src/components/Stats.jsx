import {DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon} from '@heroicons/react/24/outline'
export default function Stats() {
    return (
      <div className="bg-gradient-to-r from-[#004B9D] to-[#001E3F]">
        <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Features of Post Incorporation
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Set-up Your Business</dt>
              <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><DocumentCheckIcon className='w-12'/></dd>
              <dt className='order-3 pt-4 text-indigo-200'>Incorporation is only the first step! Make sure the business setup is completed properly.</dt>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Ownership</dt>
              <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><CursorArrowRippleIcon className='w-12'/></dd>
              <dt className='order-3 pt-4 text-indigo-200'>Issue stock, and truly own your company!</dt>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Be Compliant</dt>
              <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><NewspaperIcon className='w-12'/></dd>
              <dt className='order-3 pt-4 text-indigo-200'>Ensure your company is compliant according to Delaware laws.</dt>
            </div>
          </dl>
        </div>
      </div>
    )
  }