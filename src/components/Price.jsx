import { useTranslation } from "react-i18next"
export default function Price(props) {
  const {t} = useTranslation();
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

      <div className="mt-16 bg-white pb-12 lg:mt-10 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg"
                    aria-hidden="true"
                  />
                  <div className="rounded-t-lg bg-gradient-to-r from-[#004B9D] to-[#001E3F] px-6 pt-6 pb-10 -mt-8">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold tracking-tight text-white sm:-mx-6"
                        id="tier-growth"
                      >
                        {t('compliance_reminder_header2_pricebox_title')}
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-white sm:text-6xl">
                          <span className="font-bold text-5xl">{props.price}</span>
                        </span>
                      </div>
                      <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
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
            </div>
          </div>
        </div>
      </div>
      </>
  )
}
