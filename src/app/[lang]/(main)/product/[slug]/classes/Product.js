
// Possible usage of inheritance if requirements change later on 

export class Product { 
    constructor(id, name, description, slug, state, type, pricing, features, pricingFeatures, faq, hiw) {
        this.id = id || 0;
        this.name = name || '';
        this.description = description || '';
        this.slug = slug || '';
        this.state = state || [];
        this.type = type || '';
        this.hiw = hiw || [];
        this.pricing = {
            monthly: pricing.monthly || -1,
            yearly: pricing.yearly || -1,
            allStates: pricing.allStates || -1,
            oneTime: pricing.oneTime || -1
        }
        this.features = features || [];
        this.pricingFeatures = pricingFeatures || [];
        this.faq = faq || [];; 
    }
}

// class UpsellProduct extends Product {
//     constructor(id, name, description, slug, state, type, features, faq, pricing) {
//         super(id, name, description, slug, state, type, features, faq);
//         this.pricing = pricing || {};
//     }
// }