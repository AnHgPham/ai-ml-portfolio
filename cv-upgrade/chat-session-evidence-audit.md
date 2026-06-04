# Chat Session Evidence Audit

Date reviewed: 2026-06-04

## Sources Checked

Local Codex chat/session storage:

- `C:\Users\GIGABYTE\.codex\session_index.jsonl`
- `C:\Users\GIGABYTE\.codex\sessions\**\*.jsonl`
- `C:\Users\GIGABYTE\.codex\archived_sessions\*.jsonl`
- `C:\Users\GIGABYTE\.codex\cap_sid`

Search terms included:

- `dix-troir`, `dix-trois`, `dix-huit`, `important`, `ImPorTant`
- `DoAnTotNghiep`, `EdgeSpot`, `GSC`, `MSWC`, `ict6`, `max50`
- `RAG`, `LLM`, `Anthropic`, `Agents SDK`, `portfolio`, `waste`, `pickleball`, `cv`

Sensitive files such as `auth.json` were not used as evidence.

## High-Value Sessions For CV / Portfolio

### Few-Shot Open-Set Keyword Spotting / DoAnTotNghiep

Path evidence:

- `D:\Downloads\DoAnTotNghiep`

Relevant sessions:

- `2026-05-07` - `Tai file ket qua Colab`
- `2026-05-12` - `Toi uu train_enhanced notebook`
- `2026-05-18` - `Evaluate DSCNN baseline on GSC`
- `2026-05-19` - `Giai thich cau hinh EdgeSpotFull`
- `2026-05-23` - `Find papers using EdgeSpot T4 EG2EG`
- `2026-05-29` - `Audit MSWC matrix on K80`
- `2026-05-29` - `Audit evaluation plan`
- `2026-05-29` - `Check ict6 job status`
- `2026-06-01` - `Kiem tra max50 manifest fail`
- `2026-06-01` - `Kiem tra max50 tren ict6`
- `2026-06-04` - `Danh gia so lieu thesis`
- `2026-06-04` - `De xuat cau truc thesis`

Evidence-backed themes:

- Few-shot keyword spotting and open-set recognition.
- EdgeSpot / EdgeSpotFull configuration review.
- DSCNN baseline, GSC and MSWC evaluation planning.
- Manifest generation, training scripts, and max50/debug workflow.
- Remote/server workflow on `ict6`, including process/status checks.
- Thesis/report structure and evaluation table review.
- Multi-role review pattern: Codebase Engineer, ML/Data Engineer, Evaluation Scientist, Ops/QA Engineer, UI/Docs Engineer.

CV-safe wording:

- "Built and evaluated a few-shot open-set keyword spotting workflow using EdgeSpot-style models, GSC/MSWC experiments, manifest generation, and server-side training/debug workflows."
- "Coordinated evaluation and documentation work across model configuration, dataset manifests, thesis reporting, and remote training status checks."

Needs confirmation before final CV:

- Exact best metrics and datasets used.
- Whether EdgeSpot/EdgeSpotFull implementation is original, adapted, or reproduced.
- Which experiment results are final enough to publish.

### AI/ML Portfolio

Path evidence:

- `C:\Users\GIGABYTE\Documents\Codex\2026-05-20\t-i-mu-n-l-m`

Relevant session:

- `2026-05-20` - `Tao trang portfolio`
- `2026-06-04` - `Ra soat session evidence`
- `2026-06-04` - `Kiem tra nguon CV`

Evidence-backed themes:

- Astro + React + TypeScript portfolio.
- EN/VI toggle.
- AI Research HUD UI.
- Algorithmic project systems.
- Drive demo embed, responsive QA, mobile HUD, draggable rails, avatar framing.
- Cloudflare/GitHub deploy workflow.

CV-safe wording:

- "Built a bilingual AI/ML portfolio with Astro, React, TypeScript, GSAP, Three.js, responsive QA, and Cloudflare/GitHub deployment."

### Security / Compliance Automation - ImPorTant / dix-troir-un

Path evidence:

- `D:\Downloads\ImPorTant\dix-troir-un`

Relevant sessions:

- `2026-05-12` - `Cap nhat TCPVI Windows XML/SQL`
- `2026-05-19` - `Tao file PVI va cau hinh Windows`
- `2026-05-27` - `Chuyen file sang RDP`
- `2026-05-28` - `Kiem tra section moi`

Evidence-backed themes:

- Technical document analysis for Windows Server compliance.
- TCPVI Windows OVAL / XML / SQL related work.
- Registry/security policy files mentioned in chat.
- RDP/file transfer workflow.

CV-safe wording if targeting security/compliance roles:

- "Analyzed Windows Server compliance documents and worked on TCPVI/OVAL-style XML/SQL artifacts for policy validation workflows."

Use carefully for AI/ML CV:

- This is useful as "systems/security tooling" background, but it should not take space from AI/ML projects unless the job is security-adjacent.

### RAG-LLM / Document Summarization

Path evidence:

- `D:\Downloads\ImPorTant\RAG-LLM`

Relevant sessions:

- `2026-05-13` - `Xay dung RAG-LLM tom tat bao cao`
- `2026-05-13` - `Them skill vao Codex`

Evidence-backed themes:

- RAG/LLM project idea for summarizing large volumes of reports/documents.
- Keyword extraction / key idea summarization.
- Skill installation / agent skill standard exploration.

CV-safe wording:

- "Explored a RAG/LLM workflow for report summarization and keyword extraction from large document batches."

Needs confirmation:

- Whether a working app, pipeline, or repo exists.
- Do not present this as production-ready unless files/code prove it.

### dix-huit / 6-Agent Evaluation Planning

Path evidence:

- `D:\Downloads\ImPorTant\dix-huit`

Relevant session:

- `2026-06-02` - `Lap ke hoach kiem thu 6 agent`

Evidence-backed themes:

- Read project PDF.
- Drafted detailed 6-agent testing/evaluation plan.
- Explicitly requested OpenAI/Anthropic-style multi-agent review.

CV-safe wording:

- "Designed a structured multi-agent evaluation plan for a document-based project, separating roles for testing, review, and final synthesis."

Needs confirmation:

- Project topic and final deliverable.
- Whether implementation happened after planning.

### Tennis/Pickleball Computer Vision

Path evidence:

- `D:\Downloads\cv`
- `D:\Downloads\cv\tennis-pickleball-tracker`

Relevant sessions:

- `2026-02-15` - tennis/pickleball CV planning
- `2026-03-06` - `Sua phat hien team mau va minimap`

Evidence-backed themes:

- Tennis/pickleball CV system plan.
- Court detection, ball/player tracking, minimap/team-color work.
- This later aligns with the Pickleball Match Analysis portfolio project.

CV-safe wording:

- "Developed a sports video analysis direction covering court detection, player/ball tracking, team-color handling, minimap visualization, and review outputs."

## Sessions To Exclude From CV

The session asking to fabricate an FPT internship should not be used. It is not evidence and would create a credibility risk.

Personal finance/payment sessions, VIB policy research, and PayPal/Binance-related chats are not relevant to AI/ML internship positioning.

## Recommended CV Additions From Chat Evidence

Best additions:

- Strengthen `Open-Set Keyword Spotting` with EdgeSpot/GSC/MSWC/server-evaluation language.
- Add a small "Research / Evaluation Workflow" line: experiment manifests, remote training, evaluation reports, thesis documentation.
- Keep `AI/ML Portfolio` as a separate project or portfolio link, especially because it proves deployment, bilingual communication, UI/UX, and QA.
- Mention `RAG/LLM document summarization` only as exploration unless a working repo/app is verified.
- Keep Windows compliance / OVAL work out of the main AI/ML CV unless applying to security/compliance engineering.

## Updated CV Bullet Candidates

### Keyword Spotting

- Evaluated few-shot open-set keyword spotting workflows using EdgeSpot-style model configurations, GSC/MSWC experiment planning, manifest generation, and remote training/debug checks on `ict6`.
- Reviewed thesis/report evidence for model configuration, evaluation tables, dataset coverage, and reproducible experiment documentation.

### Portfolio / Deployment

- Built and deployed a bilingual AI/ML portfolio with Astro, React, TypeScript, GSAP, Three.js, Cloudflare Pages, responsive QA screenshots, EN/VI toggle, and embedded project demo preview.

### RAG / Agent Workflow

- Explored RAG/LLM-based document summarization and keyword extraction workflows, including agent-skill setup and multi-agent review planning.

## Next Evidence To Collect

Before making final CV claims, inspect these local project folders directly:

- `D:\Downloads\DoAnTotNghiep`
- `D:\Downloads\ImPorTant\RAG-LLM`
- `D:\Downloads\ImPorTant\dix-huit`
- `D:\Downloads\ImPorTant\dix-troir-un`
- `D:\Downloads\cv\tennis-pickleball-tracker`

The chat sessions prove that work happened, but final CV should be backed by repo files, reports, screenshots, or commits where possible.

