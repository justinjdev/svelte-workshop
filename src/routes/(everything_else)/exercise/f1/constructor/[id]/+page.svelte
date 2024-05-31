<script lang="ts">
	import Constructor from '../Constructor.svelte';
	// these types are automatically generated into the /.svelte-kit/types.ts file
	import type { PageData } from './$types';

	// the data that is passed to the page - this includes client and server data
	export let data: PageData;

	// pull the team info out of the data object
	let { team } = data;
</script>

<!-- The header/meta info -->
<svelte:head>
	<title>{team.name} Team Page</title>
	<meta name="description" content={`This is the display page for ${team.name}`} />
</svelte:head>

<!-- the Constructor object to display the team data -->
<Constructor {team} />
