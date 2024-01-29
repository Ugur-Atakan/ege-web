'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

const OpenCompany = ({ lang }) => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center h-full mt-10'>
            <h3 className="text-[20px] font-semibold leading-6 text-gray-900">No Companies Found</h3>
        
            <div className="flex flex-col items-center px-4 py-5 sm:p-6 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[100px] h-[100px] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
        
            <button 
                className='bg-[#0B2347] hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'
                onClick={() => router.push(`/${lang}/dashboard/onboarding`)}
            >
                Create Company
            </button>
            </div>
        </div>
    );      
};

export default OpenCompany;
