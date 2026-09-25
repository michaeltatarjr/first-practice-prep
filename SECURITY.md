# Security

This app is a static PWA. It does not send any data to a server.

- State is stored only in `localStorage` under `first-practice-prep:v1`.
- Stored JSON is schema-checked on load and save. Unknown keys, prototype keys, malformed check ids, and non-numeric tracker values are dropped.
- User input is limited to short numeric tracker fields and a glossary search box; nothing is rendered as HTML.
- Production HTML sets a restrictive Content-Security-Policy. `connect-src` allows `ws:` / `wss:` for local Vite only.
- No analytics, no auth, no third-party requests, no environment secrets.
- CI runs `npm audit` before building; Dependabot watches npm and GitHub Actions weekly.

Report issues by opening a GitHub issue on the repo.
