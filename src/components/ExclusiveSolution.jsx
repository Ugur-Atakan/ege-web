function ExclusiveSolution() {
    return (
        <div className="mx-auto max-w-7xl px-8 py-24 lg:px-8">
            <div className="block md:flex items-center gap-24">
                <div className="w-full md:w-1/2">
                    <h2 className="pt-8 md:pt-0 font-semibold leading-6 text-blue-600">Exclusive Solution</h2>
                    <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Want to be fully compliant?</h3>
                    <p className="mt-4 text-lg text-gray-500">
                        Maintaining a company is as important as forming one. In order to not face hefty fines or penalties, choose one of our compliance packages!
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <p className="mt-4 text-lg text-gray-500">
                        We provide comprehensive services from compliance, filing, business set up, mailbox, bookkeeping, tax filing and more.
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
        </div>
    )
}

export default ExclusiveSolution