// @ts-check
import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import cloudflare from '@astrojs/cloudflare';
import { loadEnv } from 'vite';
import mkcert from 'vite-plugin-mkcert';

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
			livePreview: true,
			components: {
				miembro: 'storyblok/Miembro',
				evento: 'storyblok/Evento',
			},
			apiOptions: {
				region: 'eu',
			},
		}),
	],
	vite: {
		plugins: [mkcert()],
	},
});
