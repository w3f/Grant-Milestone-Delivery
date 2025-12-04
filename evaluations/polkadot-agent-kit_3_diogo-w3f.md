# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `polkadot-agent-kit/LICENSE` | MIT license still present at repo root and referenced across packages. |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | `https://cocdap.github.io/agent-docs/` | Site renders, but we could not validate the described Playground/Example flows because critical functionality (fund transfers) fails, so the documentation cannot be accepted. |
| 0c. | Testing and Testing Guide |  <ul><li>[ ] </li></ul> | `packages/sdk/tests`, `docs/` | Same integration suites as milestone 2 remain broken (see “Testing & coverage issues”), and the “extended test suite” referenced in the delivery doc does not pass. |
| 1. | Playground App | <ul><li>[ ] </li></ul> | `apps/playground` | UI builds, but during manual testing the Playground failed to execute on-chain transfers,agent prompts never produce a signed transaction,so the deliverable is not met. |
| 2. | Replit Examples | <ul><li>[ ] </li></ul> |  | No Replit-specific projects, configs, or docs exist in the repo (glob search for `replit` yields nothing), so this deliverable is missing entirely. |

**Tests executed**
- `pnpm install`
- `pnpm build:packages`
- `pnpm --filter @polkadot-agent-kit/sdk test`
- `pnpm --filter @polkadot-agent-kit/sdk test:cov -- --coverage.reports=html,text`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:testnet`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:mainnet`

**Testing & coverage issues**
- `test:integration:testnet` (19 specs) still fails 11 cases:
  - Every relay→parachain, parachain→relay, and parachain→parachain scenario throws `Error: Missing WebSocket class` while ParaSpell tries to create a PAPI client. Please document the exact Node/WebSocket dependency requirements so reviewers can run the suite, and/or bundle a WS polyfill by default.
  - `transfer_native` case errors with `TypeError: Cannot read properties of undefined (reading 'getEstimatedFees')` (`tests/integration-tests/utils.ts:27`).
  - `withdraw_unbonded` assertion expects `slashingSpans`, but the tool now returns `numSlashingSpans`, so the test fails even when the transaction executes.
  - These happen even with `AGENT_PRIVATE_KEY` provided in `.env`.
- `test:integration:mainnet` aborts immediately with `Error: AGENT_PRIVATE_KEY_MAINNET is not set`, and the `afterAll` hooks then throw because `agentKit` was never initialized. Either supply funded credentials or guard the tests with proper skips.
- Coverage command (`vitest run --coverage -- --coverage.reports=html,text`) emits HTML under `packages/sdk/coverage`, but the report shows **0 % statements/lines** (and 80–100 % branches/functions), meaning the current Vitest configuration instruments the compiled bundles instead of the TypeScript sources. Coverage numbers are therefore unusable as evidence until the configuration is fixed.

**Playground findings**
- I launched the Playground per `apps/playground/README.md` instructions and attempted to execute a simple transfer (e.g., “transfer 1 PAS to …”). The chat agent complain with the msgs:

Me: "I would like to transfer 1 PAS to this account 12KNihtDXrpLM7GAeUQSTBPsyyS2wBpSEEeGxTPg3V9p7GbF on passeo testnet".

Agent: "The transfer failed because the token is not expendable."

Me: "I would like to transfer 0.1 PAS (native token) to this account 12KNihtDXrpLM7GAeUQSTBPsyyS2wBpSEEeGxTPg3V9p7GbF on passeo testnet".

Agent: "The transaction failed because the amount you are trying to send is below the minimum required. Please try sending a larger amount."

**Additional remarks**
- No Replit artifacts (project folders, templates, or docs) exist in the repository; please add concrete examples instead of only referencing them in prose.
- Consider publishing a minimal prompting guide, with examples for helping the user and the evaluator. 

