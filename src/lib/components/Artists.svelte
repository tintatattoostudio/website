<script lang="ts">
	import type { Landing } from '$lib/api/types';
	import Artist from '$lib/components/Artist.svelte';
	import type { Artist as ArtistTpe } from '$lib/api/types';
	import artistsDecor from '$lib/assets/images/decors/artists_blot.png';

	export let content: Landing;
	export let artists: ArtistTpe[];
</script>

<div id="artists" class="mx-12 my-4 flex translate-y-[20%] flex-col gap-8">
	<div class="relative flex items-center justify-center">
		<img src={artistsDecor} alt="Artists decoration" class="absolute z-0 h-96 w-auto" />
		<h1 class="relative z-10 w-full text-center text-7xl font-bold text-white">
			{content.artistsTitle}
		</h1>
	</div>
	<div class="translate-y-[20%]">
		<p class="mb-8 text-lg text-offblack">
			{@html content.artistsContent}
		</p>
		<div class="mb-8 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
			{#each artists as artist}
				<Artist {artist} />
			{/each}
		</div>
	</div>
</div>

<!-- <div
	class="relative flex min-h-[90vh] flex-col items-center justify-end overflow-hidden bg-gray-100"
>
	<img
		src={decorBg}
		alt="Decor background"
		class="absolute left-0 top-0 h-auto w-full opacity-30"
	/>
	<div id="artists" class="relative mx-12 my-4 flex flex-col gap-8">
		<div class="relative flex translate-y-[-180%] items-center justify-center">
			<img src={artistsDecor} alt="Artists decoration" class="absolute z-0 h-96 w-auto" />
			<h1 class="relative z-10 w-full text-center font-serif text-7xl font-bold text-white">
				{content.artistsTitle}
			</h1>
		</div>
		<p class="mb-8 text-lg text-offblack">
			{@html content.artistsContent}
		</p>
		<div class="mb-8 grid grid-cols-2 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
			{#each artists as artist}
				<Artist {artist} />
			{/each}
		</div>
	</div>
</div> -->
<!-- <div
	class=" flex min-h-[90vh] flex-col items-center justify-end bg-gray-100 bg-[url('/decors/decor_bg.png')] bg-cover"
>
	<div id="artists" class="mx-12 my-4 flex flex-col gap-8">
		<div class="relative flex translate-y-[-180%] items-center justify-center">
			<img src={artistsDecor} alt="Artists decoration" class="absolute z-0 h-96 w-auto" />
			<h1 class="relative z-10 w-full text-center font-serif text-7xl font-bold text-white">
				{content.artistsTitle}
			</h1>
		</div>
		<p class="mb-8 text-lg text-offblack">
			{@html content.artistsContent}
		</p>
		<div class="mb-8 grid grid-cols-2 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
			{#each artists as artist}
				<Artist {artist} />
			{/each}
		</div>
	</div>
</div> -->
