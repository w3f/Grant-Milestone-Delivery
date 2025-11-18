## Evaluation
- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/2542
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | ------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `paraport_sdk/LICENSE` | MIT license present and accessible. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | `https://github.com/paraportxyz/docs` | README now includes install/run steps; `npm run dev` starts Nuxt server successfully after `npm install`. |
| 0c. | Testing Guidelines | <ul><li>[x] </li></ul> | `paraport_sdk/TESTING.md` | Comprehensive guide covering build order, package commands, and live E2E env vars added. |
| 0d. | CD/CI Pipeline | <ul><li>[x] </li></ul> | `paraport_sdk/.github/workflows/ci.yml`, `paraport_sdk/.github/workflows/release.yml` | CI runs lint/typecheck/tests/build across packages; release workflow automates publishing. |
| 1a. | Cross-Chain Messaging Implementation | <ul><li>[x] </li></ul> | `paraport_sdk/packages/core/src/bridges/xcm/XCMBridge.ts` | Live E2E (`E2E_CHAIN=CoretimePaseo`) now succeeds end-to-end; mocked/unit suites also pass. |
| 1b. | Bridge & Network Management | <ul><li>[x] </li></ul> | `paraport_sdk/packages/core/src/bridges/BridgeRegistry.ts` | Registry, Polkadot API service, and provider selection in place; static config lists RPC endpoints. |
| 1c. | Teleport Calculation System | <ul><li>[x] </li></ul> | `paraport_sdk/packages/core/src/services/BalanceService.ts` | Handles fee estimation, balance aggregation, subscriptions, funds detection; tests verify scenarios. |
| 1d. | Foundation & Lifecycle Management | <ul><li>[x] </li></ul> | `paraport_sdk/packages/core/src/sdk/ParaPortSDK.ts` | Initialization, state/events, async orchestration, logging, retries implemented. |
| 2a. | Vue/React components | <ul><li>[x] </li></ul> | `paraport_sdk/packages/vue`, `paraport_sdk/packages/react` | Packages build and test cleanly; `pnpm --filter @paraport/playground dev` serves React/Vue demos without resolution errors. |
| 2b. | Inline UI | <ul><li>[x] </li></ul> | `paraport_sdk/packages/vue/src/components/integrated` | Integrated UI demonstrable via playground dev server; unit tests cover key flows. |
| 2c. | UI Component Library | <ul><li>[x] </li></ul> | `https://www.figma.com/community/file/1559854238496516301/paraport-component-library` | Public Figma library with components, states, and design tokens. |
| 3a. | Basic Error Handling | <ul><li>[x] </li></ul> | `paraport_sdk/packages/core/src/managers/TransactionManager.ts` | Retry/reset logic plus UI handlers for network, transaction, and user errors. |
| 3b. | Hydration Parachain Integration | <ul><li>[x] </li></ul> | `paraport_sdk/packages/static/src/chains.ts` | Live E2E (`E2E_CHAIN=HydrationPaseo`) succeeds after latest patches: AssetHub Paseo → Hydration Paseo teleport finalized with tx `0x8106cfdb5e6874e60135012c7a67c91ad78b87f87e3a6e12224b81e007bd0bd7`. |

**Additional notes**
- Repository commit reviewed: `c3de99d263ccb6748ea86b8db0527adf2a057439`.
- The new TESTING.md now covers the build→test order, so no further ad-hoc discovery was required. 
- Commands executed during review: `pnpm install`; `pnpm --filter @paraport/static build`; `pnpm --filter @paraport/core build`; per-package tests (`pnpm --filter @paraport/{core,vue,sdk,react} test`); live E2E for Coretime and Hydration via `E2E_LIVE=1 E2E_MNEMONIC="<funded mnemonic>" pnpm --filter @paraport/core run test:e2e:live` (toggle `E2E_CHAIN` per target). 

- `ws` is now listed as a dev dependency under `@paraport/core` to provide a Node WebSocket implementation for the logging helper.

**Hydration verification note**
- After pulling `c3de99d263ccb6748ea86b8db0527adf2a057439`, Hydration teleports succeed. Repro command: `E2E_LIVE=1 E2E_CHAIN=HydrationPaseo E2E_MNEMONIC="..." pnpm --filter @paraport/core run test:e2e:live`.

- Latest successful run produced tx `0x8106cfdb5e6874e60135012c7a67c91ad78b87f87e3a6e12224b81e007bd0bd7` (AssetHub Paseo extrinsic) while topping up Hydration PAS balance for `HL3YMUwfiQQTTPuu4Zwp6jkYijq6sVht9W2kFAnATbaBc1t`.
- React tests still emit deprecated `act` warnings but assertions pass; consider updating to `React.act` for cleaner output.
- Documentation repo instructions now succeed (`npm install && npm run dev`). 
- Playground command `pnpm --filter @paraport/playground dev` works after the latest workspace resolution fixes; root `pnpm dev` still reports TypeScript/Vite resolution errors when running package watch builds. 
- **Coverage:** `@paraport/core` reports ~82% line / 84% branch coverage via `pnpm --filter @paraport/core test:coverage`, with gaps confined to config/log helpers and optional live-e2e harnesses; Vue SFC coverage remains low because integrated components aren’t unit-tested, but critical wrapper behaviors are exercised. 
- **Live testing:** `E2E_LIVE` with `E2E_CHAIN` set to `CoretimePaseo` or `HydrationPaseo` now completes; 
