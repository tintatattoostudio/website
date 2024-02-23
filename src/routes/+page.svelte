<script lang="ts">
	import type { PageData } from './$types';
	import About from '$lib/components/About.svelte';
	import Artists from '$lib/components/Artists.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import decorBg from '$lib/assets/images/decors/decor_bg.png';
	import Artist from '$lib/components/Artist.svelte';
	import { artists } from '$lib/content';

	export let data: PageData;
	const content = data.landing;
</script>

<svelte:head>
	<title>Tinta Tattoo</title>
</svelte:head>

<div>
	<Hero />
	<!-- DESKTOP -->
	<div
		class="relative flex min-h-[100vh] flex-col items-center justify-start overflow-hidden bg-gray-100 max-[1606px]:min-h-[110vh] max-[1103px]:min-h-[120vh] max-[712px]:hidden"
	>
		<img
			src={decorBg}
			alt="Decor background"
			class="absolute left-0 top-0 h-auto w-full opacity-30"
		/>
		<div class="relative">
			<About {content} />
			<Artists {content} />
		</div>
	</div>
	<!-- MOBILE -->
	<div class="min-h-100vh relative hidden flex-col items-center justify-center max-[713px]:flex">
		<img
			src={decorBg}
			alt="Decor background"
			class="absolute left-0 top-0 h-full min-w-full object-cover opacity-30"
		/>
		<div class="relative flex flex-col px-12">
			<h1 class="mt-4 text-4xl font-bold">{content.aboutTitle}</h1>
			<p>{@html content.aboutContent}</p>
			<h1 class="mt-4 text-4xl font-bold">{content.artistsTitle}</h1>
			<p>{@html content.artistsContent}</p>
			<div class="max-[]:grid-cols-2 mb-8 grid grid-cols-1 gap-4">
				{#each artists as artist}
					<Artist {artist} />
				{/each}
			</div>
		</div>
	</div>
	<Footer />
</div>

<!-- max-[900px] -->
