# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/website built with **Zola** (a static site generator written in Rust) using the **tabi** theme. The site is deployed to GitHub Pages via GitHub Actions and serves content at https://sandip.live.

## Development Commands

### Building and Serving
- `zola serve` - Start development server at http://127.0.0.1:1111 with live reload
- `zola build` - Build the static site (outputs to `public/` directory)
- `zola check` - Check for broken links and validate content

### Content Management
- Blog posts are written in Markdown and placed in `content/blog/`
- Pages use front matter (TOML format) for metadata
- Social media cards are generated and stored in `content/*/social_cards/`

### Deployment
Deployment is automatic via GitHub Actions:
- Pushes to `main` branch trigger `.github/workflows/zolatogithubpages.yml`
- Uses `shalzz/zola-deploy-action@v0.17.1` to build and deploy to `gh-pages` branch
- No manual deployment commands needed

## Architecture and Structure

### Content Organization
```
content/
├── _index.md          # Homepage with hero section
├── about/             # About page
├── archive/           # Archive page listing all posts  
├── blog/              # Blog posts in Markdown
├── projects/          # Projects showcase
└── social_cards/      # Social media preview images
```

### Theme Structure
- Uses the **tabi** theme (modern, lightweight Zola theme)
- Theme configuration in `config.toml` and `theme.toml`
- Custom styles in `sass/` directory (SCSS)
- Templates use Tera templating engine (similar to Jinja2)
- Supports dark/light themes with JavaScript toggle

### Key Features
- Multi-language support (i18n files in `i18n/` directory)
- Social media cards for sharing
- Responsive design with perfect Lighthouse scores
- KaTeX support for mathematical notation
- Code syntax highlighting
- Comments integration (giscus/utterances/Hyvor Talk/Isso)
- RSS/Atom feeds

### Template System
```
templates/
├── base.html          # Base template with common structure
├── index.html         # Homepage template
├── page.html          # Individual page template
├── section.html       # Section listing template
├── partials/          # Reusable template components
├── macros/            # Template macros for common functionality
└── shortcodes/        # Custom shortcodes for content
```

### Static Assets
```
static/
├── img/               # Images and graphics
├── fonts/             # Web fonts (Inter, Cascadia Code, KaTeX fonts)
├── js/                # JavaScript for theme functionality
├── social_icons/      # SVG icons for social media links
└── custom_subset.css  # Custom font subset for performance
```

## Configuration

### Main Config (`config.toml`)
- Site metadata (title, description, base_url)
- Theme configuration and feature flags
- Menu structure and social links
- Analytics (GoatCounter) and comments setup
- Security headers and CSP policies

### Content Guidelines
- Blog posts should include proper front matter with title, date, and tags
- Use social media cards for sharing (configured in front matter)
- Follow established content structure for consistency
- Images should be optimized and placed in appropriate directories

### Development Notes
- Zola requires version 0.17.0 or newer
- SASS compilation is handled automatically by Zola
- JavaScript is optional and can be fully disabled
- The `zola-repo/` directory contains the Zola source code (for reference)
- No build tools like npm/yarn needed - Zola handles everything

## GitHub Integration

- Repository has Claude Code integration via `.github/workflows/claude.yml`
- Automatic deployment via GitHub Actions
- Issues and PR comments can trigger Claude Code with `@claude` mentions
- Site source code is publicly available and linked in footer