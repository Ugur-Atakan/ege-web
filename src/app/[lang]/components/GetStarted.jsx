import { ArrowSmallDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "../../i18n/client";
import Link from 'next/link';

export default function GetStarted({ lang }) {
    const { t } = useTranslation(lang);

    return (
        <div className="bg-[#ECEFF1]">
            <div className="mx-auto max-w-xl p-6 lg:px-8 bg-[#ECEFF1]">
                <div className="text-left text-[26px] leading-8 lg:text-center lg:text-[40px] lg:leading-[44px] text-black font-semibold">
                    {t('get_started_title')}
                </div>
            </div>
            <div className="mx-auto max-w-[996px] p-6 lg:px-12">
                <div className="flex items-center justify-center">
                    <div className="grid lg:grid-cols-3 gap-[14px]">
                        <Link href={`/${lang}/start-my-business`} className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started pb-16">
                            <h1 className="font-semibold text-[22px] leading-6"> {t('get_started_card1_title')}</h1>
                            <p className="text-lg text-[#070707] leading-6 text-opacity-[30%] mt-4 text-on pb-6 ">{t('get_started_card1_description')}</p>
                            <div className="btn-on text-[#1649FF] font-semibold text-lg absolute text-left bottom-5">{t('get_started_card1_button')}</div>
                        </Link>
                        <Link href={`/${lang}/company-type`} className="bg-white rounded-[28px] p-8 relative  hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">{t('get_started_card2_title')}</h1>
                            <p className="text-lg text-[#070707] text-opacity-[30%] leading-6 mt-4 text-on pb-6">{t('get_started_card2_description')}</p>
                            <div className="btn-on text-[#1649FF] font-semibold absolute text-lg text-left bottom-5">{t('get_started_card2_button')}</div>
                        </Link>
                        <Link href={`/${lang}/company-type`} className="bg-white rounded-[28px] p-8 relative hover:bg-[#1649FF] hover:text-white how-to-get-started">
                            <h1 className="font-semibold text-[22px] leading-6">{t('get_started_card3_title')}</h1>
                            <p className="text-on pb-6 text-lg text-[#070707] leading-6 text-opacity-[30%] mt-4">{t('get_started_card3_description')}</p>
                            <div className="btn-on text-[#1649FF] font-semibold absolute text-lg text-left bottom-5">{t('get_started_card3_button')}</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl p-6 lg:px-8">
                <div className="text-left lg:text-center text-lg text-[#545454] font-semibold block lg:flex items-center justify-start lg:justify-center gap-2">
                    {t('get_started_footer_first_text')} <span className="flex items-center gap-1 text-[#1649FF]">{t('get_started_footer_first_text')}<ArrowSmallDownIcon className="w-5 h-5" /></span>
                </div>
            </div>
        </div>
    )
}
