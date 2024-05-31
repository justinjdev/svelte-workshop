<script lang="ts">
	export let style: string = '';
</script>

<div class="division" {style} />

<style>
	.division {
		width: var(--width, 90%);
		background-color: white;
		height: 1px;
		opacity: 20%;
		margin: auto;
		margin-top: 15px;
		margin-bottom: 15px;
	}
</style>
