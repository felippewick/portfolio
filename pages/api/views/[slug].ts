// import { queryBuilder } from 'lib/planetscale';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const slug = req.query.slug.toString();
    // const data = await queryBuilder
    //   .selectFrom('views')
    //   .where('slug', '=', slug)
    //   .select(['count'])
    //   .execute();

    // if (!data.length) {
    //   return 0;
    // }

    // const views = Number(data[0].count);

    // if (req.method === 'POST') {
    //   await queryBuilder
    //     .insertInto('views')
    //     .values({ slug, count: 1 })
    //     .onDuplicateKeyUpdate({ count: views + 1 })
    //     .execute();

    //   return res.status(200).json({
    //     total: views + 1,
    //   });
    // }

    if (req.method === 'GET') {
      return res.status(200).json({ success: false });
      // return res.status(200).json({ total: views });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
