<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tinta - Care</title>
</svelte:head>

<div class="flex w-screen flex-col px-12 pb-24 md:px-60">
	<h1 class="mb-8 mt-12 text-5xl font-bold text-offblack">{data?.care?.title}</h1>
	<p class="text-xl text-offblack">{data?.care?.content}</p>
	<br />

	{#each data?.care?.segments as section}
		<h2 class="mb-2 text-left text-3xl font-bold">{section.title}</h2>
		<p class="prose mb-4 max-w-none text-xl">
			{@html marked.parse(section.content)}
		</p>
		<div class="mb-4" />
	{/each}
</div>
