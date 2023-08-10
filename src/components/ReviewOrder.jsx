import React from 'react'
import { Link } from 'react-router-dom'
import i18n from '../i18n'
import tick from '../images/tick.png'


export default function ReviewOrder() {
    let companyType = localStorage.getItem('companyType');
    let companyState = localStorage.getItem('companyState');
    let companyName = localStorage.getItem('companyName');
    const storedPackage = localStorage.getItem('selectedPackage');
    const selectedPackage = storedPackage ? JSON.parse(storedPackage) : null;

    return (
        <div className='flex items-start gap-12'>
            <div className='w-2/5'>
                <div className='pl-10 py-8'>
                    <h1 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>Order Review</h1>
                    <div className='bg-white border rounded-[32px] p-6 my-6'>
                        <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>Company Details</h2>
                        <div className='flex items-center justify-between py-2'>
                            <div className='flex items-center gap-4'>
                                <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>Entity type</p>
                                <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyType}</span>
                            </div>
                            <Link className='font-semibold text-sm leading-6 text-[#1649FF]' to={`/${i18n.language}/company-type`} >
                                Edit
                            </Link>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                            <div className='flex items-center gap-4'>
                                <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>Company Name</p>
                                <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyName}</span>
                            </div>
                            <Link className='font-semibold text-sm leading-6 text-[#1649FF]' to={`/${i18n.language}/company-name`}>
                                Edit
                            </Link>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                            <div className='flex items-center gap-4 '>
                                <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>Filing Juristiction</p>
                                <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyState}</span>
                            </div>
                            <Link className='font-semibold text-sm leading-6 text-[#1649FF]' to={`/${i18n.language}/state`}>
                                Edit
                            </Link>
                        </div>
                    </div>
                    <div className='bg-white border rounded-[32px] p-6 my-6'>
                        {selectedPackage && selectedPackage.map((price, index) => (
                            <>
                                <div className='flex items-center justify-between'>
                                    <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{price.orderPackage}</h2>
                                    <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h2>
                                </div>
                                <div className='block py-6'>
                                    {price.features.map((feature, index) => (
                                        <div className='flex items-center gap-4 py-2'>
                                            <img src={tick} className='w-5 h-5' alt='list' />
                                            <p className='font-semibold text-lg leading-6 text-[#222222]'>{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-3/5'>
                <div className='bg-white p-6 min-h-[600px] relative'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-lg leading-[44px] text-[#222222]'>Order Summary</h2>
                        <h2 className='font-semibold text-lg leading-[44px] text-[#1649FF]'>USD</h2>
                    </div>
                    <div className='pt-6 py-4 border-b border-[#C8C8C8]'>
                        <h4 className='font-semibold text-[15px] leading-6 text-[#545454]'>1 item(s)</h4>
                    </div>
                    <div className='flex items-center justify-between py-4'>
                        {selectedPackage && selectedPackage.map((price, index) => (
                            <>
                                <div>
                                    <h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>One time payment</h1>
                                    <p className='font-semibold text-[16px] leading-6 text-[#222222]'>{price.orderPackage}</p>
                                </div>
                                <div><h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                            </>
                        ))}
                    </div>
                    <div className='absolute bottom-5 w-full'>
                        <div>
                            <button className='font-semibold text-[16px] leading-6 text-[#1649FF]'>Add Coupon Code</button>
                        </div>
                        <div className='flex items-center justify-between py-4'>

                            <div>
                                <h1 className='font-semibold text-lg leading-6 text-[#222222]'>Today's Total</h1>
                            </div>
                            {selectedPackage && selectedPackage.map((price, index) => (
                                <div><h1 className='font-semibold text-lg leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
