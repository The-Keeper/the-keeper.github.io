<script lang='ts'>
	import '../app.postcss';

	// Components & Utilities
	import { AppShell, Modal, Toast, initializeStores, prefersReducedMotionStore } from '@skeletonlabs/skeleton';
	initializeStores();

	import Drawer from '$lib/components/Drawer.svelte';
	import CustomAppBar from '$lib/components/CustomAppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	// Disable left sidebar on homepage
	$: allowPageSmoothScroll = !$prefersReducedMotionStore ? 'scroll-smooth' : '';
</script>

<!-- Overlays -->
<Toast />
<Drawer />

<!-- App Shell -->
<AppShell regionPage={allowPageSmoothScroll} slotFooter="bg-black p-4">
	<!-- Header -->
	<svelte:fragment slot="header">
		<CustomAppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:grid w-[360px] h-full overflow-hidden"><Sidebar/></div>
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Page Footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>