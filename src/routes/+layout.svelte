<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="bg-[#171717] min-h-screen flex flex-col justify-between px-96">
	<Header />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</main>
