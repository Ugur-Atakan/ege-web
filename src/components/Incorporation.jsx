export default function Incorporation() {
    return (
        <div className="mx-auto max-w-7xl px-8 py-24">
            <div className="block md:flex items-center gap-12 pb-24">
                <div className="w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                        alt=""
                    />
                </div>
                <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h2 className="pt-8 md:pt-0 font-semibold leading-6 text-blue-600">Start Your Business</h2>
                    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Post Incorporation</h3>
                    <p className="mt-4 text-lg text-gray-500">
                        Once your company has gone through the formation process, it exists and its internal affairs are then governed by the Delaware corporate laws. But this doesn’t mean business set-up is truly over. This process involves certain additional steps, namely drafting a number of legal documents neccessary for your business to be ready to operate and take on investment.
                    </p>
                    <button className='mt-8'>
                    <a
                      href="/contact"
                      className="shadow rounded-md border border-transparent font-medium text-white bg-blue-600 px-4 py-3 text-md hover:bg-white hover:text-blue-600 hover:border-blue-600"
                    >
                      Contact Us
                    </a>
                    </button>
                </div>
            </div>
            <div className="flex-col-reverse md:flex-row flex items-center gap-12">
                <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Why you need this</h3>
                    <p className="mt-4 text-lg text-gray-500">These documents are mainly; </p>
                    <ul className="pl-6 mt-2 list-disc">
                        <li className="text-lg text-gray-500">Bylaws</li>
                        <li className="text-lg text-gray-500">Unanimous written consent in lieu of the first meeting of the board of directors</li>
                        <li className="text-lg text-gray-500">Founders stock purchase agreements</li>
                        <li className="text-lg text-gray-500">IP assignment agreements</li>
                        <li className="text-lg text-gray-500">Indemnification agreements for directors</li>
                        <li className="text-lg text-gray-500">Written consent of stockholders</li>
                        <li className="text-lg text-gray-500">Stock certificates for founders’ shares</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}