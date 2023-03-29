import apostille2 from '../images/apostille2.png'
import { useTranslation } from 'react-i18next'

export default function Delaware() {
    const {t} = useTranslation();
    return (
        <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl text-black font-bold text-center sm:text-4xl py-16">{t('apostille_header4_title_black')}</h1>
            </div>
            <div className="block md:flex flex-row-reverse items-center gap-12 pt-16">
                <div className="w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-lg"
                        src={apostille2}
                        alt=""
                    />
                </div>
                <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">{t('apostille_header4_text1')}</h3>
                    <ul className="my-4 text-lg text-gray-500 list-disc ml-8">
                        <li>{t('apostille_header4_text_1_list1')}</li>
                        <li>{t('apostille_header4_text_1_list2')}</li>
                        <li>{t('apostille_header4_text_1_list3')}</li>
                        <li>{t('apostille_header4_text_1_list4')}</li>
                    </ul>
                    <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">{t('apostille_header4_text_2')}</h3>
                    <ul className="my-4 text-lg text-gray-500 list-disc ml-8">
                        <li>{t('apostille_header4_text_2_list1')}</li>
                        <li>{t('apostille_header4_text_2_list2')}</li>
                    </ul>
                    <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">{t('apostille_header4_text_3')}</h3>
                    <ul className="my-4 text-lg text-gray-500 list-disc ml-8">
                        <li>{t('apostille_header4_text_3_list1')}</li>
                        <li>{t('apostille_header4_text_3_list2')}</li>
                        <li>{t('apostille_header4_text_3_list3')}</li>
                        <li>{t('apostille_header4_text_3_list4')}</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
