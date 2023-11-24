import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className='text-left md:text-center'>
        <h1 className='font-semibold text-[26px] md:text-[40px] leading-[44px] text-[#222222]'>{title}</h1>
    </div>
  )
};

export default Heading
