# Tanil Solar Energy Engineering — Website MVP

Mobile-first, conversion-focused one-page website for Tanil Solar Energy Engineering (Zimbabwe).
Built with **React 18 + Vite + TypeScript**. Zero backend required; enquiries use a transparent
WhatsApp hand-off (nothing is stored or sent silently).

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check (tsc) + production build to dist/
npm run preview   # preview the production build
```

## Environment variables (all OPTIONAL — the site runs without them)

Copy `.env.example` to `.env` if needed. Never commit a real `.env`.

| Variable | Purpose | Default |
|---|---|---|
| `VITE_SITE_URL` | Canonical URL, Open Graph URLs, sitemap | `https://www.example.com` (placeholder — update after domain is confirmed) |
| `VITE_WHATSAPP_ENQUIRY_NUMBER` | Receives website enquiries, international format, no `+` | `263713799295` |
| `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` | FUTURE: lead storage | not set |
| `VITE_N8N_WEBHOOK_URL` | FUTURE: automation webhook | not set |

## Deploy to GitHub + Vercel

```bash
git init && git add -A && git commit -m "Tanil Solar MVP"
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then: **Vercel → Add New Project → Import the repository → Framework: Vite → Deploy.**
Set `VITE_SITE_URL` to the final domain in Vercel → Settings → Environment Variables, then update
the canonical link in `index.html` and `public/sitemap.xml` / `robots.txt`.

## Project structure

```
public/
  robots.txt, sitemap.xml      # SEO (update domain placeholder)
  assets/logo.png              # brand logo (extracted from supplied flyer, transparent)
src/
  config/site.ts               # ALL business facts & contact details (edit here)
  types.ts                     # documented Lead data structure
  lib/leads.ts                 # lead builder + WhatsApp message/url builders (Supabase/n8n stubs)
  lib/validation.ts            # form validation (Zimbabwe mobile formats)
  components/                  # Header, Hero, Services, Pathways, Promotion, About,
                               # HowItWorks, FAQ, Contact, EnquiryForm, Footer, Icons
  styles/global.css            # design system (brand colours below)
```

## Brand colours (extracted from supplied marketing material)

| Token | Hex |
|---|---|
| Navy (primary) | `#072C56` |
| Deep navy (dark) | `#041D3A` |
| Brand blue | `#0E467A` |
| Sky blue | `#117FD8` |
| Brand yellow | `#FDC704` |
| Brand orange | `#F78506` |
| Off-white | `#F4F8FC` |
| Ink text | `#1A2733` |

## Enquiry flow (honest by design)

1. Customer fills the validated form.
2. The site builds a structured WhatsApp message and opens `wa.me` in a new tab.
3. The customer reviews and **presses Send in WhatsApp** — only then is it delivered.
4. The site shows a preview + "Reopen WhatsApp" + "Start a New Enquiry". Nothing is stored.

Future: implement `saveLeadToSupabase` / `postLeadToAutomation` in `src/lib/leads.ts` and call
them from `EnquiryForm` after validation (keep the WhatsApp step as fallback).

## Future AI agents (PLANNED — not built in this phase)

1. **Sales & Lead Qualification** — classify enquiries, flag missing info, prioritise by transparent rules.
2. **Technical & Service Support** — triage maintenance questions; always escalate sizing/safety/quotations to a human; never invent specs.
3. **Operations Intelligence** — enquiry summaries, follow-up highlights, simple sales/service reports.

All future agents require: role-based permissions, human approval for consequential actions,
logging, error handling, and customer-data protection. Clearly label as planned until operational.

## Items requiring Tanil Solar's confirmation

- [ ] Official Facebook page URL (currently a placeholder link)
- [ ] Official LinkedIn company page URL (placeholder)
- [ ] Physical address(es) — flyers conflict ("124 Harare Street" vs "15 Drummond Milton Park"); omitted from the site
- [ ] Which WhatsApp number should receive web enquiries (default +263 713 799 295)
- [ ] Whether all three numbers are registered on WhatsApp Business
- [ ] Production domain (update `VITE_SITE_URL`, canonical, sitemap, robots.txt)
- [ ] Civil-servant promotion: confirm eligibility rules and full terms

## SEO / GEO / AEO notes

- Unique title + meta description, H1→H2→H3 hierarchy, semantic HTML, descriptive alt text.
- Organization JSON-LD with verified facts only (no invented address/hours/ratings).
- FAQ schema deliberately omitted (Google restricts FAQ rich results to authoritative sites);
  FAQs are still fully crawlable as HTML.
- Canonical/sitemap use a placeholder domain until the production domain is confirmed.
- No keyword stuffing, no fabricated reviews or credentials.

## Honest limitations

- No backend: enquiries exist only if the customer presses Send in WhatsApp.
- Facebook/LinkedIn URLs are placeholders.
- The npm build must be run locally (`npm run build`) — see checklist in the project brief.
