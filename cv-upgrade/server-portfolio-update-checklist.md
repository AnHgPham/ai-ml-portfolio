# Server / Portfolio / GitHub Update Checklist

## Cloudflare Pages

Use GitHub-connected Cloudflare Pages for this portfolio.

Recommended settings:

- Repository: `AnHgPham/ai-ml-portfolio`
- Branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: current LTS or newer

Do not use an extra deploy command unless you intentionally deploy as a Worker with Wrangler. For this project, static Cloudflare Pages is enough.

## Before Updating The Server

Run locally:

```bash
npm run check
npm run build
```

Then verify:

- Portfolio opens locally.
- CV link opens: `/assets/PhamHoangAn_CV_Intern.pdf`.
- GitHub, LinkedIn, email links work.
- Pickleball Drive demo preview loads or has fallback link.
- EN/VI toggle still works.
- Mobile has no horizontal page overflow.

## What To Update On The Portfolio

After you update the CV PDF:

1. Replace `public/assets/PhamHoangAn_CV_Intern.pdf`.
2. Keep the same filename if you do not want to change code.
3. Run `npm run build`.
4. Commit and push to `main`.
5. Wait for Cloudflare Pages deployment.

Optional future improvements:

- Add the final custom domain to README and portfolio metadata after the domain is stable.
- Add canonical URL only after the final public domain is confirmed.
- Add a small "Updated CV" note or version date if recruiters are actively reviewing it.

## GitHub Profile Updates

Local suggested files already exist:

- `github-upgrade/profile-README.md`
- `github-upgrade/repo-descriptions.md`
- `github-upgrade/pinned-repos.md`

Recommended pinned repo order:

1. `computer-vision-pickleball-detection-court`
2. `DoAnTotNghiep`
3. `waste_classifier` or the correct Waste repo slug
4. `ai-ml-portfolio`

## Recruiter-Safe Claims

Safe to claim:

- Built end-to-end CV and ML project workflows.
- Implemented YOLO/OpenCV tracking and homography-based visualization.
- Implemented few-shot/open-set keyword spotting logic.
- Built bilingual portfolio with Astro/React/Cloudflare and browser QA.

Need confirmation before claiming:

- Exact model accuracy.
- Team size.
- Dataset size.
- Final deployed domain.
- Whether all demo links are public.

