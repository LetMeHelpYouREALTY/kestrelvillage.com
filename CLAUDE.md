# kestrelvillage.com

Hyperlocal real estate site for Kestrel Village (Summerlin, Las Vegas) for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, NV license S.0197614.LLC.

## Stack
- Next.js 16 (App Router, `src/app`), React 19, TypeScript, Tailwind CSS 4
- Hosted on Vercel; every PR gets a preview deployment
- npm with a committed `package-lock.json`; Node 24 in CI

## Commands
- `npm ci` install · `npm run dev` local server · `npm run lint` · `npm run typecheck` · `npm run build`
- CI runs lint, typecheck, and build on every PR. Run all three before you push.

## Rules
- **Fair Housing first.** No protected-class wording or proxies ("safe neighborhood," "good schools," "family-friendly"). Describe square footage, amenities, school names, and commute times instead.
- **This site's phone number is (725) 720-2805.** Never put 702-222-1964 on the site; that number is for client email and text only.
- **No secrets in git.** `.env*` stays gitignored. A new env var goes in Vercel (Production + Preview), and the PR names it.
- **Listings come from the RealScout widget** (`src/components/LazyRealScoutListings.tsx`). Don't hard-code prices or addresses as current market data.
- Work on a branch and open a PR. `main` deploys to production.
