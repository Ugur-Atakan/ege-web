import prices from '@/assets/json/prices.json'

/**
 * @type {GET route}
 * @param {URLSearchParams} stateID - State ID
 * @param {URLSearchParams} entityID - Entity Type ID
 * @returns {object} price
 */

export async function GET(request) {
    const stateName = request.nextUrl.searchParams.get('state')
    const companyType = request.nextUrl.searchParams.get('type');

    
    if (!stateName) {
        return new Response('Missing state name in request!', {
            status: 400
        });
    }

    if (!companyType) {
        return new Response('Missing company type in request!', { 
            status: 400
        });
    }

    const statePrices = prices.filter(state => (
        state.name ===  stateName 
    ));

    if (!statePrices.length) {
        return new Response('Price not found', {
            status: 404
        });
    }

    let filteredPrices = null;

    if (companyType === 'LLC') {
        filteredPrices = statePrices.map(state => state.prices.LLC);
    } else if (companyType === 'Corporation') {
        filteredPrices = statePrices.map(state => state.prices.Corp);
    } else {
        return new Response('Invalid company type!', { 
            status: 400
        });
    }

    return new Response(JSON.stringify(filteredPrices), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
