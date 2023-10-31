import React from 'react'
import Link from 'next/link'

const BackButton = ({ lang }) => { 
    return (
        <Link
            className="mx-[56px] my-[56px] h-6 justify-center items-center gap-2 inline-flex"
            href={`/${lang}/blog`}
        >
            <div className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-normal">{"<-"} Back to Blog </div>
        </Link>
    );
};

export default BackButton
