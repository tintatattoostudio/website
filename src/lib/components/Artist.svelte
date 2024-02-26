<script lang="ts">
	import API from '$lib/api/client';
	import type { Artist } from '$lib/api/types';

	export let artist: Artist;
</script>

<a
	href={`/gallery/${artist.attributes.artist}`}
	class="flex flex-col items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:opacity-80"
>
	<img
		class="h-52 w-52 rounded-full object-cover"
		src={API.getImageUrl(artist.attributes.pfp.data.attributes.url)}
		alt={artist.attributes.name}
	/>
	<div class="flex flex-col items-center justify-center">
		<p class="text-2xl font-bold text-offblack">{artist.attributes.name}</p>
		<p class="text-offblack">{artist.attributes.styles}</p>
	</div>
</a>
