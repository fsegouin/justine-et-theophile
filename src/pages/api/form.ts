import { NextApiRequest, NextApiResponse } from 'next';

import { getMinifiedItem, table } from '@/lib/airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { nom, email, samedi, brunch, vegetarien } = req.body;
  try {
    if (
      nom !== '' &&
      samedi !== undefined &&
      brunch !== undefined &&
      vegetarien !== undefined &&
      email !== ''
    ) {
      const newRecords = await table.create([
        { fields: { nom, samedi, brunch, vegetarien, email } },
      ]);
      res.status(200).json(getMinifiedItem(newRecords[0]));
    } else {
      throw new Error('Some input parameters are missing.');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(500).json({ msg: 'Something went wrong! 😕' });
  }
};
