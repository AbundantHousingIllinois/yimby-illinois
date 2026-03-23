# B&W Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the YIMBY Illinois site from terracotta/teal to warm monochrome and add the 3-flat building illustration to the hero section.

**Architecture:** Update Sass design tokens in `_variables.scss` to swap all colors to warm monochrome. Restructure the hero section HTML/CSS from centered text to a side-by-side flexbox layout with the illustration. All other pages inherit the new colors automatically via tokens.

**Tech Stack:** Jekyll 4.x, Sass, vanilla HTML

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `_sass/_variables.scss` | Modify | All color tokens, shadow values |
| `_includes/hero.html` | Modify | Remove SVG pattern, add illustration + side-by-side layout |
| `_sass/_hero.scss` | Modify | Flexbox side-by-side layout, responsive stacking |
| `assets/images/3flat-logo.png` | Create | Copy from `3-flat.png` in project root |
| `_includes/head.html` | Modify | Update theme-color meta tag |
| `assets/images/logo.svg` | Modify | Update fill colors to monochrome |
| `_sass/_footer.scss` | Modify | Update footer link colors for contrast on dark bg |
| `_sass/_layout.scss` | Modify | Update `section--accent` background to monochrome |

---

### Task 1: Copy illustration image to assets

- [ ] **Step 1: Copy the 3-flat image**

```bash
cp 3-flat.png assets/images/3flat-logo.png
```

- [ ] **Step 2: Verify the file exists**

```bash
ls -la assets/images/3flat-logo.png
```
Expected: file exists, ~1MB

- [ ] **Step 3: Commit**

```bash
git add assets/images/3flat-logo.png
git commit -m "Add 3-flat building illustration to assets"
```

---

### Task 2: Update color tokens to warm monochrome

**Files:**
- Modify: `_sass/_variables.scss` (lines 5-18, 57-59)

- [ ] **Step 1: Update color variables**

Replace the color block (lines 5-18) with:

```scss
// Colors — Warm Monochrome
$color-primary: #1a1a1a;
$color-primary-dark: #000000;
$color-primary-light: #444444;
$color-secondary: #333333;
$color-secondary-light: #555555;
$color-cream: #faf8f5;
$color-warm-gray: #f0ece7;
$color-text: #1a1a1a;
$color-text-muted: #666666;
$color-text-light: #888888;
$color-rule: #d5d0cb;
$color-dark: #111111;
$color-white: #FFFFFF;
```

- [ ] **Step 2: Update shadow values**

Replace shadow block (lines 57-59) with:

```scss
$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
```

- [ ] **Step 3: Commit**

```bash
git add _sass/_variables.scss
git commit -m "Update color tokens to warm monochrome palette"
```

---

### Task 3: Update hero HTML — remove pattern, add illustration

**Files:**
- Modify: `_includes/hero.html`

- [ ] **Step 1: Replace hero.html contents**

Replace the entire file with:

```html
<section class="hero" id="hero">
  <div class="container">
    <div class="hero__content">
      <div class="hero__illustration">
        <img src="{{ "/assets/images/3flat-logo.png" | relative_url }}" alt="Chicago three-flat building illustration" width="280" height="400">
      </div>
      <div class="hero__text">
        <h1 class="hero__title">Illinois Deserves Abundant Housing</h1>
        <p class="hero__subtitle">We fight for housing policies that make Illinois more affordable, livable, and inclusive for everyone.</p>
        <div class="hero__actions btn-group">
          <a href="{{ "/about/" | relative_url }}" class="btn btn--primary btn--lg">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

Key changes: removed `hero__pattern` SVG div entirely, wrapped content in `hero__content` flexbox with `hero__illustration` and `hero__text` children.

- [ ] **Step 2: Commit**

```bash
git add _includes/hero.html
git commit -m "Restructure hero with 3-flat illustration, remove roofline pattern"
```

---

### Task 4: Update hero CSS — side-by-side layout

**Files:**
- Modify: `_sass/_hero.scss`

- [ ] **Step 1: Replace hero.scss contents**

Replace the entire file with:

```scss
// ===========================================
// YIMBY Illinois — Hero
// ===========================================

.hero {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: $color-cream;
  padding-top: 5rem;
}

.hero__content {
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: $bp-tablet - 1) {
    flex-direction: column;
    text-align: center;
  }
}

.hero__illustration {
  flex-shrink: 0;

  img {
    max-width: 250px;
    height: auto;
    display: block;
  }

  @media (max-width: $bp-tablet - 1) {
    img {
      max-width: 180px;
    }
  }
}

.hero__text {
  flex: 1;
}

.hero__title {
  font-size: $type-hero;
  font-family: $font-display;
  color: $color-text;
  margin-bottom: 1.5rem;
  max-width: 800px;
  line-height: 1.1;
}

.hero__subtitle {
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  color: $color-text-muted;
  max-width: 600px;
  margin: 0 0 2rem;
  line-height: 1.8;
}

.hero__actions {
  @media (max-width: $bp-tablet - 1) {
    justify-content: center;
  }
}
```

Key changes: removed `hero__pattern`, removed `text-align: center` from `.hero`, added flexbox `.hero__content` with illustration/text children, responsive stacking below 768px.

- [ ] **Step 2: Commit**

```bash
git add _sass/_hero.scss
git commit -m "Update hero styles for side-by-side layout with illustration"
```

---

### Task 5: Update head.html theme-color

**Files:**
- Modify: `_includes/head.html` (line 8)

- [ ] **Step 1: Update theme-color meta tag**

Change line 8 from:
```html
<meta name="theme-color" content="#C2571A">
```
to:
```html
<meta name="theme-color" content="#1a1a1a">
```

- [ ] **Step 2: Commit**

```bash
git add _includes/head.html
git commit -m "Update theme-color to monochrome"
```

---

### Task 6: Update logo.svg to monochrome

**Files:**
- Modify: `assets/images/logo.svg`

- [ ] **Step 1: Update SVG fill colors**

Replace contents with:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="none">
  <text x="0" y="30" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#1a1a1a">YIMBY</text>
  <text x="108" y="30" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="400" fill="#1a1a1a">Illinois</text>
</svg>
```

- [ ] **Step 2: Commit**

```bash
git add assets/images/logo.svg
git commit -m "Update logo SVG to monochrome"
```

---

### Task 7: Fix footer link contrast

**Files:**
- Modify: `_sass/_footer.scss` (lines 44-52)

- [ ] **Step 1: Update footer link colors**

`$color-primary-light` is now `#444444` which is too dark on the `$color-dark` (`#111111`) footer background. Change footer link styling:

Replace lines 44-52:
```scss
  a {
    color: $color-primary-light;
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }
  }
```

With:
```scss
  a {
    color: rgba($color-cream, 0.8);
    text-decoration: none;
    transition: color $transition-fast;

    &:hover {
      color: $color-cream;
    }
  }
```

This ensures links are visible on the dark footer (warm white on dark background).

- [ ] **Step 2: Commit**

```bash
git add _sass/_footer.scss
git commit -m "Fix footer link contrast for monochrome palette"
```

---

### Task 8: Update section--accent background

**Files:**
- Modify: `_sass/_layout.scss` (lines 26-33)

- [ ] **Step 1: Update accent section**

`$color-secondary` is now `#333333`. The `.section--accent` and `.section--dark` both use dark backgrounds now. Update `.section--accent` to use `$color-dark` for consistency, and update the label color:

Replace lines 26-33:
```scss
.section--accent {
  background-color: $color-secondary;
  color: $color-white;

  h2, h3 { color: $color-white; }
  p { color: rgba($color-white, 0.9); }
  .section-label { color: rgba($color-white, 0.85); }
}
```

With:
```scss
.section--accent {
  background-color: $color-dark;
  color: $color-white;

  h2, h3 { color: $color-white; }
  p { color: rgba($color-white, 0.9); }
  .section-label { color: rgba($color-white, 0.85); }
}
```

- [ ] **Step 2: Also update `section--dark` label color (line 23)**

Change:
```scss
  .section-label { color: $color-primary-light; }
```
To:
```scss
  .section-label { color: rgba($color-cream, 0.7); }
```

- [ ] **Step 3: Commit**

```bash
git add _sass/_layout.scss
git commit -m "Update section accent/dark backgrounds for monochrome"
```

---

### Task 9: Verify token-only files have no hardcoded colors

**Files:**
- Check: `_sass/_nav.scss`, `_sass/_buttons.scss`, `_sass/_sections.scss`

These files use Sass tokens exclusively (no hardcoded hex colors), so they inherit the new monochrome values automatically. Verify no hardcoded colors were missed.

- [ ] **Step 1: Grep for hardcoded hex colors in Sass files**

```bash
grep -n '#[0-9A-Fa-f]\{3,6\}' _sass/_nav.scss _sass/_buttons.scss _sass/_sections.scss
```

Expected: no matches (all colors use `$color-*` tokens or `rgba()` with tokens)

---

### Task 10: Visual verification

- [ ] **Step 1: Push to main and verify on live site**

```bash
git push origin main
```

- [ ] **Step 2: Check live site**

After GitHub Actions deploys (~2 min), verify at https://abundanthousingillinois.github.io/yimby-illinois/:
- Home page hero shows 3-flat illustration on left, text on right
- Nav is warm monochrome (no terracotta/teal anywhere)
- All pages (about, priorities, legislation, press, staff) use monochrome colors
- Footer links are readable
- Mobile: hero stacks vertically with illustration above text
- Buttons are visible and have proper hover states
