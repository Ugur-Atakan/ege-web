import React from 'react';

const Heading = ({ text }) => {
    return (
        <div className="max-w-3xl mx-auto py-10">
              <div className="text-center">
                <h1 className="text-[2.5rem] font-semibold leading-[2.75rem] text-[#222222]">
                    {text}
                </h1>
              </div>
        </div>
    )
};

export default Heading
