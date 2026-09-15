/**
 * Single source of truth for sandip.live content.
 * Pages, structured data, llms.txt and the RSS feed all read from here,
 * so the site says the same thing to people and to machines.
 */

export const formspree = 'https://formspree.io/f/meozezno';

export const site = {
	name: 'Sandip Gangakhedkar',
	url: 'https://sandip.live',
	title: 'Sandip Gangakhedkar: AI systems builder, technologist and founder',
	description:
		'Sandip Gangakhedkar is a technologist, AI systems builder and founder in London, designing and shipping production AI systems with founders and teams.',
	headline: 'I build things.',
	lede: "I'm Sandip Gangakhedkar, a technologist and founder in London, UK. I enjoy designing, building and shipping products that solve real problems.",
	jobTitle: 'Technologist, AI systems builder and founder',
	locality: 'London',
	country: 'GB',
	countryName: 'UK',
	language: 'en-GB',
	portrait: '/assets/images/sandip_profile.webp',
	image: '/og.png',
	twitter: '@sandipg',
	blogName: 'Notes from the trenches',
	blogDescription:
		'Thoughts and insights on startups, technology, product development, and the journey of building things that matter.',
};

export const nav = [
	{ label: 'Services', href: '/services/' },
	{ label: 'Projects', href: '/projects/' },
	{ label: 'Writing', href: '/writing/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Contact', href: '/contact/' },
];

export const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/sandipg', note: 'Profile and career history.' },
	{ label: 'X (Twitter)', href: 'https://twitter.com/sandipg', note: 'Posts.' },
	{ label: 'GitHub', href: 'https://github.com/sandman', note: 'Code.' },
	{
		label: 'Google Scholar',
		href: 'https://scholar.google.co.uk/citations?user=tboYBpIAAAAJ&hl=en',
		note: 'Publications and patents.',
	},
];

export const now = {
	label: 'Now',
	text: 'Building a new venture at the intersection of AI and institutional finance.',
};

export const knowsAbout = [
	'AI systems',
	'Agentic AI workflows',
	'AI solution architecture',
	'AI evaluation (evals)',
	'Human-in-the-loop autonomy',
	'Autonomous driving',
	'Teleoperation',
	'Technology strategy',
	'Product strategy',
	'Fractional CTO',
	'Fractional CPO',
	'Technical due diligence',
	'Software architecture',
	'Team scaling',
	'Communication systems',
	'Network protocols',
	'5G',
	'Spatial analytics',
];

/* ---------- Sources ---------- */

export type RefKey = 'REUTERS-2022' | 'BBC-2023' | 'SCHOLAR';

export interface Reference {
	key: RefKey;
	source: string;
	title?: string;
	date?: string;
	href: string;
	hrefLabel: string;
}

export const references: Reference[] = [
	{
		key: 'REUTERS-2022',
		source: 'Reuters',
		title: 'Truly autonomous cars may be impossible without helpful human touch',
		date: '2022-09-12',
		href: 'https://www.reuters.com/technology/truly-autonomous-cars-may-be-impossible-without-helpful-human-touch-2022-09-12/',
		hrefLabel: 'reuters.com',
	},
	{
		key: 'BBC-2023',
		source: 'BBC News',
		title: 'Remote driver car rental service launches in Milton Keynes',
		date: '2023-06-01',
		href: 'https://www.bbc.co.uk/news/uk-england-beds-bucks-herts-65768717',
		hrefLabel: 'bbc.co.uk',
	},
	{
		key: 'SCHOLAR',
		source: 'Google Scholar',
		title: 'Sandip Gangakhedkar, author profile',
		href: 'https://scholar.google.co.uk/citations?user=tboYBpIAAAAJ&hl=en',
		hrefLabel: 'scholar.google.co.uk',
	},
];

/* ---------- The record ---------- */

export interface RecordItem {
	id: string;
	title: string;
	kind?: string;
	when?: string;
	body: string;
	out?: string;
	cites?: RefKey[];
	link?: { href: string; label: string };
	now?: boolean;
	group?: 'now' | 'founder' | 'leadership' | 'research';
}

export const recordGroups = [
	{ id: 'now', title: 'Now.' },
	{ id: 'founder', title: 'Founder.' },
	{ id: 'leadership', title: 'Leadership.' },
	{ id: 'research', title: 'Research.' },
] as const;

const venture: RecordItem = {
	id: 'venture',
	group: 'now',
	now: true,
	title: 'New venture',
	kind: 'Founder, not public yet',
	body: now.text,
};

const fractional: RecordItem = {
	id: 'fractional',
	group: 'leadership',
	title: 'Fractional CTO and CPO',
	kind: 'AI and analytics startups and SMEs, UK and US',
	body: 'Technology and product leadership for teams building AI-native products: agentic AI workflows, AI solution architecture and evals.',
	link: { href: '/services/', label: 'How I work with teams' },
};

const meshh: RecordItem = {
	id: 'meshh',
	group: 'leadership',
	title: 'Meshh',
	kind: 'Head of Product Engineering (acting CTO)',
	body: 'Led product engineering at a spatial analytics company that uses passive wifi sensing to understand visitor engagement at live events.',
	link: { href: 'https://www.meshh.com/', label: 'meshh.com' },
};

const research: RecordItem = {
	id: 'research',
	group: 'research',
	title: 'Bell Labs, Nokia and Huawei',
	kind: 'Applied research, about a decade',
	body: 'Developed novel communication systems and network protocols, including industry-first 5G demos and proofs of concept.',
	out: '20+ patents filed. Papers at top-tier scientific conferences.',
	cites: ['SCHOLAR'],
	link: { href: 'https://scholar.google.co.uk/citations?user=tboYBpIAAAAJ&hl=en', label: 'Google Scholar' },
};

/** The full record, grouped on /projects. */
export const record: RecordItem[] = [
	venture,
	{
		id: 'imperium-drive',
		group: 'founder',
		title: 'Imperium Drive',
		kind: 'Co-founder & CTO, autonomous driving',
		body: 'Pioneered a human-in-the-loop approach to autonomous driving.',
		out: 'Built an automotive-grade teleoperations system and integrated it onto 4+ vehicle platforms. Covered by Reuters.',
		cites: ['REUTERS-2022'],
		link: { href: 'http://imperiumdrive.com/', label: 'imperiumdrive.com' },
	},
	{
		id: 'fetch',
		group: 'founder',
		title: 'Fetch',
		kind: 'Co-founder & CPO',
		when: 'Launched 2023',
		body: "Launched Europe's first commercial tele-driven car hire service in Milton Keynes, UK",
		out: 'Covered by BBC News.',
		cites: ['BBC-2023'],
		link: { href: 'https://fetchcar.io/', label: 'fetchcar.io' },
	},
	fractional,
	meshh,
	research,
];

/* ---------- Ways to work together ---------- */

export const doors: RecordItem[] = [
	{
		id: 'door-founders',
		title: 'Founders and scale-ups',
		kind: 'Fractional CTO and CPO',
		body: 'Senior technology and product leadership that stays hands-on: architecture, roadmap, team scaling, and technical due diligence when you raise.',
		link: { href: '/services/#founders', label: 'How I work with founders' },
	},
	{
		id: 'door-ai',
		title: 'Companies adopting AI',
		kind: 'AI systems, designed and shipped',
		body: 'Agentic workflows, solution architecture and evals, taken from prototype to a system your team can run.',
		link: { href: '/services/#ai', label: 'How I build AI systems' },
	},
	{
		id: 'door-speaking',
		title: 'Speaking and press',
		kind: 'Talks, panels, podcasts, interviews',
		body: 'AI systems in production, humans in the loop, and building deep tech, from first-hand experience.',
		link: { href: '/services/#speaking', label: 'Speaking topics' },
	},
];

export const services = [
	{
		name: 'AI systems design and delivery',
		description: 'Agentic AI workflows, AI solution architecture and evals, taken from prototype to production.',
		path: '/services/#ai',
	},
	{
		name: 'Fractional CTO and CPO',
		description: 'Senior technology and product leadership for founders and scale-ups.',
		path: '/services/#founders',
	},
	{
		name: 'Technical due diligence',
		description:
			'Technology assessments for fundraising and M&A: architecture, code quality, team capability and technical risk.',
		path: '/services/#due-diligence',
	},
	{
		name: 'Speaking and press',
		description: 'Talks, panels, podcasts and interviews on AI systems, human-in-the-loop autonomy and deep tech.',
		path: '/services/#speaking',
	},
];

export const capabilities: Record<'founders' | 'ai' | 'speaking' | 'experience', RecordItem[]> = {
	founders: [
		{
			id: 'strategy',
			title: 'Technology strategy and roadmap',
			body: 'Align technology with business goals and market opportunities.',
		},
		{ id: 'architecture', title: 'Architecture and scalability', body: 'Design systems that grow with the business.' },
		{
			id: 'pmf',
			title: 'Product-market fit',
			body: 'Define and validate product strategy, MVP development and go-to-market.',
		},
		{
			id: 'prioritisation',
			title: 'Roadmap and prioritisation',
			body: 'Balance new features against technical debt and scalability.',
		},
		{
			id: 'teams',
			title: 'Team scaling',
			body: 'Hire, onboard and structure high-performing engineering and product teams.',
		},
		{
			id: 'process',
			title: 'Process',
			body: 'Agile delivery, DevOps and quality practices that fit how the team works.',
		},
		{
			id: 'rnd',
			title: 'Innovation and R&D direction',
			body: 'Identify where to build IP and defensibility, and make it happen.',
		},
	],
	ai: [
		{
			id: 'agents',
			title: 'Agentic AI workflows',
			body: 'Agents that take on real work inside your processes, with people in charge of the decisions that matter.',
		},
		{
			id: 'ai-architecture',
			title: 'AI solution architecture',
			body: 'Models, data, tools and infrastructure, chosen for the problem in front of you.',
		},
		{ id: 'evals', title: 'Evals', body: 'Measure whether the system does what it should, before it ships and after.' },
		{
			id: 'production',
			title: 'Prototype to production',
			body: 'Turn a working demo into a system your team can operate and improve.',
		},
		{
			id: 'ai-data',
			title: 'Data and analytics',
			body: 'Location intelligence, real-time processing and machine learning applications.',
		},
	],
	speaking: [
		{
			id: 'talk-production',
			title: 'AI systems in production',
			body: 'What it takes to move agentic workflows and evals from prototype to production.',
		},
		{
			id: 'talk-loop',
			title: 'Humans in the loop',
			body: 'Building human-in-the-loop autonomous driving at Imperium Drive and Fetch, and what it teaches about AI systems.',
		},
		{
			id: 'talk-deeptech',
			title: 'Building deep tech',
			body: 'Commercialising deep tech on limited resources, from research idea to product.',
			link: { href: '/writing/posts/deeptech-budget/', label: 'Read the article' },
		},
	],
	experience: [
		{
			id: 'exp-autonomy',
			title: 'Autonomy and hardware',
			body: 'Autonomous systems, IoT, robotics, and complex multi-domain engineering.',
		},
		{
			id: 'exp-mobility',
			title: 'Mobility and transportation',
			body: 'Connected vehicles, logistics and smart transportation systems.',
		},
		{
			id: 'exp-saas',
			title: 'B2B SaaS and platforms',
			body: 'Enterprise software, APIs and scalable platform architectures.',
		},
		{
			id: 'exp-data',
			title: 'Data and analytics',
			body: 'Location intelligence, real-time processing and machine learning applications.',
		},
		{ id: 'exp-ai', title: 'AI-native products', body: 'Agentic AI workflows, AI solution architectures and evals.' },
		{
			id: 'exp-telecoms',
			title: 'Telecoms and networks',
			body: 'Communication systems, network protocols and 5G, from a decade of research.',
		},
	],
};

export const faqs = [
	{
		question: 'What is a fractional CTO?',
		answer:
			"A fractional CTO is a part-time Chief Technology Officer who provides strategic technology leadership to companies that don't need, or can't yet justify, a full-time executive. The work covers technology strategy, architecture decisions, team building and technical due diligence, on a flexible basis.",
	},
	{
		question: 'What is a fractional CPO?',
		answer:
			'A fractional CPO is a part-time Chief Product Officer who helps with product strategy, roadmap development, product-market fit and user experience, bringing senior product expertise without the commitment of a full-time hire.',
	},
	{
		question: 'When should a startup bring in a fractional CTO?',
		answer:
			"When it needs senior technical leadership but isn't ready for a full-time hire: preparing to raise and needing technical due diligence support, scaling the engineering team and needing guidance on hiring and process, or making architecture decisions that will shape long-term growth.",
	},
	{
		question: 'How is a fractional CTO different from a consultant?',
		answer:
			"A fractional CTO works as an embedded member of the leadership team and takes ownership of technology decisions and outcomes: attending team meetings, making hiring decisions, and staying accountable for delivery. A consultant typically advises without taking on that operational responsibility.",
	},
	{
		question: 'Do you help companies adopt AI?',
		answer:
			'Yes. I design and ship AI systems with teams: agentic AI workflows, AI solution architecture and evals, taken from prototype to production.',
	},
	{
		question: 'Can you help with fundraising or technical due diligence?',
		answer:
			'Yes. I carry out technology assessments for fundraising and M&A covering architecture, code quality, team capability and technical risk, and help founders articulate their technology vision and align the technical roadmap with business milestones.',
	},
	{
		question: 'Which industries do you have experience in?',
		answer:
			'Autonomy and hardware, mobility and transportation, B2B SaaS and platforms, data and analytics, AI-native products, and telecoms and networks.',
	},
	{
		question: 'Where are you based, and do you work remotely?',
		answer:
			"I'm based in London, UK, and work with clients globally, remotely or in a hybrid way, and in person in and around London when needed.",
	},
];

/* ---------- Enquiries ---------- */

export const topics = [
	{
		value: 'founder',
		label: "I'm a founder or scale-up",
		hint: 'Fractional CTO and CPO, technical due diligence',
		prompt: 'What are you building, and where could you use senior technology or product help?',
		next: "If I can help, I'll reply with a suggested first step, usually a discovery call.",
		subject: 'founder or scale-up',
	},
	{
		value: 'ai',
		label: "We're adopting AI",
		hint: 'AI systems designed, evaluated and shipped',
		prompt: 'What should the AI system do, and where does that work happen today?',
		next: "If I can help, I'll reply with a suggested first step, usually a discovery call.",
		subject: 'adopting AI',
	},
	{
		value: 'speaking',
		label: 'Speaking or press',
		hint: 'Talks, panels, podcasts, interviews',
		prompt: 'Tell me about the event or outlet, the date, and the audience.',
		next: "Include dates and format, and I'll let you know whether I can take it on.",
		subject: 'speaking or press',
	},
	{
		value: 'other',
		label: 'Something else',
		hint: 'A question, a link, or a hello',
		prompt: 'A couple of paragraphs is enough.',
		next: 'Say hello, ask a question, or send a link.',
		subject: 'general',
	},
];

/* ---------- Home page structure (shared with llms.txt) ---------- */

export const homeSections = {
	intro: { id: 'intro', num: '01', title: site.headline },
	work: { id: 'work', num: '02', title: 'Ways to work together.' },
	writing: { id: 'writing', num: '03', title: `${site.blogName}.` },
	contact: { id: 'contact', num: '04', title: 'Get in touch.' },
};
