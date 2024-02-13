
export const pricing = {
    frequencies: [
      { value: 'oneTime', label: 'One Time', priceSuffix: '/only once'}
    ],
    tiers: [
      // {
      //   stripeIDs: { oneTime: '' },
      //   name: 'Apostille',
      //   id: 'apostill',
      //   state: 'Delaware',
      //   price: { oneTime: '$ 500' },
      //   description: 'Get notarized apostilled documents',
      //   features: [
      //     'Use your documents abroad',
      //     'Your documents will be shipped to you globally'
      //   ],
      //   mostPopular: false,
      // },
      {
        stripeIDs: { oneTime: '' },
        name: 'EIN',
        state: 'any',
        id: 'ein',
        price: { oneTime: '$ 750' },
        description: 'Assistance in obtaining an EIN',
        features: ['Open Bank Account in US', 'Hire Employees', 'File your tax with EIN'],
        mostPopular: false,
      }
    ]
}

export const getPricing = (state, EIN, apostille) => {
    // if state is Delaware return all the tiers else return only the tiers with state any
    const tierP = pricing.tiers.filter((tier) => {
        return tier.state === state || tier.state === 'any'
    });

    const tierP1 = tierP.map((tier) => {
      if (tier.id === 'ein') {
        tier.price.oneTime = EIN.data[0].unit_amount / 100;
        tier.stripeIDs.oneTime = EIN.data[0].id;
      }
      if (tier.id === 'apostill') {
        tier.price.oneTime = apostille.data[0].unit_amount / 100;
        tier.stripeIDs.oneTime = apostille.data[0].id;
      }
      return tier;
    });
    
    pricing.tiers = tierP1;
    return pricing;
}
