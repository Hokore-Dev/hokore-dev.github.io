# hokore-dev.github.io

My personal website & portfolio — **<https://hokore-dev.github.io>**

> Ha Minjun · Game & VR Developer

A static site (HTML / CSS / JavaScript) hosted on **GitHub Pages**.

## Structure

```
index.html        # single-page entry
css/style.css     # design tokens + every style rule
js/main.js        # nav, scroll-spy, typing, filters, modal
js/i18n.js        # ko / en strings
assets/           # project images, OG image, touch icon
favicon.svg       # site mark
robots.txt        # crawler policy
sitemap.xml       # single-URL sitemap
portfolio-pdf/    # 16:9 slide deck → PDF, independent of the site
```

## Design

Ink-navy surfaces with a single vermilion accent, reserved for CTAs, active
state, focus, progress and the typing caret — never decoration. Every colour,
radius and type value lives in the `:root` block of `css/style.css`.

| Role    | Value                                |
| ------- | ------------------------------------ |
| Surface | `#0f1633` · `#0a0f24` · `#16214b`    |
| Accent  | `#ff5a3c`                            |
| Display | Bricolage Grotesque                  |
| Mono    | IBM Plex Mono                        |
| Body    | Pretendard                           |

## Develop locally

```bash
# any static file server works, e.g.
python3 -m http.server 8000
# → open http://localhost:8000
```

Pushing to the default branch redeploys the live site automatically via GitHub Pages.
