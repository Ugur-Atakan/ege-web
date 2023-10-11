import React from 'react'
import Left from './Left'
// import Right from './Right';

const SectionThree = () => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <Left />
            </div>
            <div className='flex-1'>
                {/* <Right /> */}
            </div>
        </div>
    );
};

export default SectionThree;
