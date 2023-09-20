import prices from '../../../assets/data/prices.json'

// get function which gets stateid from and entitytype id from params and searches 
// the prices json file for the matching stateid and entitytypeid and returns the price or price objects if more than 1 

export async function GET(req, res, next) {
    const { stateid, entitytypeid } = req.params
    const price = prices.find(price => price.stateid === stateid && price.entitytypeid === entitytypeid)
    return new Response(JSON.stringify(price), {
        status: 200
    })
}