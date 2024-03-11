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
		<h1 class="relative z-10 w-full text-center font-serif text-7xl font-bold text-white">
			{content.artistsTitle}
		</h1>
	</div>
	<div class="translate-y-[20%]">
		<p class="mb-8 text-lg text-offblack">
			{@html content.artistsContent}
		</p>
		<div class="mb-8 flex flex-col items-center gap-4">
			{#each artists as artist}
				<Artist {artist} />
			{/each}
		</div>
	</div>
</div>
<!-- <script lang="ts">
	import type { Landing } from '$lib/api/types';
	import Artist from '$lib/components/Artist.svelte';
	import type { Artist as ArtistType } from '$lib/api/types';
	import artistsDecor from '$lib/assets/images/decors/artists_blot.png';

	export let content: Landing;
	export let artists: ArtistType[];
</script>

<div id="artists" class="mx-12 my-4 flex h-[300vh] translate-y-[20%] flex-col gap-8">
	<div class="relative flex items-center justify-center">
		<img src={artistsDecor} alt="Artists decoration" class="absolute z-0 h-96 w-auto" />
		<h1 class="relative z-10 w-full translate-y-[-20%] text-center text-7xl font-bold text-white">
			{content.artistsTitle}
		</h1>
	</div>
	<div class="translate-y-[20%]">
		<p class="mb-8 text-xl text-offblack">
			{@html content.artistsContent}
		</p>
		<div class="mb-8 flex flex-col">
			{#each artists as artist}
				<Artist {artist} />
			{/each}
		</div>
	</div>
</div> -->

<!-- 
<div id="artists" class="mx-12 my-4 flex translate-y-[20%] flex-col gap-8">
	<div class="relative flex items-center justify-center">
		<img src={artistsDecor} alt="Artists decoration" class="absolute z-0 h-96 w-auto" />
		<h1 class="relative z-10 w-full translate-y-[-20%] text-center text-7xl font-bold text-white">
			{content.artistsTitle}
		</h1>
	</div>
	<div class="translate-y-[20%]">
		<p class="mb-8 text-xl text-offblack">
			{@html content.artistsContent}
		</p>
		<div class="mb-8 grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
			{#each artists as artist}
				<Artist {artist} />
			{/each}
		</div>
	</div>
</div> -->
