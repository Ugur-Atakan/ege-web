
export const pricing = {
    frequencies: [
      { value: 'oneTime', label: 'One Time', priceSuffix: '/only once'}
    ],
    tiers: [
      {
        stripeIDs: { oneTime: '' },
        name: 'Apostill',
        id: 'apostill',
        state: 'Delaware',
        price: { oneTime: '$ 500' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
          'Unlimited products',
          'Unlimited subscribers',
          'Advanced analytics',
          '1-hour, dedicated support response time',
          'Marketing automations',
          'Custom reporting tools',
        ],
        mostPopular: false,
      },
      {
        stripeIDs: { oneTime: '' },
        name: 'EIN',
        state: 'any',
        id: 'ein',
        price: { oneTime: '$ 750' },
        description: 'The essentials to provide your best work for clients.',
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
