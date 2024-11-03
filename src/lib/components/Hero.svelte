<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	// images
	import {
		studio1,
		studio2,
		studio3,
		studio4,
		studio5,
		studio6,
		studio7,
		studio8,
		studio9,
		studio10,
		studio11,
		studio12,
		studio13,
	} from '$lib/assets/images/studio';
	import type { HTMLImgAttributes } from 'svelte/elements';

	const images: HTMLImgAttributes[] = [
		{
			alt: 'Studio 1',
			src: studio1,
			title: 'studio1',
			loading: "lazy",
		},
		{
			alt: 'Studio 2',
			src: studio2,
			title: 'studio2',
			loading: "lazy",
		},
		{
			alt: 'Studio 3',
			src: studio3,
			title: 'studio3',
			loading: "lazy",
		},
		{
			alt: 'Studio 4',
			src: studio4,
			title: 'studio4',
			loading: "lazy",
		},
		{
			alt: 'Studio 5',
			src: studio5,
			title: 'studio5',
			loading: "lazy",
		},
		{
			alt: 'Studio 6',
			src: studio6,
			title: 'studio6',
			loading: "lazy",
		},
		{
			alt: 'Studio 7',
			src: studio7,
			title: 'studio7',
			loading: "lazy",
		},
		{
			alt: 'Studio 8',
			src: studio8,
			title: 'studio8',
			loading: "lazy",
		},
		{
			alt: 'Studio 9',
			src: studio9,
			title: 'studio9',
			loading: "lazy",
		},
		{
			alt: 'Studio 10',
			src: studio10,
			title: 'studio10',
			loading: "lazy",
		},
		{
			alt: 'Studio 11',
			src: studio11,
			title: 'studio11',
			loading: "lazy",
		},
		{
			alt: 'Studio 12',
			src: studio12,
			title: 'studio12',
			loading: "lazy",
		},
		{
			alt: 'Studio 13',
			src: studio13,
			title: 'studio13',
			loading: "lazy",
		},
		{
			alt: 'Studio 13',
			src: studio13,
			title: 'studio13',
		}
	];
</script>

<div class="h-5/6 p-2">
	<Carousel
		class="h-[75vh] sm:h-[75vh] xl:h-[75vh] 2xl:h-[75vh]"
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
</div>
