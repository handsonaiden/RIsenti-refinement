# Risenti website (Next.js)

Next.js (App Router) + TypeScript. Deploys on Vercel with no config.

## Pages
- `/` home
- `/services/[slug]` one page per practice area (6)
- `/contact` contact page with a working form
- `/api/contact` form endpoint
- `/sitemap.xml`, `/robots.txt`

## Edit content
All text (services, values, testimonials, contact details) lives in `lib/content.ts`.

## Make the contact form send email
1. Create a free account at resend.com and verify the risenti.com domain.
2. In Vercel: Project → Settings → Environment Variables, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (default info@risenti.com)
   - `CONTACT_FROM_EMAIL` (for example `Risenti Website <website@risenti.com>`)
3. Redeploy. Until then the form opens the visitor's email app.

## Vercel settings
Framework Preset must be **Next.js** (Project → Settings → Build & Development).

## Local
```
npm install
npm run dev
```
