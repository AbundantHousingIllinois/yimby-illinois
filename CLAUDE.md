# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Public-facing multi-page website for YIMBY Illinois, a state-level housing advocacy org affiliated with Abundant Housing Illinois and a member of the IL Homes for All coalition. Licensed under MIT.

## Tech Stack

- **Jekyll 4.x** static site generator
- **GitHub Pages** deployment via GitHub Actions (`.github/workflows/pages.yml`)
- **Sass** (Jekyll's built-in compiler) for styling
- **Vanilla JS** (~80 lines) for interactivity
- **Google Fonts**: DM Serif Display (headings) + Poppins (body)
- Plugins: `jekyll-seo-tag`, `jekyll-sitemap`

## Build & Development Commands

```bash
# Install dependencies (requires Ruby 3.0+)
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# Build static site (output to _site/)
bundle exec jekyll build
```

Note: System Ruby on macOS is 2.6 — too old. Use `rbenv` or `brew install ruby` for local dev. The GitHub Actions workflow uses Ruby 3.3 for deployment.

## Architecture

Multi-page Jekyll site. The home page (`index.html`) shows the hero section; other content lives on dedicated pages (`about.html`, `priorities.html`, `legislation.html`, `staff.html`).

**Key directories:**
- `_layouts/default.html` — sole HTML shell (head, nav, content, footer, JS)
- `_includes/` — shared partials (nav, hero, head, footer) and section partials used by individual pages
- `_sass/` — modular partials imported by `assets/css/main.scss`. Design tokens live in `_variables.scss`
- `assets/js/main.js` — IntersectionObserver-based: mobile nav toggle, sticky nav, scroll-reveal animations, active nav highlighting

**Design system** (`_sass/_variables.scss`): monochrome color palette, fluid type scale, spacing tokens, shadows, breakpoints at 768px/1024px/1440px.

## Deployment

Pushes to `main` auto-deploy via GitHub Actions. The live site is at https://yimbyillinois.org/

DNS is managed via Squarespace Domains, pointing to GitHub Pages IPs. The `CNAME` file in the repo root configures GitHub Pages to serve from the custom domain. HTTPS is enforced.

## Content Updates

Section content lives in top-level page files (`about.html`, `priorities.html`, etc.) and their associated `_includes/*.html` partials. Legislation items are in `_includes/legislation.html` — add/remove `legislation__item` divs as bills change.
