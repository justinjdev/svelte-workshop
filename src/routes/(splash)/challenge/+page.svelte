<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="challenge">
	<h1>Hmm...do you belong here?</h1>
	<p>
		It seems you've stumbled upon a challenge page. If you're here by mistake, you can go back to
		the <a href="/">home page</a>.
	</p>
	<p>Otherwise, you can try to solve the challenge below:</p>
	<form action="/challenge">
		<label for="answer">What is your favorite color?</label>
		<input type="text" id="answer" name="answer" />
		<button type="submit">Submit</button>
	</form>
</div>
