'use client';

import React, { useEffect } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Footer from '../components/common/Footer'

/**
 * Page component for the blog page
 * @type {function} Page route for the blog page
 * @param {object} lang - Language object from useTranslation hook
 * @type {client}
 * @returns {JSX.Element} Rendered content for the page
 */

const Page = ({ params: { lang } }) => {
  const [posts, setPosts] = React.useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blog/get-all-posts')
      const posts = await res.json()
      setPosts(posts)
    }
    fetchPosts()
  }, [])

  return (
    <main>
      <Header lang={lang} />
      {posts && <Posts entry={posts} />}
      <Footer lang={lang} /> 
    </main>
  )
}

export default Page
