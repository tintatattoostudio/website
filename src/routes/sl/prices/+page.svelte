<script lang="ts">
  import pricing from '$lib/assets/images/studio/tinta_pricing.jpg';
</script>

<svelte:head>
	<title>Tinta - Cenik</title>
</svelte:head>

<div class="flex w-screen flex-col px-12 pb-24 md:px-60">
	<h1 class="mb-8 mt-12 break-words text-5xl font-bold text-offblack">Cenik</h1>
	<p class="text-xl text-offblack">
	  Cena je odvisna od zahtevnosti primera, časa izdelave, dela telesa in porabe materiala.
	</p>
	<p class="text-xl text-offblack">
	  Okvirna cena: 100€/h
	</p>
	<p class="text-xl text-offblack">
	  Minimalna cena: 100€
	</p>
	<br />

	<img src={pricing} alt="Tinta pricing graphic" class="w-80 shadow-lg rounded-sm" />

</div>
