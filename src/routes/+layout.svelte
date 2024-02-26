<script lang="ts">
	import '../app.pcss';
	import logo from '$lib/assets/logo.png';
	import routes from '$lib/routes';
	import { onMount } from 'svelte';

	function setLocale(locale: string) {
		window.localStorage.setItem('locale', locale);
		window.location.reload();
	}

	onMount(() => {
		const current = window.localStorage.getItem('locale');
		if (current === 'en') {
			isEng = true;
		}
	});

	let isEng = false;

	const year = new Date().getFullYear();
</script>

<main
	class="flex min-h-screen w-screen max-w-full flex-col justify-between overflow-x-hidden bg-white"
>
	<nav class="justify center mb-2 flex flex-col items-center">
		<!-- Logo and language switcher -->
		<div
			class="flex w-screen flex-row items-center justify-between bg-[url('/decors/navigation_bg.png')] bg-cover p-4"
		>
			<div class="w-24" />
			<img src={logo} alt="Tinta Tattoo Logo" width="350" />
			<div class="w-24">
				<button on:click={() => setLocale('sl')} class="transition-all duration-150 hover:font-bold"
					>SLO</button
				>
				|
				<button on:click={() => setLocale('en')} class="transition-all duration-150 hover:font-bold"
					>ENG</button
				>
			</div>
		</div>
		<!-- Navigation links -->
		<div
			class="flex w-screen items-center justify-center border border-l-0 border-r-0 border-gray-400 p-2"
		>
			<div class="flex w-10/12 flex-row items-center justify-evenly px-24 text-gray-700">
				{#each routes as route, i}
					<a class="transition-all duration-150 hover:font-bold" href={route.link}
						>{isEng ? route.nameEng : route.name}</a
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
		<p>Tinta Tattoo © {year} | Vzdržuje <a href="https://aerio.tech">Aerio</a></p>
	</footer>
</main>
