<script lang="ts">
	import type { PageData } from './$types';
	import About from '$lib/components/About.svelte';
	import Artists from '$lib/components/Artists.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';

	export let data: PageData;
	const content = data.landing;
</script>

<svelte:head>
	<title>Tinta Tattoo</title>
</svelte:head>

<div>
	<Hero />
	<About {content} />
	<Artists {content} />
	<Footer />
</div>
