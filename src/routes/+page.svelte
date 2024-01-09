<script lang="ts">
	import Artist from '$lib/components/Artist.svelte';
	import { artists } from '$lib/content';
	import { Carousel } from 'flowbite-svelte';
	// images
	import logo from '$lib/assets/logo.png';
	import { studio1, studio2, studio3 } from '$lib/assets/images/studio';
	import aboutDecor from '$lib/assets/images/decors/about_blot.png';
	import artistsDecor from '$lib/assets/images/decors/artists_blot.png';

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

	<div id="about" class="mx-12 mt-4 h-[5vh]">
		<div class="relative mt-20 flex items-center justify-start">
			<img
				src={aboutDecor}
				alt="About decoration"
				class="absolute z-0 h-56 w-auto -translate-x-48"
			/>
			<h1 class="relative z-10 font-serif text-5xl font-bold text-white">O nas</h1>
		</div>
		<!-- <h1
			class="h-44 w-44 bg-[url('/decors/about_blot.png')] bg-contain bg-no-repeat text-5xl font-bold text-black"
		>
			O nas
		</h1> -->
		<p class="text-offblack relative z-10 text-lg leading-loose">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
			velit. Ut etiam sit amet nisl purus in mollis nunc sed. Faucibus nisl tincidunt eget nullam
			non nisi. Mollis nunc sed id semper risus. Sed cras ornare arcu dui vivamus arcu. At in tellus
			integer feugiat scelerisque varius.
		</p>
	</div>

	<div
		class=" flex min-h-[90vh] flex-col items-center justify-end bg-gray-100 bg-[url('/decors/decor_bg.png')] bg-cover"
	>
		<div id="artists" class="mx-12 my-4 flex flex-col gap-8">
			<!-- <h1 class="w-full text-center text-5xl font-bold text-black">Tetoverji</h1> -->
			<div class="relative flex translate-y-[-180%] items-center justify-center">
				<img src={artistsDecor} alt="Artists decoration" class="absolute z-0 h-96 w-auto" />
				<h1 class="relative z-10 w-full text-center font-serif text-7xl font-bold text-white">
					Tetoverji
				</h1>
			</div>
			<p class="text-offblack mb-8 text-lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper
				velit. Ut etiam sit amet nisl purus in mollis nunc sed. Faucibus nisl tincidunt eget nullam
				non nisi. Mollis nunc sed id semper risus. Sed cras ornare arcu dui vivamus arcu. At in
				tellus integer feugiat scelerisque varius.
			</p>
			<div class="mb-8 grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
				{#each artists as artist}
					<Artist {artist} />
				{/each}
			</div>
		</div>
	</div>

	<div
		class="flex w-screen flex-row items-center justify-evenly bg-[url('/decors/footer_decor.png')] bg-cover pb-12"
	>
		<div class="">
			<iframe
				title="Tattoo studio location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.177745627873!2d14.470670277030784!3d46.06749689298307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477acd5200d57a59%3A0xd614356aea33f419!2sKaringerjeva%20ulica%208%2C%201000%20Ljubljana!5e0!3m2!1sen!2ssi!4v1704786011626!5m2!1sen!2ssi"
				width="600"
				height="450"
				style="border:0;"
				class="rounded-lg shadow-xl"
				allowfullscreen={false}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
		<div class="flex flex-col items-start justify-center">
			<img src={logo} class="h-96" alt="Tinta logo" />
			<p class="text-2xl text-black">Karingerjeva ulica 8, 1000 Ljubljana</p>
			<br />
			<p class="text-2xl text-black">mail@tinta.tattoo</p>
			<br />
			<p class="text-2xl text-black">+386 40 123 456</p>
			<br />
			<p class="text-2xl text-black">
				<a class="transition-all duration-150 hover:font-bold" href="">ig</a>
				<a class="transition-all duration-150 hover:font-bold" href="">fb</a>
				<a class="transition-all duration-150 hover:font-bold" href="">tiktok</a>
			</p>
		</div>
	</div>
</div>
