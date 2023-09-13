<script lang="ts">
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	// Icons
	import Icon from '@iconify/svelte';
	import homeSolid from '@iconify/icons-teenyicons/home-solid';
	import tailwindSolid from '@iconify/icons-teenyicons/tailwind-solid';
	import svelteSolid from '@iconify/icons-teenyicons/svelte-solid';

</script>

<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30">
	<!-- App Rail -->
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		<!-- Mobile Only -->
		<!-- prettier-ignore -->
		<AppRailAnchor href="/" class="lg:hidden">
			<svelte:fragment slot="lead"><Icon icon={homeSolid} class="w-6 h-6 inline-block outline-none" /></svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>
		<AppRailAnchor href="https://tailwindcss.com/">
			<svelte:fragment slot="lead"><Icon icon={tailwindSolid} class="w-6 h-6 inline-block outline-none" /></svelte:fragment>
			<span>Tailwind</span>
		</AppRailAnchor>
		<AppRailAnchor href="https://svelte.dev//">
			<svelte:fragment slot="lead"><Icon icon={svelteSolid} class="w-6 h-6 inline-block outline-none" /></svelte:fragment>
			<span>Svelte</span>
		</AppRailAnchor>
	</AppRail>
</div>
