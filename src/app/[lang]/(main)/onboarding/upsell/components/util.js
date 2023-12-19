
export const pricing = {
    frequencies: [
      { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
      { value: 'annually', label: 'Annually', priceSuffix: '/year' }
    ],
    tiers: [
      {
        stripeIDs: { monthly: '', annually: '' },
        name: 'Virtual Mailbox',
        id: 'virtual-mailbox',
        state: 'Delaware',
        price: { monthly: '$ 90', annually: '$ 864' },
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
        stripeIDs: { annually: '' },
        name: 'Compliance Reminder',
        silver: true,
        state: 'any',
        id: 'compliance-reminder',
        price: { annually: '$ 399' },
        description: 'The essentials to provide your best work for clients.',
        features: ['Stay compliant', 'Be in good standing', 'Ensure on-time filing'],
        mostPopular: false,
      },
      {
        stripeIDs: { monthly: '', annually: '' },
        name: 'Office Space',
        state: 'Delaware',
        id: 'office-space',
        price: { monthly: '$ 60', annually: '$ 576' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
          '25 products',
          'Up to 10,000 subscribers',
          'Advanced analytics',
          '24-hour support response time',
          'Marketing automations',
          'Tax Savings'
        ],
        mostPopular: false,
      },
    ]
}

export const getPricing = (state, complianceReminder, virtualMailBoxMonthly, virtualMailBoxYearly, officeSpaceMonthly, officeSpaceYearly) => {
  const tierP = pricing.tiers.filter((tier) => {
      return tier.state === state || tier.state === 'any'
  });

  const tierP1 = tierP.map((tier) => {
    if (tier.id === 'virtual-mailbox') {
        tier.stripeIDs.monthly = virtualMailBoxMonthly.data[0].id;
        tier.stripeIDs.annually = virtualMailBoxYearly.data[0].id;
        tier.price.monthly = virtualMailBoxMonthly.data[0].unit_amount / 100;
        tier.price.annually = virtualMailBoxYearly.data[0].unit_amount / 100;
    } else if (tier.id === 'office-space') {
        tier.stripeIDs.monthly = virtualMailBoxMonthly.data[0].id;
        tier.stripeIDs.annually = virtualMailBoxYearly.data[0].id;
        tier.stripeID = officeSpaceMonthly.data[0].id;
        tier.price.monthly = officeSpaceMonthly.data[0].unit_amount / 100;
        tier.price.annually = officeSpaceYearly.data[0].unit_amount / 100;
    } else if (tier.id === 'compliance-reminder') {
        tier.stripeIDs.annually = virtualMailBoxYearly.data[0].id;
        tier.price.annually = complianceReminder.data[0].unit_amount / 100;
    }
    return tier;
  });

  pricing.tiers = tierP1;
  return pricing;
}
