import React from 'react';
import { whitelogo } from '../../../../../images'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex justify-center pt-6">
            <div className="w-[1328px] h-10 relative">
                <div className="w-[116px] h-[34px] pb-px left-0 top-[3px] absolute justify-center items-center inline-flex">
                    <Image className="w-[116px] h-[33px]" src={whitelogo} alt="white-logo" />
                </div>
                <div className="left-[487px] top-[10px] absolute justify-start items-start gap-5 inline-flex">
                    <div className="text-white text-sm font-semibold leading-tight">Pricing</div>
                    <div className="text-white text-sm font-semibold leading-tight">Products</div>
                    <div className="text-white text-sm font-semibold leading-tight">Resources and support</div>
                    <div className="text-white text-sm font-semibold leading-tight">Blog</div>
                </div>
                <div className="left-[1309px] top-[9px] absolute justify-center items-center gap-5 inline-flex">
                    <div className="text-white text-sm font-semibold leading-tight">EN</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
