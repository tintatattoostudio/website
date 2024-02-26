<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tinta - Care</title>
</svelte:head>

<div class="flex w-screen flex-col px-12 md:px-60">
	<h1 class="text-4xl font-bold text-offblack">{data?.care?.title}</h1>
	<p class="text-offblack">{data?.care?.content}</p>
	<br />

	{#each data?.care?.segments as section}
		<h2 class="text-left text-2xl font-bold">{section.title}</h2>
		<p class="prose max-w-none">
			{@html marked.parse(section.content)}
		</p>
		<div class="mb-4" />
	{/each}
</div>
