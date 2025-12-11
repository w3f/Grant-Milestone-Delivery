# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `polkadot-agent-kit/LICENSE` | MIT license present at repo root and referenced by package READMEs. |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | `https://cocdap.github.io/agent-docs/` | Unable to verify because testing blockers prevent validating the documented flows. |
| 0c. | Testing & Guide | <ul><li>[ ] </li></ul> | `packages/sdk/tests` | Unit/e2e suites build, and `test:integration:testnet` passes; coverage run reports unusable 0 % line/statement metrics (see “Testing & coverage issues”). |
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
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:testnet` (latest rerun on Node 22 with local Ollama `qwen3:latest`)
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:mainnet`

**Testing & coverage issues**
- `test:integration:testnet`: with Node 22 and a running Ollama server the suite now passes only three scenarios (transfer_native on Paseo Asset Hub and two XCM transfers Asset Hub Paseo → People Paseo; example hash `0xb1f3ae9a9db79120ff37b533e1373e5fb1b573991ad11c75c37c7750896b5aef`). The milestone-2 surface is still largely untested: no Hydration swaps, no Bifrost vDOT mint, no nomination pool flows, and no relay↔parachain cases were exercised in this passing subset. Earlier failures (`getEstimatedFees` undefined, `slashingSpans` vs `numSlashingSpans`) were not re-verified.
- Coverage command (`vitest run --coverage -- --coverage.reports=html,text`) writes HTML under `packages/sdk/coverage/`, but the report shows 0 % statements/lines and 80 % branches/functions. This indicates the current Vitest config instruments compiled bundles instead of the TypeScript sources; until coverage is reconfigured, these numbers can’t be trusted as evidence.
- Because of the above, deliverable 0c is not satisfied and the milestone cannot be approved until the integration suites run cleanly (with a Node-compatible WebSocket provider and corrected assertions) and coverage reflects real line/statement execution.

**Additional remarks**
- Running SDK tests on a clean checkout still requires `pnpm build:packages` first, otherwise Vitest cannot resolve `@polkadot-agent-kit/core`.
- Vitest continues to warn about duplicate `@polkadot/*` dependencies; deduping or pinning versions via `package.json#resolutions` would reduce noise during CI runs.

