import { useTranslation } from "react-i18next"
export default function Price(props) {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-6 pt-12 lg:px-8 lg:pt-4">
        <div className="text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            {t('compliance_reminder_header2_title')}
          </p>
          <p className="text-lg text-gray-500 py-6">
            {t('compliance_reminder_header2_text')}
          </p>
        </div>
      </div>
      <div className="px-16 lg:px-0 lg:flex items-center justify-center gap-6 pt-4 py-12">
        <div className="rounded-lg bg-gradient-to-r from-[#004B9D] to-[#001E3F]">
          <div className="lg:w-[550px]">
            <div className="flex justify-center items-center p-8">
              <div className="block">
                <div>
                  {props.price ? <h3
                    className="text-center text-3xl font-semibold tracking-tight text-white sm:-mx-6"
                    id="tier-growth"
                  >
                    {t('compliance_reminder_header2_pricebox_title')}
                  </h3> : null}
                </div>
                <div>
                  <h1 className="py-4 text-5xl font-medium tracking-tight text-center text-white">{props.price}</h1>
                </div>
                <div>
                  <div className="rounded-lg shadow-md mt-3">
                    <a
                      href="/contact"
                      className="block w-full rounded-lg border border-transparent bg-white px-6 py-4 text-center text-xl font-medium leading-6 text-[#004B9D]"
                      aria-describedby="tier-growth"
                    >
                      {t('compliance_reminder_header2_pricebox_button')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {props.pricetwo? <div className="mt-6 lg:mt-0 rounded-lg bg-gradient-to-r from-[#004B9D] to-[#001E3F]">
          <div className="lg:w-[550px]">
            <div className="flex justify-center items-center p-8">
              <div className="block">
                <div>
                  {props.pricetwo ? <h3
                    className="text-center text-3xl font-semibold tracking-tight text-white sm:-mx-6"
                    id="tier-growth"
                  >
                   Internationals
                  </h3> : null}
                </div>
                <div>
                  <h1 className="py-4 text-5xl font-medium tracking-tight text-center text-white">{props.pricetwo}</h1>
                </div>
                <div>
                  <div className="rounded-lg shadow-md mt-3">
                    <a
                      href="/contact"
                      className="block w-full rounded-lg border border-transparent bg-white px-6 py-4 text-center text-xl font-medium leading-6 text-[#004B9D]"
                      aria-describedby="tier-growth"
                    >
                      {t('compliance_reminder_header2_pricebox_button')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : null}
        
      </div>
    </>
  )
}