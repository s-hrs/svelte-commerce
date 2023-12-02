import type { PageServerLoad } from './$types';

// export type Product = {
//     id: number;
//     stripe_id: string;
//     name: string;
//     description: string;
//     price: number;
//     image: string;
//     featured: boolean;
//     created_date_time: Date;
//     categoryId: number
// }

export const load: PageServerLoad = async ({ fetch }) => {
	const productsResponse = await fetch('/api/products', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	const products = await productsResponse.json();

	return products;
};
