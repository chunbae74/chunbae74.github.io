# Academic CV Website

A polished, single-page academic CV built with plain HTML, CSS, and JavaScript.
No build step, no dependencies — open `index.html` in a browser and it works.

---

## Folder structure

```
/
├── index.html          Main page — all section content lives here
├── css/
│   └── style.css       All styles + design tokens
├── js/
│   └── script.js       Nav behavior, active section, footer year
├── assets/             Put your CV PDF and photo here
│   ├── cv.pdf          Linked from "Download CV" buttons
│   └── photo.jpg       (Optional) your profile photo
└── apple/
    └── DESIGN.md       Design system reference (Apple-inspired)
```

---

## How to run locally

### Option A — just open the file
```bash
open index.html
```
Works for reading. Smooth scrolling and all JS features work without a server.

### Option B — local dev server (recommended; avoids CORS edge cases)
```bash
# Python 3
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## How to edit content

Every section in `index.html` has comments that mark exactly what to change.
Look for lines starting with `<!-- ↓ Edit:` — they tell you what that field is.

### The most common edits

| What | Where in index.html |
|---|---|
| Your name (everywhere) | `<a class="nav-logo">`, `<h1 class="hero-name">`, `<title>`, footer |
| Professional title | `<p class="hero-title">` in the Hero section |
| Intro paragraph | `<p class="hero-intro">` in the Hero section |
| Avatar initials | `<span class="hero-avatar-initials">YN</span>` |
| Email | All `mailto:` hrefs |
| GitHub / Scholar / LinkedIn | All `href="https://github.com/..."` hrefs |
| CV PDF path | All `href="assets/cv.pdf"` hrefs — drop your PDF in `/assets/` |
| Research interests | `<span class="chip">` tags inside the About section |
| Publications | Duplicate or edit `.pub-entry` blocks in the Research section |
| Projects | Duplicate or edit `.project-card` blocks in the Projects section |
| Experience | Duplicate or edit `.timeline-entry` blocks in the Experience section |
| Skills | Add or remove `<span class="chip chip-dark">` inside each `.skill-group` |
| Awards | Duplicate or edit `.award-entry` blocks in the Awards section |

### Adding a real photo

Replace the `.hero-avatar` div in the Hero section with:
```html
<img src="assets/photo.jpg" alt="[Your Name]" class="hero-photo" />
```
The `.hero-photo` class already has the correct size and circular crop.

### Adding / removing sections

Each section is a self-contained `<section id="...">` block.
To remove a section: delete the block and delete its `<li>` in both nav `<ul>` lists.
To add a section: copy the closest existing block, give it a new `id`, and add a nav link.

---

## How to change the color palette

All colors are CSS custom properties at the top of `css/style.css` inside `:root { }`.
Change `--primary` to swap the accent color across the entire site.

```css
:root {
  --primary:       #0066cc;  /* ← change this for a different accent */
  --primary-focus: #0071e3;
  /* … */
}
```

---

## Where to put your CV PDF

Drop the PDF at `assets/cv.pdf`. All "Download CV" buttons already point there.
If you use a different path, find-replace `assets/cv.pdf` in `index.html`.

---

## Deployment

The site is static — any static host works:

- **GitHub Pages**: push to `main`, enable Pages in repo settings → root.
- **Netlify / Vercel**: drag-drop the folder or connect the repo.
- **Any web server**: upload the folder; no server-side code required.
