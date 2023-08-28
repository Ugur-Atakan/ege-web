import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../i18n";

export default function OnboardingForm() {
  const [companyName, setCompanyName] = useState('');
  const [abbreviation, setAbbreviation] = useState('');
  const [abbreviationOptions, setAbbreviationOptions] = useState(['Inc','Incorporated', 'Co.','Corp','Corporation','Limited','Ltd.']);
  let companyType = localStorage.getItem('companyType');
  let companyState = localStorage.getItem('companyState');
  localStorage.setItem('companyName', companyName);

  const handleAbbreviationChange = (name) => {
    setAbbreviation(name);
  }

  const onchangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  }

  useEffect(()=> {
    if (!(companyType && companyState)) {
      window.location.href = `/${i18n.language}/state`;
    }
  },[companyType, companyState])



  return (
    <div className='bg-white'>
    <div className="mx-auto p-6 lg:px-8">
      <Link className='flex items-center gap-2' to={`/${i18n.language}/state`}>
        <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
        <span className='text-[#1649FF] text-lg font-semibold'>Back</span>
      </Link>
    </div>
    <div className='mx-auto max-w-md px-8 md:px-0'>
      <div className='text-left md:text-center'>
        <h1 className='font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]'>What great idea do you have in mind?</h1>
      </div>
      <div className='mx-auto max-w-xl py-6 md:py-12'>
        <ul className="grid w-full gap-6 md:grid-cols-1">
          <li>
            <label className="font-semibold text-lg leading-6 text-[#222222]">Company Name</label>
           <input
            className="border border-[#C8C8C8] rounded-[20px] w-full p-4 my-2"
            type='text'
            onChange={onchangeCompanyName}
           />
          </li>
          <li>
          <label className="font-semibold text-lg leading-6 text-[#222222]">Abbreviation</label>
          <select
                id="abbreviation"
                name="abbreviation"
                value={abbreviation}
                className="font-semibold border-[#C8C8C8] text-[#8A8A8A] w-full my-2 rounded-[20px] p-4 focus:border-[4px]"
                onChange={(e) => handleAbbreviationChange(e.target.value)}
              >
                {abbreviationOptions.map((abb, index) => (
                  <option
                    key={abb.index}
                    value={abb}
                  >
                    {abb}
                  </option>
                ))}
              </select>
          </li>
          <Link to={`/${i18n.language}/formation`} className='w-full bg-[#1649FF] text-white text-center py-4 rounded-[20px] font-semibold text-[22px] leading-[26px] cursor-pointer'>
            <button >
              Continue
            </button>
          </Link>
        </ul>
      </div>
    </div>
  </div>
  )
}
