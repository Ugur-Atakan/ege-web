import CompanyTypeCard from "./CompanyTypeCard"
import { umbrella, puzzle, search } from '@/assets/images/index'
import Link from 'next/link'
import Image from 'next/image'

const Cards = ({ t, lang, handleSelectLlc, handleSelectCcorp  }) => {
    const labelContent = lang === 'tr' ? 'Tavsiye edilen' : 'Recommended';

    return (
      <div className='bg-white'>
        <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
            <div className='flex flex-col md:flex-row gap-6 items-stretch justify-center md:gap-4' >
                <CompanyTypeCard 
                    imageSrc={umbrella} 
                    title={t('company_type_package1_name')} 
                    description={t('company_type_package1_description')} 
                    onClick={handleSelectLlc} 
                />
                <CompanyTypeCard 
                    imageSrc={puzzle}
                    title={t('company_type_package2_name')}
                    description={t('company_type_package2_description')}
                    onClick={handleSelectCcorp} 
                />

                <Link href={`/${lang}/start-my-business/`} className='block w-full bg-white border-4 border-solid border-[#1649FF] rounded-[2rem] p-8 relative'>
                    <Image src={search} className='relative -top-20 -right-8 md:w-64 md:h-64 md:static rotate-360 md:rotate-45' alt='llc' />
                    <div className='-mt-48 md:mt-0'>
                        <h4 className='text-[#222222] text-[20px] md:text-[1.75rem] font-semibold leading-[2rem]'>{t('company_type_package3_name')}</h4>
                        {/* <p className='text-[#222222] text-[16px] md:text-[1.125rem] font-semibold leading-[22px] md:leading-[1.5rem] pt-4'>{t('company_type_package3_description')}</p> */}
                    </div>

                    <div
                        className={`absolute top-[-1rem] right-[1rem] bg-[#1649FF] text-white py-2 px-4 rounded-full`}
                        style={{ content: `"${labelContent}"` }}
                    >
                        {labelContent}
                    </div>
                </Link>
            </div>
        </div>
      </div>
    )
}

export default Cards