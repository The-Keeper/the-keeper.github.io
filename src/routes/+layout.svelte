<script lang="ts">
	import '../app.css';
	import "@unocss/reset/tailwind.css";
	import "virtual:uno.css";

	const { children } = $props();

	import { base } from '$app/paths';

 </script>

	<main class="md:ml-64 p-4">
		{@render children()}
	</main>
