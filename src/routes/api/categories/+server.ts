import type { RequestHandler } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET: RequestHandler = async () => {
	try {
		const categories = await prisma.category.findMany();

		return new Response(
			JSON.stringify({
				categories
			}),
			{
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	} catch (e) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while trying to fetch products',
				error: e
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
};
