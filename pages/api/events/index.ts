import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../utils/sample-data/data.json'
import { Event } from '@/utils/types/general-types'

type Data = {
  data: {
    events: Event[]
  }
}

type Message = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Message>
) {
  if (req.method === 'GET') {
    res.status(200).json({ data })
  }
  else {
    res.setHeader('allow', ['GET'])
    res.status(405).json({ message: `type of ${req.method} not allowed` })
  }
}
