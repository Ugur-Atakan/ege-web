import CompanyTypeCard from "./CompanyTypeCard"
import { umbrella, puzzle } from '@/assets/images/index'

const Cards = ({ t, lang, handleSelectLlc, handleSelectCcorp  }) => {
    return (
      <div className='bg-white'>
        <div className='mx-auto max-w-5xl p-6 lg:px-8 '>
            <div className='text-left md:text-center'>
                <h2 className='text-[#222222] text-[26px] md:text-[2.5rem] font-semibold leading-[2.75rem]'>{t('company_type_title')}</h2>
            </div>

            <div className='flex flex-col md:flex-row gap-6 items-stretch justify-center md:gap-4 py-12' >
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
            </div>
        </div>
      </div>
    )
}

export default Cards