import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="lg:px-24 lg:py-28 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                {'notfound_title'}
              </h1>
              <p className="my-2 text-gray-800 pb-6">{'notfound_desc'}</p>
              <Link
                href={`/`}
                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
              >
                {'notfound_button'}
              </Link>
            </div>
          </div>
          <div>
            <Image src="https://i.ibb.co/G9DC8S0/404-2.png" width={1200} height={800} />
          </div>
        </div>
      </div>
      <div>
        <Image src="https://i.ibb.co/ck1SGFJ/Group.png" width={1200} height={800} />
      </div>
    </div>
  )
}
