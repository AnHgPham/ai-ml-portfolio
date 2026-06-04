# Session Evidence Audit - CV/Portfolio Update

Date reviewed: 2026-06-04

## Scope

Local folders scanned:

- `C:\Users\GIGABYTE\Documents\Codex\2026-05-15`
- `C:\Users\GIGABYTE\Documents\Codex\2026-05-20`
- Current portfolio repo: `C:\Users\GIGABYTE\Documents\Codex\2026-05-20\t-i-mu-n-l-m`

No `2026-06-*` session folder was found under `C:\Users\GIGABYTE\Documents\Codex`. The usable evidence for CV updates is therefore from the May 2026 work, mainly the AI/ML portfolio repo.

## High-Confidence Evidence

### AI/ML Portfolio Website

Evidence:

- Repo: `AnHgPham/ai-ml-portfolio`
- Local path: `C:\Users\GIGABYTE\Documents\Codex\2026-05-20\t-i-mu-n-l-m`
- Stack in `package.json`: Astro, React, TypeScript, GSAP, Three.js, lucide-react
- Deploy target in `README.md`: Cloudflare Pages, `npm run build`, output `dist`
- Git history includes:
  - `feat: add AI ML portfolio site`
  - `feat: complete Vietnamese translations`
  - `feat: add mobile AI HUD experience`
  - `feat: embed algorithmic project systems`
  - `feat: upgrade work visuals and demo theater`
  - `feat: add draggable horizontal rails`
  - `fix: preserve full avatar framing`

What this proves:

- Built and iterated a production-style static portfolio for AI/ML internship recruiting.
- Implemented bilingual EN/VI content.
- Implemented responsive/mobile-specific UI, animation, and visual QA.
- Integrated CV, portrait assets, GitHub, LinkedIn, and Google Drive demo link.
- Configured build/deploy flow for Cloudflare static hosting.

### Portfolio QA / Visual Verification

Evidence:

- `qa-screenshots/` contains desktop, tablet, mobile, reduced-motion, work section, avatar, drag rail, and motion/color QA screenshots.
- Browser QA scripts were run with Chrome/Playwright-style checks during development.
- Repeated checks confirmed no horizontal overflow, EN/VI toggle, Drive iframe loading, reduced-motion visibility, and responsive layout.

What this proves:

- Practical frontend QA workflow, not just static page editing.
- Attention to accessibility and responsive behavior.

### Current Portfolio Project Evidence

Source: `src/data/portfolio.ts`

Selected projects currently represented:

- Pickleball Match Analysis
  - YOLO keypoints, OpenCV, Kalman/temporal smoothing, homography, minimap, heatmap, annotated video output.
  - Evidence: demo Drive link, 12 court keypoints, 4-stage tracking cascade, 2D court projection.
- Open-Set Keyword Spotting
  - Sliding window stream, prototype embeddings, similarity threshold, voting/cooldown, open-set rejection.
  - Evidence: 3-5 sample enrollment, microphone streaming flow, Colab/local runbooks.
- Waste Classification System
  - MobileNetV2, YOLOv8, OpenCV, top-k confidence, webcam inference, TFLite direction.
  - Evidence: 10 classes, webcam labels, evaluation artifacts.

## Medium/Low-Confidence Evidence

### TTHCM Document Session

Path: `C:\Users\GIGABYTE\Documents\Codex\2026-05-20\files-mentioned-by-the-user-nh`

This appears to be document/text conversion work for a course document, not directly useful for AI/ML internship CV positioning.

### 2026-05-15 Session

Path exists, but no readable artifacts were found during this scan. Do not use it for CV claims.

## Items To Confirm Before Final CV

- Final deployed portfolio domain.
- Whether phone number should remain in CV but stay hidden from public website.
- Waste Classifier repo URL: CV extracted text mentions `waste-classification`; portfolio uses `waste_classifier`.
- Waste Classifier team size currently appears as `[X]` in the PDF.
- `~95% accuracy` claim in the current PDF should be backed by a repo artifact, screenshot, notebook output, or report before keeping it.
- Whether to include "AI-assisted dev: Cursor / Claude / GPT / Antigravity" in CV. It can be useful, but should be worded carefully.

