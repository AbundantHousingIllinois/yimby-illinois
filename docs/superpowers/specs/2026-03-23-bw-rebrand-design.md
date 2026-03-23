# B&W Rebrand with 3-Flat Logo

## Summary

Rebrand the YIMBY Illinois website from terracotta/teal to a warm monochrome color scheme and add the Wonder City Studios 3-flat building illustration as the primary visual element in the hero section.

## Motivation

Jack Warren (AHIL Lead) proposed using a Chicago 3-flat ink illustration from Wonder City Studios as the YIMBY Illinois logo. The black-and-white illustration calls for a monochrome site palette. Governor Pritzker recently mentioned 3-flats in his BUILD speech, making the imagery timely.

## Design Decisions

### Color Scheme: Warm Monochrome

Replace all terracotta/teal colors with warm monochrome equivalents.

| Token | Current | New |
|-------|---------|-----|
| `$color-primary` | `#B5511A` (terracotta) | `#1a1a1a` (off-black) |
| `$color-primary-dark` | `#8B3A0F` | `#000000` |
| `$color-primary-light` | `#D4764A` | `#444444` |
| `$color-secondary` | `#1B6B5A` (teal) | `#333333` |
| `$color-secondary-light` | `#1C7862` | `#555555` |
| `$color-cream` | `#FDF6ED` | `#faf8f5` (warm white) |
| `$color-warm-gray` | `#F0E8DD` | `#f0ece7` |
| `$color-text` | `#2C1810` | `#1a1a1a` |
| `$color-text-muted` | `#6B5B4F` | `#666666` |
| `$color-text-light` | `#6F655A` | `#888888` |
| `$color-rule` | `#D4C8BA` | `#d5d0cb` |
| `$color-dark` | `#1E1810` | `#111111` |

Shadows shift from brown-tinted `rgba(44,24,16,...)` to neutral `rgba(0,0,0,...)`.

### Hero Section

- **Layout**: Side-by-side — 3-flat illustration on the left, headline + subtitle + CTA on the right.
- **Remove**: The SVG roofline background pattern.
- **Image**: The 3-flat illustration saved as `assets/images/3flat-logo.png` and rendered as an `<img>` element.
- **Responsive**: On mobile, stack vertically — illustration above, text below, both centered.

### Navigation

- Text-only "YIMBY Illinois" in the nav. No image/icon.
- Colors updated to warm monochrome (dark background when scrolled, warm white text).

### Rest of Site

All pages (about, priorities, legislation, press, staff) recolored via the updated design tokens. No structural changes — just color values.

## Files to Change

1. `_sass/_variables.scss` — update all color tokens and shadow values
2. `_includes/hero.html` — replace SVG pattern with side-by-side layout featuring the illustration
3. `_sass/_hero.scss` — update hero styles for new layout (flexbox side-by-side, responsive stacking)
4. `assets/images/3flat-logo.png` — add the illustration image file
5. `_sass/_nav.scss` — update scrolled-nav background color references if hardcoded
6. Any other Sass partials with hardcoded color values (check `_sections.scss`, `_footer.scss`, `_buttons.scss`)

## Out of Scope

- Typography changes (DM Serif Display + Poppins stays)
- Structural/layout changes beyond the hero
- Content changes
- New pages or features
