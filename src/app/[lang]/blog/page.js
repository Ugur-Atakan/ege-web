import Header from './components/Header'
import Navbar from '../v2/components/Hero/Navbar'
import Posts from './components/Posts'
import Footer from '../components/common/Footer'

import axios from 'axios'

/**
 * Page component for the blog page
 * @type {function} Page route for the blog page
 * @param {object} lang - Language object from useTranslation hook
 * @type {server}
 * @returns {JSX.Element} Rendered content for the page
 */

const getPosts = async () => {   
  try {
    const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags`);
    return res.data;
  }
  catch {
    console.log('Error getting getPosts')
  }
}

const Page = async ({ params: { lang } }) => {
  const postsData = getPosts();
  const [posts] = await Promise.all([postsData]);

  return (
    <main>
      <Header lang={lang} /> 
      <Posts lang={lang} entry={posts} />
      <Footer lang={lang} /> 
    </main>
  )
}

export default Page
