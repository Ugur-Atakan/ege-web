'use client'

import Link from 'next/link'
import { useTranslation } from '../../../i18n/client'

/**
 * Page route for privacy policy page
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @param {string} companyType - Company type
 * @param {string} companyName - Company name
 * @param {state} companyState - Company state
 * @type {client}
 * @returns {JSX.Element} 
*/

const CompanyDetails = ({ lang, companyType, companyName, companyState }) => {
    const { t } = useTranslation(lang);

    return ( 
        <div className='bg-white border rounded-[32px] p-6 my-6'>
            <h2 className='font-semibold text-[24px] leading-[44px] text-[#222222]'>{t("review_company_details_title")}</h2>
            <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-4'>
                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>{t("review_company_details_entity_type")}</p>
                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyType}</span>
                </div>
                <Link href={`/${lang}/company-type`} className='font-semibold text-sm leading-6 text-[#1649FF]'  >
                    {t("review_edit_button")}
                </Link>
            </div>
            <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-4'>
                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>{t("review_company_details_company_name")}</p>
                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyName}</span>
                </div>
                <Link href={`/${lang}/company-name`} className='font-semibold text-sm leading-6 text-[#1649FF]' >
                    {t("review_edit_button")}
                </Link>
            </div>
            <div className='flex items-center justify-between py-2'>
                <div className='flex items-center gap-4 '>
                    <p className='font-semibold text-sm leading-6 text-[#8A8A8A]'>{t("review_company_details_filing_juristiction")}</p>
                    <span className='font-semibold text-sm leading-6 text-[#222222]'>{companyState}</span>
                </div>
                <Link href={`/${lang}/state`} className='font-semibold text-sm leading-6 text-[#1649FF]' >
                    {t("review_edit_button")}
                </Link>
            </div>
        </div>
    )
}

export default CompanyDetails