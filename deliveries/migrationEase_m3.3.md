# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [MigrationEase.md](https://github.com/w3f/Grants-Program/blob/master/applications/MigrationEase.md)
* **Milestone Number:** 3.3

**Context**

**Maintenance Summary**
We continued operating and maintaining the application throughout the 12-month support period. This reporting update covers activities carried out between March and May.
During this period, several improvements were implemented to enhance the stability, reliability, and overall user experience of Ledger device interactions and the migration process.

[v1.11.0](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.11.0)



**Dependencies**
- Bulk update within semver ranges (radix-ui, react-hook-form, axios, postcss, tailwind, sonner, legend-state, ledger-js, etc.).

**Security hardening**
- *SSRF + API key leak (most important):* the `network` field in the Subscan proxy routes was interpolated into the host without validation and could leak the `SUBSCAN_API_KEY` to an attacker-controlled host. Added a network allowlist + `zod` validation + a guard in `SubscanClient`.
- *Security headers / CSP:* `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `HSTS` and `Permissions-Policy` (keeping `hid`/`usb` enabled for Ledger).
- *Overrides* to align transitive versions with fixes (`ws`, `bn.js`, `dompurify`, `undici`).
- Dockerfile now uses `--frozen-lockfile`.
- `next` → 16.3.5 and `vitest` → 3.2.7.
- `pnpm audit`: down from 106 to 2 warnings (the remaining 2 are dev-only).

**Major upgrades (device-verified)**
- Cleared the entire dependabot backlog.

**UI/UX + Accessibility**
- *Fix bugs*
- *Accessibility:* `prefers-reduced-motion` support; "skip to content" link + landmarks + `<h1>`; ARIA tab roles; `aria-label` on the copy button; `aria-describedby`/`aria-invalid` on inputs; `aria-live` region for sync progress; fixed invalid `<a><button>` nesting; decorative icons with `aria-hidden`.

**General Improvements:**
- Updates various dependencies to their latest versions, ensuring better compatibility and security.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [License file](https://github.com/Zondax/polkadot-web-migration?tab=Apache-2.0-1-ov-file#readme)  |
| **0b.** | Documentation | [Docs](docs.zondax.ch/polkadot-migration-app) | 
| **0c.** | Testing and Testing Guide | [e3e tests](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__ )|
| **0d.** | Docker | [Docker file](https://github.com/Zondax/polkadot-web-migration/blob/main/dockerfile) |
| 1. |  code| [Application source code](https://github.com/Zondax/polkadot-web-migration)  | [v1.11.0](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.11.0)


