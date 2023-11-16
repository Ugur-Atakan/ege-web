import Link from 'next/link'
import SearchInput from './SearchInput'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const FooterComponent = ({ lang, t }) => {
  return (
    <div>
        <div className='mx-auto max-w-lg px-4 lg:px-0'>
            <div className='py-6'>
                <SearchInput 
                  placeholder={t('pricing_header2_footer_input_text')} 
                  buttonText={t('pricing_header2_footer_input_button')} 
                  lang={lang} 
                />
                <Link className='text-center' href={`/${lang}/start-my-business`}>
                  <p className='text-[#8A8A8A] block lg:flex items-center justify-center gap-1'>{t('pricing_header2_footer_text_gray')} <span className='flex justify-center items-center gap-1 text-[#9EE248] cursor-pointer'>{t('pricing_header2_footer_text_green')} <ArrowRightIcon className='w-4 h-4' /> </span></p>
                </Link>
            </div>
        </div>

    </div>
  );
}

export default FooterComponent