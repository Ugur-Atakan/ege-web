import React from 'react'
import { useTranslation } from '../../../i18n/client'

const OrderReview = ({ lang , selectedPackage , couponcode, setCouponCode , displayForm , setDisplayForm , handleSubmit}) => {
    const { t } = useTranslation(lang);
    return (
        <div className='bg-white rounded-[32px] md:rounded-none p-6 relative'>
            <div className='flex items-center justify-between'>
                <h2 className='font-semibold text-lg leading-[44px] text-[#222222]'>{t("review_order_summary")}</h2>
                <h2 className='font-semibold text-lg leading-[44px] text-[#1649FF]'>USD</h2>
            </div>
            <div className='pt-6 py-4 border-b border-[#C8C8C8]'>
                <h4 className='font-semibold text-[15px] leading-6 text-[#545454]'>{t("review_preview")}</h4>
            </div>
            <div className='flex items-center justify-between py-4'>
                {selectedPackage && selectedPackage.map((price, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>{t("review_payment_type")}</h1>
                            <p className='font-semibold text-[16px] leading-6 text-[#222222]'>{price.orderPackage}</p>
                        </div>
                        <div><h1 className='font-semibold text-[16px] leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                    </React.Fragment>
                ))}
            </div>
            <div className='md:mt-96'>
                <div className='flex flex-col gap-6'>
                    <button className='font-semibold  text-left text-[16px] leading-6 text-[#1649FF]' onClick={() => setCouponCode(true)}>{t("review_coupon_code")}</button>
                    {couponcode && <input type='text' name="couponCode" id="couponCode" className="-mt-2 mb-4 md:mb-0 md:mt-1 block w-full md:w-1/2 rounded-[20px] border-[#C8C8C8] py-2 shadow-sm" onChange={couponcode} />}
                </div>
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <h1 className='font-semibold text-lg leading-6 text-[#222222]'>{t("review_total")}</h1>
                    </div>
                    {selectedPackage && selectedPackage.map((price, index) => (
                        <div key={index}><h1 className='font-semibold text-lg leading-6 text-[#222222]'>{'$' + (price.orderPackagePrice / 100).toFixed(0)}</h1></div>
                    ))}
                </div>
                <div className='flex items-center justify-center py-4'>
                    <a href="#" onClick={displayForm ? handleSubmit : () => {setDisplayForm(true)} } className='bg-[#1649FF] w-full text-center text-white font-semibold text-lg py-2 rounded-[20px]'>{t("review_continue")}</a>
                </div>
            </div>
        </div>
    )
}

export default OrderReview