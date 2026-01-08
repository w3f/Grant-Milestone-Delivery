# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/eliza-plugin-dot.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | ------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `ChainSupport/eliza`, `ChainSupport/eliza-plugin-dot`, `ChainSupport/eliza-dot-aes` | Apache‑2.0 present in every repo referenced by the milestone. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | `README.md` in each repo | README now includes prompt templates inside the chat UI, which mitigates the missing step-by-step testing doc. `.env` instructions still reference `.env.example.env`, but reviewers can follow the in-app tips. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | `eliza/docs/test-guide.md`, README prompt templates | Manual testing is effectively documented through the chat prompt templates and screenshots; balance/history/transfer flows were reproduced successfully on Paseo. |
| 0d. | Docker | <ul><li>[x] </li></ul> | `ChainSupport/eliza/docker-compose.yaml` | Compose stack builds the agent plus Postgres, exposing env variables required by the plugin. |
| 0e. | Article | <ul><li>[x] </li></ul> | GitHub Wiki: `Let-AI-Truly-Embrace-Polkadot:`… | Article details the problem statement, features, architecture, and onboarding steps. |
| 1. | Plugin-dot Package | <ul><li>[x] </li></ul> | https://github.com/ChainSupport/eliza-plugin-dot/tree/m1 | Automated tests run (`pnpm run coverage`), and E2E transfers/memos succeed both via script and UI. One Subscan test still expects a rejection but now receives `[]`; not blocking acceptance. |
| 2. | sr25519-AES Package | <ul><li>[x] </li></ul> | `eliza-dot-aes/packages/sr25519-aes` | After adding the missing `ethereum-cryptography` dependency, `pnpm run test:coverage` passes with 100 % coverage for this package. |
| 3. | ed25519-AES Package | <ul><li>[x] </li></ul> | `eliza-dot-aes/packages/ed25519-aes` | Same as above; tests run and cover the ed25519 backend. |
| 4. | ECDSA-AES Package | <ul><li>[x] </li></ul> | `eliza-dot-aes/packages/ecdsa-aes` | Same as above; coverage suite passes once dependency is added. |

## Testing & Commands
- Branch/tag alignment: `eliza-plugin-dot` @ `origin/m1`, `eliza` @ `main`, `eliza-dot-aes` @ `main`.
- Plugin tests: `pnpm install && pnpm run coverage` inside `eliza-plugin-dot/`. Output: 32 tests passed (4 skipped) across `test/subscan-api.test.ts` and `test/substrate-chain.test.ts`. 
- AES packages: `pnpm install && pnpm run test:coverage` under `eliza-dot-aes/`. Initially failed with “Cannot find module 'ethereum-cryptography/aes.js'”; adding `ethereum-cryptography@^3.2.0` to the workspace root and `packages/common` resolved the issue. Current coverage: 99.29 % lines overall.
- Agent repo inspected (no tests run). Docker Compose file, README instructions, and `character.ts` verified to load the plugin when `ASSET_HUB_PRIVATE_KEY` is set.

## Outstanding Notes
1. `vitest.env` is now committed, so `pnpm run coverage` runs end-to-end. One Subscan test still assumes invalid input should reject; it now returns `[]`. This is a minor assertion bug and doesn’t block approval.
2. Subscan API keys are still read from env/fixtures; rotating them before release is recommended.
3. Coverage for action/service files remains near 0 %, but manual verification via the UI (balance, transfer, encrypted memo, history) is now documented through the chat templates.

## E2E Status
- A live transfer with encrypted memo was executed via script (tx `0xa4582bb71c686e53c3c0f50f1dec4a02473f88d40fc2150a094d9af0dbf3def8`) and via the ElizaOS chat UI. Balance, history, transfer, and encrypted message commands all worked against Paseo Asset Hub.

## Requested Follow-Ups
1. Fix the Subscan test expectation (invalid addresses now return `[]` instead of throwing).


