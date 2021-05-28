import { NextApiRequest, NextApiResponse } from 'next'

const { version } = require('../../../package.json')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({ version })
}
