<script lang="ts">
	import { page } from '$app/stores';
	import CenteredContent from '$lib/components/CenteredContent.svelte';
</script>

<CenteredContent>
	<div class="challenge">
		<h1>Hmm...do you belong here?</h1>
		<p>
			It seems you've stumbled upon a challenge page. If you're here by mistake, you can go back to
			the <a href="/">home page</a>.
		</p>
		<p>Otherwise, you can try to solve the challenge below:</p>
		<form method="POST" action="/challenge">
			<label for="answer">What is your favorite color?</label>
			<input type="text" id="color" name="color" />
			<input type="hidden" name="next" value={$page.params.next} />
			<button type="submit" class="btn"> Submit </button>
		</form>
	</div>
</CenteredContent>

<style>
	.btn {
		text-decoration: none;
		color: var(--zip-green);
		background: none;
		border: none;
		font-size: large;
		cursor: pointer;
	}

	.btn:hover {
		color: var(--zip-white);
		transition: ease-in-out 0.1s;
	}

	.challenge {
		text-align: center;
		width: 50%;
		height: 50%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
	}

	.challenge h1 {
		font-size: 2rem;
	}

	.challenge p {
		margin: 1rem 0;
	}

	.challenge form {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.challenge label {
		margin-bottom: 0.5rem;
	}

	.challenge input {
		margin-bottom: 1rem;
	}

	.challenge button {
		padding: 0.5rem 1rem;
	}
</style>
