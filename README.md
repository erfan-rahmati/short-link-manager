# Short Link Manager

Short Link Manager is a production-quality URL shortening application, similar in spirit to Bitly, that lets authenticated users create, manage, and track short links from a central dashboard. Users can generate short URLs — either a random 6-character slug or a custom one — share them, and monitor click activity through a lightweight analytics view.

The project was built as a full-stack engineering exercise focused on clean architecture, type safety, and a polished, production-ready user experience rather than raw feature volume.

## Features

### Authentication

- Email/password signup
- Login / logout
- Protected `/dashboard` routes with automatic redirect to `/login` for unauthenticated users
- Session handling via Neon Auth

### Link Management

- Create short links from a long destination URL
- Optional custom slug (alphanumeric and dashes only)
- Optional link title
- Automatic random 6-character slug generation when no custom slug is provided
- Per-user unique slug validation with inline error feedback
- Edit existing links
- Delete links with a confirmation dialog
- One-click copy of the full short URL

### Dashboard

- List of all links belonging to the signed-in user
- Slug, title, destination URL, click count, and created date displayed per link
- Clean empty state for new users with no links yet
- Fully responsive layout for mobile and desktop

### Redirect

- Public `/r/[slug]` route
- 307 redirect to the destination URL
- Click count incremented on every successful redirect
- Custom 404 page for invalid or unknown slugs

### Analytics

- Dedicated link detail page
- Total click count and created date
- Clicks-per-day chart for the last 7 days

### UI & Experience

- Dark mode toggle backed by `next-themes`
- Skeleton loading states per route segment instead of blocking spinners
- Toast notifications for success and error states
- Route-level `loading.tsx` and `error.tsx` boundaries throughout

## Tech Stack

**Frontend**

- Next.js 16 (App Router)
- TypeScript (strict mode)
- React 19
- Tailwind CSS v4
- shadcn/ui
- Lucide React
- Recharts
- next-themes
- Sonner (toast notifications)
  **Backend**
- Neon PostgreSQL
- Drizzle ORM
- Neon Auth
- Next.js Server Actions
  **Validation**
- Zod
  **Package Manager**
- pnpm
  **Deployment**
- Vercel

## Architecture Overview

The application follows a strict separation of concerns between the UI, the data-mutation layer, and the data-access layer.

Server Components are used by default across the App Router, with Client Components reserved for interactive elements (forms, copy-to-clipboard, theme toggle, charts). All mutations — creating, updating, and deleting links — are handled through Server Actions rather than internal API routes, keeping the request/response flow close to the components that trigger it.

Database access is isolated into repository modules under `src/repositories`, and no component or Server Action queries the database directly. This keeps the data layer testable and swappable without touching UI code.

All user input, both on forms and inside Server Actions, is validated with Zod on the server before it reaches the database, and results are always returned in a `{ data, error }` shape so raw database or authentication errors are never leaked to the client.

Authenticated routes rely on cookie-based sessions and are rendered dynamically, since session state cannot be determined at build time. Public routes, including the redirect endpoint, remain lightweight and side-effect-focused.

The project intentionally avoids infrastructure the brief did not call for — no microservices, no GraphQL layer, no additional queues or caching systems — in favor of a small, direct architecture that is easy to reason about.

## Project Structure

```
app/
├── dashboard/
│   ├── links/
│   │   └── [id]/
│   ├── new/
│   └── layout.tsx
│
├── login/
├── signup/
├── r/[slug]/
└── api/auth/

components/
├── auth/
├── dashboard/
└── ui/

src/
├── actions/
├── repositories/
├── schemas/
├── db/
└── types/

lib/
├── auth.ts
├── session.ts
└── db.ts
```

## Local Setup

Clone the repository:

```bash
git clone <repository-url>
cd short-link-manager
```

Install dependencies:

```bash
pnpm install
```

Create a `.env.local` file in the project root (an `.env.example` file with the same keys is included in the repo as a reference):

```
DATABASE_URL=

NEON_AUTH_BASE_URL=

NEON_AUTH_COOKIE_SECRET=
```

## Database Setup

Generate migrations from the Drizzle schema:

```bash
pnpm db:generate
```

Apply migrations to the database:

```bash
pnpm db:migrate
```

Open Drizzle Studio to inspect data:

```bash
pnpm db:studio
```

## Running The Project

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

```bash
pnpm dev        # Start the development server
pnpm build      # Build for production
pnpm start      # Start the production server
pnpm lint       # Run the linter
```

Database scripts:

```bash
pnpm db:generate  # Generate Drizzle migrations
pnpm db:migrate   # Run migrations against the database
pnpm db:studio    # Open Drizzle Studio
```

## Deployment

The application is deployed on Vercel. Environment variables must be configured in the Vercel project settings, matching the keys in `.env.example`, before the first deployment.

Deployment URL:
<add-vercel-url-here>

## Decisions I Made

- **Dynamic rendering for authenticated routes** — since session state depends on cookies, the dashboard and its sub-routes cannot be statically generated and are rendered dynamically.
- **Repository pattern for data access** — all database queries live in `src/repositories`, keeping Server Actions and components free of raw database calls.
- **Server Actions instead of API routes** — mutations are handled directly through Server Actions, removing the need for a separate internal API layer for a project of this size.
- **Scope discipline** — features outside the brief (teams, paid plans, QR codes, additional analytics dashboards) were deliberately left out to keep the implementation focused and easy to review.

## How I Used AI Tools

I used AI coding assistants, primarily Claude Code and Cursor, throughout this project as a working partner rather than a code generator. Early on, I used them to talk through the architecture — how to split Server Actions, repositories, and schemas so the data layer stayed independent of the UI — before writing any code. During implementation, they were most useful for debugging: tracing down issues with Neon Auth session cookies not being read correctly inside Server Actions, and resolving a few TypeScript strict-mode errors around Drizzle's inferred types.

I also used them to review Next.js App Router patterns I was less familiar with, particularly around route-level loading and error boundaries, and to speed up repetitive work like scaffolding shadcn/ui components and Zod schemas.

Every suggestion was reviewed manually before being committed — generated code was never accepted without reading it, and anything touching authentication, redirects, or data mutations was tested by hand (signing up, creating links, clicking through the redirect endpoint) rather than trusted on inspection alone. The final architectural and implementation decisions in this repository are mine; AI tools accelerated the process, but did not make the calls.

## License

This project was created as an engineering test project.
