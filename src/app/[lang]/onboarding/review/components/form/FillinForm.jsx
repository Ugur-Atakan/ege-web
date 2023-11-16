'use client'

import { useTranslation } from '@/i18n/client'
import { isNumber } from '../utils/util'
import Image from 'next/image'
import CompanyDetails from './CompanyDetails'
import ReactSelect, { components } from 'react-select'


const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '20px',
      borderColor: '#C8C8C8',
      // Adjust these as necessary
      padding: '4px 8px',
      minWidth: '200px', // Make sure this is enough to accommodate the placeholder text
    }),
    placeholder: (provided) => ({
      ...provided,
      whiteSpace: 'nowrap',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '90%', // Prevents the text from overflowing the width of the select box
    }),
    // ... other styles
};

const CustomOption = props => (
    <components.Option {...props}>
      <Image
        src={props.data.flagURL}
        width={20}
        height={20}
        style={{ width: '20px', height: '20px', marginRight: '10px', display: 'inline-block'}}
        alt={props.data.iso}
      />
      {props.data.label}
    </components.Option>
);

const FillinForm = (params) => {
    const { lang, zip, setCity ,setCountry, setLastName, setName, country, countryCodes,
            setEmail, setStreet, setZip, setPhone, countries, states, setCountryCode, phone
    } = params;
    
    const options = countryCodes.map(country => ({
        value: country.code,
        label: `+${country.code}`,
        flagURL: country.flagURL
    }));
    
    const handleChange = selectedOption => {
        setCountryCode(selectedOption.value);
    };
      
    const { t } = useTranslation(lang);

    return (
        <div className='py-8 px-4 md:pl-10 md:py-8'>
            <h2 className='font-semibold text-[40px] leading-[44px] text-[#222222]'>{t("review_information")}</h2>
            
            <div className='bg-white border rounded-[32px] p-6 my-6'>
                <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>Account Owner</h2>
                <p className='font-bold text-[16px] leading-6 text-[#222222]'>{t("review_company_details_description")}</p>
                <div className='py-4'>
                    <div className='flex item-center gap-4 md:gap-4 pb-4'>
                        <div className="w-1/2">
                            <label htmlFor="firstname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input1")}
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                autoComplete="given-name"
                                required
                                placeholder='Harry'
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>

                        <div className="w-1/2">
                            <label htmlFor="lastname" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input2")}
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                autoComplete="family-name"
                                placeholder='Potter'
                                required
                                onChange={(e) => setLastName(e.target.value)}
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>
                    </div>
                    <div className='flex item-center gap-4 md:gap-4 pb-4'>
                        <div className="w-full">
                            <label htmlFor="emailaddress" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input3")}
                            </label>
                            <input
                                type="text"
                                name="emailaddress"
                                id="emailaddress"
                                placeholder='harrypotter@hogwarts.com'
                                autoComplete="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Phone number */}
                    <div className='flex items-center justify-center gap-4 pb-4'>
                        <div className="w-full md:w-1/3" >
                            <label htmlFor="countryCode" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                Country Code
                            </label>
                            <ReactSelect
                                options={options}
                                styles={customStyles}
                                placeholder="Select country code"
                                onChange={handleChange}
                                // isSearchable={false}
                                components={{ Option: CustomOption }}
                            />
                        </div>
                        
                        <div className="w-full md:w-2/3">
                            <label htmlFor="phonenumber" className="block font-semibold text-[14px] leading-6 text-[#222222]">
                                {t("review_information_input4")}
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <input
                                    type="tel"
                                    name="phonenumber"
                                    id="phonenumber"
                                    autoComplete="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => {                                   
                                        if (e.target.value === '' || isNumber(e.target.value)) {
                                            setPhone(e.target.value)
                                        }
                                    }}
                                    className="mt-1 block w-full rounded-[20px] border-[#C8C8C8] py-3 shadow-sm"
                                    placeholder="(123) 111-22-33"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CompanyDetails 
                lang={lang}
                setCity={setCity}
                setCountry={setCountry}
                setLastName={setLastName}
                setName={setName}
                setEmail={setEmail}
                setStreet={setStreet}
                setZip={setZip}
                zip={zip}
                setPhone={setPhone}
                countries={countries}
                states={states}
                country={country}
            />
        </div>
)}

export default FillinForm;