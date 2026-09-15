import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://sandip.live', // Used for canonical URLs, the sitemap and RSS.
	integrations: [
		sitemap({
			// Keep utility and thin tag pages out of the sitemap.
			filter: (page) => !/\/(contact-thank-you|404)\/?$/.test(page) && !/\/writing\/tags\/[^/]+\/?$/.test(page),
		}),
		mdx(),
	],
	markdown: {
		shikiConfig: { theme: 'css-variables' },
	},
});
