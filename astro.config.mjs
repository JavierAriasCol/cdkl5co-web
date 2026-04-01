// @ts-check
import { defineConfig, envField } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		imageService: 'passthrough',
	}),
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			components: {
				miembro: 'storyblok/Miembro',
				evento: 'storyblok/Evento',
			},
			apiOptions: {
				region: 'eu',
			},
		}),
	],
});
