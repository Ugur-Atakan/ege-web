import logger from '../../lib/logger.js'

/**
 * @type {POST route}
 * @description calls the logger function from lib/logger.js to create a log.
 * @returns {Response}
 */

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