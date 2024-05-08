import React from 'react'
import { useTranslation } from '@/i18n/client'

const OrderReview = ({ lang , selectedPackage  , displayForm , setDisplayForm , handleSubmit, upsells}) => {
    const { t } = useTranslation(lang);
    
    const calculateTotal = () => {
        if (!upsells) return selectedPackage?.price || 0;
        const upsellPrices = upsells.map((upsell) => upsell.price);
        const total = upsellPrices.reduce((a, b) => a + b, 0) + (selectedPackage.price);
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
                {selectedPackage && 
                    <React.Fragment>
                        <div>
                            <h2 className='font-semibold text-[16px] leading-6 text-[#222222]'>{t("review_payment_type")}</h2>
                            <p className='font-semibold capitalize text-[16px] leading-6 text-[#222222]'>{selectedPackage.tierName}</p>
                        </div>
                        <div><h3 className='font-semibold text-[16px] leading-6 text-[#222222]'>{'$ ' + (selectedPackage.price)}</h3></div>
                    </React.Fragment>
                }
            </div>
            {upsells && upsells.length !== 0 && <h2 className='pt-5 font-semibold text-[20px] uppercase leading-6 text-[#222222]'>Upsell Products</h2>}
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