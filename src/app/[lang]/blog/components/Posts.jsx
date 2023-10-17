import Image from 'next/image'

/**
 * Posts component for the blog page
 * @type {function} React client side component
 * @returns {JSX.Element} Rendered posts for the page
 */

const Posts = ({ lang, entry }) => {
    return (
        <div className="bg-white py-24 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#222222] sm:text-6xl">From the blog</h2>
                    <p className="mt-4 text-xl leading-8 text-[#222222]">
                        Read the latest posts from our blog. All articles are written by our team of experts, so you know you{"'"}re getting the best advice.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {entry?.posts.map((post) => (
                        <a href={`/${lang}/blogv2/${post.slug}`} key={post.id} className="flex flex-col items-start justify-between shadow-lg">
                           <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                                <div className='flex-shrink-0'>
                                <Image
                                    src={post.feature_image}
                                    alt='feature-image'
                                    className="aspect-[16/9] w-full rounded-tl-[20px] rounded-tr-[20px] bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    width={500}
                                    height={300}
                                />
                                </div>
                                <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                                    <div className='flex-1'>
                                    <h1 className='text-xl font-semibold text-[#222222]'>{post.title}</h1>
                                    <p className='mt-3 text-base text-[#222222]'> {post.excerpt.slice(0,120  )}...</p>
                                    </div>
                                    <div className='mt-6 flex items-center'>
                                    <div className='flex-shrink-0 bg-gray-100 rounded-[20px] text-xs px-2 py-1 text-[#222222] font-bold'>
                                        {post.created_at.slice(0,10)}
                                    </div>
                                    </div>
                                </div>
                           </div>
                        </a>
                    ))}
            </div>
        </div>
     </div >
    );
}

export default Posts