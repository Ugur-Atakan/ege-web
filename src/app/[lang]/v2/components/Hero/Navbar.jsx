import React from 'react';
import { whitelogo } from '../../../../../images'
import Image from 'next/image'
import NavItem from './NavItem'

const Navbar = () => {
    return (
      <nav className="flex justify-center py-4">
        <div className="max-w-[1328px] h-10 w-full border-b border-[#C8C8C8] flex items-center justify-between">
            <div className="flex items-center">
            <div className="mr-5">
                <Image className="w-[116px] h-[33px]" src={whitelogo} alt="white-logo" />
            </div>
            {/* <div className="flex gap-5 flex-grow justify-center">
                <NavItem text="Pricing" />
                <NavItem text="Products" />
                <NavItem text="Resources and support" />
                <NavItem text="Blog" />
            </div> */}
            </div>
            <div className="flex items-center">
            <div className="text-white text-sm font-semibold leading-tight mr-5">EN</div>
            </div>
        </div>
      </nav>
    );
}

export default Navbar;
