'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Card = ({ id, title, description, lang }) => {
  const router = useRouter();

  return (
    <div 
        onClick={() => router.push(`/${lang}/dashboard/company/${id}`)}
        className="hover:scale-105 cursor-pointer max-w-sm mx-auto my-2 p-6 bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="sm:flex sm:items-center px-6 py-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>

        <div className="mt-4 sm:mt-0 sm:ml-4">
          <h2 className="uppercase  text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description + ' '} Package </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
