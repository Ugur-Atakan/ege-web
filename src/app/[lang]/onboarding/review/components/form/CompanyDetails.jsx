'use client'

import React from 'react'
import { useTranslation } from '@/i18n/client'
import { isNumber } from '../utils/util'

const CompanyDetails = (props) => {
    const { lang, setCity ,setCountry, country,setStreet, zip, setZip, countries, states } = props;
    const { t } = useTranslation(lang);

    return ( 
        <div className='bg-white border rounded-[32px] p-6 my-6'>
            <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{t("review_company_details_title")}</h2>
            <p className='font-semibold text-[16px] leading-6 text-[#222222]'>{t("review_company_details_description")}</p>
            <div className='py-4'>
                <div className='flex item-center gap-4 md:gap-4 pb-4'>           
                        <div className="w-full md:w-1/2">
                            <label htmlFor="country" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input5")}
                            </label>
                            
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option>{t("review_information_input5_placeholder")}</option>
                                {countries.map((country, index) => (
                                    <option
                                        key={index}
                                        value={country.name}
                                        id={country.id}
                                        selected={country.value}
                                    >
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full md:w-1/2">
                            <label htmlFor="region" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input6")}
                            </label>

                            <select
                                name="region"
                                autoComplete="address-level1"
                                className="mt-1 block w-full  rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            >
                                <option value=""> {country === 'United States' ? 'Select State' : 'No State'}</option>
                                {country === 'United States' &&
                                    states.map((state, index) => (
                                        <option
                                            key={index}
                                            value={state.state}  
                                        >
                                            {state.state}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-4 pb-4'>
                        <div className="w-full md:w-2/4" >
                            <label htmlFor="postalcode" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input7")}
                            </label>
                            <input
                                type="number"
                                name="postalcode"
                                id="postalcode"
                                autoComplete="postalcode"
                                required
                                value={zip}
                                placeholder='12345'
                                onChange={(e) =>  setZip(e.target.value) }
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>
                        <div className="w-full md:w-2/4">
                            <label htmlFor="city" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input8")}
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                required
                                placeholder='Hogwarts'
                                onChange={(e) => setCity(e.target.value)}
                                autoComplete="address-level2"
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="streetaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                            {t("review_information_input9")}
                        </label>
                        <input
                            type="text"
                            name="streetaddress"
                            id="streetaddress"
                            placeholder='Gryffindor Tower, Males Dormitory, 5th Floor, Room 5A, Hogwarts School of Witchcraft and Wizardry, Scotland, Great Britain, Earth, Solar System, Milky Way Galaxy, Universe'
                            onChange={(e) => setStreet(e.target.value)}
                            required
                            autoComplete="street-address"
                            className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                        />
                    </div>
                </div>
        </div>
  );
};

export default CompanyDetails
