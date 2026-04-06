# YIMBY Illinois

Public-facing website for [YIMBY Illinois](https://yimbyillinois.org), a state-level organization pushing for YIMBY housing policies in Illinois.

Affiliated with [Abundant Housing Illinois](https://abundanthousingillinois.org) and a member of the [IL Homes for All](https://ilhomesforall.org) coalition.

## Live Site

**https://yimbyillinois.org**

## Tech Stack

- Jekyll 4.x static site generator
- GitHub Pages deployment via GitHub Actions
- Sass for styling, vanilla JS for interactivity
- Google Fonts: DM Serif Display + Poppins

## Local Development

Requires Ruby 3.0+ (macOS system Ruby 2.6 is too old — use `rbenv` or `brew install ruby`).

```bash
bundle install
bundle exec jekyll serve    # http://localhost:4000
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions (`.github/workflows/pages.yml`).

## Custom Domain

The site is served at `yimbyillinois.org`. DNS is managed via Squarespace Domains, pointing to GitHub Pages IPs. The `CNAME` file in the repo root configures GitHub Pages to serve from the custom domain.

## Content Updates

Section content lives in `_includes/*.html` — edit the relevant file to update copy. No build tools or CMS needed.

## License

MIT
