import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const categoryShirts = await prisma.category.upsert({
		where: { slug: '/shirts' },
		update: {},
		create: {
			name: 'Shirts',
			slug: '/shirts'
		}
	});
	const categoryMugs = await prisma.category.upsert({
		where: { slug: '/mugs' },
		update: {},
		create: {
			name: 'Mugs',
			slug: '/mugs'
		}
	});
	const categoryStickers = await prisma.category.upsert({
		where: { slug: '/stickers' },
		update: {},
		create: {
			name: 'Stickers',
			slug: '/stickers'
		}
	});
	const svelteTShirt = await prisma.product.upsert({
		where: { id: 1 },
		update: {},
		create: {
			stripe_id: 'price_1ODOGrJi0Rbtg1zZwMmF6ORp',
			name: 'Svelte T-Shirt',
			description: 'Svelte logo printed on the center',
			price: 1500,
			image: '/products/svelte-shirt.png',
			categoryId: 1
		}
	});
	const svelteMug = await prisma.product.upsert({
		where: { id: 2 },
		update: {},
		create: {
			stripe_id: 'price_1ODOJXJi0Rbtg1zZ9QBsAW7U',
			name: 'Svelte Mug',
			description: 'Nice looking mug',
			price: 800,
			image: '/products/svelte-mug.png',
			categoryId: 2
		}
	});
	const prismaSticker = await prisma.product.upsert({
		where: { id: 3 },
		update: {},
		create: {
			stripe_id: 'price_1ODOPZJi0Rbtg1zZvz55p9f2',
			name: 'Prisma Sticker',
			description: 'Prima logo printed',
			price: 500,
			image: '/products/prisma-sticker.png',
			categoryId: 3
		}
	});
	const tailwindTShirt = await prisma.product.upsert({
		where: { id: 4 },
		update: {},
		create: {
			stripe_id: 'price_1ODOJCJi0Rbtg1zZZjQ9MWyK',
			name: 'Tailwind T-Shirt',
			description: 'Tailwind logo printed on the center',
			price: 1500,
			image: '/products/tailwind-shirt.png',
			categoryId: 1
		}
	});
	console.log({
		svelteTShirt,
		svelteMug,
		tailwindTShirt,
		categoryShirts,
		prismaSticker,
		categoryMugs,
		categoryStickers
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
