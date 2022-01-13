import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tools = await prisma.tool.findMany();

  res.send({
    success: true,
    tools: tools.filter(tool => tool.verified),
  });
}
