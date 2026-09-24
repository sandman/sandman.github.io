/**
 * /llms.txt, generated from the same data and section numbering the
 * home page renders, so people and answer engines read one structure.
 */
import {
	doors,
	homeSections as s,
	now,
	record,
	references,
	site,
	socials,
} from '../data/site';
import { formatLongDate, getPosts, postHref } from '../lib/posts';

const abs = (path: string) => new URL(path, site.url).toString();
const heading = (section: { id: string; num: string; title: string }) =>
	`## ${section.num} ${section.title.replace(/\.$/, '')}\n\nSection: ${abs(`/#${section.id}`)}`;

export async function GET() {
	const posts = await getPosts();
	const refByKey = new Map(references.map((ref) => [ref.key, ref]));

	const lines = [
		`# ${site.name}`,
		'',
		`> ${site.description}`,
		'',
		`${site.name} is based in ${site.locality}, ${site.countryName}, and works with teams worldwide. ${now.label}: ${now.text}`,
		'',
		heading(s.intro),
		'',
		`- Headline: ${site.headline}`,
		`- ${site.lede}`,
		`- [About](${abs('/about/')}): profile, portrait and links elsewhere.`,
		'',
		'## Projects',
		'',
		`Page: ${abs('/projects/')}`,
		'',
		...record.map((item) => {
			const sources = (item.cites ?? [])
				.map((key) => refByKey.get(key))
				.filter(Boolean)
				.map((ref) => `${ref!.source} (${ref!.href})`)
				.join('; ');
			const link = item.link ? ` Link: ${item.link.href.startsWith('http') ? item.link.href : abs(item.link.href)}.` : '';
			return `- ${item.title} (${item.kind}${item.when ? `, ${item.when}` : ''}): ${item.body}${item.out ? ` ${item.out}` : ''}${sources ? ` Sources: ${sources}.` : ''}${link}`;
		}),
		'',
		heading(s.work),
		'',
		...doors.map((door) => `- ${door.title} (${door.kind}): ${door.body}`),
		'',
		heading(s.writing),
		'',
		...posts.map(
			(post) =>
				`- [${post.data.title}](${abs(postHref(post))}): ${post.data.description} (${formatLongDate(post.data.publishDate)})`,
		),
		'',
		heading(s.contact),
		'',
		`- [Enquiry form](${abs('/contact/')}): for founders and scale-ups, companies adopting AI, and speaking or press requests.`,
		...socials.map((social) => `- [${social.label}](${social.href})`),
		'',
		'## References',
		'',
		...references.map(
			(ref) =>
				`- [${ref.key}] ${ref.source}.${ref.title ? ` "${ref.title}."` : ''}${ref.date ? ` ${formatLongDate(new Date(ref.date))}.` : ''} ${ref.href}`,
		),
		'',
		'## Optional',
		'',
		`- [Full text of every article](${abs('/llms-full.txt')})`,
		`- [RSS feed](${abs('/writing/rss.xml')})`,
		`- [Sitemap](${abs('/sitemap.xml')})`,
		'',
	];

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
}
