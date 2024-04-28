<script>
	import linkedinSquare from 'svelte-awesome/icons/linkedinSquare';
	import githubSquare from 'svelte-awesome/icons/githubSquare';
	import fa500px from 'svelte-awesome/icons/fa500px';
	import instagram from 'svelte-awesome/icons/instagram';

	import Icon from 'svelte-awesome/components/Icon.svelte';
</script>

<footer>
	<ul class="social-media-list">
		<li>
			<a href="https://github.com/justinjdev" aria-label="link to github"
				><Icon data={githubSquare} /></a
			>
		</li>
	</ul>
	<p class="footer-txt">Built with Sveltekit for the 2024 ZipRecruiter Tech Week</p>
	<p class="footer-txt">Copyright © 2024 Justin Jones</p>
</footer>

<style>
	.social-media-list {
		display: flex;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.social-media-list li {
		display: inline-block;
		margin: 0 5px;
	}

	.social-media-list li a {
		color: #fff;
		font-size: 20px;
		text-decoration: none;
		transition: color 0.2s ease-in-out;
	}

	.social-media-list li a:hover {
		color: #0077ff;
	}

	.footer-txt {
		color: lightcyan;
		opacity: 50%;
	}

	footer {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 400px;
		height: 50px;
		position: fixed;
		left: calc(50% - 200px);
		bottom: 30px;
	}

	footer > p {
		margin: 0;
		font-size: smaller;
	}
</style>
