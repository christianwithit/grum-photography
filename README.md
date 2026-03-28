# Grum Photography — Website

A professional photography studio website for Grum Photography, based in Kampala, Uganda. Built as a static, multi-page SPA using pure HTML, CSS, and JavaScript.

---

## Project Structure

```
├── index.html       ← All pages (SPA, hash-based routing)
├── style.css        ← All custom styles (no Tailwind, pure CSS vars)
├── script.js        ← Navigation, scroll reveal, FAQ, forms, lightbox
└── README.md        ← This file
```

---

## Pages Included

| Page       | Hash Route  | Description                              |
|------------|-------------|------------------------------------------|
| Home       | `#` / `#home` | Hero, gallery preview, about, testimonials, blog, CTA |
| About      | `#about`    | Photographer bio, fun facts, awards      |
| Services   | `#services` | Elopements, Weddings, Portraits + FAQ    |
| Galleries  | `#galleries`| Masonry photo grid with filter + lightbox |
| Contact    | `#contact`  | Contact form + info                      |

---

## How to Run Locally

### Option 1 — Simple (open directly in browser)
```bash
# Just open index.html in any modern browser
open index.html
```
> ⚠️ Note: Google Fonts and remote images require an internet connection.

### Option 2 — Local dev server (recommended for full functionality)

**Using Python:**
```bash
python3 -m http.server 8080
# Then open: http://localhost:8080
```

**Using Node.js (npx serve):**
```bash
npx serve
```

**Using VS Code:**
Install the **Live Server** extension, right-click `index.html` → "Open with Live Server".

---

## Tech Stack

- **HTML5** — Semantic structure, SPA with hash routing
- **CSS3** — Custom properties (CSS vars), Grid, Flexbox, animations
- **JavaScript (vanilla)** — No dependencies or frameworks
- **Fonts** — Google Fonts: Cormorant Garamond + Jost
- **Images** — Placeholder images (to be replaced with Grum's portfolio)

---

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll-reveal animations
- ✅ Hero parallax / zoom transition
- ✅ Mobile hamburger menu
- ✅ Gallery filter (All / Weddings / Portraits / Events)
- ✅ Lightbox for gallery images
- ✅ FAQ accordion
- ✅ Email signup form with feedback
- ✅ Contact form with thank-you state
- ✅ Browser back/forward navigation (History API)
- ✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)

---

## Design Notes

- **Color palette**: Warm cream (`#f8f4ef`), deep espresso (`#2c2420`), terracotta accent (`#c4956a`)
- **Typography**: Cormorant Garamond (display/headings) + Jost (body/UI)
- **Aesthetic**: Editorial, authentic, warm — rooted in East African storytelling

---

## Customization

To replace placeholder content:
1. **Images** — Swap `src` URLs in `index.html` with Grum's actual portfolio images
2. **Colors** — Edit CSS variables in `style.css` under `:root`
3. **Text** — Edit directly in `index.html`
4. **Contact details** — Update phone (+256 700 123 456), email (hello@grumphotography.ug), and Instagram (@grumphotography)
5. **Pricing** — Update service pricing in UGX as needed

---

## Brand: Grum Photography

- **Location**: Kampala, Uganda
- **Specialties**: Weddings (including traditional Kwanjula ceremonies), Portraits, Events, Commercial/Branding
- **Style**: Editorial, authentic, warm — celebrating East African culture and landscapes
- **Service Areas**: Kampala, Entebbe, Jinja, Lake Victoria, and across Uganda

---

*©2025 Grum Photography. Proudly based in Kampala, Uganda*
