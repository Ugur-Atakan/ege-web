import React from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from '../components/common/Footer'

/**
 * Page component for the blog page
 * @type {function} Page route for the blog page
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
 */

const getPosts = async () => {  
  const queryParams = new URLSearchParams({
    key: process.env.NEXT_PUBLIC_BLOG_API_KEY,
    include: 'authors,tags'
  })
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}${queryParams}`, {
        method: 'GET',
        next: {
          revalidate: 300 // Revalidate from data source every 5 minutes
        }
    })

    return res.json()
}

const Page = async ({ params: { lang } }) => {
  const postsData = getPosts();
  const [posts] = await Promise.all([postsData]);

  return (
    <main>
      <Header lang={lang} />
      <Posts entry={posts} />
      <Footer lang={lang} /> 
    </main>
  )
}

export default Page
