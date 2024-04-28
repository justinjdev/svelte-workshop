<script lang="ts">
	import Division from '$lib/components/Division.svelte';
	import FlowButton from '$lib/components/FlowButton.svelte';
	import { ButtonType } from '$lib/components/types';
	import type { PageData } from './$types';

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
		</hgroup>

		<Division />

		<!-- post content -->
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>

	<FlowButton href="/tuts/{data.meta.next}" type={ButtonType.NEXT} />
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

	.prose > * > p {
		text-indent: 20px;
	}

	.article-container > * > .title {
		text-transform: capitalize;
	}

	hgroup {
		text-align: center;
	}

	h1 + p {
		margin-top: 2px;
	}

	.next {
		position: absolute;
		right: 50px;
		bottom: 50px;
	}
</style>
