# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `polkadot-agent-kit/LICENSE` | MIT license present at repo root and referenced by package READMEs. |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | `https://cocdap.github.io/agent-docs/` | Unable to verify because testing blockers prevent validating the documented flows. |
| 0c. | Testing & Guide | <ul><li>[ ] </li></ul> | `packages/sdk/tests` | Unit/e2e suites build, but `test:integration:testnet` and `test:integration:mainnet` both fail; coverage run reports unusable 0 % line/statement metrics (see “Testing & coverage issues”). |
| 1a. | Hydration swap tooling | <ul><li>[ ] </li></ul> | `packages/core/src/defi/swap.ts` | Implementation exists, but we could not confirm behavior on testnet/mainnet due to failing integration suites. |
| 1b. | Bifrost vDOT tooling | <ul><li>[ ] </li></ul> | `packages/core/src/bifrost/mintVdot.ts` | Implementation exists, but minting flow could not be exercised (tests blocked). |
| 1c. | Nomination pool tooling | <ul><li>[ ] </li></ul> | `packages/core/src/pallets/nomination-pools` | Only part of the staking suite succeeds; withdraw path currently fails. |
| 2a. | MCP server | <ul><li>[ ] </li></ul> | `examples/mcp-server` | Example builds, yet without passing integration tests we can’t validate tool outputs. |
| 2b. | LangChain conversion | <ul><li>[ ] </li></ul> | `packages/sdk/src/langchain.ts` | LangChain adapters compile, but validation requires working test suites. |

**Tests executed**
- `pnpm install`
- `pnpm build:packages`
- `pnpm --filter @polkadot-agent-kit/sdk test`
- `pnpm --filter @polkadot-agent-kit/sdk test:cov -- --coverage.reports=html,text`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:testnet`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:mainnet`

**Testing & coverage issues**
- `test:integration:testnet` (vitest.config.testnet.ts) currently fails 11/19 specs:
  - Every XCM transfer scenario (relay→parachain, parachain→relay, parachain→parachain) throws `Error: Missing WebSocket class` from `@paraspell/sdk` because looks like that no WS implementation is provided under Node 20. Please specify better which dependencies versions are required to run the software.
  - The transfer-native scenario fails with `TypeError: Cannot read properties of undefined (reading 'getEstimatedFees')` in `tests/integration-tests/utils.ts:27`.
  - The withdraw-unbond staking test asserts `slashingSpans`, but the tool now emits `numSlashingSpans`, so the expectation no longer matches actual input.
  - These failures occur even with `AGENT_PRIVATE_KEY` configured in `.env`.

- Please provide a way to measure testing coverage, since coverage command (`vitest run --coverage -- --coverage.reports=html,text`) report shows **0 % statements/lines** and **80 % branches/functions**. This indicates the current Vitest config instruments compiled bundles instead of the TypeScript sources; until coverage is reconfigured, these numbers can’t be trusted as evidence.
- Because of the above, deliverable **0c** is not satisfied and the milestone cannot be approved until the integration suites run cleanly (with a Node-compatible WebSocket provider and corrected assertions) and coverage reflects real line/statement execution.

**Additional remarks**
- Running SDK tests on a clean checkout still requires `pnpm build:packages` first, otherwise Vitest cannot resolve `@polkadot-agent-kit/core`.
- Vitest continues to warn about duplicate `@polkadot/*` dependencies; deduping or pinning versions via `package.json#resolutions` would reduce noise during CI runs.

