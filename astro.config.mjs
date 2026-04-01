// @ts-check
import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	integrations: [
		storyblok({
			accessToken: import.meta.env.STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN,
			components: {
				miembro: 'storyblok/Miembro',
				evento: 'storyblok/Evento',
			},
			apiOptions: {
				region: 'us',
			},
		}),
	],
});
