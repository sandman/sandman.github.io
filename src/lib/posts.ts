import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

const WORDS_PER_MINUTE = 230;
const AGED_AFTER_MS = 1000 * 60 * 60 * 24 * 365 * 2;

export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function postHref(post: Post): string {
	return `/writing/posts/${post.slug}/`;
}

export function wordCount(body: string): number {
	return body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.split(/\s+/)
		.filter(Boolean).length;
}

export function readingMinutes(body: string): number {
	return Math.max(1, Math.round(wordCount(body) / WORDS_PER_MINUTE));
}

export function isAged(date: Date, now: Date = new Date()): boolean {
	return now.valueOf() - date.valueOf() > AGED_AFTER_MS;
}

export function slugify(value: string): string {
	return value
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/-{2,}/g, '-')
		.replace(/^-+|-+$/g, '');
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function formatLongDate(date: Date): string {
	return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function isoDate(date: Date): string {
	return date.toISOString().slice(0, 10);
}

export interface TagSummary {
	name: string;
	slug: string;
	count: number;
}

export function collectTags(posts: Post[]): TagSummary[] {
	const map = new Map<string, TagSummary>();
	for (const post of posts) {
		for (const name of post.data.tags) {
			const slug = slugify(name);
			const existing = map.get(slug);
			if (existing) existing.count += 1;
			else map.set(slug, { name, slug, count: 1 });
		}
	}
	return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function groupByYear(posts: Post[]): Array<{ year: number; posts: Post[] }> {
	const groups = new Map<number, Post[]>();
	for (const post of posts) {
		const year = post.data.publishDate.getUTCFullYear();
		groups.set(year, [...(groups.get(year) ?? []), post]);
	}
	return [...groups.entries()].sort((a, b) => b[0] - a[0]).map(([year, items]) => ({ year, posts: items }));
}

export function relatedPosts(post: Post, posts: Post[], limit = 3): Post[] {
	const tags = new Set(post.data.tags.map(slugify));
	return posts
		.filter((candidate) => candidate.slug !== post.slug)
		.map((candidate) => ({
			candidate,
			score: candidate.data.tags.filter((tag) => tags.has(slugify(tag))).length,
		}))
		.sort((a, b) => b.score - a.score || b.candidate.data.publishDate.valueOf() - a.candidate.data.publishDate.valueOf())
		.slice(0, limit)
		.map(({ candidate }) => candidate);
}
