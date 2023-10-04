import logger from '../../lib/logger.js'

export async function POST(request) {
    const res = await request.json()
    logger.error(res);

  return new Response('Log Created', {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}