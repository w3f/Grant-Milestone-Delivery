## Evaluation
- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/2542
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | ------- | ---- | ---------------- |
| 0a. | License | [ ] | `paraport_sdk/LICENSE` | Broken link. |
| 0b. | Documentation | [ ] | `https://github.com/paraportxyz/docs` | The instructions in the documentation fails. |
| 0c. | Testing Guidelines | [ ] | `paraport_sdk/packages/*` | No consolidated guide: had to inspect package scripts and trial builds to run tests; README/docs lack step-by-step instructions (e.g., build order, env vars). |
| 0d. | CD/CI Pipeline | [x] | `paraport_sdk/.github/workflows/ci.yml`, `paraport_sdk/.github/workflows/release.yml` | CI runs lint/typecheck/tests/build across packages; release workflow automates publishing. |
| 1a. | Cross-Chain Messaging Implementation | [ ] | `paraport_sdk/packages/core/src/bridges/xcm/XCMBridge.ts` | SDK handles mocked routes, but live XCM auto-teleport attempts hit ParaSpell `ScenarioNotSupported` errors; successful extrinsic observed on-chain but SDK still reports failure. Needs clarification from grantee. 
| 1b. | Bridge & Network Management | [x] | `paraport_sdk/packages/core/src/bridges/BridgeRegistry.ts` | Registry, Polkadot API service, and provider selection in place; static config lists RPC endpoints. |
| 1c. | Teleport Calculation System | [x] | `paraport_sdk/packages/core/src/services/BalanceService.ts` | Handles fee estimation, balance aggregation, subscriptions, funds detection; tests verify scenarios. |
| 1d. | Foundation & Lifecycle Management | [x] | `paraport_sdk/packages/core/src/sdk/ParaPortSDK.ts` | Initialization, state/events, async orchestration, logging, retries implemented. |
| 2a. | Vue/React components | [ ] | `paraport_sdk/packages/vue`, `paraport_sdk/packages/react` | Attempting `pnpm run dev` (playground) fails because Vite cannot resolve `@paraport/vue`/`@paraport/react` entries even after workspace install/build. |
| 2b. | Inline UI | [ ] | `paraport_sdk/packages/vue/src/components/integrated` | Same Vite resolution errors prevent running the integrated UI in the provided playground, blocking live verification. |
| 2c. | UI Component Library | [x] | `https://www.figma.com/community/file/1559854238496516301/paraport-component-library` | Public Figma library with components, states, and design tokens. |
| 3a. | Basic Error Handling | [x] | `paraport_sdk/packages/core/src/managers/TransactionManager.ts` | Retry/reset logic plus UI handlers for network, transaction, and user errors. |
| 3b. | Hydration Parachain Integration | [ ] | `paraport_sdk/packages/static/src/chains.ts` | Static setup exists, but there is no documented or working Hydration live test path; live suites cover only Paseo routes, leaving us unable to verify Hydration teleport flows. |

**Additional notes**
- Repository commit reviewed: `0a09de06926329e37142a872bf02ac3126cc759c`.
- Running tests required manual discovery of package scripts (build `@paraport/static` → `@paraport/core` → `@paraport/vue` → `@paraport/sdk`; env vars for live tests) because no official testing guide exists. 
- Vue ➝ SDK ➝ React test suites require building upstream packages in sequence; CI workflow captures this order.
- Commands executed during review (inferred manually): `pnpm install`; then `pnpm --filter @paraport/static build`, `pnpm --filter @paraport/core build`, `pnpm --filter @paraport/vue build`, `pnpm --filter @paraport/sdk build`; followed by `pnpm --filter @paraport/core test`, `pnpm --filter @paraport/vue test`, `pnpm --filter @paraport/sdk test`, `pnpm --filter @paraport/react test`; live tests via `E2E_LIVE=1 E2E_CHAIN=AssetHubPaseo E2E_MNEMONIC="..." pnpm --filter @paraport/core test:e2e:live`. 
- React tests emit deprecated `act` warnings but assertions pass; consider updating to `React.act` for cleaner output.
- Documentation repo includes onboarding checklist, configuration references, and testing guidance aligned with milestone scope, but following README steps in `paraport_docs` (`npm run dev`) currently fails because dependencies aren’t bootstrapped (`vite` missing). 
- Attempting to use the provided playground (`pnpm run dev`) yields repeated Vite errors: `Failed to resolve entry for package "@paraport/sdk"`, `@paraport/react`, and `@paraport/vue`, preventing the inline UI and component demos from running. 
- **Coverage:** `@paraport/core` reports ~82% line / 84% branch coverage via `pnpm --filter @paraport/core test:coverage`, with gaps confined to config/log helpers and optional live-e2e harnesses; Vue SFC coverage is low globally because integrated components aren’t unit-tested, but critical wrapper behaviors are exercised. 
- **Live testing:** `E2E_LIVE` suite submitted a `polkadotXcm.limited_teleport_assets` extrinsic ([0x05b92863…a78bc8](https://assethub-paseo.subscan.io/extrinsic/3293545-2)), yet ParaSpell still threw `ScenarioNotSupported` for the Coretime ↔ AssetHub Paseo route, leaving `funds.available` false. There is also no Hydration live testing guidance or automated coverage, so we cannot confirm that integration beyond static config. 
