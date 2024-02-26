<script lang="ts">
	import { marked } from 'marked';
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tinta - FAQ</title>
</svelte:head>

<div class="mx-12">
	<h1 class="text-4xl font-bold text-offblack">Pogosta vprašanja</h1>
	<br />

	{#each data.sections as section}
		<h2 class="text-2xl font-bold text-offblack">{section.title}</h2>
		{#if section.content}
			<p class="text-offblack"></p>
		{/if}
		<div class="mb-2" />

		<Accordion>
			{#each section.qa as qa}
				<AccordionItem>
					<span slot="header">{qa.question}</span>
					<p class="prose max-w-none">
						{@html marked.parse(qa.answer)}
					</p>
				</AccordionItem>
			{/each}
		</Accordion>
		<div class="mb-8" />
	{/each}
</div>
