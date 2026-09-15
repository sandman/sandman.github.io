# Product

<!-- impeccable:product-schema 1 -->

## Platform

web, mobile

## Users

- **Startup and scale-up founders** who need hands-on technical leadership: fractional CTO/CPO work, AI architecture, and delivery. Typical moment: turning an AI prototype into a production system, scaling a team, or getting ready to raise. They arrive to judge whether Sandip is credible, relevant, and available.
- **Leaders at established companies adopting AI** who need AI systems designed, evaluated, and shipped, not a strategy deck.
- **Event organisers, podcast hosts, and press** looking for someone who can speak with authority on AI systems, autonomy, and building deep tech.
- **Readers** arriving on an article from search, social, or an AI answer engine. Some of them become one of the three groups above.

Investors and acquirers were not chosen as a primary audience for this redesign.

## Product Purpose

The personal site of Sandip Gangakhedkar. It has three jobs:

1. Establish Sandip first as an **AI systems builder**, a hands-on technologist who designs and ships production AI systems.
2. Turn qualified visitors from the three audiences into consulting enquiries.
3. Publish long-form writing that search engines rank and AI answer engines cite.

Success looks like qualified enquiries, Sandip being surfaced and cited by search and LLM answer engines for AI systems expertise and for his name, and articles that actually get read.

## Positioning

Sandip leads as an AI systems builder. Consulting engagements are how people hire that capability; they are not the headline identity.

What a neighbouring consultant cannot truthfully copy is the path. It runs from applied research at Bell Labs, Nokia, and Huawei (20+ patents, 5G industry-first demos) to co-founding Imperium Drive and launching Fetch, Europe's first commercial tele-driven car hire service. That is a production system where humans and machines share control in the real world. *(Inferred framing, to confirm: that human-in-the-loop autonomy experience is directly relevant to agentic AI systems today.)*

Sandip is also a founder, currently building a new venture at the intersection of AI and institutional finance. The site may say this but must not name it, describe it, or hint at details.

## Operating Context

- Visitors come from search, LinkedIn, referrals, article links, and AI answer engines (ChatGPT, Perplexity, Claude, Google AI Overviews).
- Enquiries currently go through a Formspree form (`https://formspree.io/f/meozezno`) that redirects to `/contact-thank-you`. A discovery call is offered.
- Based in London, UK, and works with clients globally and remotely.

## Capabilities and Constraints

- **Stack:** Astro 4 (content collections, MDX, @astrojs/sitemap, astro-icon, Lit), originally started from the Odyssey theme. It is a static build deployed to GitHub Pages by GitHub Actions on push to `main`, using the custom domain `sandip.live` (`public/CNAME`).
- **No backend.** Forms must post to a third-party endpoint.
- **SEO/GEO groundwork already exists** and must be kept and extended:
  - canonical URLs
  - Open Graph and Twitter meta
  - sitemap
  - `robots.txt` that explicitly allows AI crawlers
  - `/llms.txt`
  - JSON-LD for Person, WebSite, ProfessionalService, Service, FAQPage, Article, and BreadcrumbList
- **Blog:** the `blog` content collection (title, description, publishDate, featuredImage, excerpt, tags, draft) is served at `/writing/posts/<slug>`, with tag pages under `/writing/tags`. Existing article URLs must keep resolving, or redirect, so rankings are not lost.
- **Template leftovers** still in the repo: three lorem-ipsum sample posts in `src/pages/writing/posts/*.mdx`, theme demo pages in `src/pages/theme/` and `src/pages/landing-pages/`, `src/pages/company/legal.astro`, and an empty `/projects` page.
- **Open decisions (unconfirmed facts):**
  - Whether the Meshh product engineering role is still current. The About page says it is; `llms.txt` instead describes fractional CTO/CPO work across several AI startups.
  - The correct social handles are `twitter.com/sandipg` and `linkedin.com/in/sandipg`. Update the the schema and `llms.txt` accordingly.
  - Whether technical due diligence remains a listed service - yes
  - Whether to add a booking link next to the enquiry form - No.

## Brand Commitments

- Name: Sandip Gangakhedkar. Domain: sandip.live.
- Voice: first person, direct, and practical. From the existing copy: "I am not a 'coach' - I roll up my sleeves and get things done."
- The blog is currently titled "Notes from the trenches". Keep the title for the blog.
- Profile photo: `public/assets/images/sandip_profile.webp` (800x800, light grey studio backdrop, updated January 2026).
- Visual constraint pinned by Sandip (14 September 2026) for the redesign: light theme, with https://www.killenberger.com/ as inspiration.
- Use a multi-page extension of the template. Add a Projects page.

## Evidence on Hand

- **Research career:** about a decade at Bell Labs, Huawei, and Nokia working on communication systems and network protocols. Includes industry-first 5G demos and proofs of concept, papers at top-tier conferences, and 20+ patents filed. Google Scholar: `https://scholar.google.co.uk/citations?user=tboYBpIAAAAJ`.
- **Founder:** co-founded Imperium Drive (human-in-the-loop autonomous driving) and launched Fetch (`fetchcar.io`), Europe's first commercial tele-driven car hire service, in the UK. Press coverage from Reuters (12 September 2022) and the BBC. The current About page has the two link labels swapped.
- **Operating role:** led product engineering at Meshh, a spatial analytics company that uses passive wifi sensing at live events. Whether this is still current is unconfirmed.
- **AI work:** fractional CTO/CPO engagements with AI and analytics startups and SMEs in the UK and US. Areas: agentic AI workflows, AI solution architecture, and evals.
- **Client work:** Sandip confirms there are engagements he can describe, by name or anonymised. None have been written up yet, so the content must come from him.
- **Writing:** four real articles, all from 2023:
  - "Approaches to building your startup's MVP"
  - "Building a strong documentation culture"
  - "Building a deep-tech startup on a shoestring budget"
  - "Customizing and Deploying your Zola blog to GitHub Pages"

  Articles on AI systems are planned but not yet written. Supporting diagrams: `mvp-reality-perception-gap.png`, `min-testable-lovable-usable-product.png`, `rubric-mvp-approaches.webp`.
- **Absent; must not be invented:** testimonials, client logos, outcome metrics, pricing, speaking history, open-source or demo projects, and any detail about the stealth venture.

## Product Principles

1. **Show the builder, not the title.** Evidence of systems built outranks role labels.
2. **Every claim traces to a real artifact:** a patent, a press piece, an article, or a described engagement.
3. **Legible to machines by default.** Every page should be as easy for an answer engine to quote accurately as it is for a person to read.
4. **The enquiry path is always one step away,** and it tells founders, AI adopters, and speaking or press requests apart.
5. **Stealth stays stealth.**
