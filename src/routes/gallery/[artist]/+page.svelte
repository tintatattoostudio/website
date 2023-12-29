<script lang="ts">
	import { getImageUrl } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.artist}
	<div class="h-full w-screen px-12 py-4">
		<div class="flex flex-row items-center justify-start gap-4">
			<img
				class="w-32 rounded-full transition transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:cursor-pointer"
				src={data.artist.image}
				alt={data.artist.name}
			/>
			<div class="flex flex-col items-start justify-start">
				<p class="text-2xl font-bold text-gray-700">{data.artist.name}</p>
				<p>{data.artist.styles}</p>
			</div>
		</div>
		<div class="mb-4 border border-b-2 border-l-0 border-r-0 border-t-0 border-gray-400 py-2" />

		<!-- Gallery UI -->
		{#if data.gallery}
			<div class="p-5 sm:p-8">
				<div
					class="columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8"
				>
					{#each data.gallery as image}
						<img class="rounded-lg" src={getImageUrl(image.attributes.url)} alt="Gallery item" />
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
