import {
  ArrowUturnDownIcon,
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function StartOnbarding() {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(0);
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
  document.body.classList.add("bg-slate-50");

  return (
    <>
      {page === 0 && (
        <div className="mt-24 lg:fixed lg:left-1/2 lg:bg-white lg:shadow-xl lg:rounded-lg lg:-translate-x-1/2 -lg:translate-y-1/2">
          <div className="open-animation">
            <div className="pt-4">
              <h1 className="text-center text-black text-2xl font-bold px-12 lg:px-24">
                {t('help_me_choose_widget_header1_uptitle')}
              </h1>
            </div>
            <div className="block items-center gap-2 px-8 py-4">
              <div className="w-full">
                <div className="bg-white border border-blue-600 rounded-lg p-8 relative ">
                  <div>
                    <h1 className="font-bold text-black text-lg border-b border-gray-400">
                      {t('help_me_choose_widget_box1_title')}
                    </h1>
                  </div>
                  <div className="block py-1">
                    <ul className="text-base leading-7 text-gray-600">
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <CheckBadgeIcon className="w-4 text-green-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box1_text_1')}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <CheckBadgeIcon className="w-4 text-green-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box1_text_2')}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <CheckBadgeIcon className="w-4 text-green-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box1_text_3')}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <ExclamationCircleIcon className="w-4 text-red-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box1_text_4')}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span className="flex justify-center text-black font-bold">vs</span>
              <div className="w-full">
                <div className="bg-white border border-blue-600 rounded-lg p-8 relative">
                  <div>
                    <h1 className="font-bold text-black text-lg border-b border-gray-400">
                      {t('help_me_choose_widget_box2_title')}
                    </h1>
                  </div>
                  <div className="block py-1">
                    <ul className="text-base leading-7 text-gray-600">
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <CheckBadgeIcon className="w-4 text-green-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box2_text_1')}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <CheckBadgeIcon className="w-4 text-green-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box2_text_2')}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <CheckBadgeIcon className="w-4 text-green-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box2_text_3')}
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4 text-sm py-1">
                        <div>
                          <ExclamationCircleIcon className="w-4 text-red-500" />
                        </div>
                        <div>
                          <p>
                            {t('help_me_choose_widget_box2_text_4')}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pb-4">
              <Link
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="bg-blue-600 rounded-lg text-base font-semibold text-white shadow-sm p-4 cursor-pointer border border-blue-600 hover:bg-white hover:text-blue-600"
              >
                {t('help_me_choose_widget_button')}
              </Link>
            </div>
          </div>
        </div>
      )}
      {page === 1 && (
        <div className="mt-24 lg:fixed lg:left-1/2 lg:bg-white lg:shadow-xl lg:rounded-lg lg:-translate-x-1/2 -lg:translate-y-1/2">
          <div className="open-animation">
            <div
              className="ml-4 mt-4 flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <ArrowUturnDownIcon className="w-4 text-black rotate-90" />
              <button className="text-black">{t('help_me_choose_widget_question1_button_back')}</button>
            </div>
            <div className="pt-6 px-12">
              <h1 className="text-center text-black text-2xl font-bold">
                {t('help_me_choose_widget_question1_question')}
              </h1>
            </div>
            <div className="flex justify-center pt-8">
              <button onClick={firstYesAnswer} className={firstYes ? "border border-blue-600 bg-blue-200 rounded-lg border border-blue-600 text-blue-600 w-96 h-16 font-bold" : "rounded-lg border border-blue-600 text-blue-600 w-96 h-16"}>
                {t('help_me_choose_widget_question1_answer1')}
              </button>
            </div>
            <div className="flex justify-center pt-5">
              <button onClick={firstNoAnswer} className={firstNo ? "border border-blue-600 bg-blue-200 rounded-lg border border-blue-600 text-blue-600 w-96 h-16 font-bold" : "rounded-lg border border-blue-600 text-blue-600 w-96 h-16"}>
                {t('help_me_choose_widget_question1_answer2')}
              </button>
            </div>
            <div className="flex justify-center pt-5">
              <button onClick={firstNotSureAnswer} className={firstNotSure ? "border border-blue-600 bg-blue-200 rounded-lg border border-blue-600 text-blue-600 w-96 h-16 font-bold" : "rounded-lg border border-blue-600 text-blue-600 w-96 h-16"}>
                {t('help_me_choose_widget_question1_answer3')}
              </button>
            </div>
            <div className="flex justify-center my-12">
              <button
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="bg-blue-600 rounded-lg text-base font-semibold text-white shadow-sm cursor-pointer border border-blue-600 w-96 h-16"
              >
                {t('help_me_choose_widget_question1_button_next')}
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="mt-24 lg:fixed lg:left-1/2 lg:bg-white lg:shadow-xl lg:rounded-lg lg:-translate-x-1/2 -lg:translate-y-1/2">
          <div className="open-animation">
            <div
              className="ml-4 mt-4 flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <ArrowUturnDownIcon className="w-4 text-black rotate-90" />
              <button className="text-black">{t('help_me_choose_widget_question2_button_back')}</button>
            </div>
            <div className="pt-6 px-12">
              <h1 className="text-center text-black text-2xl font-bold">
                {t('help_me_choose_widget_question2_question')}
              </h1>
            </div>
            <div className="flex justify-center pt-8">
              <button onClick={secondYesAnswer} className={secondYes ? "border border-blue-600 bg-blue-200 rounded-lg border border-blue-600 text-blue-600 w-96 h-16 font-bold" : "rounded-lg border border-blue-600 text-blue-600 w-96 h-16"}>
                {t('help_me_choose_widget_question2_answer1')}
              </button>
            </div>
            <div className="flex justify-center pt-5">
              <button onClick={secondNoAnswer} className={secondNo ? "border border-blue-600 bg-blue-200 rounded-lg border border-blue-600 text-blue-600 w-96 h-16 font-bold" : "rounded-lg border border-blue-600 text-blue-600 w-96 h-16"}>
                {t('help_me_choose_widget_question2_answer2')}
              </button>
            </div>
            <div className="flex justify-center pt-5">
              <button onClick={secondNotSureAnswer} className={secondNotSure ? "border border-blue-600 bg-blue-200 rounded-lg border border-blue-600 text-blue-600 w-96 h-16 font-bold" : "rounded-lg border border-blue-600 text-blue-600 w-96 h-16"}>
                {t('help_me_choose_widget_question2_answer3')}
              </button>
            </div>
            <div className="flex justify-center my-12">
              <button
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="bg-blue-600 rounded-lg text-base font-semibold text-white shadow-sm cursor-pointer border border-blue-600 w-96 h-16"
              >
                {t('help_me_choose_widget_question2_button_next')}
              </button>
            </div>
          </div>
        </div>
      )}
      {page === 3 && (
        <div className="mt-24 lg:fixed lg:left-1/2 lg:bg-white lg:shadow-xl lg:rounded-lg lg:-translate-x-1/2 -lg:translate-y-1/2">
          <div className="open-animation">
            <div className="pt-12 px-0 lg:px-12">
              {i18n.language === 'en'
                ? <div className="block">
                  <div className="flex justify-center">
                    <h1 className="text-center text-black text-2xl font-bold">
                      {t('help_me_choose_widget_answer1_title')}
                    </h1>
                  </div>
                  <div className="flex justify-center items-start gap-4">
                    <div className="block">
                      <h1 className="text-blue-600 text-center text-4xl font-bold">{firstYes || secondYes ? 'Corporation' : 'LLC'}</h1>
                      <h2 className="text-center text-black text-[10px] font-bold p-1 rounded-lg">
                        {t('help_me_choose_widget_answer1_subtitle1')}
                      </h2>
                    </div>
                    <div className="block ">
                      <h1 className="text-blue-600 text-4xl font-bold"> {t('help_me_choose_widget_answer1_subtitle')}</h1>
                    </div>
                    <div className="block">
                      <h1 className="text-blue-600 text-4xl font-bold">{firstYes || secondYes ? 'Delaware' : 'Wyoming'}</h1>
                      <h2 className="text-black text-[10px] font-bold text-center p-1 rounded-lg">
                        {t('help_me_choose_widget_answer1_subtitle2')}
                      </h2>
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
                      <h1 className="text-blue-600 text-4xl font-bold">{firstYes || secondYes ? 'Delaware' : 'Wyoming'}</h1>
                      <h2 className="text-center text-black text-[10px] font-bold p-1 rounded-lg">
                      {t('help_me_choose_widget_answer1_subtitle2')}
                      </h2>
                    </div>
                    <div className="block ">
                      <h1 className="text-blue-600 text-4xl font-bold -ml-2">{t('help_me_choose_widget_answer1_subtitle')}</h1>
                    </div>
                    <div className="block">
                      <h1 className="text-blue-600 text-center text-4xl font-bold">{firstYes || secondYes ? 'Anonim Şirket' : 'LLC'}</h1>
                      <h2 className="text-black text-[10px] font-bold text-center p-1 rounded-lg">
                        {t('help_me_choose_widget_answer1_subtitle1')}
                      </h2>
                    </div>
                  </div>
                </div>}
            </div>
            <div className="mx-16 lg:mx-24 my-4 bg-white rounded-lg p-8 relative border border-blue-600">
              <div className="block py-1">
                {firstYes || secondYes
                 ? 
                <ul className="text-base leading-7 text-gray-600">
                  <li className="flex items-center gap-4 text-sm py-1">
                    <div>
                      <CheckBadgeIcon className="w-4 text-green-500" />
                    </div>
                    <div>
                      <p> {t('help_me_choose_widget_answer1_text1')}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-sm py-1">
                    <div>
                      <CheckBadgeIcon className="w-4 text-green-500" />
                    </div>
                    <div>
                      <p>
                        {t('help_me_choose_widget_answer1_text2')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-sm py-1">
                    <div>
                      <CheckBadgeIcon className="w-4 text-green-500" />
                    </div>
                    <div>
                      <p> {t('help_me_choose_widget_answer1_text3')}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-sm py-1">
                    <div>
                      <ExclamationCircleIcon className="w-4 text-red-500" />
                    </div>
                    <div>
                      <p>
                        {t('help_me_choose_widget_answer1_text4')}
                      </p>
                    </div>
                  </li>
                </ul>
                :<ul className="text-base leading-7 text-gray-600">
                <li className="flex items-center gap-4 text-sm py-1">
                  <div>
                    <CheckBadgeIcon className="w-4 text-green-500" />
                  </div>
                  <div>
                    <p> {t('help_me_choose_widget_answer2_text1')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-sm py-1">
                  <div>
                    <CheckBadgeIcon className="w-4 text-green-500" />
                  </div>
                  <div>
                    <p>
                      {t('help_me_choose_widget_answer2_text2')}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-sm py-1">
                  <div>
                    <CheckBadgeIcon className="w-4 text-green-500" />
                  </div>
                  <div>
                    <p> {t('help_me_choose_widget_answer2_text3')}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-sm py-1">
                  <div>
                    <ExclamationCircleIcon className="w-4 text-red-500" />
                  </div>
                  <div>
                    <p>
                      {t('help_me_choose_widget_answer2_text4')}
                    </p>
                  </div>
                </li>
              </ul>}
              </div>
            </div>
            <div className="flex justify-center mx-16 lg:mx-0 my-12">
              <Link to={"/pricing/form-my-company"} state={{ text: text }}>
                <button className="bg-blue-600 rounded-lg text-base font-semibold text-white shadow-sm cursor-pointer border border-blue-600 w-96 h-16">
                  {t('help_me_choose_widget_answer1_button')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
