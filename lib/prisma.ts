import {PrismaClient} from '@prisma/client';
import {info} from './log';

export const prisma = new PrismaClient();

prisma.$use(async (mw, next) => {
	info(`${mw.action} on ${mw.model ?? 'n/a'}`);
	return next(mw);
});