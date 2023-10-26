'use client'

import Image from 'next/image'
import phone from '../../../../images/phone.png'
import email from '../../../../images/email.png'
import cursor from '../../../../images/navigator.png'
import { useTranslation } from '../../../i18n/client'

/**
 * ContactInfo component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered components for the page
*/

const ContactInfo = ({ lang }) => {
    const { t } = useTranslation(lang);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <div className="text-left lg:text-center">
                    <h1 className="text-[26px] lg:text-[40px] leading-8 lg:leading-[44px] text-[#222222] font-semibold">{t('contact_information_title')}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 lg:my-12">
                    <div className="bg-[#ECEFF1] rounded-[32px] py-4 px-6 relative">
                        <Image src={phone} className='h-64 w-64' alt='phone' />
                        <h2 className='text-[26px] font-semibold lg:text-[40px] leading-8 lg:leading-[44px] text-[#222222] pt-12'>{t("contact_information_card1_title")}</h2>
                        <p className='text-[16px] font-semibold leading-[22px] lg:leading-6 text-[#222222] pt-5 pb-16'>+1 (302) 842-8687</p>
                        <a href='tel:+6199942413' className='text-[#1649FF] font-semibold text-[16px] lg:text-lg leading-[22px] absolute bottom-6'>{t("contact_information_card1_button")}</a>
                    </div>
                    <div className="bg-[#ECEFF1] rounded-[32px] relative">
                        <div className='py-4 px-6'>
                            <Image src={email} className='h-64 w-64' alt='email' />
                            <h2 className='text-[26px] font-semibold lg:text-[40px] leading-8 lg:leading-[44px] text-[#222222] pt-12'>{t("contact_information_card2_title")}</h2>
                            <p className='text-[16px] font-semibold leading-[22px] lg:leading-6 text-[#222222] pt-5 pb-16'>info@registate.com</p>
                            <a href='mailto:info@registate.com' className='text-[#1649FF] font-semibold text-[16px] lg:text-lg leading-[22px] absolute bottom-6'>{t("contact_information_card2_button")}</a>
                        </div>
                    </div>
                    <div className="bg-[#ECEFF1] rounded-[32px] relative">
                        <div className='py-4 px-6'>
                            <Image src={cursor} className='h-64 w-64' alt='location' />
                            <h2 className='text-[26px] font-semibold lg:text-[40px] leading-8 lg:leading-[44px] text-[#222222] pt-12'>{t("contact_information_card3_title")}</h2>
                            <p className='text-[16px] font-semibold leading-[22px] lg:leading-6 text-[#222222] pt-5 pb-16'>1401 Pennsylvania Ave. Unit 105 Wilmington, DE 19806, ABD</p>
                            <a href='https://goo.gl/maps/Sz9zfv3nnSPgUKeDA' target={'_blank'} className='text-[#1649FF] font-semibold text-[16px] lg:text-lg leading-[22px] absolute bottom-6'>{t("contact_information_card3_button")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo