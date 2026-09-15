---
name: sandip.live
description: One light, hairline-ruled sheet that reads like a precise technical record, numbered, dated and cited.
colors:
  paper: "oklch(0.985 0.003 247)"
  paper-sunk: "oklch(0.962 0.005 250)"
  ink: "oklch(0.2 0.014 262)"
  ink-2: "oklch(0.35 0.013 262)"
  muted: "oklch(0.49 0.012 262)"
  rule: "oklch(0.905 0.006 262)"
  rule-strong: "oklch(0.8 0.008 262)"
  signal: "oklch(0.66 0.17 150)"
  signal-ink: "oklch(0.46 0.12 152)"
  signal-wash: "oklch(0.94 0.045 150)"
  alert: "oklch(0.5 0.17 30)"
typography:
  display:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "clamp(2.25rem, 1.05rem + 4.4vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 87.5"
  display-article:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "clamp(2rem, 1.2rem + 2.8vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 87.5"
  headline:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "clamp(1.75rem, 1.2rem + 2.1vw, 2.875rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.028em"
    fontVariation: "'wdth' 87.5"
  prose-h2:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "1.625rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  prose-h3:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.02rem + 0.55vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  prose:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.72
  item-title:
    fontFamily: "'Atkinson Hyperlegible Next Variable', 'Helvetica Neue', Arial, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.4
  label:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
  action:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.2
  micro:
    fontFamily: "'Martian Mono Variable', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0"
spacing:
  gap: "1.5rem"
  pad: "clamp(1rem, 4vw, 2rem)"
  section: "clamp(3.75rem, 8vw, 6.5rem)"
  row: "1.625rem"
  row-compact: "1.25rem"
  form: "1.75rem"
  gutter: "7.5rem"
  mast-height: "4.5rem"
  measure: "40rem"
  wide: "44rem"
  frame: "70rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 1.25rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-primary-busy:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.paper}"
  text-link-action:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    height: "2.75rem"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.875rem"
    height: "3rem"
  topic-option:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.9375rem 1rem"
  tag-chip:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0.75rem"
    height: "2.25rem"
  tag-chip-hover:
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "0.875rem 0"
  nav-link-current:
    textColor: "{colors.ink}"
  section-number:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  section-number-current:
    textColor: "{colors.signal-ink}"
  status-label:
    textColor: "{colors.signal-ink}"
    typography: "{typography.label}"
  led:
    backgroundColor: "{colors.signal}"
    size: "0.4375rem"
  cite-key:
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
  code-inline:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    padding: "0.1em 0.35em"
---

# Design System: sandip.live

## Overview

**Creative North Star: "The Sourced Record"**

The site is one light sheet of cool paper ruled with hairlines, laid out like a technical record. Every section has a number in a left gutter. Every claim sits in a dated row and resolves to a bracketed citation, and one green square marks what is happening now. The world is built from what a precise document already has: numbering, dates, citation keys, a reading measure and ruled lines. It gets no extra ornament.

Density is calm but exact. Large, narrowed monospace headlines stand over short sans-serif prose kept to a 40rem measure, while the right third of wide screens stays open paper. Structure comes from 1px rules and alignment to a single vertical axis, never from cards, fills or shadows. Colour is almost entirely graphite on paper. The green signal carries meaning, so it is rare.

Motion is slow and quiet. Colours ease over 250 to 350ms on an exponential ease-out, the Now LED breathes, and small arrows nudge towards where they point. Nothing is hidden until scroll reveals it. The inspiration the user pinned is killenberger.com, rendered light.

**Key Characteristics:**
- Cool paper, graphite ink, hairline rules, a single carrier-green signal.
- Martian Mono narrowed to 87.5 width for headings, numbers, dates, labels and actions; Atkinson Hyperlegible Next for reading.
- A 7.5rem gutter axis with functional section numbers that light and copy links.
- Two-column record rows with mono metadata and outcome lines.
- Bracketed citation keys that resolve to a References list.
- Square everything: zero radius, square LEDs, square markers, square-capped SVG arrows.
- Flat surfaces; depth comes only from rules and a 1px focus ring.

## Colors

A near-monochrome graphite-on-paper palette with one green signal reserved for state.

### Primary
- **Carrier Green** (signal): the LED. Used only as a filled square: the Now status, the current nav item, the current section marker on the axis, the lit record row marker and the checked enquiry topic. It is never used for text.
- **Signal Ink** (signal-ink): the readable form of the signal, used for text next to an LED (status label, "Current", the current section number), the caret, the focus outline and code links.
- **Signal Wash** (signal-wash): a pale green field for text selection and the reference row a citation lands on.

### Secondary
- **Brick Alert** (alert): error state only. It colours the invalid input border and ring, field error text and the form's failure message.

### Neutral
- **Cool Paper** (paper): the page and every control background. The filled button inverts to it on hover.
- **Sunk Paper** (paper-sunk): a slightly recessed surface for code blocks, inline code and the portrait frame. It is the only tonal fill in the system.
- **Graphite Ink** (ink): headings, emphasised text, the primary button fill, selected and focused control borders, and the rule above an aside or quote.
- **Soft Graphite** (ink-2): default body text colour, descriptions and dates in record rows.
- **Pencil** (muted): metadata, gutter numbers, nav at rest, placeholders, captions, citation keys, the hatch mark and hovered control borders.
- **Hairline** (rule): section dividers, row dividers, the gutter axis and masthead and footer rules.
- **Strong Hairline** (rule-strong): control outlines at rest (inputs, topics, tags, aged notices), link underlines and the small row markers.

Code syntax hues (blue, green, violet) exist as Shiki variables in `src/styles/site.css`. They are scoped to code blocks and are not palette colours.

### Named Rules
**The One Signal Rule.** Green means now, current or selected. If a green element does not mark a state, remove it. Filled green appears only as a square; any green text uses Signal Ink.

**The Graphite Action Rule.** The one filled action on a view is graphite ink, never green. Hover inverts it to paper with an ink border.

## Typography

**Display Font:** Martian Mono Variable (with ui-monospace, SF Mono, Menlo, Consolas)
**Body Font:** Atkinson Hyperlegible Next Variable (with Helvetica Neue, Arial, system-ui)
**Label/Mono Font:** Martian Mono Variable, the same family at small sizes

**Character:** The mono is the record's voice: headings, numbers, dates, keys and controls. It is narrowed at large sizes so headlines stay dense and engineered. Atkinson carries the reading and stays open and legible, so the record never gets in the way of the argument.

### Hierarchy
- **Display** (500, clamp 2.25rem to 4.5rem, 1.06, width 87.5, max 19ch): the page's h1 in the first numbered section only.
- **Display, article** (500, clamp 2rem to 3.5rem, 1.1, max 22ch, balanced): article titles.
- **Headline** (500, clamp 1.75rem to 2.875rem, 1.12, width 87.5, max 28ch): numbered section titles after the first.
- **Prose headings** (500 mono; h2 1.625rem/1.25, h3 1.25rem/1.35, h4 1rem/1.45): headings inside articles.
- **Title** (500 mono, 1rem, 1.4): record row titles.
- **Lede** (400 sans, clamp 1.1875rem to 1.375rem, 1.5, ink, 40rem): the one-paragraph opener under a section title.
- **Body** (400 sans, 1.0625rem, 1.65, ink-2): all interface prose. Article prose steps up to 1.125rem/1.72 at the same 40rem measure.
- **Item title** (600 sans, 1.0625rem, 1.4): post list titles and FAQ questions.
- **Label** (500 mono, 0.75rem, 1.4, sentence case): nav, form labels, section numbers, status labels, dates, row metadata and footer.
- **Action** (500 mono, 0.8125rem): buttons and action links.
- **Micro** (400 mono, 0.6875rem): citation keys, table-of-contents numbers and portrait captions.

### Named Rules
**The Record and Reading Rule.** Anything a reader scans as data (numbers, dates, keys, labels, controls, headings) is mono. Anything read as argument is sans. Never set a paragraph in mono.

**The Sentence Case Rule.** Labels are small mono in sentence case with normal tracking. The system has no uppercase tracked labels.

**The Tabular Rule.** Times, code and numeric mono text use tabular numerals so dated columns align.

## Layout

The page is a single centred frame (max 70rem) with fluid side padding (clamp 1rem to 2rem). A 1px vertical axis runs down the frame at 7.5rem from the left edge, starting under the 4.5rem masthead. The masthead, every section and the footer share a two-track grid: the 7.5rem gutter and the content column. Content begins 1.5rem past the axis.

Sections are separated by a top hairline and generous vertical padding (clamp 3.75rem to 6.5rem). A section number sits right-aligned in the gutter on the title's baseline, and a 9px square marker sits across the axis. Text stays within a 40rem measure. Lists of records, posts and aged notices extend to 44rem, and wide screens leave the remaining width open. Openers with a side panel (About, Contact) use a split of up to 40rem of content beside an 11 to 17rem column.

Record rows use a 15rem lead column and a fluid body column with a 2rem gap. Post rows use a 7.5rem date column, the title and a trailing reading time. Vertical rhythm inside copy is 1em between siblings, and stacked blocks inside a section use clamp 2rem to 3rem.

At 52rem and below, the gutter collapses (gap becomes 0) and the axis, the markers and the prose heading numbers are hidden. The section number moves inline before the title, the masthead stacks, and record and post rows become single column. The action group stacks full width: the button stretches, and each text link becomes a 3rem ruled row with its arrow at the far end.

### Named Rules
**The Axis Rule.** Everything aligns to the gutter axis. New content goes in the content column, and only section numbers, row markers and prose heading counters sit on or in the gutter.

**The Open Right Rule.** Keep prose to 40rem and lists to 44rem. Do not stretch copy to fill the frame; the open paper is part of the composition.

## Elevation & Depth

The system is flat. Nothing casts a shadow, and surfaces are separated by 1px rules and alignment, not layers. The only tonal step is Sunk Paper for code and the portrait. The only `box-shadow` in the build is a zero-offset 1px ring that doubles a control's border on focus or error. That is a border treatment, not elevation.

### Shadow Vocabulary
- **Focus ring** (`box-shadow: 0 0 0 1px var(--ink)`): inputs on focus-visible, together with an ink border.
- **Error ring** (`box-shadow: 0 0 0 1px var(--alert)`): inputs in an invalid field.

### Named Rules
**The Hairline Rule.** Group with a 1px rule, never a card, fill or shadow. Use Hairline for dividers, Strong Hairline for control outlines at rest and Graphite Ink for selected, focused or emphasised edges.

## Shapes

Everything is square. The radius is zero across buttons, inputs, topics, tags, code and images. Inputs set `border-radius: 0` explicitly to override platform defaults. Borders are always 1px. Stacked options in a group overlap by 1px (negative top margin) so they share one ruled edge, and the hovered or selected option rises above its neighbours to show its darker border in full.

The system's marks are small solid squares: the 7px LED, the 9px section marker and current row marker, and the 5px row marker at rest. The **hatch** is an 8px square with a 1px Pencil border filled with 135 degree stripes (1px lines every 3px). It marks aged content. Icons are authored 12px SVG strokes (1.25 stroke, square caps, currentColor): right, left, down, up-right and plus.

## Components

### Buttons
Solid, square and mono. There is one per view.
- **Shape:** square corners (0), 1px Graphite Ink border, 3rem minimum height, 0 1.25rem padding, 0.75rem gap before the arrow.
- **Primary:** Graphite Ink fill with Cool Paper Action text and a trailing 12px arrow.
- **Hover / Focus:** inverts to a paper fill with ink text over 300ms. The arrow nudges 3px in its direction over 350ms: right, down, or 2px up-right. Focus-visible draws a 2px Signal Ink outline offset 3px.
- **Busy / Disabled:** Pencil fill and border with paper text and a progress cursor.
- **Action link (secondary):** mono Action text in ink, 2.75rem minimum height, underlined with the global 1px Strong Hairline underline, and an arrow. On narrow screens it becomes a ruled full-width row.

### Links
- Inline links inherit colour and use a 1px underline in Strong Hairline, offset 0.24em. Hover darkens the text to ink and the underline to currentColor over 250ms. In article prose, links are ink.

### Chips (tags)
- **Style:** square, 1px Strong Hairline border, no fill, mono Label text in Soft Graphite, 2.25rem minimum height, 0 0.75rem padding. A Pencil count follows the name.
- **State:** hover darkens the border and text to ink over 250ms. There is no filled or selected variant.

### Inputs / Fields
- **Style:** square, 1px Strong Hairline border, Cool Paper fill, ink 1rem sans text, 3rem minimum height (textarea 11rem, vertical resize), 0.75rem 0.875rem padding. Pencil placeholder. The label above is mono Label in ink; an "(optional)" note is Pencil at 400.
- **Hover:** the border goes to Pencil.
- **Focus:** the border goes to ink and the 1px ink ring doubles it. No outline glow.
- **Error:** Brick Alert border and ring, with 0.875rem Brick Alert error text below. Empty error slots are removed from layout.

### Topic chooser (signature)
A radio group styled as a stack of ruled options, used to sort enquiries into doors.
- Each option is a 1px Strong Hairline box, 0.9375rem 1rem padding, with a 1rem square box followed by an ink label and a Pencil hint.
- Hover shows a Pencil border. When checked, the border goes to ink and an 8px Carrier Green square scales in from 0 to 1 over 300ms inside the box.
- Choosing a topic rewrites the message prompt and the next-step line, which sits beside an LED under the form.

### Navigation
- **Masthead:** a 4.5rem row ruled beneath. The name (ink, 500) and locality (Pencil) sit at the content edge in mono Label, and five nav links sit at the right.
- **Links:** Pencil at rest, ink on hover. The current page is ink with a 7px Carrier Green square before it.
- **Mobile:** the masthead stacks, nav gaps tighten to 0.75rem and link padding shrinks to 0.625rem.
- **Footer:** the same gutter grid, ruled above, all mono Label in Pencil with the name in ink. Links are underlined on hover.

### Section number (signature)
The gutter number (mono Label, Pencil) links to its own section, with a 9px paper square outlined in Strong Hairline across the axis. The section being read lights up: the number becomes Signal Ink and the square fills Carrier Green, over 350ms. Clicking copies the section URL, swaps the number for "Copied" for 1.4s and announces it politely.

### Record row (signature)
- A 15rem lead column holds the mono title, a Pencil kind line and a Soft Graphite date line. The body column holds 1rem sans text, an optional mono ink outcome line ending in citation keys, and an optional Pencil mono link with an arrow.
- Rows are ruled below inside a list ruled above, with 1.625rem block padding (1.25rem in the compact variant used for capability lists).
- A 5px Strong Hairline square sits on the axis at each row. A current row swaps it for a 9px Carrier Green square and adds a breathing LED with "Current" in Signal Ink.

### Status strip
A 40rem strip ruled above and below. A mono Signal Ink label with a breathing LED (opacity 1 to 0.3 over 3.2s) is followed by a 1rem ink sentence. It is used for Now on the home page and for confirmation states.

### Citations and references
- **Cite key:** a bracketed key such as [REUTERS-2022] in mono Micro, Pencil, no underline. It turns Signal Ink on hover.
- **References:** a ruled list with a 9.5rem mono ink key column and sans source text ending in a mono source link with an up-right arrow. The row a citation lands on takes a Signal Wash background over 600ms.

### Post list
Ruled rows: a mono Pencil date (with a hatch when the post is aged), a 600 sans ink title whose underline fades in on hover, an optional Soft Graphite description and a trailing mono reading time.

### Aged notice
A 1px Strong Hairline box (0.875rem 1rem padding) with a hatch and a 0.9375rem Soft Graphite sentence. It flags older articles.

### FAQ
Native details elements, ruled. The question is 600 sans ink with a plus icon that rotates 45 degrees when open. Answers are capped at 38rem.

### Article furniture
- **Meta line:** mono Label in Pencil.
- **Table of contents:** ruled rows with a 2.75rem mono Micro number column.
- **Prose:** numbered headings get a decimal-leading-zero counter in the gutter. Blockquotes have a 1px ink left rule and ink text. Images have a 1px Hairline border. Captions are mono Label in Pencil. Code blocks are Sunk Paper with a Hairline border. Tables are ruled with mono Label headers.

## Do's and Don'ts

### Do:
- **Do** use Carrier Green only as a filled square marking now, current or selected, and set any green text in Signal Ink.
- **Do** separate content with 1px rules: Hairline between items, Strong Hairline around controls at rest, Graphite Ink for selected, focused or emphasised edges.
- **Do** put a new top-level block in a numbered section so its number sits in the 7.5rem gutter and joins the section tracker.
- **Do** set headings, numbers, dates, labels and actions in Martian Mono (headlines at 'wdth' 87.5), and set reading text in Atkinson Hyperlegible Next within 40rem.
- **Do** back a factual claim with a citation key that resolves to References.
- **Do** keep every corner square (0 radius) and use the authored 12px square-cap SVG arrows.
- **Do** animate colour, border and small transforms only, at 250 to 350ms on cubic-bezier(0.16, 1, 0.3, 1), and respect reduced motion.
- **Do** mark aged content with the hatch square, not a colour.

### Don't:
- **Don't** introduce cards, fills or shadows to group content; the only depth is a 1px ring on focused or invalid inputs.
- **Don't** use green for decoration, headings, links at rest or a primary button fill.
- **Don't** round corners or use circular markers, dots or pills.
- **Don't** set tracked uppercase labels or small text above headings; the gutter number is the section's only label.
- **Don't** use text glyphs or icon fonts for arrows; use the authored SVG set.
- **Don't** hide content behind scroll reveals; the only ambient motion is the Now LED's breath.
- **Don't** stretch prose past 40rem or lists past 44rem to fill the frame.
