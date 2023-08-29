import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import bluecheckicon from '../images/bluecheck.png';
import blackcheckicon from '../images/blackcheck.png';
import { useTranslation } from "react-i18next";
import { useState } from "react";

const packagesName = ['Doola', 'Zenbusiness', 'Legalzoom', 'Firstbase']

const packages = [
    { name: 'Same Day Processing', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'Fast and headache free EIN', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'US Bank Account Assistance', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <img src={blackcheckicon} alt='icon' />, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'Registered Agent', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <img src={blackcheckicon} alt='icon' />, zenbusiness: <div className="text-black">$199</div>, legalzoom: <div className="text-black">$249</div>, firstbase: <div className="text-black">$100</div> },
    { name: 'Apostille service with extra charge ', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'State filing fees included in first year cost ', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <img src={blackcheckicon} alt='icon' /> },
    { name: 'Total First Year Cost ', icon: <InformationCircleIcon />, registate: '$232', doola: <div className="text-black">$297</div>, zenbusiness: <div className="text-black">$449</div>, legalzoom: <div className="text-black">$510</div>, firstbase: <div className="text-black">$499</div>, description: 'Based on Wyoming state —the best choice for LLC' },
]

export default function Compare() {
    const { i18n } = useTranslation();
    const [selectedPackageName, setSelectedPackageName] = useState('');

    const handleSelectedPackageName = (e) => {
        setSelectedPackageName(e.target.value);
    }
    return (
        <div className="bg-[#ECEFF1]">
            <div className="mx-auto max-w-[966px] p-6 lg:px-12">
                <div className="text-left lg:text-center pt-12 lg:pt-8">
                    <h1 className="font-bold text-[32px] lg:text-[64px] text-[#222222] leading-[38px] lg:leading-[64px]">Compare and save money <span className="text-[#1649FF] font-bold ">with our Starter package</span></h1>
                </div>
            </div>
            <div className="mx-auto max-w-md px-6 py-0 lg:px-12">
                <div className="text-left lg:text-center">
                    <h1 className="font-bold text-lg text-[#222222]">Registate is a <span className="text-[#1649FF] mr-1 font-bold ">on-stop shop</span>for all business forming and scaling services.</h1>
                </div>
            </div>
            <div className="mx-auto max-w-7xl p-6 lg:px-12">
                <div className="hidden lg:block">
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8  overflow-y-scroll">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className=" py-3.5 pl-4 pr-3 text-center text-sm font-semibold sm:pl-0">
                                                <span className="sr-only"></span>
                                            </th>
                                            <th scope="col" className="compare-registate relative overflow-visible px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#1649FF] bg-white w-[180px] rounded-tl-3xl rounded-tr-3xl">
                                                Registate
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#222222] w-[180px]">
                                                Doola
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#222222] w-[180px]">
                                                Zen Business
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#222222] w-[180px]">
                                                Legal Zoom
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#222222] w-[180px]">
                                                Firstbase
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packages.map((person, index) => (
                                            <tr key={index}>
                                                <td
                                                    className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0"

                                                >
                                                    <div className="flex items-center gap-2 w-[285px]">
                                                        <div className="w-6 h-6">
                                                            <InformationCircleIcon className="text-[#1649FF] w-6 h-6" />
                                                        </div>
                                                        <span className="text-[#222222] text-lg font-semibold whitespace-normal">{person.name}</span>
                                                    </div>
                                                    {person.description &&
                                                        <div className="ml-8 whitespace-normal mt-1 mr-12">
                                                            <span className="text-[14px] leading-[20px] text-[#22222266] font-semibold ">{person.description}</span>
                                                        </div>
                                                    }
                                                </td>
                                                <td
                                                    className={`whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold text-[#1649FF] bg-white w-[180px]
                                                     ${index === packages.length - 1 ? "last-row" : ""}`}
                                                ><div className="flex items-center justify-center"><div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.registate}</div></div></td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.doola}</div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.zenbusiness}</div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.legalzoom}</div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.firstbase}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-24">
                        <Link
                            to={`/${i18n.language}/company-type`}
                            className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                        >
                            Open a business
                        </Link>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <select
                        id="packages"
                        name="packages"
                        value={selectedPackageName}
                        className="font-semibold border-[#222222] text-[#222222] bg-transparent w-full my-2 rounded-[20px] p-4 focus:border-[4px] outline-none"
                        onChange={handleSelectedPackageName}
                    >
                        {packagesName.map((pac, index) => (
                            <option
                                key={pac.index}
                                value={pac}
                            >
                                {`Compare with ${pac}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="block lg:hidden">
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8  overflow-y-scroll">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className=" py-3.5 pl-4 pr-3 text-center text-sm font-semibold sm:pl-0">
                                                <span className="sr-only"></span>
                                            </th>
                                            <th scope="col" className="relative overflow-visible px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#1649FF] w-20">
                                                Registate
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[18px] lg:text-[22px] text-[#222222] w-20">
                                                {selectedPackageName ? selectedPackageName : 'Doola'}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packages.map((pac, index) => (
                                            <tr key={index}>
                                                <td
                                                    className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-0"
                                                >
                                                    <div className="flex items-center gap-2 ">
                                                        <span className="text-[#222222] text-[16px] leading-[22px] lg:text-lg font-semibold whitespace-normal">{pac.name}</span>
                                                    </div>
                                                </td>
                                                <td
                                                    className={`whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold text-[#1649FF] w-[180px]
                                                     ${index === packages.length - 1 ? "last-row" : ""}`}
                                                ><div className="flex items-center justify-center"><div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{pac.registate}</div></div></td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[18px] lg:text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === packages.length - 1 ? 'width-auto' : 'w-[25px] text-center'}> {selectedPackageName ? pac[selectedPackageName.toLowerCase()] : pac.doola}</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-6 pb-16">
                        <Link
                            to={`/${i18n.language}/company-type`}
                            className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248] w-full text-center"
                        >
                            Open a business
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
