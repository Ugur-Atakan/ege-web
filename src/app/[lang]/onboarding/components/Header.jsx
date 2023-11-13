import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const Header = ({ heading }) => {
  return (
    <div className="mx-auto p-6 lg:px-8 bg-white">
        <Link href='/' className='flex items-center gap-2' >
            <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
            <span className='text-[#1649FF] md:text-lg font-semibold'>{heading}</span>
        </Link>
    </div>
  );
}

export default Header;