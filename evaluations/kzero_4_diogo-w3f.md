# Evaluation

- **Status:** In Progress
- **Application Document:** [KZero Grant Application](https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md)
- **Milestone:** 4

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | [x] | https://github.com/kzero-xyz/kzero-wallet | GPLv3 license is present at the repository root. |
| 0b. | Documentation | [ ] | n/a | SDK packages only ship stub README files; no technical documentation or integration guide is provided as promised. |
| 0c. | Testing and Testing Guide | [ ] | n/a | No automated tests are included and `pnpm test` fails because no projects declare a `test` task. No testing guide found. |
| 0d. | Docker | [ ] | n/a | No Dockerfile or container resources are present in the repository. |
| 0e. | Article | [ ] | n/a | No article or publication reference provided in the repository or documentation. |
| 1. | KZero-SDK | [ ] | https://github.com/kzero-xyz/kzero-wallet | Packages build, but the example wallet renders a blank page locally even after running `pnpm install && pnpm dev:wallet`; SDK functionality cannot be verified in isolation. |
| 2. | KZero-Website | [ ] | https://github.com/kzero-xyz/kzero-wallet/tree/master/example-wallet | `pnpm dev:wallet` launches Vite dev server but the app serves a blank screen, so the demo flow is not demonstrably functional. |

## Testing & Coverage Summary
- `pnpm test` fails with Turbo error "Could not find task `test` in project"; there are no unit or integration tests in the packages.
- `pnpm check-types` succeeds across all workspaces (Rollup emits a TS5110 warning but build completes).
- `pnpm dev:example` renders the UI but depends on remote services (e.g., `https://demo-auth.kzero.xyz`); no instructions provided to point it to local infrastructure.

## Additional Observations
- Running `pnpm dev:wallet` starts Vite on `example-wallet`, but navigating to the page yields a blank UI with console errors referencing client-side routing, preventing verification of login/transaction flows.
- Both examples implicitly rely on the hosted auth/proof service; there is no documentation or configuration guidance for running those components locally or overriding endpoints.
- SDK runtime depends on hosted services such as `https://demo-auth.kzero.xyz`; offline usage is not documented.
- Lack of technical documentation and testing artifacts contradicts milestone promises and complicates verification.
- No Docker assets are supplied for reproducing the demo environment.


