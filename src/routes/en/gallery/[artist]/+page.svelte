<script lang="ts">
	import API from '$lib/api/client';
	import type { PageData } from './$types';

	export let data: PageData;
	const artist = data.artist;
</script>

<svelte:head>
	<title>Artist - {artist?.attributes.name}</title>
</svelte:head>

{#if data.artist}
	<div class="h-full w-screen px-12 py-4">
		<div class="flex flex-row items-center justify-start gap-4">
			<img
				class="h-32 w-32 rounded-full object-cover transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
				src={API.getImageUrl(artist?.attributes.pfp.data.attributes.url)}
				alt={artist?.attributes.name}
			/>
			<div class="flex flex-col items-start justify-start">
				<p class="text-2xl font-bold text-gray-700">{artist?.attributes.name}</p>
				<p>{artist?.attributes.styles}</p>
			</div>
		</div>
		<div class="mb-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-gray-400 py-2" />
		<p class="text-xl">{artist?.attributes.bio}</p>
		<div class="mb-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-gray-400 py-2" />

		<!-- Gallery UI -->
		{#if artist?.attributes.images}
			<div class="p-5 sm:p-8">
				<div
					class="columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8"
				>
					{#each artist.attributes.images.data as image}
						<img
							class="rounded-lg transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
							src={API.getImageUrl(image.attributes.url)}
							alt="Gallery item"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{:else}
	<div class="flex items-center justify-center">
		<h1 class="text-5xl font-bold">404 Not Found</h1>
	</div>
{/if}
