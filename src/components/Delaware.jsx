import delaware from '../images/delaware.webp'

export default function Delaware() {
    return (
        <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl text-black font-bold text-center sm:text-4xl py-16">What are the types of documents<br />that can be apostilled in Delaware?</h1>
            </div>
            <div className="block md:flex flex-row-reverse items-center gap-12 pt-16">
                <div className="w-full md:w-1/2">
                    <img
                        className="rounded-lg shadow-lg"
                        src={delaware}
                        alt=""
                    />
                </div>
                <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                    <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">Examples of State-issued corporate documents</h3>
                    <ul className="my-4 text-lg text-gray-500 list-disc ml-8">
                        <li>Certificate of Formation</li>
                        <li>Certificate of Incorporation</li>
                        <li>Certificate of Good Standing</li>
                        <li>Certificate of Authority</li>
                    </ul>
                    <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">Examples of State-issued corporate documents</h3>
                    <ul className="my-4 text-lg text-gray-500 list-disc ml-8">
                        <li>Power of Attorneys</li>
                        <li>Certificate of Incumbency</li>
                    </ul>
                    <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight text-blue-600">Examples of State-issued corporate documents</h3>
                    <ul className="my-4 text-lg text-gray-500 list-disc ml-8">
                        <li>Certificate of Incumbency</li>
                        <li>Adoption Certificates</li>
                        <li>Death Certificates</li>
                        <li>Driver’s Lisenses</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
