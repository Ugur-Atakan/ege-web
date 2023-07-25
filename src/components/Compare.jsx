import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import bluecheckicon from '../images/bluecheck.png';
import blackcheckicon from '../images/blackcheck.png';
const people = [
    { name: 'Same Day Processing', icon: <InformationCircleIcon />, registate:<img src={bluecheckicon} alt='icon' />, doola:<div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'Fast and headache free EIN', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'US Bank Account Assistance', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <img src={blackcheckicon} alt='icon' />, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'Registered Agent', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <img src={blackcheckicon} alt='icon' />, zenbusiness: <div className="text-black">$199</div>, legalzoom: <div className="text-black">$249</div>, firstbase: <div className="text-black">$100</div> },
    { name: 'Apostille service with extra charge ', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <div className="sr-only">-</div> },
    { name: 'State filing fees included in first year cost ', icon: <InformationCircleIcon />, registate: <img src={bluecheckicon} alt='icon' />, doola: <div className="sr-only">-</div>, zenbusiness: <div className="sr-only">-</div>, legalzoom: <div className="sr-only">-</div>, firstbase: <img src={blackcheckicon} alt='icon' /> },
    { name: 'Total First Year Cost ', icon: <InformationCircleIcon />, registate: '$232', doola: <div className="text-black">$297</div>, zenbusiness: <div className="text-black">$449</div>, legalzoom: <div className="text-black">$510</div>, firstbase: <div className="text-black">$499</div> },
]

export default function Compare() {
    return (
        <>
            <div className="mx-auto max-w-4xl p-6 lg:px-12">
                <div className="text-center">
                    <h1 className="font-bold text-[64px] text-[#222222]">Compare and save money <span className="text-[#1649FF] font-bold ">with our Starter package</span></h1>
                </div>
            </div>
            <div className="mx-auto max-w-md p-6 lg:px-12">
                <div className="text-center">
                    <h1 className="font-bold text-lg text-[#222222]">Registate is a <span className="text-[#1649FF] mr-1 font-bold ">on-stop shop</span>for all business forming and scaling services.</h1>
                </div>
            </div>
            <div className="mx-auto max-w-7xl p-6 lg:px-12">
                <div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className=" py-3.5 pl-4 pr-3 text-center text-sm font-semibold sm:pl-0">
                                                <span className="sr-only"></span>
                                            </th>
                                            <th scope="col" className="compare-registate relative overflow-visible px-3 py-3.5 text-center font-semibold text-[22px] text-[#1649FF] bg-white w-[180px] rounded-tl-3xl rounded-tr-3xl">
                                                Registate
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[22px] text-[#222222] w-[180px]">
                                                Doola
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[22px] text-[#222222] w-[180px]">
                                                Zen Business
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[22px] text-[#222222] w-[180px]">
                                                Legal Zoom
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-center font-semibold text-[22px] text-[#222222] w-[180px]">
                                                Firstbase
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {people.map((person, index) => (
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
                                                </td>
                                                <td
                                                    className={`whitespace-nowrap px-3 py-4 text-[22px] font-semibold text-[#1649FF] bg-white w-[180px]
                                                     ${index === people.length - 1 ? "last-row" : ""}`}
                                                ><div className="flex items-center justify-center"><div className={index === people.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.registate}</div></div></td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === people.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.doola}</div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === people.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.zenbusiness}</div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === people.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.legalzoom}</div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-[22px] font-semibold w-[180px] text-[#1649FF]">
                                                    <div className="flex items-center justify-center">
                                                        <div className={index === people.length - 1 ? 'width-auto' : 'w-[25px] text-center'}>{person.firstbase}</div>
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
                            to="#"
                            className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                        >
                            Open a business
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}
