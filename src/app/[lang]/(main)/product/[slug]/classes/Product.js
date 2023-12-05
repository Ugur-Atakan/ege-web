
// Possible usage of inheritance if requirements change later on 

export class Product { 
    constructor(id, name, description, slug, state, type, pricing, features, faq) {
        this.id = id || 0;
        this.name = name || '';
        this.description = description || '';
        this.slug = slug || '';
        this.state = state || [];
        this.type = type || '';
        this.pricing = pricing || {};
        this.features = features || [];
        this.faq = faq || [];; 
    }
}

// class UpsellProduct extends Product {
//     constructor(id, name, description, slug, state, type, features, faq, pricing) {
//         super(id, name, description, slug, state, type, features, faq);
//         this.pricing = pricing || {};
//     }
// }