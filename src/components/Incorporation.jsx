import {useTranslation} from 'react-i18next'
import postincorp2 from '../images/postincorp2.jpg'
function Corporation(props) {
    const {t} = useTranslation();
  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex-col-reverse md:flex-row flex items-center gap-12">
                <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{props.title}</h3>
                    <p className="mt-4 text-lg text-gray-500">{t('post_incorp_header4_text')}</p>
                    <ul className="pl-6 mt-2 list-disc">
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_1')}</li>
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_2')}</li>
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_3')}</li>
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_4')}</li>
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_5')}</li>
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_6')}</li>
                        <li className="text-lg text-gray-500">{t('post_incorp_header4_text_7')}</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-lg"
                        src={postincorp2}
                        alt=""
                    />
                </div>
            </div>
    </div>
  )
}

export default Corporation