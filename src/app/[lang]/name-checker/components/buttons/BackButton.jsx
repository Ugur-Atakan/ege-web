import React from 'react'
import { ArrowUturnDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const BackButton = ({ lang , t }) => {
    return (
        <Link
            className="ml-4 text-[#1649FF] font-semibold mt-4 flex items-center gap-2 cursor-pointer w-fit"
            href={`/${lang}`}
        >
            <ArrowUturnDownIcon className="w-4  rotate-90" />
            <button>{t('help_me_choose_widget_question1_button_back')}</button>
        </Link>
    );
};

export default BackButton
