import { Link } from "react-router-dom";

export default function IncorporateBusiness() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl p-6 lg:px-12">
                <img
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
                <div className="flex items-start justify-between pt-12 pb-24 px-12">
                    <div className="w-[60%]">
                        <h1 className='font-bold  text-[64px] text-black leading-[64px] mb-24'>Incorporate business from anywhere</h1>
                        <Link
                            to="#"
                            className="rounded-2xl py-[14px] px-6 font-semibold text-lg text-[#222222] bg-[#9EE248]"
                        >
                            Open a business
                        </Link>
                    </div>
                    <div className="w-[40%] mt-4">
                       <div>
                       <p className="font-semibold text-lg leading-[24px]">You can incorporate a US business from almost anywhere on Earth. We’ll get you set up with a US business address.</p>
                       </div>
                       <div>
                        
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
