<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

  onMount(() => {
		const current = window.localStorage.getItem('locale');
		if (current === 'en') {
			goto('/en');
		} else {
			goto('/sl');
		}
	});
</script>