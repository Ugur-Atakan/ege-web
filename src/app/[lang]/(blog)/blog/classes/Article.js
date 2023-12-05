export class ArticleClass { 
    constructor(title, articleImage, tag, authorName, authorImage, readingTime, 
            publishedAt, slug, html, excerpt
    ) {
        this.articleImage = articleImage || '';
        this.tag = tag || 'All';
        this.author = { 
            name: authorName || 'John Doe',   
            authorImage: authorImage || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
        };
        this.readingTime =  readingTime || '3';
        this.title = title || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        this.publishedAt = publishedAt || '2021-01-01';
        this.slug = slug || 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit';
        this.html = html || '';
        this.excerpt = excerpt || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    } 
}

export const createArticleClasses =  (articles) => {
    // create article class instances
    const articlesClasses = articles.posts.map(article => {
        return new ArticleClass(
            article.title, 
            article.feature_image, 
            article.primary_tag?.name, 
            article.primary_author?.name, 
            article.primary_author?.profile_image, 
            article.reading_time, 
            article.published_at, 
            article.slug, 
            article.html, 
            article.excerpt
        )
    })

    return articlesClasses
}