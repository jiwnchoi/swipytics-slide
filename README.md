# Swipytics Slide

A Marp deck for presenting **Swipytics: Leveraging the Short-form Video Stream Metaphor in Exploratory Data Analysis** (Choi, L'Yi, Kim, Jo — IEEE VIS / TVCG).

## Files

- `main.md` — the deck
- `themes/swipytics.css` — custom Marp theme
- `assets/` — figures extracted from the paper
- `papers-source-swipytics.pdf` — the source paper

## Usage

```bash
pnpm install
pnpm build:html   # dist/index.html
pnpm build:pdf    # dist/swipytics-slide.pdf
pnpm build        # both
pnpm preview      # watch mode
pnpm server       # serve cwd at http://localhost:8080/main.md
```

`--allow-local-files` is required because the deck references local figures in `assets/`.

## Slide Structure

The title slide is composed directly from slide content, not frontmatter:

```markdown
<!-- _class: title -->

## IEEE VIS / TVCG

# Deck Title

Author line
```

## Slide Classes

- `title` — opening slide with kicker, title, and presenter block
- `contents` — agenda list
- `section` — section divider
- `thanks` — closing slide

## Layout Helpers

- `.columns.two` / `.columns.three` — equal-width column grids
- `.columns.ratio-6-4` / `.columns.ratio-4-6` — asymmetric splits
- `.stat-grid` (with `.cols-2`, `.cols-3`) and `.stat` — metric callouts
- `.dr-list` / `.dr-item` / `.dr-tag` — numbered rationale rows
- `.figure-wide` / `.figure-fit` — bounded figure sizing
- `.source-note` — bottom-right figure attribution
- `.media-placeholder` — dashed box for a pending image
