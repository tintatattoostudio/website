<script lang="ts">
	import type { Landing } from '$lib/api/types';
	import aboutDecor from '$lib/assets/images/decors/about_blot.png';

	export let content: Landing;
</script>

<div id="about" class="mx-12 mb-16 mt-4 h-[12vh]">
	<div class="relative mt-20 flex items-center justify-start">
		<img src={aboutDecor} alt="About decoration" class="absolute z-0 h-56 w-auto -translate-x-48" />
		<h1 class="relative z-10 text-5xl font-bold text-white">
			{content.aboutTitle}
		</h1>
	</div>
	<p class="relative z-10 translate-y-[50%] text-xl leading-loose text-offblack">
		{@html content.aboutContent}
	</p>
</div>
