# Copilot Instructions for Nande Nihon Admin Panel

## Project Overview
This is a static admin panel for the Nande Nihon CMS, built with HTML, CSS, and JavaScript (ES6+). It uses [Supabase](https://supabase.com/) for authentication, database, and storage. The UI is custom-designed with modern CSS and inline SVG icons. All business logic is in the frontend; there is no custom backend.

## Key Components
- `index.html` — Landing page for admin panel access
- `login.html` + `login.js` — Handles admin authentication via Supabase Auth
- `dashboard.html` + `dashboard.js` — Main admin dashboard, content management, and navigation
- `testimoni-form.html` — Standalone form for adding testimonials (legacy, uses Supabase directly)
- `style.css` — Shared styles for all admin pages
- `Asset/` — Static assets (images, icons, etc.)

## Data & Integration
- **Supabase** is the only backend. All data (team, testimonials, articles, registrations) is stored in Supabase tables. File uploads (e.g., team photos) use Supabase Storage.
- All Supabase credentials are set in JS files. Update keys in `dashboard.js`, `login.js`, and `testimoni-form.html` if needed.
- Table schemas are documented in `README.md` (see SQL examples).

## Developer Workflows
- **No build step**: All files are static. Open HTML files directly or use a static server (e.g., VS Code Live Server, Five Server).
- **No tests or CI**: There are no automated tests or build scripts.
- **Debugging**: Use browser devtools. All errors are surfaced in the UI or console.
- **Authentication**: All admin pages require login. Session is checked on load; unauthenticated users are redirected to `login.html`.
- **Content Management**: All CRUD operations are performed via Supabase client in the browser. See `dashboard.js` for logic.
- **Export**: Registrations can be exported as CSV/XLSX using built-in JS functions (SheetJS is loaded via CDN).

## Project Conventions
- **File naming**: Lowercase, hyphen-separated for HTML/JS/CSS. No frameworks.
- **Styling**: All styles in `style.css`. No CSS frameworks.
- **JS modules**: All scripts use ES6 modules and are loaded with `type="module"`.
- **Security**: All form inputs are validated and escaped. XSS protection is implemented in JS (see `escapeHtml`).
- **No environment variables**: All config is hardcoded for simplicity.
- **Legacy forms**: `testimoni-form.html` is a legacy, standalone form for adding testimonials directly to Supabase.

## Patterns & Gotchas
- **Supabase client**: Always use `createClient` from CDN import. Credentials must match your Supabase project.
- **Section navigation**: Dashboard uses dynamic section switching via JS and CSS classes (`.section.active`).
- **Modal forms**: Add/edit forms are rendered dynamically in modals. See `openModal` and `saveItem` in `dashboard.js`.
- **File uploads**: Team photos are uploaded to Supabase Storage bucket `Nande Nihon` in folder `team nande/`.
- **Export**: CSV/XLSX export uses in-browser JS; no server-side processing.

## Example: Adding a Team Member
1. Go to Dashboard > Team
2. Click "Add Member"
3. Fill out the form and upload a photo
4. Click "Save" — data is sent to Supabase, photo is uploaded to Storage

## References
- See `README.md` for full feature list, troubleshooting, and Supabase table schemas.
- All business logic is in `dashboard.js` and `login.js`.

---
For questions or unclear patterns, see `README.md` or ask the project maintainer.
