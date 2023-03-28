import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { useTranslation } from 'react-i18next';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [entry, setEntry] = useState(false);
    const { t, i18n } = useTranslation();
    const { id } = useParams();

    const client = createClient({
        space: "tp461zcs8786",
        accessToken: "HZog-kEbEIGWyp-6vtPfekr6EXkE5g2GNIHlmyt_hH8"
    });

    useEffect(() => {
        // if id is not defined, get all posts
        if (!id) {
            const getEntries = async () => {
                try {
                    await client.getEntries({ content_type: "blogPost" }).then((entries) => {
                        setPosts(entries.items);
                    })
                } catch (error) {
                    console.log(error);
                }
            }
            getEntries();
        } else {
            // if id is defined, get single post
            const getEntry = async () => {
                try {
                    await client.getEntry(id).then((entry) => {
                        setEntry(entry);
                    })
                } catch (error) {
                    console.log(error);
                }
            }
            getEntry();
        }
    }, [id]);
    console.log(posts)

    return (
        <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                {entry
                    ? null
                    : <><div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('blog_header')}</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                            {t('blog_description')}
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post, key) => (
                        <>
                            {post.fields.language === 'Turkish' && i18n.language === 'tr'
                                && <Link to={`/${i18n.language}/blog/` + post.sys.id} key={key}>
                                    <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src={post.fields.image.fields.file.url} alt={post.fields.image.fields.title} />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                            <div className="flex-1">
                                                <Link to={`/${i18n.language}/blog/` + post.sys.id}  className="mt-2 block">
                                                    <p className="text-xl font-semibold text-gray-900">{post.fields.title}</p>
                                                    <p className="mt-3 text-base text-gray-500">{post.fields.slug}</p>
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Link to="#.">
                                                        <span className="sr-only">{post.fields.author}</span>
                                                    </Link>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <Link to="#." className="hover:underline">
                                                            {post.fields.author}
                                                        </Link>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={post.sys.createdAt}>{post.sys.createdAt.substring(0, 10)}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                            {post.fields.language === 'English' && i18n.language === 'en'
                                && <Link to={`/${i18n.language}/blog/` + post.sys.id} key={key}>
                                    <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src={post.fields.image.fields.file.url} alt={post.fields.image.fields.title} />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                            <div className="flex-1">
                                                <Link to={`/${i18n.language}/blog/` + post.sys.id} className="mt-2 block">
                                                    <p className="text-xl font-semibold text-gray-900">{post.fields.title}</p>
                                                    <p className="mt-3 text-base text-gray-500">{post.fields.slug}</p>
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <Link to="#.">
                                                        <span className="sr-only">{post.fields.author}</span>
                                                    </Link>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <Link to="#." className="hover:underline">
                                                            {post.fields.author}
                                                        </Link>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime={post.sys.createdAt}>{post.sys.createdAt.substring(0, 10)}</time>
                                                        <span aria-hidden="true">&middot;</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                        </>
                    ))}
                </div></>
                }


                {entry && (
                    <div className="relative mx-auto max-w-4xl">
                        <img className="w-full shadow-xl rounded-xl h-128 object-cover" src={entry.fields.image.fields.file.url} alt={entry.fields.image.fields.title} />
                        <h1 className="py-6 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            {entry.fields.title}
                        </h1>
                        <p className="mt-12 text-lg text-gray-500">
                            {entry.fields.slug}
                        </p>
                        {entry.fields.bodyText.content.map((node, index) => (
                            node.nodeType === "paragraph" && (
                                <p key={index} className="text-lg text-gray-500 py-2">
                                    {
                                        node.content.map((nodecontent) => (
                                            nodecontent.nodeType === "text" && (
                                                nodecontent.value + " "
                                            )
                                        ))
                                    }
                                </p>
                            )
                            || node.nodeType === "heading-3" && (
                                <h2 className="text-2xl text-gray-500 py-6 font-bold">
                                    {
                                        node.content.map((nodecontent) => (
                                            nodecontent.nodeType === "text" && (
                                                nodecontent.value + " "
                                            )
                                        ))
                                    }
                                </h2>
                            )
                            || node.nodeType === "unordered-list" && (
                                node.content.map((nodecontent) => (
                                    nodecontent.nodeType === "list-item" && (
                                        nodecontent.content.map((nodecontenttwo) => (
                                            nodecontenttwo.nodeType === "paragraph" && (
                                                <li className="text-lg text-gray-500 py-2">
                                                {nodecontenttwo.content.map((nodecontentthree) => (
                                                    nodecontentthree.nodeType === "text" && (
                                                        nodecontentthree.value + " "
                                                    )
                                                ))}
                                                </li>
                                            )
                                        ))
                                    )
                                ))
                            )
                            || node.nodeType === "embedded-asset-block" && (
                                <img src={node.data.target.fields.file.url} className='rounded-lg shadow-lg my-8' alt={node.data.target.fields.file.title} />
                            )
                        ))}

                    </div>
                )}

            </div>
        </div>
    )
}

export default Blog