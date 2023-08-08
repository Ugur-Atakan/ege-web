import {
  ArrowUturnDownIcon,
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/outline";
import tickicon from '../images/tick.png'

export default function StartOnbarding() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  //questions answers
  const [firstYes, firstSetYes] = useState(false);
  const [firstNo, firstSetNo] = useState(false);
  const [firstNotSure, firstSetNotSure] = useState(false);
  const [secondYes, secondSetYes] = useState(false);
  const [secondNo, secondSetNo] = useState(false);
  const [secondNotSure, secondSetNotSure] = useState(false);

  const firstYesAnswer = () => {
    firstSetYes(true);
    firstSetNo(false);
    firstSetNotSure(false);
  }

  const firstNoAnswer = () => {
    firstSetNo(true);
    firstSetNotSure(false);
    firstSetYes(false);
  }

  const firstNotSureAnswer = () => {
    firstSetNotSure(true);
    firstSetYes(false);
    firstSetNo(false);
  }

  const secondYesAnswer = () => {
    secondSetYes(true);
    secondSetNo(false);
    secondSetNotSure(false);
  }

  const secondNoAnswer = () => {
    secondSetNo(true);
    secondSetNotSure(false);
    secondSetYes(false);
  }

  const secondNotSureAnswer = () => {
    secondSetNotSure(true);
    secondSetYes(false);
    secondSetNo(false);
  }

  const text = "LLC";

  const navigate = useNavigate();



  return (
    <div className='company-type py-12'>
      {page === 1 && (
        <div className="mx-auto max-w-7xl bg-white lg:shadow-xl rounded-2xl open-animation">
          <div className="flex justify-between items-center py-4 px-12">
            <div
              className="ml-4 text-[#1649FF] font-semibold mt-4 flex items-center gap-2 cursor-pointer w-fit"
              onClick={() => navigate(-1)}
            >
              <ArrowUturnDownIcon className="w-4  rotate-90" />
              <button>{t('help_me_choose_widget_question1_button_back')}</button>
            </div>
            <div
              className="ml-4 mt-4 flex items-center gap-2 cursor-pointer w-fit"
              onClick={() => navigate(-1)}
            >
              <XMarkIcon className="w-6 text-black rotate-90" />

            </div>
          </div>
          <div className="max-w-3xl mx-auto py-10">
            <div className="text-center">
              <h1 className="text-[2.5rem] font-semibold leading-[2.75rem] text-[#222222]">
                {t('help_me_choose_widget_question1_question')}
              </h1>
            </div>
          </div>
          <div className="max-w-lg mx-auto pb-12">
            <div className="py-2">
              <button onClick={firstYesAnswer} className={firstYes ? "py-6 px-6 text-left bg-blue-200 rounded-[1.25rem] border border-blue-600 text-[#222222] text-[1.375rem] leading-[1.625rem] w-full font-semibold" : "text-left rounded-[1.25rem] border border-[#C8C8C8] text-[#222222] text-[1.375rem] leading-[1.625rem] w-full py-6 px-6 font-semibold"}>
                {t('help_me_choose_widget_question1_answer1')}
              </button>
            </div>
            <div className="py-2">
              <button onClick={firstNoAnswer} className={firstNo ? "py-6 px-6 text-left bg-blue-200 rounded-[1.25rem] border border-blue-600 text-[#222222] text-[1.375rem] leading-[1.625rem] w-full font-semibold" : "text-left rounded-[1.25rem] border border-[#C8C8C8] text-[#222222] text-[1.375rem] leading-[1.625rem] w-full py-6 px-6 font-semibold"}>
                {t('help_me_choose_widget_question1_answer2')}
              </button>
            </div>
            <div className="py-2">
              <button onClick={firstNotSureAnswer} className={firstNotSure ? "py-6 px-6 text-left bg-blue-200 rounded-[1.25rem] border border-blue-600 text-[#222222] text-[1.375rem] leading-[1.625rem] w-full font-semibold" : "text-left rounded-[1.25rem] border border-[#C8C8C8] text-[#222222] text-[1.375rem] leading-[1.625rem] w-full py-6 px-6 font-semibold"}>
                {t('help_me_choose_widget_question1_answer3')}
              </button>
            </div>
            <div className="py-6">
              <button
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="py-6 px-6 text-center bg-[#1649FF] rounded-[1.25rem] border border-blue-600 text-white text-[1.375rem] leading-[1.625rem] w-full font-semibold">
                {t('help_me_choose_widget_question1_button_next')}
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="mx-auto max-w-7xl bg-white lg:shadow-xl rounded-2xl open-animation">
          <div className="flex justify-between items-center py-4 px-12">
            <div
              className="ml-4 text-[#1649FF] font-semibold  mt-4 flex items-center gap-2 cursor-pointer w-fit"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <ArrowUturnDownIcon className="w-4 rotate-90" />
              <button>{t('help_me_choose_widget_question1_button_back')}</button>
            </div>
            <div
              className="ml-4 mt-4 flex items-center gap-2 cursor-pointer w-fit"
              onClick={() => navigate(-1)}
            >
              <XMarkIcon className="w-6 text-black rotate-90" />

            </div>
          </div>
          <div className="max-w-3xl mx-auto py-10">
            <div className="text-center">
              <h1 className="text-[2.5rem] font-semibold leading-[2.75rem] text-[#222222]">
                {t('help_me_choose_widget_question2_question')}
              </h1>
            </div>
          </div>
          <div className="max-w-lg mx-auto pb-12">
            <div className="py-2">
              <button onClick={secondYesAnswer} className={secondYes ? "py-6 px-6 text-left bg-blue-200 rounded-[1.25rem] border border-blue-600 text-[#222222] text-[1.375rem] leading-[1.625rem] w-full font-semibold" : "text-left rounded-[1.25rem] border border-[#C8C8C8] text-[#222222] text-[1.375rem] leading-[1.625rem] w-full py-6 px-6 font-semibold"}>
                {t('help_me_choose_widget_question2_answer1')}
              </button>
            </div>
            <div className="py-2">
              <button onClick={secondNoAnswer} className={secondNo ? "py-6 px-6 text-left bg-blue-200 rounded-[1.25rem] border border-blue-600 text-[#222222] text-[1.375rem] leading-[1.625rem] w-full font-semibold" : "text-left rounded-[1.25rem] border border-[#C8C8C8] text-[#222222] text-[1.375rem] leading-[1.625rem] w-full py-6 px-6 font-semibold"}>
                {t('help_me_choose_widget_question2_answer2')}
              </button>
            </div>
            <div className="py-2">
              <button onClick={secondNotSureAnswer} className={secondNotSure ? "py-6 px-6 text-left bg-blue-200 rounded-[1.25rem] border border-blue-600 text-[#222222] text-[1.375rem] leading-[1.625rem] w-full font-semibold" : "text-left rounded-[1.25rem] border border-[#C8C8C8] text-[#222222] text-[1.375rem] leading-[1.625rem] w-full py-6 px-6 font-semibold"}>
                {t('help_me_choose_widget_question2_answer3')}
              </button>
            </div>
            <div className="py-6">
              <button
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="py-6 px-6 text-center bg-[#1649FF] rounded-[1.25rem] border border-blue-600 text-white text-[1.375rem] leading-[1.625rem] w-full font-semibold">
                {t('help_me_choose_widget_question1_button_next')}
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 3 && (
        <div className="mx-auto max-w-7xl bg-white lg:shadow-xl rounded-2xl open-animation">
          <div className="flex justify-between items-center py-4 px-12">
            <div
              className="ml-4 text-[#1649FF] font-semibold  mt-4 flex items-center gap-2 cursor-pointer w-fit"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <ArrowUturnDownIcon className="w-4 rotate-90" />
              <button>{t('help_me_choose_widget_question1_button_back')}</button>
            </div>
            <div
              className="ml-4 mt-4 flex items-center gap-2 cursor-pointer w-fit"
              onClick={() => navigate(-1)}
            >
              <XMarkIcon className="w-6 text-black rotate-90" />

            </div>
          </div>
          <div className="max-w-3xl mx-auto py-10">
            {i18n.language === 'en'
              ? <div className="block">
                <div className="flex justify-center">
                  <h1 className="text-[2.5rem] font-semibold leading-[2.75rem] text-[#222222]">
                    {t('help_me_choose_widget_answer1_title')}
                  </h1>
                </div>
                <div className="flex justify-center items-start gap-4">
                  <div className="block">
                    <h1 className="text-blue-600 text-[2.5rem] font-semibold leading-[2.75rem]">{firstYes || secondYes ? 'Corporation' : 'LLC'}</h1>
                  </div>
                  <div className="block">
                    <h1 className="text-[#222222] text-[2.5rem] font-semibold leading-[2.75rem]"> {t('help_me_choose_widget_answer1_subtitle')}</h1>
                  </div>
                  <div className="block">
                    <h1 className="text-blue-600 text-[2.5rem] font-semibold leading-[2.75rem]">{firstYes || secondYes ? 'Delaware' : 'Wyoming'}</h1>
                  </div>
                </div>
              </div>
              : <div className="block">
                <div className="flex justify-center">
                  <h1 className="text-center text-black text-2xl font-bold">
                    {t('help_me_choose_widget_answer1_title')}
                  </h1>
                </div>
                <div className="flex justify-center items-start gap-4">
                  <div className="block">
                    <h1 className="text-blue-600 text-[2.5rem] font-semibold leading-[2.75rem]">{firstYes || secondYes ? 'Delaware' : 'Wyoming'}</h1>
                  </div>
                  <div className="block ">
                    <h1 className="text-[#222222] text-[2.5rem] font-semibold leading-[2.75rem]">{t('help_me_choose_widget_answer1_subtitle')}</h1>
                  </div>
                  <div className="block">
                    <h1 className="text-blue-600 text-[2.5rem] font-semibold leading-[2.75rem]">{firstYes || secondYes ? 'Anonim Şirket' : 'LLC'}</h1>
                  </div>
                </div>
              </div>}
          </div>
          <div className="mx-auto max-w-sm">
            <div className="block py-1">
              {firstYes || secondYes
                ?
                <ul>
                  <li className="flex items-start gap-4 py-1">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]"> {t('help_me_choose_widget_answer1_text1')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 py-2">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]">
                        {t('help_me_choose_widget_answer1_text2')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 py-2">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]"> {t('help_me_choose_widget_answer1_text3')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 py-2">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]">
                        {t('help_me_choose_widget_answer1_text4')}
                      </p>
                    </div>
                  </li>
                </ul>
                : <ul>
                  <li className="flex items-start gap-4 py-1">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]"> {t('help_me_choose_widget_answer2_text1')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 py-2">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]">
                        {t('help_me_choose_widget_answer2_text2')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 py-2">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]"> {t('help_me_choose_widget_answer2_text3')}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 py-2">
                    <div>
                      <img src={tickicon} className='w-6 h-6' alt='tick icon' />
                    </div>
                    <div className="w-full">
                      <p className="text-lg font-semibold leading-6 text-[#222222]">
                        {t('help_me_choose_widget_answer2_text4')}
                      </p>
                    </div>
                  </li>
                </ul>}
            </div>
            <div className="py-6">
              <Link to={`/${i18n.language}/state`} state={{ text: text }}>
                <button className="py-6 px-6 text-center bg-[#1649FF] rounded-[1.25rem] border border-blue-600 text-white text-[1.375rem] leading-[1.625rem] w-full font-semibold">
                  <h4>{t('help_me_choose_widget_answer1_button')}</h4>
                </button>
              </Link>
            </div>
            <div className="pb-12 pt-1">
              <Link to={`/${i18n.language}/start-my-business/`} state={{ text: text }}>
                <button className="text-center text-[#1649FF] text-[1.375rem] leading-[1.625rem] w-full font-semibold">
                  <h4>Take the survey again</h4>
                </button>
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
