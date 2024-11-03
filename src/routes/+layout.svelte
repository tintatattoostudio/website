<script lang="ts">
	import '../app.pcss';
	import logo from '$lib/assets/logo.png';
	import routes from '$lib/routes';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	function setLocale(locale: string) {
		window.localStorage.setItem('locale', locale);
		goto(locale === 'en' ? '/en' : '/sl');
		if (locale === 'en') isEng = true;
		if (locale === 'sl') isEng = false;
	}

	onMount(() => {
		const current = window.localStorage.getItem('locale');
		if (current === 'en') {
			isEng = true;
		}

		setInterval(() => (loading = false), 3000);
	});

	let isEng = false;
	let loading = true;

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>Tinta Tattoo</title>
</svelte:head>

<main class={`${loading ? '' : 'hidden'} flex h-screen w-screen items-center justify-center`}>
	<img src={logo} class="w-[20vw] animate-pulse" alt="Tinta logo" />
</main>

<main
	class={`${
		loading ? 'hidden' : ''
	} flex min-h-screen w-screen max-w-full flex-col justify-between overflow-x-hidden bg-white`}
>
	<nav class="justify center mb-2 flex flex-col items-center">
		<!-- Logo and language switcher -->
		<div
			class="flex w-screen flex-col items-center justify-between bg-[url('/decors/navigation_bg.png')] bg-cover py-4"
		>
			<img src={logo} alt="Tinta Tattoo Logo" width="350" />
			<div class="mt-4 w-24">
				<button on:click={() => setLocale('sl')} class="transition-all duration-200 hover:font-bold"
					>SLO</button
				>
				|
				<button on:click={() => setLocale('en')} class="transition-all duration-200 hover:font-bold"
					>ENG</button
				>
			</div>
		</div>
		<!-- Navigation links -->
		<div
			class="flex w-screen flex-row items-center justify-center border border-l-0 border-r-0 border-gray-400 p-2"
		>
			<div class="px-18 flex w-[90%] flex-row items-center justify-evenly text-gray-700">
				{#each routes as route, i}
					<a
						class="text-center transition-all duration-200 hover:font-bold"
						href={isEng ? route.linkEng : route.link}>{isEng ? route.nameEng : route.name}</a
					>
					{#if i < routes.length - 1}
						<p class="mx-2">|</p>
					{/if}
				{/each}
			</div>
		</div>
	</nav>
	<slot />
	<footer class="flex flex-row items-center justify-center bg-black p-4 text-white">
		<p>
			Tinta Tattoo © {year} | {isEng ? 'Maintained by' : 'Vzdržuje'}
			<a href="https://aerio.tech">Aerio</a>
		</p>
	</footer>
</main>
