'use client'

import { useTranslation } from '../../../../i18n/client'
import Link from 'next/link'
import Image from 'next/image'
import { one, three } from 'src/images/main-page'

const Mid = ({ lang }) => {
    const { t } = useTranslation(lang);

    return ( 
        <div className="flex justify-between mx-10">
            <div className="flex flex-row" style={{ zIndex: 2 }}>
                <Image src={one} alt="one"  />
                <div className=" text-white text-[18px] lg:text-lg pl-4 font-semibold pt-10">
                    Start your business and have all <br /> paperwork ready by tomorrow
                </div>
            </div>

            <div className="mt-10 p-4" style={{ zIndex: 2 }}>
                <Link
                    href={`/${lang}/company-type`}
                    className="rounded-2xl mx-2  lg:py-[14px] leading-[22px] px-6 font-semibold text-[15px] lg:text-lg text-white bg-black"
                >
                    Start a company     
                </Link>
            </div>

            <div className="flex flex-row" style={{ zIndex: 2 }}>
                <Image src={three} alt="three"  />
                <div className="text-white text-[18px] lg:text-lg pl-4 font-semibold pt-10">
                    Need something notarized <br />for outside the US? We{"'"}ve <br />got you covered
                </div>
            </div>
        </div>
    )
}

export default Mid