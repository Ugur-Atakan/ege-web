
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
        mainFeatures: [
          'Same day formation', 
          'Dashboard access',
          'Lifetime customer support',
          'One year registered agent'
        ],
      },
      {
        name: 'Gold',
        id: 'tier-gold',
        onClick: () => console.log('Gold tier was clicked'),
        featured: true,
        description: 'The best financial services for your thriving business.',
        price: 25,
        mainFeatures: [
          'Same day formation',
          'Dashboard access',
          'Lifetime customer support',
          'One year registered agent',
          'Stock issues assistance',
          'Initial board and stockholder resolutions'
        ],
      },
      {
        name: 'Platinum',
        id: 'tier-platinum',
        onClick: () => console.log('Platinum tier was clicked'),
        featured: false,
        description: 'Convenient features to take your business to the next level.',
        price: 30,
        mainFeatures: [
          'Same day formation',
          'Dashboard access',
          'Lifetime customer support',
          'One year registered agent',
          'Stock issues assistance',
          'Initial board and stockholder resolutions',
          'Financing document templates',
          'ESOP templates',
        ],
      }
    ],
    sections: [
      {
        name: 'Business Formation and Compliance',
        features: [
          { name: '1 Year Registered Agent', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'EIN Application', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Free Company Name Check', tiers: {Silver: true, Gold: true, Platinum: true } },
          { name: 'Certification of Incorporation', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Statement of Incorporator', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Company Formation State Filing Fees', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Franchise tax and annual report filing assistance', tiers: { Silver: false, Gold: true, Platinum: true } },
        ],
      },
      {
        name: 'Document Management and Delivery',
        features: [
          { name: 'Access to Registate Online Dashboard', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Access to Digital Copies of the Documents', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Customizable Corporate Meeting Minutes', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Electronic Delivery of State Documents', tiers: { Silver: true, Gold: true, Platinum: true } },
        ],
      },
      {
        name: 'Legal and Administrative Support',
        features: [
          { name: 'Lifetime Customer Support (Phone & Email)', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Customizable Corporate Banking Resolution', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Customizable Corporation Bylwas', tiers: { Silver: true, Gold: true, Platinum: true } },
          { name: 'Stock Issuance to Shareholders', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Stock Purchase Agreements', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Stock Certificates', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Visiting Schedules for Recommended for Tech Founders', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Captable/Stock Ledger', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: '83b IRS Forms for Founders', tiers: { Silver: false, Gold: true, Platinum: true } },
          { name: 'Confidential Information and Inventions Assignment Agreement Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'Technology Transfer Agreement Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'Mutual Non Discolure Agreement Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'ESOP Reservation Document Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'Stock Option Grant Contract Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'Template for Option Plan for Employees/Consultants and Advisors', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'SAFE FInancing Documents Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'Convertible Note Financing Documents Templates', tiers: { Silver: false, Gold: false, Platinum: true } },
          { name: 'Franchise tax and annual report filing assistance', tiers: { Silver: false, Gold: true, Platinum: true } },
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
        mainFeatures: [
          'Same day formation',
          'Dashboard access',
          'Lifetime customer support',
          'One year registered agent'
        ]
      },
      {
        name: 'Gold',
        id: 'tier-gold',
        onClick: () => console.log('Gold tier was clicked'),
        featured: true,
        description: 'The best financial services for your thriving business.',
        price: 25,
        mainFeatures: [
          'Same day formation',
          'Dashboard access',
          'Lifetime customer support',
          'One year registered agent',
          'Stock issues assistance',
          'Initial board and stockholder resolutions'
        ],
      }
    ],
    sections: [
      {
        name: 'Business Formaiton anad Compliance',
        features: [
          { name: '1 Year Registered Agent', tiers: { Silver: true, Gold: true } },
          { name: 'EIN Application', tiers: { Silver: true, Gold: true } },
          { name: 'Certification of Formation', tiers: { Silver: true, Gold: true} },
          { name: 'Company Formation State Filing Fees', tiers: { Silver: true, Gold: true } },
          { name: 'Franchise tax reminder', tiers: { Silver: true, Gold: true } },
          { name: 'Operating Agreement', tiers: { Silver: false, Gold: true } },
        ],
      },
      {
        name: 'Document Management and Delivery',
        features: [
          { name: 'Access to Digital Copies of the Documents', tiers: { Silver: true, Gold: true } },
          { name: 'Customizable Member Meeting Minutes', tiers: { Silver: true, Gold: true } },
          { name: 'Electronic Delivery of State Documents', tiers: { Silver: true, Gold: true } },
  
        ],
      },
      {
        name: 'Legal and Administrative Support',
        features: [
          { name: 'Lifetime Customer Support (Phone and Email)', tiers: { Silver: true, Gold: true } },
          { name: 'LLC Membership Certificate', tiers: { Silver: false, Gold: true } },
          { name: 'LLC Interest Purchase Agreement', tiers: { Silver: false, Gold: true } },
          { name: 'Stock issuance certificate', tiers: { Silver: false, Gold: true } },
          { name: 'Share Purchase agreement', tiers: { Silver: false, Gold: true } },
          { name: 'Customizable Corporate Banking Resolution', tiers: { Silver: false, Gold: true } },
        ],
      },
    ],
}

export const getDoublePricing = (silverProduct, goldProduct) => {
  // Silver product features
  doublePricing.tiers[0].price = silverProduct?.unit_amount/100 || 0;
  doublePricing.tiers[0].priceID = silverProduct?.id || 'fake_id';
  
  // Gold product features
  doublePricing.tiers[1].price = goldProduct?.unit_amount/100 || 0;
  doublePricing.tiers[1].priceID = goldProduct?.id || 'fake_id';

  return doublePricing;
}