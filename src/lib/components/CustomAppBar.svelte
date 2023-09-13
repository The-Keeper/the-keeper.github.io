<script lang="ts">
	// Types
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	// Icons
	import Icon from '@iconify/svelte';
	import menuOutline from '@iconify/icons-teenyicons/menu-outline';
	import homeSolid from '@iconify/icons-teenyicons/home-solid';
	import githubSolid from '@iconify/icons-teenyicons/github-solid';

	// Components & Utilities
	import { AppBar } from '@skeletonlabs/skeleton';

	// Stores
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	// Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'doc-sidenav' };
		drawerStore.open(s);
	}

</script>

<AppBar shadow="shadow-2xl" slotTrail="!space-x-2">
	<svelte:fragment slot="lead">
		<div class="flex items-center space-x-4">
			<!-- Hamburger Menu -->
			<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
				<Icon icon={menuOutline} />
			</button>
			<!-- Logo -->
			<a class="hidden lg:block lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
				<Icon icon={homeSolid} class="w-6 h-6 inline-block outline-none" />
			</a>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<!-- Socials -->
		<div>
			<a href="https://github.com/The-Keeper/" class="space-x-2 align-middle" target="_blank" rel="noreferrer">
				<Icon icon={githubSolid} class="inline-block" /><span>Github</span>
			</a>
		</div>
	</svelte:fragment>
</AppBar>
