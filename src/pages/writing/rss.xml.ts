import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../../data/site';
import { getPosts, postHref } from '../../lib/posts';

export async function GET(context: APIContext) {
	const posts = await getPosts();
	return rss({
		title: `${site.blogName} by ${site.name}`,
		description: site.blogDescription,
		site: context.site ?? site.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: postHref(post),
			categories: post.data.tags,
			author: site.name,
		})),
		customData: '<language>en-gb</language>',
	});
}
