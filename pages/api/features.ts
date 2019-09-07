import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Handle incoming requests from the /api/features endpoint.
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns
 */
function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.json({
      features: [
        'code linting with npm commands and a pre-commit hook',
        'standardjs-inspired lint rules',
        'import path aliasing',
        '.env file support',
      ]
    })
  }

  return res.status(500).end()
}

export default handler
