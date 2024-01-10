/**
 * @param {object} selectedPackage - the selected package
 * @param {string} selectedCompanyType - the selected company type
 * @param {object} selectedPackageVar - all the features of the packages from another json file
 * @returns {array} - 12 random features from the selected package
*/

export const getRandomPackages = (selectedPackage, selectedCompanyType, selectedPackageVar) => {
    let packageName;
    if (selectedPackage.metadata.type.includes('silver')) {
        packageName = 'silver';
    } else if (selectedPackage.metadata.type.includes('gold')) {
        packageName = 'gold';
    } else packageName = 'platinum';

    const selectedPackageFeatures = selectedPackageVar[selectedCompanyType].map(
        (item) => (
            item.features.map((feature) => (
                 feature[packageName] ? feature.title : null
            ))
        )
    )

    const filteredFeatures = selectedPackageFeatures.map((item) => item.filter((feature) => feature !== null));
    const singleArr = filteredFeatures.reduce((acc, val) => acc.concat(val), []);
    const randomFeatures = singleArr.sort(() => Math.random() - Math.random()).slice(0, 12);

    return randomFeatures;
}

export const pricing = {
    tiers: [
      {
        name: 'Silver',
        id: 'tier-starter',
        href: '#',
        featured: false,
        description: 'All your essential business finances, taken care of.',
        price: 15,
        mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],
      },
      {
        name: 'Gold',
        id: 'tier-scale',
        href: '#',
        featured: true,
        description: 'The best financial services for your thriving business.',
        price: 25,
        mainFeatures: [
          'Advanced invoicing',
          'Easy to use accounting',
          'Mutli-accounts',
          'Tax planning toolkit',
          'VAT & VATMOSS filing',
          'Free bank transfers',
        ],
      },
      {
        name: 'Platinum',
        id: 'tier-growth',
        href: '#',
        featured: false,
        description: 'Convenient features to take your business to the next level.',
        price: 30,
        mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts', 'Tax planning toolkit'],
      },
    ],
    sections: [
      {
        name: 'Catered for business',
        features: [
          { name: 'Tax Savings', tiers: { Starter: true, Scale: true, Growth: true } },
          { name: 'Easy to use accounting', tiers: { Starter: true, Scale: true, Growth: true } },
          { name: 'Multi-accounts', tiers: { Starter: '3 accounts', Scale: 'Unlimited accounts', Growth: '7 accounts' } },
          { name: 'Invoicing', tiers: { Starter: '3 invoices', Scale: 'Unlimited invoices', Growth: '10 invoices' } },
          { name: 'Exclusive offers', tiers: { Starter: false, Scale: true, Growth: true } },
          { name: '6 months free advisor', tiers: { Starter: false, Scale: true, Growth: true } },
          { name: 'Mobile and web access', tiers: { Starter: false, Scale: true, Growth: false } },
        ],
      },
      {
        name: 'Other perks',
        features: [
          { name: '24/7 customer support', tiers: { Starter: true, Scale: true, Growth: true } },
          { name: 'Instant notifications', tiers: { Starter: true, Scale: true, Growth: true } },
          { name: 'Budgeting tools', tiers: { Starter: true, Scale: true, Growth: true } },
          { name: 'Digital receipts', tiers: { Starter: true, Scale: true, Growth: true } },
          { name: 'Pots to separate money', tiers: { Starter: false, Scale: true, Growth: true } },
          { name: 'Free bank transfers', tiers: { Starter: false, Scale: true, Growth: false } },
          { name: 'Business debit card', tiers: { Starter: false, Scale: true, Growth: false } },
        ],
      },
    ],
}


export const getTriplePricing = (silverProduct, goldProduct, platinumProduct) => {
    // console.log(silverProduct, goldProduct, platinumProduct);

    return pricing;
}   


const doublePricing = {
    tiers: [
      {
        name: 'Silver',
        id: 'tier-starter',
        href: '#',
        featured: false,
        description: 'All your essential business finances, taken care of.',
        price: 15,
        mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],
      },
      {
        name: 'Gold',
        id: 'tier-scale',
        href: '#',
        featured: true,
        description: 'The best financial services for your thriving business.',
        price: 25,
        mainFeatures: [
          'Advanced invoicing',
          'Easy to use accounting',
          'Mutli-accounts',
          'Tax planning toolkit',
          'VAT & VATMOSS filing',
          'Free bank transfers',
        ],
      }
    ],
    sections: [
      {
        name: 'Catered for business',
        features: [
          { name: 'Tax Savings', tiers: { Silver: true, Gold: true } },
          { name: 'Easy to use accounting', tiers: { Silver: true, Gold: true } },
          { name: 'Multi-accounts', tiers: { Silver: '3 accounts', Gold: 'Unlimited accounts'} },
          { name: 'Invoicing', tiers: { Silver: '3 invoices', Gold: 'Unlimited invoices' } },
          { name: 'Exclusive offers', tiers: { Silver: false, Gold: true } },
          { name: '6 months free advisor', tiers: { Silver: false, Gold: true } },
          { name: 'Mobile and web access', tiers: { Silver: false, Gold: true } },
        ],
      },
      {
        name: 'Other perks',
        features: [
          { name: '24/7 customer support', tiers: { Silver: true, Gold: true } },
          { name: 'Instant notifications', tiers: { Silver: true, Gold: true } },
          { name: 'Budgeting tools', tiers: { Silver: true, Gold: true } },
          { name: 'Digital receipts', tiers: { Silver: true, Gold: true } },
          { name: 'Pots to separate money', tiers: { Silver: false, Gold: true } },
          { name: 'Free bank transfers', tiers: { Silver: false, Gold: true } },
          { name: 'Business debit card', tiers: { Silver: false, Gold: true } },
        ],
      },
    ],
}

export const getDoublePricing = (silverProduct, goldProduct) => {
    return doublePricing;
}