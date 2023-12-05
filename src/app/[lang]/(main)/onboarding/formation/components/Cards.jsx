import React from 'react'
import { bishopwhite, queencolor, kingblack } from '@/assets/images'
import Image from 'next/image'

const Cards = ({ packagePrices, handlePackageSelection, selectedPackageIndex, titles}) => {
  return (
    <div className={packagePrices.length < 3 ? 'grid md:grid-cols-2 gap-5 py-12' : 'grid md:grid-cols-3 gap-5 py-12'}>
        {packagePrices && packagePrices.map((value, index) => (
        <div
            key={index}
            className={`flex flex-col gap-5 p-12 rounded-[20px] h-[35rem] overflow-hidden cursor-pointer ${index === selectedPackageIndex ? '!border-[3px] border-[#9EE248]' : ''
            } ${index === 0
                ? 'border border-[#9EE248] hover:bg-[#9EE248]'
                : index === 1
                ? 'bg-[#1649FF] hover:border-[#9EE248] hover:border'
                : index === 2
                    ? 'border bg-[#222222] hover:border-[#9EE248] hover:border' : ''
            }`}
            onClick={() => handlePackageSelection(value, index)}
        >
            <h2 className={index === 0 ? 'font-semibold text-[40px] leading-[44px] text-[#222222] capitalize' : 'capitalize font-semibold text-[40px] leading-[44px] text-white'}>{value.type}</h2> 
            <p className={index === 0 ? 'text-lg font-semibold leading-6 text-[#222222]' : 'text-lg font-semibold leading-6 text-white'}>
                {titles[index]}
            </p>  
            <p className={index === 0 ? 'font-semibold text-[28px] leading-8 text-[#222222]' : 'font-semibold text-[28px] leading-8 text-white'}>{'$' + (value.price)}</p>
            <Image src={index === 0 && bishopwhite || index === 1 && queencolor || index === 2 && kingblack} alt='llc package' />
        </div>
        ))}
    </div>
  );
}

export default Cards
