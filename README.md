# Mathematics & AI

A static blog hosted on GitHub Pages. No build step, no framework, no dependencies —
just HTML, CSS, and a little vanilla JS. Open `index.html` directly in a browser to preview.

## Structure

```
index.html              Homepage. Renders the post list from assets/js/posts-data.js.
posts/*.html             One HTML file per post.
assets/css/site.css       Every page's shared styling. Edit this to restyle the whole site.
assets/js/site.js         Sets the footer year on every page.
assets/js/posts-data.js   The list of every post (title, date, tags, description, url).
assets/js/home.js         Renders the homepage list from posts-data.js.
templates/post-template.html   Starting point for a new post.
```

## Writing a new post

1. Copy `templates/post-template.html` into `posts/your-slug.html`.
2. Fill in the title, date, author, tags, and body content (plain HTML — headings,
   paragraphs, `<pre><code>` blocks, etc.).
3. If the post needs LaTeX math, uncomment the MathJax `<script>` block in the `<head>`
   and write `$inline$` or `$$display$$` math in the body.
4. Add one entry to the top of the array in `assets/js/posts-data.js` with the same
   title/date/author/tags/description and the post's `url` (e.g. `posts/your-slug.html`).
5. Open `index.html` to confirm it shows up correctly, then commit and push.

That's it — no build, no install. The homepage always reflects whatever is in
`posts-data.js`, so a post is never orphaned or forgotten on the homepage.

## Site-wide styling

All shared CSS lives in `assets/css/site.css`. Change it once and every page picks it up
— no more copy-pasting a `<style>` block into each new post.
