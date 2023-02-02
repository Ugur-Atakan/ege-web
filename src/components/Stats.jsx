import { DocumentCheckIcon, CursorArrowRippleIcon, NewspaperIcon } from '@heroicons/react/24/outline'
export default function Stats(props) {
  return (
    <div className="bg-gradient-to-r from-[#004B9D] to-[#001E3F]">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            {props.desc}
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">{props.icontitle1}</dt>
            <dd className="flex justify-center order-1 font-bold tracking-tight text-white">{props.icon1}</dd>
            <dt className='order-3 pt-4 text-indigo-200'>{props.icondesc1}</dt>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">{props.icontitle2}</dt>
            <dd className="flex justify-center order-1 font-bold tracking-tight text-white">{props.icon2}</dd>
            <dt className='order-3 pt-4 text-indigo-200'>{props.icondesc2}</dt>
          </div>
           <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-white">{props.icontitle3}</dt>
              <dd className="flex justify-center order-1 font-bold tracking-tight text-white">{props.icon3}</dd>
              <dt className='order-3 pt-4 text-indigo-200'>{props.icondesc3}</dt>
            </div>
        </dl>
      </div>
    </div>
  )
}