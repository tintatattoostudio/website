<script lang="ts">
	import { studio1, studio2, studio3 } from '$lib/assets/images/studio';
	import Artist from '$lib/components/Artist.svelte';
	import type { ArtistType } from '$lib/types';
	import { Carousel } from 'flowbite-svelte';
	import Lana from '$lib/assets/images/artists/lana/profile.png';
	import Milly from '$lib/assets/images/artists/milly/profile.png';
	import Tilen from '$lib/assets/images/artists/tilen/profile.png';

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

	const artists: ArtistType[] = [
		{
			name: 'Lana',
			image: Lana,
			styles: 'Linework, illustrative, blackwork',
		},
		{
			name: 'Milly',
			image: Milly,
			styles: 'Realizem, linework',
		},
		{
			name: 'Tilen',
			image: Tilen,
			styles: 'Realizem, abstraktni realizem',
		},
	];
</script>

<svelte:head>
	<title>Tinta Tattoo</title>
</svelte:head>

<div>
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

	<div id="about" class="mx-12 my-4 min-h-[25vh]">
		<h1 class="text-5xl font-bold text-black">O nas</h1>
		<p class="mt-2 text-lg leading-loose">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
			velit. Ut etiam sit amet nisl purus in mollis nunc sed. Faucibus nisl tincidunt eget nullam
			non nisi. Mollis nunc sed id semper risus. Sed cras ornare arcu dui vivamus arcu. At in tellus
			integer feugiat scelerisque varius.
		</p>
	</div>

	<div class=" flex min-h-[80vh] w-screen flex-col items-center justify-center bg-gray-100">
		<div id="artists" class="mx-12 my-4 flex flex-col gap-8">
			<h1 class="w-full text-center text-5xl font-bold text-black">Tetoverji</h1>
			<p class=" text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
				velit. Ut etiam sit amet nisl purus in mollis nunc sed. Faucibus nisl tincidunt eget nullam
				non nisi. Mollis nunc sed id semper risus. Sed cras ornare arcu dui vivamus arcu. At in
				tellus integer feugiat scelerisque varius.
			</p>
			<div class="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
				{#each artists as artist}
					<Artist {artist} />
				{/each}
			</div>
		</div>
	</div>
</div>
