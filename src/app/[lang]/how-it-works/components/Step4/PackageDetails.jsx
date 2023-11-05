// PackageDetails.js

import React from 'react';
import Image from 'next/image';
import { queen, bishopcolor, kingblack} from '@/assets/images' 

const PackageDetails = ({
  selectedCompanyType,
  selectedPackagesNameCorp,
  handlePackageSelection,
  t,
  showAllDifferences
}) => {
  return (
    <div className='lg:flex lg:justify-between'>
      <div className='flex justify-between gap-2 pb-8'>
        <div
          className={`cursor-pointer flex flex-col items-center gap-1 bg-white p-4 border border-[#ECEFF1] rounded-[12px] ${selectedPackagesNameCorp === 'starter' && 'border-[#1649FF]'}`}
          onClick={() => handlePackageSelection(selectedCompanyType, 'starter')}
        >
          <span className={`font-semibold text-[24px] text-[#1649FF]`}>
            {t('how_it_works_select_package')}
          </span>
          <span className='font-semibold text-[24px] text-[#222222]'>
            {selectedCompanyType === 'LLC' ? 'Gold' : 'Starter'}
          </span>
          <span className='text-[14px] text-[#222222] text-center'>
            {t('how_it_works_most_popular')}
          </span>
          <div className='relative h-[32px] w-[32px]'>
            <Image src={selectedCompanyType === 'LLC' ? queen : kingblack} alt='Crown' layout='fill' objectFit='contain' />
          </div>
        </div>
        <div
          className={`cursor-pointer flex flex-col items-center gap-1 bg-white p-4 border border-[#ECEFF1] rounded-[12px] ${selectedPackagesNameCorp === 'gold' && 'border-[#1649FF]'}`}
          onClick={() => handlePackageSelection(selectedCompanyType, 'gold')}
        >
          <span className={`font-semibold text-[24px] text-[#1649FF]`}>
            {t('how_it_works_select_package')}
          </span>
          <span className='font-semibold text-[24px] text-[#222222]'>
            {selectedCompanyType === 'LLC' ? 'Gold' : 'Starter'}
          </span>
          <span className='text-[14px] text-[#222222] text-center'>
            {t('how_it_works_most_popular')}
          </span>
          <div className='relative h-[32px] w-[32px]'>
            <Image src={selectedCompanyType === 'LLC' ? bishopcolor : arrowblue} alt='Crown' layout='fill' objectFit='contain' />
          </div>
        </div>
      </div>
      <p className='text-[20px] text-[#1649FF] font-semibold pb-4'>
        {t('how_it_works_see_package_details')}
      </p>
      <div className='pb-8'>
        <button
          onClick={() => setShowAllDifferences(!showAllDifferences)}
          className='text-[20px] font-semibold text-[#1649FF] hover:underline focus:outline-none'
        >
          {showAllDifferences ? t('how_it_works_show_less') : t('how_it_works_show_all')}
        </button>
      </div>
    </div>
  );
}

export default PackageDetails