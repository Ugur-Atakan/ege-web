import statesJSON from '../../../../assets/data/states.json'

export async function GET() {
    return new Response(JSON.stringify(statesJSON), {
        status: 200
    })
}