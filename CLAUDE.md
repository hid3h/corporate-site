# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a corporate website for 株式会社キャリースルー (CARRY THROUGH, Inc.) built with Astro, Tailwind CSS, and deployed to Firebase Hosting.

## Development Commands
```bash
# Install dependencies (using Yarn)
yarn install

# Run development server (localhost:4321)
yarn dev

# Build production site to ./dist/
yarn build

# Preview production build locally
yarn preview
```

## Technology Stack
- **Framework**: Astro v5.0.3
- **Styling**: Tailwind CSS v3.4.16
- **Language**: TypeScript (strict mode)
- **Package Manager**: Yarn
- **Deployment**: Firebase Hosting

## Architecture
The site follows Astro's standard structure with components and layouts:

- **Layout**: `src/layouts/Layout.astro` - Main HTML template with fixed header and footer
- **Pages**: `src/pages/` - Astro pages that define routes
- **Components**: `src/components/` - Reusable Astro components (About, Company, Footer)

## Key Configuration Files
- `astro.config.mjs` - Astro configuration with Tailwind integration
- `tailwind.config.mjs` - Custom color scheme defined:
  - background: #FAF9F6
  - foreground: #242424
  - accent: #1A8917 (green)
- `firebase.json` - Firebase hosting configuration serving from `dist/`

## Build & Deployment
The site is built as a static site and deployed to Firebase Hosting. The build output goes to the `dist/` directory which is configured as the public directory for Firebase.