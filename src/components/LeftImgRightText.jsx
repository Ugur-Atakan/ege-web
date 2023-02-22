import { Link } from "react-router-dom"
export default function LeftImgRightText(props) {
    return (
        <div className={props.bgblue ?"bg-gradient-to-r from-[#004B9D] to-[#001E3F]" :"bg-transparent"}>
            <div className="mx-auto max-w-7xl px-8 py-12">
                <div className={props.reverse ? "block md:flex flex-row-reverse items-center gap-12 pt-16" : "block md:flex items-center gap-12 pt-16"}>
                    <div className="w-full md:w-1/2">
                        <img
                            className="rounded-lg shadow-lg"
                            src={props.img}
                            alt=""
                        />
                    </div>
                    <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                        <h2 className="pt-8 md:pt-0 font-semibold leading-6 text-blue-600">{props.heading}</h2>
                        <h3 className={props.bgblue ?"mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl" : "mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"}>{props.title}</h3>
                        <p className={props.bgblue ?"mt-4 text-lg text-white"   :"mt-4 text-lg text-gray-500"}>
                            {props.desc}
                        </p>
                        <button className='mt-8'>
                            <Link
                                to={props.href}
                                className={props.button && "shadow rounded-md border border-transparent font-medium text-white bg-blue-600 px-4 py-3 text-md hover:bg-white hover:text-blue-600 hover:border-blue-600"}
                            >
                                {props.button}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}