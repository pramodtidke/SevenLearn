# sevenlearn landing page

A modern, animated, dark-first website for **sevenlearn**.

## File structure

- `index.html` — semantic page structure and Tailwind-based layout
- `style.css` — custom animations, card styles, and micro-interactions
- `script.js` — reveal-on-scroll animation and dynamic footer year
- `favicon.svg` — favicon placeholder with the number `7`

## Run locally

Because this is a static site, you can run it with any static server.

### Option 1: Python

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

### Option 2: VS Code Live Server

Open the project and click **Go Live**.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Save changes and wait for deployment.
5. Your site will be available at:
   - `https://<your-username>.github.io/<repo-name>/`

## Notes

- Designed mobile-first and responsive.
- Uses CDN Tailwind for zero-build deployment.
- Includes reduced-motion fallback for accessibility.
