# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Ambrose Mbithi (Software Engineer & AI/ML Integration Specialist), built with Next.js 16 (App Router) and React 19, deployed on Netlify. No TypeScript, no test framework. Styling is Tailwind CSS v4 utility classes (no CSS Modules remain) with dark mode via a `dark` class on `<html>`.

## Commands

- `npm run dev` — start dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run `eslint .` (flat config: `eslint.config.mjs`, spreads `eslint-config-next`). Note: `next lint` was removed in Next 16.

There is no test suite in this repo. ESLint is pinned to `^9` — `eslint-config-next`'s own plugin deps (eslint-plugin-react, eslint-plugin-import, eslint-plugin-jsx-a11y) don't yet support ESLint 10; bumping `eslint` past 9.x will break `npm run lint` with a cryptic `scopeManager.addGlobals is not a function` runtime error, not a version-mismatch message.

## Architecture

- **App Router structure**: routes live under `src/app/**/page.jsx` (or `page.js`). `src/app/layout.js` is the root layout — it renders the shared `NavBar` and `Footer` around `{children}`, and inlines a blocking `<script>` in `<head>` that adds the `dark` class to `<html>` before paint (avoids flash-of-wrong-theme).
- **Path alias**: `@/*` maps to `src/*` (see `jsconfig.json`).
- **Dark mode**: no React context/state — `src/components/darkMode/page.jsx` toggles `document.documentElement.classList` directly and persists the choice to `localStorage.theme`. Tailwind's `dark:` variant is CSS-only (default `prefers-color-scheme` strategy is not used; it targets the `.dark` class on `<html>`). Deliberately kept out of React state: an earlier version stored `mode` in a Context initialized from `localStorage`, which caused a real hydration mismatch (server has no `localStorage`) and had to be reverted — don't reintroduce that pattern.
- **Resume data**: `src/data/resume.js` is the single source of truth for title/summary/skills/experience/education, consumed by both `src/app/about/page.jsx` (short version) and `src/app/resume/page.jsx` (full timeline). Update resume content there, not per-page.
- **Portfolio data model**: `src/app/portfolio/projects.jsx` exports a hardcoded `projects` array; each entry has a `category` of `"contributions"`, `"designs"`, or `"websites"`. `src/app/portfolio/[category]/page.jsx` is an async Server Component (Next 15+ made dynamic route `params` a Promise — `await params` before use) that filters this array server-side by `category` (note: `"contributions"` displays as "Corporate Projects"). Adding a project means adding an entry here plus its image in `public/`.
- **Images**: `next.config.js` uses `images.remotePatterns` (the older `images.domains` is deprecated) to allow `images.pexels.com` etc. Also sets `turbopack.root` explicitly since a stray `package-lock.json` in the parent `/home/robin` directory otherwise confuses Next's workspace-root auto-detection.
- No `dashboard/` or `blog/` routes — both were removed as unlinked placeholder scaffolding (neither appeared in `NavBar`, both rendered static lorem/stub content).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
