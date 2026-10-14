# Risenti website (redesign)

Static site: no build step.

## Deploy
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → import the repo**.
3. Framework preset: **Other**. Leave build command and output directory empty. Deploy.

## Notes
- Contact form opens the visitor's email app (mailto). To receive submissions directly, replace the handler in `js/main.js` with a Formspree / Vercel function endpoint.
- Add client logos in the "Trusted by" block in `index.html` (marked with a comment).
- Privacy and Terms link to the existing pages on risenti.com; replace with local pages when ready.
