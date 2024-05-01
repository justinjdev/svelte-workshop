<script lang="ts">
	import Division from '$lib/components/Division.svelte';
	import FlowButton from '$lib/components/FlowButton.svelte';
	import { ButtonType } from '$lib/components/types';
	import type { PageData } from '../../../(splash)/prepare/$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="page">
	<article class="article-container">
		<!-- heading -->
		<hgroup>
			<h1 class="title">{data.meta.title}</h1>
			<h3>{data.meta.description}</h3>
		</hgroup>

		<Division />

		<!-- post content -->
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>

	<!-- nav -->
	{#if data.meta.prev}
		<FlowButton href="/learn/{data.meta.prev}" type={ButtonType.BACK} />
	{/if}
	{#if data.meta.next}
		<FlowButton href="/learn/{data.meta.next}" type={ButtonType.NEXT} />
	{/if}
</div>

<style>
	.page {
		overflow: hidden;
	}

	.article-container {
		max-inline-size: 80%;
		margin-inline: auto;
		padding: 25px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 12px;
		color: white;
		max-height: calc(100vh - 160px);
		overflow-y: auto;
		line-height: 2em;
		text-wrap: wrap;
	}

	.article-container > * > .title {
		text-transform: capitalize;
	}

	.title {
		font-size: 2.5em;
		color: var(--zip-green);
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
		text-decoration: underline;
	}

	hgroup {
		text-align: center;
	}
</style>
