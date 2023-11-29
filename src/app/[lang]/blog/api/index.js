import axios from 'axios'

const getArticles = async () => {  
    try {
      const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags`);
      return res.data;
    }
    catch(err) {
      console.log('Error getting getPosts', err)
    }
}

const getArticle = async (slug) => {
    try {
        const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=slug: ${slug}`)
        const article = res.data // res.json() for fetch
        return article
    }
    catch {
        console.log('Error getting getArticle')
    }
}

const getArticlesTR = async () => {
    try {
        const response = await axios.get('https://blog.registate.com/ghost/api/content/posts?key=1090eec3cc0b57e0b77963a66b&filter=tag:TR&include=authors,tags')
        const article = response.data;
        return article;
    }   
    catch {
        console.log('Error getting getArticlesTR')
    }
}

const getTags = async () => {
    try {
        const response = await axios.get(`https://blog.registate.com/ghost/api/content/tags?key=${process.env.BLOG_API_KEY}`)
        const data = response.data;
        const tags = data.tags;
        const names = tags.map(tag => tag.name);
        names.push('All');

        const index = names.indexOf('TR');
        if (index > -1) {
            names.splice(index, 1);
        }
        const index2 = names.indexOf('EN');
        if (index2 > -1) {
            names.splice(index2, 1);
        }

        names.sort((a, b) => a.localeCompare(b)); 
        return names;
    }
    catch(err) {
        console.log('Error getting getTags: ', err)
    }
}


const getByTag = async (tag) => {  
    try {
      if (tag === "'All'") {
        const allArticles = await getArticles();
        return allArticles;
      }

      tag = tag.toLowerCase().replace(/\s/g, '-');
      const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=tag:${tag}`);
      return res.data;
    }
    catch(err) {
      console.log('Error getting getPosts: ', err)
    }
}

const getAuthors = async () => {
    try {
        const response = await axios.get(`https://blog.registate.com/ghost/api/content/authors?key=${process.env.BLOG_API_KEY}`)
        const data = response.data;
        const authors = data.authors;
        return authors;
    }
    catch(err) {
        console.log('Error getting getTags: ', err)
    }
}

const getAlikeArticles = async (query) => {  
    try {
      const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=1090eec3cc0b57e0b77963a66b&include=authors,tags&filter=title:~${query}`);
      return res.data;
    }
    catch(err) {
      console.log('Error getting getPosts: ', err)
    }
}

const getAuthorPosts = async (author) => {
    try {
        const res = await axios.get(`https://blog.registate.com/ghost/api/content/posts?key=${process.env.BLOG_API_KEY}&include=authors,tags&filter=author:${author}`);
        return res.data;
    }
    catch(err) {
        console.log('Error getting getAuthorPosts: ', err)
    }
}

export { 
    getArticles,
    getArticlesTR,
    getArticle,
    getByTag,
    getTags,
    getAuthors,
    getAlikeArticles,
    getAuthorPosts
}