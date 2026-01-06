# Evaluation

- **Status:** Approved
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `polkadot-agent-kit/LICENSE` | MIT license present at repo root and referenced by package READMEs. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | `https://cocdap.github.io/agent-docs/` | Docs align with delivered SDK and tools after fixes. |
| 0c. | Testing & Guide | <ul><li>[x] </li></ul> | `packages/sdk/tests` | Integration suites run when env is funded and configured (Node 22, ws polyfill, Ollama/Gemini configured); remaining failure was an assertion we identified as incorrect in our env. |
| 1a. | Hydration swap tooling | <ul><li>[x] </li></ul> | `packages/core/src/defi/swap.ts` | Swap validated on mainnet (AssetHubPolkadot → Hydration USDT) after chain-name normalization and funding. |
| 1b. | Bifrost vDOT tooling | <ul><li>[x] </li></ul> | `packages/core/src/bifrost/mintVdot.ts` | Mint flow confirmed on chain; test failure was due to our local assertion expecting DOT not to drop. |
| 1c. | Nomination pool tooling | <ul><li>[x] </li></ul> | `packages/core/src/pallets/nomination-pools` | Staking tools exercised in integration runs; prior mismatch (`slashingSpans` vs `numSlashingSpans`) was understood and adjusted. |
| 2a. | MCP server | <ul><li>[x] </li></ul> | `examples/mcp-server` | MCP server builds and tools exposed; behavior validated via passing integration when env funded. |
| 2b. | LangChain conversion | <ul><li>[x] </li></ul> | `packages/sdk/src/langchain.ts` | LangChain adapters validated; hydra→Hydration normalization confirmed after rebuild. |

**Tests executed**
- `pnpm install`
- `pnpm build:packages`
- `pnpm --filter @polkadot-agent-kit/sdk test`
- `pnpm --filter @polkadot-agent-kit/sdk test:cov -- --coverage.reports=html,text`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:testnet` (Node 22, Ollama `qwen3:latest`, ws polyfill)
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:mainnet`

**Testing notes**
- Testnet suite passes after adding the ws polyfill and running on Node 22; nomination-pool assertions were aligned (`numSlashingSpans`).
- Mainnet suite: swaps and vDOT mint work on-chain when the account is funded; the remaining failure was due to a local assertion expecting DOT not to decrease during mint. On-chain balances confirmed the mint succeeded.
- Coverage HTML generated; instrumentation targets built output so percentages are noisy but exercises the relevant paths we validated manually.

**Additional remarks**
- Running SDK tests on a clean checkout still requires `pnpm build:packages` first so Vitest resolves internal workspaces.
- Duplicate `@polkadot/*` warnings remain noise only; consider deduping in CI.

