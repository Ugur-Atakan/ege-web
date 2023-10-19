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