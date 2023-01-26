import {ShieldCheckIcon, CursorArrowRippleIcon, NewspaperIcon} from '@heroicons/react/24/outline'
function WhyStartACorporation() {
  return (
    <div className="bg-gradient-to-r from-[#004B9D] to-[#001E3F]">
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Why Start A Corporation
        </h2>
      </div>
      <dl className="mt-16 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
        <div className="flex flex-col">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Limited Liability</dt>
          <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><ShieldCheckIcon className='w-12'/></dd>
          <dt className='order-3 pt-4 text-indigo-200'>Protect your personal life and assets from any future unexpected future business liabilities.</dt>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Transferability Of Ownership</dt>
          <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><CursorArrowRippleIcon className='w-12'/></dd>
          <dt className='order-3 pt-4 text-indigo-200'>Easily transfer of of ownership of your company and buy other assets and businesses.</dt>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Raising Capital</dt>
          <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><NewspaperIcon className='w-12'/></dd>
          <dt className='order-3 pt-4 text-indigo-200'>Through sale of stock and other investment methods, capital can be raised more easily.</dt>
        </div>
      </dl>
    </div>
    <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Why Start An LLC
        </h2>
      </div>
      <dl className="mt-16 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
        <div className="flex flex-col">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Protect yourself</dt>
          <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><ShieldCheckIcon className='w-12'/></dd>
          <dt className='order-3 pt-4 text-indigo-200'>Ensure you're kept safe from potential and unexpected business liabilities.</dt>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Make Things Easier</dt>
          <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><CursorArrowRippleIcon className='w-12'/></dd>
          <dt className='order-3 pt-4 text-indigo-200'>LLCs have simpler record-keeping rules. Corporations are stricter.</dt>
        </div>
        <div className="mt-10 flex flex-col sm:mt-0">
          <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">Save on taxes</dt>
          <dd className="flex justify-center order-1 font-bold tracking-tight text-white"><NewspaperIcon className='w-12'/></dd>
          <dt className='order-3 pt-4 text-indigo-200'>You get to decide how you're taxed—as an LLC or a corporation—for potential savings.</dt>
        </div>
      </dl>
    </div>
  </div>
  )
}

export default WhyStartACorporation