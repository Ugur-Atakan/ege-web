import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline'

const EscapeButton = ({ lang }) => {
    return (
        <Link
            className="ml-4 mt-4 flex items-center gap-2 cursor-pointer w-fit"
            href={`/${lang}`}
        >
            <XMarkIcon className="w-6 text-black rotate-90" />
        </Link>
    );
}

export default EscapeButton
