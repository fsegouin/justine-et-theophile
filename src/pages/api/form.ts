import { NextApiRequest, NextApiResponse } from 'next';

import { getMinifiedItem, table } from '@/lib/airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { item } = req.body;
  try {
    const newRecords = await table.create([{ fields: { item } }]);
    res.status(200).json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong! 😕' });
  }
};
