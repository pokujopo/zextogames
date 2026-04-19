# ZextoGames Frontend

Production-ready React + Vite gaming platform frontend built with Tailwind CSS, React Router, Axios, TanStack Query, Zustand, Framer Motion, and Lucide React.

## Stack
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- TanStack Query
- Zustand
- Framer Motion
- Lucide React

## Setup
```bash
npm install
cp .env.example .env
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Mock mode
The project ships with isolated mock data in `src/mocks`. Keep `VITE_ENABLE_MOCKS=true` for local UI work without a backend.

## Backend endpoints expected
- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
- `POST /auth/logout`
- `GET /me`
- `GET /games/featured`
- `GET /games/trending`
- `GET /games/download`
- `GET /games/online`
- `GET /games/:slug`
- `GET /search`
- `GET /categories`
- `GET /categories/:slug`

## Notes
- Bearer token injection is already set in the Axios instance.
- Favorites and recently played are persisted locally first via Zustand persist.
- Preview modal, command palette, toast system, protected routes, and placeholder admin patterns are already included.
- This package is ready to zip and hand off to backend integration.
