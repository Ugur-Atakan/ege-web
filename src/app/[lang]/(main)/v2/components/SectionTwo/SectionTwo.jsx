import React from 'react'
import Left from './Left'
import { startingBusiness } from '@/assets/images/main-page'
import Image from 'next/image'

const SectionTwo = () => {
    return (
        <div className="mt-96 flex bg-black overflow-hidden">
            <div className="flex-1">
                <Left />
            </div>
            <div className="flex-1">
                <div>
                    <Image  className='shadow-lg drop-shadow-lg' src={startingBusiness} alt="starting-business" />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
