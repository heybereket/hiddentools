import type { NextApiRequest, NextApiResponse } from 'next';
import { metadata } from '../../lib/metadata';
import { prisma } from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, desc, link, category } = req.body;
  const data = await metadata(link);

  await prisma.tool.create({
    data: {
      name: name as string,
      desc: desc ? desc : data.desc,
      link,
      image: data.image,
      category,
    },
  });

  res.send({
    success: true,
    message: 'Successfully made tool',
  });
}
