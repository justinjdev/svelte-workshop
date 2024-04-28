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
	<div class="page-wrapper" transition:fade={{ duration: 500 }}>
		<AnimatedBg />

		<div class="grid">
			<section class="content-wrapper">
				<div class="left" in:fly={{ x: -100, duration: 500 }}>
					<h1>Justin Jones</h1>
					<h2>Software Engineer | Tech Leader | Serial Hobbyist</h2>
				</div>
				<div class="right" in:fly={{ x: 100, duration: 500 }}>
					<ul>
						<li class="nav">
							<a href="https://www.linkedin.com/in/justin-jones-65270421/"
								><Icon data={linkedinSquare} style="margin-right:5px" /> LinkedIn
							</a>
						</li>
						<li class="nav">
							<a href="https://github.com/NachoChef"
								><Icon data={githubSquare} style="margin-right:5px" /> GitHub</a
							>
						</li>
						<li class="nav">
							<a href="https://www.instagram.com/cerealprogrammer/">
								<Icon data={instagram} style="margin-right:5px" /> Instagram
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
{/if}

<style>
	:global(body) {
		background-color: #002325;
	}
</style>
