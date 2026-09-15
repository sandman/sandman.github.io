/**
 * JSON-LD builders. Every page emits one @graph with the Person and
 * WebSite nodes plus its own page-specific nodes, all linked by @id.
 */
import { site, socials, knowsAbout, services, faqs } from '../data/site';
import { postHref, wordCount, type Post } from './posts';

type Node = Record<string, unknown>;

export const absolute = (path = '/'): string => new URL(path, site.url).toString();

export const ids = {
	person: absolute('/#person'),
	website: absolute('/#website'),
	blog: absolute('/writing/#blog'),
	service: absolute('/services/#service'),
};

export function personNode(): Node {
	return {
		'@type': 'Person',
		'@id': ids.person,
		name: site.name,
		url: absolute('/'),
		image: absolute(site.portrait),
		jobTitle: site.jobTitle,
		description: site.description,
		address: {
			'@type': 'PostalAddress',
			addressLocality: site.locality,
			addressCountry: site.country,
		},
		knowsAbout,
		alumniOf: ['Bell Labs', 'Nokia', 'Huawei'].map((name) => ({ '@type': 'Organization', name })),
		sameAs: socials.map((social) => social.href),
	};
}

export function websiteNode(): Node {
	return {
		'@type': 'WebSite',
		'@id': ids.website,
		url: absolute('/'),
		name: site.name,
		description: site.description,
		inLanguage: site.language,
		author: { '@id': ids.person },
		publisher: { '@id': ids.person },
	};
}

interface PageInput {
	path: string;
	name: string;
	description: string;
	type?: string;
}

export function webPageNode({ path, name, description, type = 'WebPage' }: PageInput): Node {
	return {
		'@type': type,
		'@id': `${absolute(path)}#webpage`,
		url: absolute(path),
		name,
		description,
		inLanguage: site.language,
		isPartOf: { '@id': ids.website },
		about: { '@id': ids.person },
	};
}

export function profilePageNode(input: PageInput): Node {
	return {
		...webPageNode({ ...input, type: 'ProfilePage' }),
		mainEntity: { '@id': ids.person },
	};
}

export function breadcrumbNode(items: Array<{ name: string; path: string }>): Node {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absolute(item.path),
		})),
	};
}

export function serviceNode(): Node {
	return {
		'@type': 'ProfessionalService',
		'@id': ids.service,
		name: `${site.name}: AI systems and technology leadership`,
		url: absolute('/services/'),
		description:
			'AI systems design and delivery, fractional CTO and CPO leadership, technical due diligence, and speaking, from London for teams worldwide.',
		founder: { '@id': ids.person },
		provider: { '@id': ids.person },
		address: {
			'@type': 'PostalAddress',
			addressLocality: site.locality,
			addressCountry: site.country,
		},
		areaServed: [{ '@type': 'Country', name: 'United Kingdom' }, 'Worldwide'],
		knowsAbout,
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Ways to work together',
			itemListElement: services.map((service) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: service.name,
					description: service.description,
					url: absolute(service.path),
					provider: { '@id': ids.person },
				},
			})),
		},
	};
}

export function faqNode(): Node {
	return {
		'@type': 'FAQPage',
		'@id': `${absolute('/services/')}#faq`,
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: { '@type': 'Answer', text: faq.answer },
		})),
	};
}

export function blogNode(posts: Post[]): Node {
	return {
		'@type': 'Blog',
		'@id': ids.blog,
		name: site.blogName,
		description: site.blogDescription,
		url: absolute('/writing/'),
		inLanguage: site.language,
		author: { '@id': ids.person },
		publisher: { '@id': ids.person },
		blogPost: posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.data.title,
			url: absolute(postHref(post)),
			datePublished: post.data.publishDate.toISOString(),
		})),
	};
}

export function articleNode(post: Post): Node {
	const url = absolute(postHref(post));
	const modified = post.data.updatedDate ?? post.data.publishDate;
	return {
		'@type': 'BlogPosting',
		'@id': `${url}#article`,
		headline: post.data.title,
		description: post.data.description,
		url,
		mainEntityOfPage: { '@id': `${url}#webpage` },
		datePublished: post.data.publishDate.toISOString(),
		dateModified: modified.toISOString(),
		author: { '@id': ids.person },
		publisher: { '@id': ids.person },
		isPartOf: { '@id': ids.blog },
		image: absolute(post.data.featuredImage ?? site.image),
		keywords: post.data.tags.join(', '),
		...(post.data.originalUrl ? { sameAs: post.data.originalUrl } : {}),
		wordCount: wordCount(post.body),
		inLanguage: site.language,
	};
}
