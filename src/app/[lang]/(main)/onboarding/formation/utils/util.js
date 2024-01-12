
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

export const triplePricing = {
    tiers: [
      {
        name: 'Silver',
        id: 'tier-silver',
        onClick: () => console.log('Silver tier was clicked'),
        featured: false,
        description: 'All your essential business finances, taken care of.',
        price: 15,
        mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],
      },
      {
        name: 'Platinum',
        id: 'tier-platinum',
        onClick: () => console.log('Platinum tier was clicked'),
        featured: true,
        description: 'Convenient features to take your business to the next level.',
        price: 30,
        mainFeatures: [
          'Basic invoicing',
          'Easy to use accounting',
          'Mutli-accounts',
          'Tax planning toolkit',
          'VAT & VATMOSS filing',
          'Free bank transfers',
        ],
      },
      {
        name: 'Gold',
        id: 'tier-gold',
        onClick: () => console.log('Gold tier was clicked'),
        featured: false,
        description: 'The best financial services for your thriving business.',
        price: 25,
        mainFeatures: [
          'Advanced invoicing',
          'Easy to use accounting',
          'Mutli-accounts',
          'Tax planning toolkit'
        ],
      }
    ],
    sections: [
      {
        name: 'Business Formation and Compliance',
        features: [
          { name: 'Tax Savings', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Easy to use accounting', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Multi-accounts', tiers: { Silver: '3 accounts', Gold: 'Unlimited accounts', Platinum: '7 accounts' } },
          { name: 'Invoicing', tiers: { Silver: '3 invoices', Gold: 'Unlimited invoices', Platinum: '10 invoices' } },
          { name: 'Exclusive offers', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: '6 months free advisor', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Mobile and web access', tiers: { Silver: false, Gold: true, Platinum: false } },
        ],
      },
      {
        name: 'Document Management and Delivery',
        features: [
          { name: '24/7 customer support', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Instant notifications', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Budgeting tools', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Digital receipts', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Pots to separate money', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Free bank transfers', tiers: { Silver: false, Gold: true, Platinum: false } },
          { name: 'Business debit card', tiers: { Silver: false, Gold: true, Platinum: false } },
        ],
      },
      {
        name: 'Legal and Administrative Support',
        features: [
          { name: '24/7 customer support', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Instant notifications', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Budgeting tools', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Digital receipts', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Pots to separate money', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Free bank transfers', tiers: { Silver: false, Gold: true, Platinum: false } },
          { name: 'Business debit card', tiers: { Silver: false, Gold: true, Platinum: false } },
        ],
      },
    ],
}


export const getTriplePricing = (silverProduct, goldProduct, platinumProduct) => {
  // Silver product features
  triplePricing.tiers[0].price = silverProduct.unit_amount/100;
  triplePricing.tiers[0].priceID = silverProduct.id;
  // Gold product features 
  triplePricing.tiers[1].price = goldProduct.unit_amount/100;
  triplePricing.tiers[1].priceID = goldProduct.id;

  // Plat product features
  triplePricing.tiers[2].price = platinumProduct.unit_amount/100;
  triplePricing.tiers[2].priceID = platinumProduct.id;
  return triplePricing;
}   


const doublePricing = {
    tiers: [
      {
        name: 'Silver',
        id: 'tier-silver',
        onClick: () => console.log('Silver tier was clicked'),
        featured: false,
        description: 'All your essential business finances, taken care of.',
        price: 15,
        mainFeatures: ['Basic invoicing', 'Easy to use accounting', 'Mutli-accounts'],
      },
      {
        name: 'Gold',
        id: 'tier-gold',
        onClick: () => console.log('Gold tier was clicked'),
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
  // Silver product features
  doublePricing.tiers[0].price = silverProduct.unit_amount/100;
  doublePricing.tiers[0].priceID = silverProduct.id;
  
  // Gold product features
  doublePricing.tiers[1].price = goldProduct.unit_amount/100;
  doublePricing.tiers[1].priceID = goldProduct.id;

  return doublePricing;
}