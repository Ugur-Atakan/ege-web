import React from 'react'
import { useRouter } from 'next/navigation'

const Popular = ({ lang, popular }) => {
    const router = useRouter()

    return (
        <div className="flex flex-col my-5 space-y-5">
            <h1 className="text-2xl font-bold">Popular Articles</h1>
            {popular.map((article, index) => (
                <div onClick={() => router.push(`/${lang}/blog/${article.slug}`)} key={index} className="cursor-pointer text-neutral-800 text-lg font-semibold leading-normal">{article.title}</div>
            ))}
        </div>
    );
};

export default Popular
