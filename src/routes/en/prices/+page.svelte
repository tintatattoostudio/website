<script lang="ts">
  import pricing from '$lib/assets/images/studio/tinta_pricing_eng.jpg';
</script>

<svelte:head>
	<title>Tinta - Pricing</title>
</svelte:head>

<div class="flex w-screen flex-col px-12 pb-24 md:px-60">
	<h1 class="mb-8 mt-12 break-words text-5xl font-bold text-offblack">Pricing</h1>
	<p class="text-xl text-offblack">
    The price depends on the complexity of the case, the time of production, the body part and the material consumption.
	</p>
	<p class="text-xl text-offblack">
    Approximate price: 100€/h
	</p>
	<p class="text-xl text-offblack">
    Minimum price: 100€
	</p>
	<br />

	<img src={pricing} alt="Tinta pricing graphic" class="w-80 shadow-lg rounded-sm" />

</div>
