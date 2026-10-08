# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [MigrationEase.md](https://github.com/w3f/Grants-Program/blob/master/applications/MigrationEase.md)
* **Milestone Number:** 3.1

**Context**

Maintenance Summary

We continued operating and maintaining the application within the 12-month support period.
Work focused on stability and performance: resolving issues, applying necessary updates, and ensuring reliable operation.

[v1.8.0 — Released Dec 1, 2025](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.8.0)
Features & Fixes:
- Derivation path display: destination addresses now show their derivation path during migration
- Transaction error display: dispatch errors from transactions are now surfaced to the user
- Governance deposit refund: new functionality to reclaim governance deposits
- Subscan rate limiting & retry logic: improved resilience when querying the Subscan API (rate limiting + automatic retries)
- Dependency updates: typescript, tailwind-merge, @ledgerhq/hw-transport-mocker
- CI/tooling: Updated CI workflows and added mise configuration

[v1.9.0 — Released Mar 3, 2026](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.9.0)
Features & Fixes:
- Balance display refactor: migrate section balance display has been refactored for clarity
- Native token balance summary improvements: better summarization of native token balances
- Landing page update: added GitHub link and removed beta tags
- Dependency updates: next (security bump 16.0.1→16.0.9), @playwright/test, @vitejs/plugin-react, @types/node, globals, sort-package-json

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [License file](https://github.com/Zondax/polkadot-web-migration?tab=Apache-2.0-1-ov-file#readme)  |
| **0b.** | Documentation | [Docs](docs.zondax.ch/polkadot-migration-app) | 
| **0c.** | Testing and Testing Guide | [e3e tests](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__ )|
| **0d.** | Docker | [Docker file](https://github.com/Zondax/polkadot-web-migration/blob/main/dockerfile) |
| 1. |  code| [Application source code](https://github.com/Zondax/polkadot-web-migration)  | [v1.8.0](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.8.0) [v1.9.0](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.9.0)

