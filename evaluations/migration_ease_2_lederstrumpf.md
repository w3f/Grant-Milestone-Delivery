# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/pull/2437 
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [LICENSE](https://github.com/Zondax/polkadot-web-migration/tree/2d50f7976c1530562e619acc1438e78bf6c861f0/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul>| [Docs](docs.zondax.ch/polkadot-migration-app) | Clear & sufficient documentation. Good warnings & hints within app too. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| [e2e tests](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__ ) | Sufficient coverage. |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [Dockerfile](https://github.com/Zondax/polkadot-web-migration/tree/2d50f7976c1530562e619acc1438e78bf6c861f0/dockerfile)| Works |
| 0e. | Article/Tutorial | <ul><li>[x] </li></ul>| [Link](https://zondax.ch/blog/polkadot-ledger-migration-assistant-now-live) | - |
| 1. | PoC code| <ul><li>[x] </li></ul>| [Repo](https://github.com/Zondax/polkadot-web-migration) | More than PoC by now. |
| 2a. | Facilitated Staking/Unstaking |<ul><li>[x] </li></ul>|[Facilitated Staking/Unstaking](https://github.com/Zondax/polkadot-web-migration/blob/main/components/sections/migrate/dialogs/unstake-dialog.tsx) [General Ledger Integration](https://github.com/Zondax/polkadot-web-migration/blob/main/state/ledger.ts) | |
| 2b. | Kusama AssetHub and 5 Parachain Support  |<ul><li>[x] </li></ul>| [Supported Networks](https://github.com/Zondax/polkadot-web-migration/blob/main/config/appsConfig.json)| Over a dozen supported networks (some with RPC availability issues - not within applicant's control) |
| 2c. | Simplified Management of proxies, multisig and decision deposits  |<ul><li>[ ] </li></ul>|  | |
| 2d. | Standardized configuration and documentation |<ul><li>[x] </li></ul>| - | Configuration and documentation guides clear & consistent. |
| 2e. | Enhanced User Experience |<ul><li>[x] </li></ul>| - | Good warnings & hints integrated after Alberto's feedback to Zondax. |

## General Notes
Required various requested changes, but this is not surprising, given the scope & number of moving parts of this project. The resulting product is of good quality.

For efficiency, most communication with applicant in applicable matrix channel. Applicant was responsive & diligent in addressing feedback from Albert and myself. 
