<script lang="ts">
	/**
	 * Okay so it's not that smart, but it can figure out which emojis and/or icons to use based on path.
	 */

	export let href: string;

	let svelte: boolean = false;

	function check(p: string): string {
		if (p.match('.svelte.dev')) {
			svelte = true;
		}

		return p;
	}

	check(href);
</script>

<a class="smart-link" {href} target={svelte ? '_blank' : '_self'} rel={svelte ? 'noopener' : ''}>
	{#if svelte}
		<img src="/assets/sveltekit.png" alt="svelte logo" height="1em" />
	{/if}
	<slot />
</a>

<style>
	.smart-link {
		color: var(--zip-green);
		text-decoration: none;
		display: flex;
		align-items: center;
		font-size: 10;
	}
</style>
