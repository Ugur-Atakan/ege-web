export default function Requirements(props) {
    return (
        <div className="mx-auto max-w-7xl px-8 py-12">
            <div className='block md:flex gap-12 items-center'>
                <div className="pb-8 md:pb-0">
                    <h1 className="text-3xl text-black font-bold sm:text-4xl">{props.title}</h1>
                </div>
                <div>
                <p className="text-lg text-gray-500">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}
