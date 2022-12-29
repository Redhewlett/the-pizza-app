// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getOnePizzaStyle } from '../../../functions/pizzaStyles'
// import { pizzaObject } from '../../../functions/pizzaStyles'

// // type Data = {
// //   pizzaStyle: pizzaObject
// // }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // check if it's a number without having to deal with it's type
    const id = req.query.id
    console.log(id)

    if (Number(id) >= 0) {
      const pizza = getOnePizzaStyle(Number(id))
      res.status(200).json({ pizzaStyle: pizza })
    } else {
      res.status(400).json({ message: 'bad resquest' })
    }
  }
}
