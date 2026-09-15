import { site } from '../data/site';
import { formatLongDate, getPosts, postHref } from '../lib/posts';

export async function GET() {
	const posts = await getPosts();
	const abs = (path: string) => new URL(path, site.url).toString();

	const parts = [
		`# ${site.blogName} by ${site.name}`,
		'',
		`> ${site.blogDescription}`,
		'',
		`Author: ${site.name}, ${site.jobTitle}, ${site.locality}. Profile: ${abs('/about/')}`,
		'',
		...posts.flatMap((post) => [
			'---',
			'',
			`# ${post.data.title}`,
			'',
			`URL: ${abs(postHref(post))}`,
			`Published: ${formatLongDate(post.data.publishDate)}`,
			`Topics: ${post.data.tags.join(', ')}`,
			`Summary: ${post.data.description}`,
			'',
			post.body.trim(),
			'',
		]),
	];

	return new Response(parts.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
