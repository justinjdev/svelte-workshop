<script lang="ts">
	import type { Season } from '$lib/server/db/types';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { fade, fly } from 'svelte/transition';
	import { Icon } from 'svelte-awesome';
	import Footer from '$lib/components/Footer.svelte';
	import { linkedinSquare, githubSquare, instagram } from 'svelte-awesome/icons';
	import AnimatedBg from '$lib/components/AnimatedBG.svelte';

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

<svelte:head>
	<title>Svelte Workshop | Tech Week 2024</title>
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta
		property="og:description"
		content="A website for the 2024 ZipRecruiter Tech Week 'Svelte' workshop. Look, meta tags!"
	/>
</svelte:head>

{#if ready}
	<div class="page-wrapper" transition:fade={{ duration: 1000 }}>
		<AnimatedBg />

		<div class="hero-wrapper">
			<h1 transition:fly={{ y: -100, duration: 500 }}>Sveltekit Workshop</h1>
			<h2 transition:fly={{ y: 100, duration: 500 }}>Tech Week 2024</h2>
		</div>
	</div>
{/if}

<style>
	.hero-wrapper {
		text-align: center;
		display: flex;
		flex-direction: column;
		height: 80vh;
		justify-content: center;
		align-items: center;
		color: white;
	}
</style>
