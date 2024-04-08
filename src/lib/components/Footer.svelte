<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import ig from '$lib/assets/icons/instagram.svg';
	import fb from '$lib/assets/icons/facebook.svg';
</script>

<div
	class="flex flex-row items-center justify-evenly gap-4 bg-[url('/decors/footer_decor.png')] bg-cover px-16 pb-12 max-[1200px]:flex-col"
>
	<div class="mt-4 flex flex-col items-start justify-center">
		<img src={logo} class="h-auto max-h-96" alt="Tinta logo" />
		<p class="text-2xl text-black">Karingerjeva ulica 8, 1000 Ljubljana</p>
		<br />
		<p class="text-2xl text-black">
			<a href="mailto:tattoostudio.tinta@gmail.com">tattoostudio.tinta@gmail.com</a>
		</p>
		<br />
		<div class="flex flex-row items-center justify-center gap-4">
			<a
				class="transition-all duration-200 hover:font-bold"
				href="https://www.instagram.com/tinta_tattoostudio/"
				target="_blank"
				><img src={ig} alt="Instagram logo" class="h-8 transition-all duration-200 hover:h-10" /></a
			>
			<a
				class="transition-all duration-200 hover:font-bold"
				href="https://www.facebook.com/profile.php?id=61554577949770"
				target="_blank"
				><img src={fb} alt="Instagram logo" class="h-8 transition-all duration-200 hover:h-10" /></a
			>
			<!-- <a class="transition-all duration-200 hover:font-bold" href="">tiktok</a> -->
		</div>
	</div>
	<div class="px-20">
		<iframe
			title="Tattoo Studio Location"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.177745627873!2d14.470670277030784!3d46.06749689298307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477acd5200d57a59%3A0xd614356aea33f419!2sKaringerjeva%20ulica%208%2C%201000%20Ljubljana!5e0!3m2!1sen!2ssi!4v1704786011626!5m2!1sen!2ssi"
			style="border:0;"
			class="h-[450px] w-[350px] rounded-lg shadow-xl max-[650px]:w-[640px]"
			allowfullscreen={false}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</div>
