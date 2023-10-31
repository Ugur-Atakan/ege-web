'use client'

import { useTranslation } from '@/i18n/client'

const Top = ({ lang }) => {
    const { t } = useTranslation(lang);
    
    return (
        <div className="relative isolate overflow-hidden pt-14">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64 relative ">
           <div className="text-left lg:text-center px-6 lg:px-0 lg:-mt-24">
                <div className="text-gray-100 text-lg font-semibold leading-normal">Top-notch value and speedy service, every time.</div>
                <div className="w-[595px] text-center text-gray-100 text-[64px] font-bold leading-[64px]">All-in-one solution<br/>to run business in the USA</div>
           </div>
          </div>
        </div>
    );
};

export default Top