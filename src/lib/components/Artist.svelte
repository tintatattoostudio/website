<script lang="ts">
	import { goto } from '$app/navigation';
	import API from '$lib/api/client';
	import type { Artist } from '$lib/api/types';
	import { locale } from '$lib/translations';
	import { Carousel } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';

	function getGalleryPreview() {
		const images: HTMLImgAttributes[] = [];

		artist.attributes.images?.data.slice(0, 5).forEach((img, index) => {
			const image: HTMLImgAttributes = {
				alt: `Preview ${index}`,
				src: API.getImageUrl(img.attributes.url),
				title: `Preview ${index}`,
			};

			images.push(image);
		});

		return images;
	}

	export let artist: Artist;
</script>

<div>
	<a
		href={`/${locale.get()}/gallery/${artist.attributes.artist}`}
		class="mb-4 flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
	>
		<img
			class="h-52 w-52 rounded-full object-cover"
			src={API.getImageUrl(artist.attributes.pfp.data.attributes.url)}
			alt={artist.attributes.name}
		/>
		<div class="flex flex-col items-center justify-center">
			<p class="text-2xl font-bold text-offblack">{artist.attributes.name}</p>
			<p class="text-center text-offblack">{artist.attributes.styles}</p>
		</div>
	</a>
	<div>
		<Carousel
			class="h-64 bg-offblack/30 sm:h-64 xl:h-96 2xl:h-96"
			images={getGalleryPreview()}
			imgClass="h-full object-contain"
			let:Controls
			let:Indicators
			transition={null}
			duration={10000}
		>
			<Indicators />
			<Controls />
		</Carousel>
	</div>
</div>
