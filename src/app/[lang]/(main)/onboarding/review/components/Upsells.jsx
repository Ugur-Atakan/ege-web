'use client'

import React from 'react'
import tick from '@/assets/images/tick.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { readCookie, submitCookie } from '@/app/lib/session/clientActions'

const Upsells = ({ upsells }) => {
    const router = useRouter();

    const removeUpsell = async (upsell) => {
        const cookie = await readCookie();
        let upsellIDs = cookie.upsellIDs ? [...cookie.upsellIDs] : [];
        
        // Remove upsell from cookie
        const updatedIDs = upsellIDs.filter(product =>
            !(product.name === upsell.name &&
              product.price === upsell.price &&
              product.description === upsell.description)
        );

        const cke = { ...cookie, upsellIDs: updatedIDs };
        submitCookie(cke);
        router.refresh();
        if (typeof window !== "undefined" && window)
        {
            window.location.href = window.location.href;
        }
    };

    return upsells.map((upsell, index) => (
            <div key={index} className='bg-white border rounded-[32px] p-6 my-6'>
                <div className='flex items-center justify-between'>
                        <h2 className='font-semibold capitalize text-[24px] leading-[44px] text-[#222222]'> {upsell.name}</h2>
                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{'$ ' + (upsell.price)}</h2>
                </div>
                <div className='flex items-center justify-between mt-5'>
                    <div className='flex items-center mt-4'>
                        <Image src={tick} className='w-5 h-5' alt='list' />
                        <p className='text-[#222222] font-medium text-[16px] leading-[24px] ml-3'>
                            {upsell.description}
                        </p>
                    </div>
                    <button
                        onClick={() => removeUpsell(upsell)}
                        className='bg-[#1649FF] text-white font-semibold text-[16px] leading-[24px] px-4 py-2 rounded-[32px]'
                    >
                        Remove
                    </button>
                </div>
            </div>
        ))
}

export default Upsells