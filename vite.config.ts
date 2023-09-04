import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [{ ...threeMinifier(), enforce: "pre" }, sveltekit(), purgeCss()],  
	ssr: {
		noExternal: ['three']
	}
});
