'use client'

import React from 'react'
import tick from '@/assets/images/tick.png'
import Image from 'next/image'

/**
 * Features components 
 * @type {function} 
 * @param {object} selectedPackage - Selected package object
 * @type {client}
 * @returns {JSX.Element} 
*/

const Features = ({selectedPackage}) => {
    return (
        <div className='bg-white border rounded-[32px] p-6 my-6'>
            {selectedPackage && selectedPackage.map((price, index) => (
                <div key={index}>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold capitalize text-[24px] leading-[44px] text-[#222222]'>{price.type}</h2>
                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{'$' + (price.price)}</h2>
                    </div>
                    <div className='block py-6'>
                        {price.features && price.features.map((feature, innerIndex) => (
                            <div key={innerIndex} className='flex items-center gap-4 py-2'>
                                <Image src={tick} className='w-5 h-5' alt='list' />
                                <p className='font-semibold text-lg leading-6 text-[#222222]'>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Features