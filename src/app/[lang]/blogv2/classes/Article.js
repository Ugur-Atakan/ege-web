export class ArticleClass { 
    constructor(title, articleImage, tag, authorName, authorImage, readingTime, 
            publishedAt, slug, html, excerpt
    ) {
        this.articleImage = articleImage;
        this.tag = tag;
        this.author = { 
            name: authorName,   
            authorImage: authorImage
        };
        this.readingTime =  readingTime;
        this.title = title;
        this.publishedAt = publishedAt;
        this.slug = slug;
        this.html = html;
        this.excerpt = excerpt;
    } 
}