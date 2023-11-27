<script lang="ts">
	import type { PageData } from './$types';
	import ShopCard from '$lib/components/ShopCard.svelte';

	export let data: PageData;

	const products = data.products;
</script>

<div class="grid grid-cols-2 gap-6 mt-6 mb-6">
	{#if products.length > 0}
		{#each products as product}
			<ShopCard id={product.id} name={product.name} price={product.price} image={product.image} />
		{/each}
	{:else}
		<p class="w-full text-center pt-32">No Products are currently available</p>
	{/if}
</div>
