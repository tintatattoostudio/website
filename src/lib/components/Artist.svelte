<script lang="ts">
	import type { ArtistType } from '$lib/types';

	export let artist: ArtistType;
</script>

<a
	href={`/gallery/${artist.gallery}`}
	class="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
>
	<img class="w-52 rounded-full" src={artist.image} alt={artist.name} />
	<div class="flex flex-col items-center justify-center">
		<p class="text-offblack text-2xl font-bold">{artist.name}</p>
		<p class="text-offblack">{artist.styles}</p>
	</div>
</a>
