import dejectedman from '../images/dejected-man.webp'
import highfive from '../images/professionals-high-five.webp'
import calcuulate from '../images/calculating-data.webp'

const posts = [
    {
        title: 'Seven Common Business Mistakes Every Entrepreneur Should Avoid',
        href: '#',
        category: { name: 'Business Ideas & Tips', href: '#' },
        description:
            'It’s human to err. However, to grow your business efficiently, you should be aware of the most common business mistakes so that you can avoid them...',
        date: '11/04/2022',
        datetime: '11/04/2022',
        imageUrl:
            dejectedman,
        readingTime: '6 min',
        author: {
            name: 'Derick Quinanola '
        },
    },
    {
        title: 'How A Delaware Registered Agent Can Help Your Business',
        href: '#',
        category: { name: 'Business Ideas & Tips', href: '#' },
        description:
            'Starting a business in the First State? If so, you’re going to need to hire a Delaware registered agent. Here are some of the many ways you can benefit:',
        date: '11/03/2022',
        datetime: '11/03/2022',
        imageUrl:
            highfive,
        readingTime: '3 min',
        author: {
            name: 'Mark Rosario '
        },
    },
    {
        title: 'Investment Strategies for Startup Business Owners',
        href: '#',
        category: { name: 'Business Ideas & Tips', href: '#' },
        description:
            'Startup? Looking to grow and diversify? Read on to learn about the various investment strategies you can use to increase your revenue:',
        date: '11/01/2022',
        datetime: '11/01/2022',
        imageUrl:
          calcuulate,
        readingTime: '2 min',
        author: {
            name: 'Derick Quinanola '
        },
    }
]

export function Blogs() {
    return (
        <div className="relative bg-gray-50 px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Recent Stories</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                    Small Business Strategies & Ideas That Work!
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href='#.'>
                                            <span className="sr-only">{post.author.name}</span>
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href='#.' className="hover:underline">
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.datetime}>{post.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{post.readingTime} read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
