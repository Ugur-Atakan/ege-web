import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const BackButton = ({ t, lang }) => {
  return (
    <div className="mx-auto p-6 lg:px-8">
        <Link className='flex items-center gap-2' href={`/${lang}/company-name`}>
          <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
          <span className='text-[#1649FF] text-lg font-semibold'>{t('formation_back_button')}</span>
        </Link>
    </div>
  );
}

export default BackButton
