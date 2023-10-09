

const Comparison = ({ t, handleSelectCcorp, handleSelectLlc }) => {
    return (
        <>
            <div className='py-6'>
                <div className="md:mt-8 flow-root px-4 md:px-0">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300 sticky-table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                            {t('company_type_comparing_subtitle1')}
                                        </th>
                                        <th scope="col" className="hidden md:table-cell w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                            LLC
                                        </th>
                                        <th scope="col" className="hidden md:table-cell w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                            C-Corp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hidden md:block w-1/3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sr-only">
                                            sr only
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3 py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list1_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3 py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list1_ccorp')}</td>
                                    </tr>
                                    <tr>
                                        <td className="hidden md:w-1/3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 sr-only">
                                            sr only
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list2')}</td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list2_llc')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6'>
                <div className="md:mt-8 flow-root px-4 md:px-0">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                            {t('company_type_comparing_subtitle2')}
                                        </th>
                                        <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] ">
                                            LLC
                                        </th>
                                        <th scope="col" className="w-1/3  px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem]">
                                            C-Corp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 md:pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                            {t('company_type_comparing_list3')}
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list3_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list3_ccorp')}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">
                                            {t('company_type_comparing_list4')}
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list4_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list4_ccorp')}</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3 py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                            sr-only
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list5_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list5_ccorp')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6'>
                <div className="md:mt-8 flow-root px-4">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                            {t('company_type_comparing_subtitle3')}
                                        </th>
                                        <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                            LLC
                                        </th>
                                        <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                            C-Corp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hidden md:block py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                            sr-only
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list6_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list6_ccorp')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6'>
                <div className="md:mt-8 flow-root px-4">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-1/2 md:w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                            {t('company_type_comparing_subtitle4')}
                                        </th>
                                        <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                            LLC
                                        </th>
                                        <th scope="col" className="hidden md:block w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                            C-Corp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="hidden md:block py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                            sr-only
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list7_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list7_ccorp')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-6'>
                <div className="md:mt-8 flow-root px-4">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                            {t('company_type_comparing_subtitle5')}
                                        </th>
                                        <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] md:sr-only">
                                            LLC
                                        </th>
                                        <th scope="col" className="w-1/3  px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] md:sr-only">
                                            C-Corp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 md:pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                            {t('company_type_comparing_list8')}
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list8_llc')}</td>
                                        <td className="w-1/3 pr-3 md:px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list8_ccorp')}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                            sr-only
                                        </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list9_llc')} </td>
                                        <td className="w-1/3 pr-3 md:px-3  py-4 text-[16px] leading-[22px] md:text-lg font-semibold md:leading-[1.5rem] text-[#222222]">{t('company_type_comparing_list9_ccorp')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block pt-6 pb-32'>
                <div className="md:mt-8 flow-root px-12">
                    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-0">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-1/3 py-3.5 md:pl-4 pr-3 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sm:pl-0">
                                            {t('company_type_comparing_subtitle6')}
                                        </th>
                                        <th scope="col" className="w-1/3 px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                            LLC
                                        </th>
                                        <th scope="col" className="w-1/3    px-3 py-3.5 text-left text-[1.375rem] font-semibold text-[#222222] leading-[1.625rem] sr-only">
                                            C-Corp
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='relative'>
                                    <tr>
                                        <td className="py-4 md:pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0">
                                            {t('company_type_comparing_list10')}
                                        </td>
                                        <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list10_llc')}</td>
                                        <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"> {t('company_type_comparing_list10_ccorp')}</td>
                                    </tr>
                                    <tr className='relative -bottom-12'>
                                        <td className="py-4 pl-4 pr-3 text-lg font-semibold leading-[1.5rem] text-[#222222] sm:pl-0 sr-only">
                                            sr-only
                                        </td>
                                        <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"><button className='py-3 px-12 rounded-2xl bg-[#1649FF] text-white text-lg font-semibold leading-6' onClick={handleSelectLlc}>{t('company_type_comparing_list_button_blue')}</button></td>
                                        <td className="w-1/3 px-3 py-4 text-lg font-semibold leading-[1.5rem] text-[#222222]"><button className='py-3 px-12 rounded-2xl bg-[#9EE248] text-white text-lg font-semibold leading-6' onClick={handleSelectCcorp}>{t('company_type_comparing_list_button_green')}</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comparison