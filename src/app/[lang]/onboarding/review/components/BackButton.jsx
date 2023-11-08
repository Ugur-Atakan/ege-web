'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '@/i18n/client';

/**
 * Button component
 * @type {function} 
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} 
*/

const BackButton = ({ lang }) => {
  const { t } = useTranslation(lang);

  return (
    <div className="block md:hidden py-6 px-4">
      <Link href={`/${lang}/formation`} className='flex items-center gap-2' >
        <ArrowLeftIcon className='text-[#1649FF] h-[18px] w-[18px]' />
        <span className='text-[#1649FF] text-lg font-semibold'>{t("formation_back_button")}</span>
      </Link>
    </div>
  );
};

export default BackButton;