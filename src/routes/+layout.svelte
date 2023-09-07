<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail } from '@skeletonlabs/skeleton';

	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Scene.svelte';
</script>

<div class="scene absolute h-full w-full">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="transparent">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="relative">
		<slot />
	</div>
	<svelte:fragment slot="footer">
		<!-- App Footer -->
		<div class="z-50 relative">
			<span>HDR: Kloppenheim 02 at <a class="text-primary underline" href="https://polyhaven.com/a/kloppenheim_02">Poly Haven</a></span>
		</div>
	</svelte:fragment>

</AppShell>
