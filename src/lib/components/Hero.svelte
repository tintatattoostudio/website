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

	const images = [
		{
			alt: 'Studio 1',
			src: studio1,
			title: 'studio1',
		},
		{
			alt: 'Studio 2',
			src: studio2,
			title: 'studio2',
		},
		{
			alt: 'Studio 3',
			src: studio3,
			title: 'studio3',
		},
		{
			alt: 'Studio 4',
			src: studio4,
			title: 'studio4',
		},
		{
			alt: 'Studio 5',
			src: studio5,
			title: 'studio5',
		},
		{
			alt: 'Studio 6',
			src: studio6,
			title: 'studio6',
		},
		{
			alt: 'Studio 7',
			src: studio7,
			title: 'studio7',
		},
		{
			alt: 'Studio 8',
			src: studio8,
			title: 'studio8',
		},
		{
			alt: 'Studio 9',
			src: studio9,
			title: 'studio9',
		},
		{
			alt: 'Studio 10',
			src: studio10,
			title: 'studio10',
		},
		{
			alt: 'Studio 11',
			src: studio11,
			title: 'studio11',
		},
		{
			alt: 'Studio 12',
			src: studio12,
			title: 'studio12',
		},
		{
			alt: 'Studio 13',
			src: studio13,
			title: 'studio13',
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

	>
		<Indicators />
		<Controls />
	</Carousel>
</div>
