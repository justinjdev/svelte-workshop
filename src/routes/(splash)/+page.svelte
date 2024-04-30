<script lang="ts">
	import { onMount } from 'svelte';
	import { Icon } from 'svelte-awesome';
	import { rocket } from 'svelte-awesome/icons';
	import { fade, fly } from 'svelte/transition';

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
		<div class="hero-wrapper">
			<h1 transition:fly={{ y: -100, duration: 500 }}>Sveltekit Workshop</h1>
			<h2 transition:fly={{ y: 100, duration: 500 }}>Tech Week 2024</h2>

			<button class="start">
				<a href="/prepare">Let's Go! <Icon data={rocket} /> </a>
			</button>
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

	.start {
		background: none;
		border: none;
		color: var(--zip-white);
		padding-top: 50px;
		border-radius: 5px;
		font-size: 2em;
	}

	a {
		text-decoration: none;
		color: var(--zip-green);
	}

	a:hover {
		color: var(--zip-white);
		transition: ease-in-out 0.1s;
	}

	h1 {
		font-size: 3em;
	}
</style>
