<script lang="ts">
	import { goto } from '$app/navigation';
	import { ButtonType } from './types';

	export let href: string;
	export let text: String = '';
	export let type: ButtonType = ButtonType.NEXT;

	function onClick() {
		goto(href);
	}
</script>

<button
	type="button"
	class="btn"
	class:btn-right={type === ButtonType.NEXT}
	class:btn-left={type === ButtonType.BACK}
	on:click={() => onClick()}
>
	{text ? text : type === ButtonType.NEXT ? 'Next →' : '← Back'}
</button>

<style>
	.btn {
		text-decoration: none;
		color: var(--zip-green);
		background: none;
		border: none;
		font-size: large;
		cursor: pointer;
		position: absolute;
		bottom: 57px;
	}

	.btn:hover {
		color: var(--zip-white);
		transition: ease-in-out 0.1s;
	}

	.btn-right {
		right: 50px;
	}

	.btn-left {
		left: 50px;
	}
</style>
