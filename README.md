# Clinentora — Intelligent IP Docketing

Clinentora is a cloud-based, AI-powered docketing platform built for IP and litigation law firms. It automates filing intake, calculates jurisdiction-specific deadlines, and routes entries for human confirmation before they go live.

## Tech stack

- **Vite** — fast build tooling
- **TypeScript** — type-safe codebase
- **React** — component-based UI
- **shadcn/ui** — accessible UI primitives
- **Tailwind CSS** — utility-first styling
- **Supabase** — backend-as-a-service (auth, database, storage)

## Local development

**Requirements**: Node.js ≥ 18 and npm (or pnpm / bun)

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate into the project
cd clinentora

# 3. Install dependencies
npm install

# 4. Start the dev server (http://localhost:8080)
npm run dev
```

## Editing the code

- **Your IDE** — clone the repo locally, make changes, and push. The dev server supports hot-module replacement.
- **GitHub** — open any file on GitHub, click the pencil icon, make your changes, and commit.
- **GitHub Codespaces** — launch a Codespace from the repository's main page for a full in-browser IDE experience.

## Deployment

Build the production bundle and deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, etc.):

```sh
npm run build
```

## Custom domain

Point your DNS records to your chosen hosting provider and configure the domain in that provider's dashboard.
