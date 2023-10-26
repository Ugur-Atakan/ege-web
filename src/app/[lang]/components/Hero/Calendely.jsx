import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { PopupButton } from 'react-calendly'
import { useTranslation } from '../../../i18n/client'

export function CalendlyText({ lang }) {
    const { t } = useTranslation(lang);
    return (
      <div className='cursor-pointer flex items-center gap-2'>
        <p className='font-semibold text-xs leading-4 text-white'>{t('topbar_first_part')}<span className='text-[#9EE248] mr-1'>{t('topbar_middle_part')}</span>{t('topbar_last_part')}</p>
        <ArrowRightIcon className='h-3 text-white' />
      </div>
    )
}

const Calendely = ({ isSticky, lang }) => {  
    const rootEl = process.browser ? document.body : null;

    return (
        <div className={`hidden mx-auto max-w-7xl p-6 lg:px-2 ${isSticky ? '!lg:hidden' : 'lg:block'}`}>
            <div className='flex items-center justify-center -mt-4 pb-2 border-[#ECEFF1] border-b-[1px] border-opacity-10'>
                <div className='flex items-center gap-2'>
                    <PopupButton
                    url="https://calendly.com/registate/intro"
                    rootElement={rootEl}
                    text={<CalendlyText lang={lang} />}
                    className="font-semibold text-xs leading-4 text-white cursor-pointer outline-none border-none"
                    >
                    </PopupButton>
                </div>
            </div>
        </div>
    );
};

export default Calendely
