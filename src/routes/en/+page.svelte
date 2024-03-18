<script lang="ts">
	import type { PageData } from './$types';
	import About from '$lib/components/About.svelte';
	import Artists from '$lib/components/Artists.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Artist from '$lib/components/Artist.svelte';

	export let data: PageData;
	const content = data.landing;
	const artists = data.artists;
</script>

<svelte:head>
	<title>Tinta Tattoo</title>
</svelte:head>

<div>
	<Hero />
	<!-- DESKTOP -->
	<div
		class="overflow-hidden bg-gray-100 bg-[url('/decors/decor_bg_30.png')] bg-cover max-[713px]:hidden"
	>
		<About {content} />
		<Artists {content} {artists} />
	</div>
	<!-- MOBILE -->
	<div
		class="hidden flex-col items-center justify-center bg-[url('/decors/decor_bg_30.png')] bg-cover max-[713px]:flex"
	>
		<div class="flex flex-col px-12">
			<h1 class="mt-4 text-4xl font-bold">{content.aboutTitle}</h1>
			<p>{@html content.aboutContent}</p>
			<h1 class="mt-4 text-4xl font-bold">{content.artistsTitle}</h1>
			<p>{@html content.artistsContent}</p>
			<div class="mb-8 grid grid-cols-1 gap-4">
				{#each data.artists as artist}
					<Artist {artist} />
				{/each}
			</div>
		</div>
	</div>
	<Footer />
</div>
