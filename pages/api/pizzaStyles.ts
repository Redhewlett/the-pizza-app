// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPizzaStyles } from '../../functions/pizzaStyles'
import { pizzaObject } from '../../functions/pizzaStyles'

type Data = {
  pizzaStyles: pizzaObject[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // const pizza = req.query.pizzaStyle
  const pizza = getAllPizzaStyles()
  res.status(200).json({ pizzaStyles: pizza })
}
