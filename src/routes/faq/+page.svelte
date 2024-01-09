<script lang="ts">
	import { faq } from '$lib/content';
	import { Accordion, AccordionItem } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Tinta - FAQ</title>
</svelte:head>

<div class="mx-12">
	<h1 class="text-offblack text-4xl font-bold">Pogosta vprašanja</h1>
	<br />
	<Accordion>
		{#each faq as qa}
			<AccordionItem>
				<span slot="header">{qa.question}</span>
				<p>{qa.answer}</p>
			</AccordionItem>
		{/each}
	</Accordion>
</div>
