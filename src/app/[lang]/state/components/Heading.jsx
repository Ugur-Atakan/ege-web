import React from 'react'

const Heading = ({ t }) => {
    return ( 
       <div className='text-left md:text-center'>
        <h1 className='font-semibold  text-[26px] md:text-[40px] leading-[32px] md:leading-[44px] text-[#222222]'>{t('state_title')}</h1>
      </div>
    )
};

export default Heading
