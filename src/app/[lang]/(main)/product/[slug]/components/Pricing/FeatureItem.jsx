import React from 'react';

const FeatureItem = ({ text }) => (
  <div className="flex items-start gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>

    <div className="text-neutral-800 text-base md:text-lg lg:text-xl font-semibold leading-normal">{text}</div>
  </div>
);

export default FeatureItem;
