# YIMBY Illinois

Public-facing website for [YIMBY Illinois](https://abundanthousingillinois.github.io/yimby-illinois/), a state-level organization pushing for YIMBY housing policies in Illinois.

Affiliated with [Abundant Housing Illinois](https://abundanthousingillinois.org) and a member of the [IL Homes for All](https://ilhomesforall.org) coalition.

## Live Site

**https://abundanthousingillinois.github.io/yimby-illinois/**

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

When a domain is purchased:
1. Add a `CNAME` file containing the domain (e.g., `yimbyillinois.org`)
2. Update `url` in `_config.yml`
3. Configure DNS with your registrar to point to GitHub Pages IPs

## Content Updates

Section content lives in `_includes/*.html` — edit the relevant file to update copy. No build tools or CMS needed.

## License

MIT
