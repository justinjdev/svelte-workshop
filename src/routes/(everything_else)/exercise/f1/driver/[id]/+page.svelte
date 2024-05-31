<script lang="ts">
	import CenteredContent from '$lib/components/CenteredContent.svelte';
	import Driver from '../Driver.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{`${data.driver.name} Driver Page`}</title>
	<meta name="description" content={`Driver page for ${data.driver.name}`} />
	<!-- Add any other meta tags here -->
</svelte:head>

<CenteredContent>
	<Driver driver={data.driver} />
</CenteredContent>
