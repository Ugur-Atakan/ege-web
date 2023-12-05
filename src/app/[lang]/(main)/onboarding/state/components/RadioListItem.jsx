'use client'

import React from 'react'

const RadioListItem = ({ id, companyType, companyState, state, title, text, checked, onClick }) => {
  return (
    <li onClick={onClick} className={checked === true ? 'order-1' : 'order-2'}>
      <input type="radio" id={id} name="hosting" value={id} className="hidden peer" required />
      <label htmlFor={id} className={`relative inline-flex items-start justify-between w-full p-5 bg-white border border-[#C8C8C8] rounded-[20px] cursor-pointer ${companyState === state ? 'border-blue-600 border-[4px]' : ''}`}>   
        <div className="block">
          <div className="w-full text-[22px] font-semibold leading-[26px] text-[#222222]">{title}</div>
          <div className="w-[75%] pt-3 font-semibold text-lg leading-[24px] text-[#222222]">{text}</div>
        </div>

        {companyType === 'LLC' && state === 'Wyoming' && (
          <div className="absolute top-[-1rem] right-[1rem] bg-[#1649FF] text-white py-2 px-4 rounded-[20px]">
            Recommended for LLC
          </div>
        )}

        {companyType === 'Corporation' && state === 'Delaware' && (
          <div className="absolute top-[-1rem] right-[1rem] bg-[#1649FF] text-white py-2 px-4 rounded-[20px]">
            Recommended for Corporation
          </div>
        )}
  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"   className={`w-24 md:w-12 mt-4 ml-3 peer" ${companyState === state && 'bg-blue-600 rounded-full border-2 border-white'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </label>
    </li>
  )
}

export default RadioListItem