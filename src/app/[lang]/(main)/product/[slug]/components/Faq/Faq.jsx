'use client'

import FaqsList from './FaqsList'
import { useTranslation } from '@/i18n/client'

const Faqs = ({ lang , faqs }) => {
  const { t } = useTranslation(lang);

  return (
      <section id="faqs" aria-labelledby="faqs-title">
        <div className="bg-gray-100">
          <div className="bg-gray-100 mx-auto max-w-7xl py-[130px] px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className='flex justify-center items-center'>
                <h2 className="w-[705px] text-center text-black text-[44px] font-bold leading-[58px]">
                  {t('pricing_header2_title')}
                </h2>
            </div>
            <div className="mx-auto max-w-4xl mt-10 bg-white rounded-[32px] p-10">
              <FaqsList faqs={faqs} t={t} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Faqs
