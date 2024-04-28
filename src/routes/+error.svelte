<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	// If I don't do this, error updates to null and then throws before the next page is ready
	// this breaks nav back
	const code = $page.status;
	const message = $page.error?.message;

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div class="error-wrapper" transition:fade={{ duration: 500 }}>
		<section class="content-wrapper">
			<h1>Whoops!</h1>
			<h3>{code} | {message}</h3>
			{#if code < 500}
				<img src="/assets/no.gif" alt="You can't do that" />
			{:else}
				<img src="/assets/crash.gif" alt="Server error" />
			{/if}
		</section>
	</div>
{/if}

<style>
	/* :global(body) {
		background-color: #111;
		color: lightcyan;
	} */

	.error-wrapper {
		height: 100vh;
		text-align: center;
		padding-top: 5vh;
	}

	.content-wrapper {
		margin: auto;
		width: 50%;
		align-items: center;
		height: 80%;
	}
</style>
