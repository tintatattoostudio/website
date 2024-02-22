<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	// images
	import { studio1, studio2, studio3, studio4, studio5, studio6 } from '$lib/assets/images/studio';

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
	];
</script>

<div class="h-5/6 p-2">
	<Carousel
		class="h-[50vh] sm:h-[50vh] xl:h-[50vh] 2xl:h-[50vh]"
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
