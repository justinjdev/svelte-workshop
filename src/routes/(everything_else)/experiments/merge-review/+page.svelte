<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let lines: string[] = [];
	let comments: string[] = [];

	function addComment(lineNumber: number) {
		// Add a new comment to the comments array
		comments.push('test');
	}

	function saveComment(index: number) {
		// Save the comment at the specified index
		// You can send the comment to a server or store it locally
	}

	function deleteComment(index: number) {
		// Delete the comment at the specified index
		comments.splice(index, 1);
	}
</script>

<div class="container">
	<div class="line-number">
		{#each lines as line, i}
			<div>{i + 1}</div>
		{/each}
	</div>
	<div class="code-line">
		{#each lines as line, i}
			<div>
				{line}
				{#if comments[i]}
					<div class="comment">
						<textarea bind:value={comments[i]}></textarea>
						<div class="comment-actions">
							<button on:click={() => saveComment(i)}>Save</button>
							<button on:click={() => deleteComment(i)}>Delete</button>
						</div>
					</div>
				{/if}
				<button on:click={() => addComment(i)}>Add Comment</button>
			</div>
		{/each}
	</div>
</div>

<!-- perse the file, figure out line counts, display textarea with leftside  -->
<style>
	.container {
		display: flex;
	}

	.line-number {
		width: 50px;
		padding: 0 10px;
		text-align: right;
	}

	.code-line {
		flex: 1;
		padding: 0 10px;
		border-bottom: 1px solid #ddd;
	}

	.comment {
		background-color: #f5f5f5;
		padding: 5px;
		border-radius: 5px;
		margin-bottom: 5px;
	}

	.comment textarea {
		width: 100%;
		height: 50px;
		border: none;
		resize: none;
	}

	.comment-actions {
		display: flex;
		justify-content: flex-end;
		margin-top: 5px;
	}

	.comment-actions button {
		margin-left: 10px;
	}
</style>
