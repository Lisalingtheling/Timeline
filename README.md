# Currency — being aware of discipline history

An interactive timeline of graphic design history for presenting live: 79 moments, from Bi Sheng's movable type (c.1040) to generative AI (2022), in four rows (Art & Design, Technology, Society & Ads, Music) across eight eras.

It's a plain static website: HTML, CSS and JavaScript, with no build step and nothing to install.

## Presenting

| Where | Key / gesture | Does |
| --- | --- | --- |
| Timeline | ← → or Page Up / Page Down | Jump between eras |
| Timeline | Mouse wheel | Scroll sideways |
| Timeline | Click, tap, or Tab then Enter | Open a moment full-screen |
| Moment | → , Space or Page Down | Next moment (works with most presentation clickers) |
| Moment | ← or Page Up | Previous moment |
| Moment | Swipe left / right | Next / previous on touch screens |
| Moment | Esc | Back to the timeline, at that moment's era |

**Meanwhile** at the bottom of each slide lists the three nearest moments from the other rows, so you can jump across.

**Settings** (the sliders button, top right) are remembered on each device:
- Previous / Next steps through all rows, or only the current one.
- Slide background: *Deep red* (the default, which meets WCAG AA contrast) or *Signal red* (brighter, the original design colour, but its smaller text falls below AA).
- Show or hide the Meanwhile strip.
- Show or hide the "Image needed" labels. Turn these off before presenting.
- Show images in black and white, or in colour.

## Pictures

Pictures go in [`images/moments/`](images/moments/). Each file is named after its moment, for example `images/moments/1501-music-goes-to-press.jpg`. Upload a file with the right name and it appears on that slide. The [folder's README](images/moments/README.md) has step-by-step instructions and a checklist of every moment's file name, including which 28 still need a picture.

## Editing the text

All moments are in [`assets/data.js`](assets/data.js): one line per moment with its date, row, title, text, "Look at" example and image description (`alt`). Edit it on GitHub with the pencil icon. Keep the quotes and commas as they are.

If you change a moment's `id`, rename its picture to match.

## Viewing and publishing

- **On your computer:** download the repository (**Code → Download ZIP**), unzip it and open `index.html` in a browser. This also works offline at a venue, apart from the font (see below).
- **Online with GitHub Pages:** in the repository go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save. The site appears at `https://lisalingtheling.github.io/Timeline/` within a minute or two, and updates each time you commit.

The Archivo font loads from Google Fonts, so the venue needs internet access. Without it, the site falls back to the system font.

## Accessibility

Built to WCAG 2.2 AA and checked with axe-core (no violations on wide and phone screens, timeline, slides and settings):

- All text meets AA contrast. Accent red is used only for large text; small red text uses the darker ramp step.
- Everything works by keyboard, with a visible focus ring, a "Skip to timeline" link, and focus returned to the moment you were on when a slide closes.
- Slides and settings are native modal dialogs: focus stays inside, Esc closes, and the page behind is inert.
- Screen readers get headings per era and row, lists of moments, labelled buttons ("Next: 1501, Music goes to press"), image descriptions, and a spoken announcement when you move to another moment.
- Reflows to a single column on phones, narrow windows and 200–400% zoom; touch targets are at least 44 px.
- Respects *reduced motion* (no smooth scrolling) and Windows high-contrast mode.

## Files

```
index.html            the page
assets/data.js        the moments (edit text here)
assets/timeline.js    behaviour
assets/timeline.css   layout
assets/modernist.css  Modernist design system tokens
images/moments/       one picture per moment
```
