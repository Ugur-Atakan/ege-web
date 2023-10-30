import React from 'react'
import Image from 'next/image'

const Authors = ({ authors }) => {
    return (
        <div className='my-8'> 
            <h3 className='text-neutral-800 text-[28px] font-semibold leading-loose'>Authors</h3>
            
            <ul className='flex flex-col space-y-4'>
                {authors.map(author => (
                    <li key={author.id} className="flex items-center space-x-4"> 
                        <Image 
                            width={80}
                            height={80}
                            className="w-102 h-102 rounded-full" 
                            src={author.profile_image || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' }
                            alt={author.name} 
                        />
                        <div>
                            <h4 className='text-neutral-800 text-lg font-semibold leading-normal'>{author.name}</h4>
                            <p className='text-zinc-500 text-lg font-semibold leading-normal'>{author.bio}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Authors
