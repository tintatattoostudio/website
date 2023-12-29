<script lang="ts">
	import '../app.pcss';
	import logo from '$lib/assets/logo.png';
	import routes from '$lib/routes';

	const year = new Date().getFullYear();
</script>

<main class="flex min-h-screen flex-col justify-between bg-white">
	<nav class="justify center mb-2 flex flex-col items-center">
		<!-- Logo and language switcher -->
		<div class="flex w-screen flex-row items-center justify-between p-4">
			<div class="w-24" />
			<img src={logo} alt="Tinta Tattoo Logo" width="150" />
			<div class="w-24">SLO | ENG</div>
		</div>
		<!-- Navigation links -->
		<div
			class="flex w-screen items-center justify-center border border-l-0 border-r-0 border-gray-400 p-2"
		>
			<div class="flex w-10/12 flex-row items-center justify-evenly px-24 text-gray-700">
				{#each routes as route, i}
					<a class="transition transition-all duration-150 hover:font-bold" href={route.link}
						>{route.name}</a
					>
					{#if i < routes.length - 1}
						<p class="mx-2">|</p>
					{/if}
				{/each}
			</div>
		</div>
	</nav>
	<slot />
	<footer class="flex flex-row items-center justify-center bg-black p-4">
		<p>Tinta Tattoo © {year} | Vzdržuje <a href="https://aerio.tech">Aerio</a></p>
	</footer>
</main>
