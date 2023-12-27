<script lang="ts">
	import { studio1, studio2, studio3 } from '$lib/assets/images/studio';
	import { Carousel } from 'flowbite-svelte';

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
	];
</script>

<svelte:head>
	<title>Tinta Tattoo</title>
</svelte:head>

<main class="min-h-screen">
	<div class="h-5/6 bg-black">
		<Carousel {images} imgClass="h-full object-fit rounded-none" let:Controls transition={null}>
			<Controls />
		</Carousel>
	</div>
</main>
