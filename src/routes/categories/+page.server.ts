import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const productsResponse = await fetch('/api/products', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
	const prooducts = await productsResponse.json();

	return prooducts;
};
