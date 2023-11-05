'use client'

import React from 'react'
import Image from 'next/image'
import {
    LinkedinShareButton,
    LinkedinIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'next-share'

const Right = ({ author }) => {
    const getCurrentUrl = () => {
        if (typeof window !== 'undefined') {
            return window.location.href
        }
    }

    return (
        <div className='flex flex-col'>
            <div className="items-center gap-4 inline-flex">
                <Image width={16} height={16} className="w-16 h-16 rounded-full" src={author.profile_image || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' } alt="image-icon"/>
                <div className="flex-col justify-start items-start">
                    <div className="text-neutral-800 text-lg font-semibold leading-normal">{author.name}</div>
                    <div className="text-zinc-500 text-lg font-semibold leading-normal">{author.meta_description}</div>
                </div>
            </div>

            <div className="flex-col justify-start items-start mt-4 gap-5 inline-flex">
                <h1 className="self-stretch text-neutral-800 text-[28px] font-semibold font-['Inter'] leading-loose">Share</h1>
                
                <div className="justify-start items-start gap-4 inline-flex">
                    <div className="flex justify-center space-x-3">
                        <FacebookShareButton
                            url={getCurrentUrl()}
                            quote={'Check out this blog post!'}
                            hashtag={'#registate'}
                        >
                            <FacebookIcon size={55} round />
                        </FacebookShareButton>

                        <LinkedinShareButton url={getCurrentUrl()} >
                            <LinkedinIcon size={55} round />
                        </LinkedinShareButton>

                        <TwitterShareButton
                            url={getCurrentUrl()}
                            title={'Check out this blog post on Registate'}
                        >
                            <TwitterIcon size={55} round />
                        </TwitterShareButton>

                        <WhatsappShareButton
                            url={getCurrentUrl()}
                            title={'Check out this blog post on Registate'}
                            separator=":: "
                            >
                            <WhatsappIcon size={55} round />
                        </WhatsappShareButton>
                    </div>               
                </div>
            </div>
        </div>
    );
};

export default Right
