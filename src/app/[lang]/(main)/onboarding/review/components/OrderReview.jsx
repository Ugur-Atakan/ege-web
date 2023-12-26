import React from 'react'
import { useTranslation } from '@/i18n/client'

const OrderReview = ({ lang , selectedPackage , couponcode, setCouponCode , displayForm , setDisplayForm , handleSubmit, upsells}) => {
    const { t } = useTranslation(lang);
    const jsonPkg = JSON.parse(selectedPackage);
    const pkg = [jsonPkg[0]];

    const calculateTotal = () => {
        if (!upsells) return pkg[0].unit_amount/100;
        const upsellPrices = upsells.map((upsell) => upsell.price);
        const total = upsellPrices.reduce((a, b) => a + b, 0) + (pkg[0].unit_amount/100);
        return total;
    }

    return (
        <div className='bg-white rounded-[32px] md:rounded-[32px] p-6 relative'>
            <div className='flex items-center justify-between'>
                <h2 className='font-semibold text-lg leading-[44px] text-[#222222]'>{t("review_order_summary")}</h2>
                <h2 className='font-semibold text-lg leading-[44px] text-[#1649FF]'>USD</h2>
            </div>
            <div className='pt-6 py-4 border-b border-[#C8C8C8]'>
                <h4 className='font-semibold text-[15px] leading-6 text-[#545454]'>{t("review_preview")}</h4>
            </div>
            <div className='flex items-center justify-between py-4'>
                {pkg && pkg.map((price, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <h2 className='font-semibold text-[16px] leading-6 text-[#222222]'>{t("review_payment_type")}</h2>
                            <p className='font-semibold capitalize text-[16px] leading-6 text-[#222222]'>{price.product}</p>
                        </div>
                        <div><h3 className='font-semibold text-[16px] leading-6 text-[#222222]'>{'$ ' + (price.unit_amount / 100)}</h3></div>
                    </React.Fragment>
                ))}
            </div>
            {upsells.length !== 0 && <h2 className='pt-5 font-semibold text-[20px] uppercase leading-6 text-[#222222]'>Upsell Products</h2>}
            <div className='flex flex-col py-4'>
                {upsells && upsells.map((upsell, index) => (
                    <React.Fragment key={index}>
                         <div className='flex  justify-between'>
                            <h2 className='font-semibold capitalize text-[16px] leading-[44px] text-[#222222]'> {upsell.name}</h2>
                            <h2 className='font-semibold text-[16px] leading-[44px] text-[#222222]'>{'$ ' + (upsell.price)}</h2>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='md:mt-96'>
                {/* <div className='flex flex-col gap-6'>
                    <button className='font-semibold  text-left text-[16px] leading-6 text-[#1649FF]' onClick={() => setCouponCode(true)}>{t("review_coupon_code")}</button>
                    {couponcode && <input type='text' name="couponCode" id="couponCode" className="-mt-2 mb-4 md:mb-0 md:mt-1 block w-full md:w-1/2 rounded-[20px] border-[#C8C8C8] py-2 shadow-sm" onChange={couponcode} />}
                </div> */}
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <h4 className='font-semibold text-lg leading-6 text-[#222222]'>Total Price</h4>
                    </div>
                    <h5 className='font-semibold text-lg leading-6 text-[#222222]'>{'$ ' + calculateTotal()}</h5>
                </div>
                
                <div className='flex items-center justify-center py-4'>
                    <a href="#" onClick={displayForm ? handleSubmit : () => {setDisplayForm(true)} } className='bg-[#1649FF] w-full text-center text-white font-semibold text-lg py-2 rounded-[20px]'>{t("review_continue")}</a>
                </div>
            </div>
        </div>
    )
}

export default OrderReview