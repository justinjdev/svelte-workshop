<script lang="ts">
	/**
	 * Okay so it's not that smart, but it can figure out which emojis and/or icons to use based on path.
	 */

	export let href: string;
	export let rel: string;

	let svelteIcon: boolean = check(href);

	function check(p: string): boolean {
		if (p.search('svelte.dev') !== -1) {
			return true;
		}

		return false;
	}
</script>

<a class="smart-link" {href} target={svelteIcon ? '_blank' : '_self'} {rel}>
	{#if svelteIcon}
		<img class="icon" src="/assets/sveltekit.png" alt="svelte logo" />
	{/if}
	<slot />
</a>

<style>
	.smart-link {
		color: var(--zip-green);
		text-decoration: none;
		text-align: center;
		font-size: 10;
	}

	.icon {
		height: 1em;
	}
</style>
