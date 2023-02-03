import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { ArrowUturnDownIcon } from "@heroicons/react/24/outline";


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [entry, setEntry] = useState(false);

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
                        console.log(entries);
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
                        console.log(entry);
                        setEntry(entry);
                    })
                } catch (error) {
                    console.log(error);
                }
            }
            getEntry();
        }
    }, [id]);

    return (
        <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                {entry
                    ? null
                    : <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                            Read the latest posts from our blog. All articles are written by our team of experts, so you know you're getting the best advice.
                        </p>
                    </div>
                }
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.fields.image.fields.file.url} alt={post.fields.image.fields.title} />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <a href={"/blog/" + post.sys.id} className="mt-2 block">
                                        <p className="text-xl font-semibold text-gray-900">{post.fields.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.fields.slug}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#">
                                            <span className="sr-only">{post.fields.author}</span>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#" className="hover:underline">
                                                {post.fields.author}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.sys.createdAt}>{post.sys.createdAt}</time>
                                            <span aria-hidden="true">&middot;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

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
                                <h2 className="text-2xl text-gray-500 py-6 font-bold text-black">
                                    {
                                        node.content.map((nodecontent) => (
                                            nodecontent.nodeType === "text" && (
                                                nodecontent.value + " "
                                            )
                                        ))
                                    }
                                </h2>
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