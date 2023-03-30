import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
export default function NotFound() {
    const {t, i18n} = useTranslation();
  return (
    <div class="lg:px-24 lg:py-28 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div class="relative">
                    <div class="absolute">
                        <div class="">
                            <h1 class="my-2 text-gray-800 font-bold text-2xl">
                                {t('notfound_title')}
                            </h1>
                            <p class="my-2 text-gray-800 pb-6">{t('notfound_desc')}</p>
                        <Link to={`/${i18n.language}`} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">{t('notfound_button')}</Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
  )
}
