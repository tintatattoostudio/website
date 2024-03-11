<script lang="ts">
	import { goto } from '$app/navigation';
	import API from '$lib/api/client';
	import type { Artist } from '$lib/api/types';
	import { onMount } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';

	onMount(() => {
		const current = window.localStorage.getItem('locale');
		if (current === 'en') {
			isEng = true;
			goto('/en');
		} else {
			goto('/sl');
		}
	});

	let isEng = false;
	export let artist: Artist;
	export let displayGallery = true;

	function getArtistImages() {
		const imgs: HTMLImgAttributes[] = [];

		artist.attributes.images?.data.slice(0, 3).forEach((img, index) => {
			const image: HTMLImgAttributes = {
				alt: `Preview ${index}`,
				src: API.getImageUrl(img.attributes.url),
				title: `Preview ${index}`,
			};

			imgs.push(image);

			return image;
		});

		return imgs;
	}
</script>

<a
	href={`/${isEng ? 'en' : 'sl'}/gallery/${artist.attributes.artist}`}
	class="flex flex-row gap-4 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80 min-[980px]:flex-col"
>
	<div class="flex flex-col items-center justify-center gap-2">
		<img
			class="h-52 w-52 rounded-full object-cover"
			src={API.getImageUrl(artist.attributes.pfp.data.attributes.url)}
			alt={artist.attributes.name}
		/>
		<div class="flex flex-col items-center justify-center">
			<p class="text-2xl font-bold text-offblack">{artist.attributes.name}</p>
			<p class="text-center text-offblack">{artist.attributes.styles}</p>
		</div>
	</div>
	{#if displayGallery}
		<div class="w-24 min-[1150px]:hidden" />
		<div class="flex flex-row items-center justify-between gap-2 overflow-x-auto">
			{#each getArtistImages() as image}
				<img src={image.src} alt="Preview" class="h-64 rounded-lg" />
			{/each}
		</div>
	{/if}
</a>
<!-- <script lang="ts">
	import { goto } from '$app/navigation';
	import API from '$lib/api/client';
	import type { Artist } from '$lib/api/types';
	import { getImageUrl } from '$lib/utils';
	import { Carousel } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';

	onMount(() => {
		const current = window.localStorage.getItem('locale');
		if (current === 'en') {
			isEng = true;
			goto('/en');
		} else {
			goto('/sl');
		}
	});

	let isEng = false;
	export let artist: Artist;

	function getArtistImages() {
		const imgs: HTMLImgAttributes[] = [];

		artist.attributes.images?.data.slice(0, 3).forEach((img, index) => {
			const image: HTMLImgAttributes = {
				alt: `Preview ${index}`,
				src: API.getImageUrl(img.attributes.formats.thumbnail.url),
				title: `Preview ${index}`,
			};

			imgs.push(image);

			return image;
		});

		console.log(imgs);

		return imgs;
	}
</script>

<a
	href={`/${isEng ? 'en' : 'sl'}/gallery/${artist.attributes.artist}`}
	class="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
>
	<img
		class="h-52 w-52 rounded-full object-cover"
		src={API.getImageUrl(artist.attributes.pfp.data.attributes.url)}
		alt={artist.attributes.name}
	/>
	<div class="flex flex-col items-center justify-center">
		<p class="text-2xl font-bold text-offblack">{artist.attributes.name}</p>
		<p class="text-offblack">{artist.attributes.styles}</p>
	</div>
	<div class="flex flex-row items-center justify-center gap-2">
		{#each getArtistImages() as image}
			<img src={image.src} alt="Preview" class="rounded-lg" />
		{/each}
	</div>
</a> -->

<!-- <script lang="ts">
	import { goto } from '$app/navigation';
	import API from '$lib/api/client';
	import type { Artist } from '$lib/api/types';
	import { onMount } from 'svelte';
	import { Carousel } from 'flowbite-svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { getImageUrl } from '$lib/utils';

	onMount(() => {
		const current = window.localStorage.getItem('locale');
		if (current === 'en') {
			isEng = true;
			goto('/en');
		} else {
			goto('/sl');
		}
	});

	let isEng = false;
	export let artist: Artist;
	const images: HTMLImgAttributes[] = getArtistImages();

	function getArtistImages() {
		const imgs: HTMLImgAttributes[] = [];

		artist.attributes.images?.data.slice(0, 5).forEach((img, index) => {
			const image: HTMLImgAttributes = {
				alt: `Preview ${index}`,
				src: API.getImageUrl(img.attributes.formats.thumbnail.url),
				title: `Preview ${index}`,
			};

			imgs.push(image);

			return image;
		});

		console.log(imgs);

		return imgs;
	}
</script>

<div class="flex flex-row">
	<a
		href={`/${isEng ? 'en' : 'sl'}/gallery/${artist.attributes.artist}`}
		class="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
	>
		<img
			class="h-52 w-52 rounded-full object-cover"
			src={API.getImageUrl(artist.attributes.pfp.data.attributes.url)}
			alt={artist.attributes.name}
		/>
		<div class="flex flex-col items-center justify-center">
			<p class="text-2xl font-bold text-offblack">{artist.attributes.name}</p>
			<p class="text-offblack">{artist.attributes.styles}</p>
		</div>
	</a>
	<Carousel
		class="ml-64 h-[10vh] sm:h-[10vh] xl:h-[10vh] 2xl:h-[10vh]"
		{images}
		imgClass="h-full"
		let:Controls
		let:Indicators
		transition={null}
		duration={10000}
	>
		<Indicators />
		<Controls />
	</Carousel>
</div> -->
<!-- <div class="flex flex-row">
	<a
		href={`/${isEng ? 'en' : 'sl'}/gallery/${artist.attributes.artist}`}
		class="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
	>
		<img
			class="h-52 w-52 rounded-full object-cover"
			src={API.getImageUrl(artist.attributes.pfp.data.attributes.url)}
			alt={artist.attributes.name}
		/>
		<div class="flex flex-col items-center justify-center">
			<p class="text-2xl font-bold text-offblack">{artist.attributes.name}</p>
			<p class="text-offblack">{artist.attributes.styles}</p>
		</div>
	</a>
	<Carousel
		class="ml-64 h-[10vh] sm:h-[10vh] xl:h-[10vh] 2xl:h-[10vh]"
		{images}
		imgClass="h-full"
		let:Controls
		let:Indicators
		transition={null}
		duration={10000}
	>
		<Indicators />
		<Controls />
	</Carousel>
</div> -->
