import React from 'react'

const Step4Header = ({ isChecked, toggleChecked, t }) => {
  return (
    <div className='mx-auto max-w-[571px]'>
      <h2 className='text-left lg:text-center font-semibold text-[26px] leading-[32px] lg:text-[40px] lg:leading-[44px] text-[#1649FF]'>
        {t('how_it_works_step_4')}
        <span className='text-[#222222]'>{t('how_it_works_package_title')}</span>
      </h2>
      <div className='flex items-center justify-start lg:justify-center pb-6 lg:pb-0 pt-12 gap-4'>
        <span className='font-semibold text-[28px] leading-8 text-[#222222]'>LLC</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value={isChecked} onChange={toggleChecked} className="sr-only peer" />
          <div className="w-20 h-10 bg-[#1649FF] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[4px] after:left-[8px] after:bg-white  after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#222222]"></div>
        </label>
        <span className='font-semibold text-[28px] leading-8 text-[#222222]'>Corp</span>
      </div>
    </div>
  );
}

export default Step4Header