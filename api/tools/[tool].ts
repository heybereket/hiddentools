import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tool = await prisma.tool.findUnique({
    where: {
      name: req.query.tool as string,
    },
  });

  res.send({
    success: true,
    data: tool,
  });
}
