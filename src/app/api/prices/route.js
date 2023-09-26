require('dotenv').config();

import prices from '../../../assets/data/prices.json'

export async function GET(request) {
    const stateID = request.nextUrl.searchParams.get('stateID')
    const entityID = request.nextUrl.searchParams.get('entityTypeID')

    if (!stateID || !entityID) {
        return new Response('Missing stateID or entityTypeID', {
            status: 400
        });
    }

    const price = prices.filter(price => (
        price.state.id === parseInt(stateID) &&  // Assuming 'state.id' is a number
        price.entityType.id === parseInt(entityID)  // Assuming 'entityType.id' is a number
    ));

    if (!price) {
        return new Response('Price not found', {
            status: 404
        });
    }

    return new Response(JSON.stringify(price), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
