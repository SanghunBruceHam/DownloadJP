# Overview

This is a LINE app download website built as a full-stack web application. The project provides an official-looking download portal for the LINE messaging app, supporting multiple platforms (Android, iOS, Windows, Mac, Web) with multilingual support (Japanese, English, Korean, Chinese). The site includes analytics tracking for downloads and FAQ interactions, advertisement integration, and a responsive design optimized for both desktop and mobile devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Internationalization**: react-i18next for multi-language support with JSON translation files
- **UI Components**: Radix UI primitives wrapped with custom styling via shadcn/ui components

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for cloud hosting
- **Session Management**: Built-in memory storage with fallback to PostgreSQL storage
- **API Design**: RESTful endpoints for tracking downloads and FAQ views

## Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless with connection pooling
- **ORM**: Drizzle ORM providing type-safe queries and migrations
- **Schema**: Two main tables - downloads tracking and FAQ view analytics
- **Migration System**: Drizzle Kit for database schema management and versioning
- **Fallback Storage**: In-memory storage implementation for development/testing

## Authentication and Authorization
- **Session-based**: Uses express-session with PostgreSQL session store
- **IP Tracking**: Captures user IP addresses for download analytics
- **No User Auth**: Public-facing site with no user registration/login required

## External Dependencies
- **Database**: Neon serverless PostgreSQL for production data storage
- **Fonts**: Google Fonts (Noto Sans JP, Inter) for typography
- **Icons**: Font Awesome 6.4.0 for iconography
- **CDN**: Cloudflare CDN for asset delivery
- **Analytics**: Google AdSense integration for advertisement revenue
- **Build Tools**: Vite for development server and production builds
- **Deployment**: Replit hosting with environment-specific configurations

## Deployment Configuration

### Build Process
The project uses a dual-build strategy to support both full-stack and static deployment:

1. **Vite Build**: Compiles React frontend to `dist/public/`
2. **esbuild**: Compiles Express server to `dist/index.js`
3. **Post-build Script**: Copies client files to `dist/` root for static deployment compatibility

### File Structure After Build
```
dist/
├── index.html          # Client entry point (copied for static deployment)
├── assets/             # Client assets (copied for static deployment)
├── index.js            # Server entry point for full-stack deployment
└── public/             # Client files served by Express in production
    ├── index.html      # Original client entry point
    └── assets/         # Original client assets
```

### Deployment Types Supported
- **Full-stack (Recommended)**: Uses Express server to serve both API and client files
- **Static (Fallback)**: Serves only client files from `dist/` root

### Build Commands
- Development: `npm run dev` (starts both client and server)
- Production Build: `npm run build` (builds both client and server)
- Post-build Setup: `node scripts/post-build.js` (copies files for static compatibility)

### Known Issues Fixed
- ✅ Resolved: Build output placement for static deployment compatibility
- ✅ Resolved: File structure alignment between server expectations and deployment requirements