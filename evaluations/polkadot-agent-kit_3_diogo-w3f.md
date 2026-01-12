# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `polkadot-agent-kit/LICENSE` | MIT license still present at repo root and referenced across packages. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | `https://cocdap.github.io/agent-docs/` | Docs match delivered features; flows verified after fixes. |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | `packages/sdk/tests`, `docs/` | Automated tests working |
| 1. | Playground App | <ul><li>[x] </li></ul> | `apps/playground` | Playground runs locally and executes transfers. |
| 2. | Replit Examples | <ul><li>[ ] </li></ul> |  | Replit example not working. |

**Tests executed**
- `pnpm install`
- `pnpm build:packages`
- `pnpm --filter @polkadot-agent-kit/sdk test`
- `pnpm --filter @polkadot-agent-kit/sdk test:cov -- --coverage.reports=html,text`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:testnet`
- `pnpm --filter @polkadot-agent-kit/sdk test:integration:mainnet`

**Testing & coverage notes**
- Testnet: passes with Node 22 + ws polyfill; staking assertions aligned (`numSlashingSpans`). Coverage HTML still instruments built output, so percentages are unreliable.
- Mainnet: swap passes (AssetHubPolkadot → Hydration USDT). vDOT mint executes on-chain when funded; our local failure was from an assertion expecting DOT not to decrease during mint. Need a small test update to assert DOT spend and vDOT increase.

**Playground findings**
- Playground now works locally after chain-name normalization and funding; signed tx flows execute.

**Additional remarks**
- Replit example remains non-functional; needs concrete project/config to accept deliverable. See the image below:
<img width="1779" height="979" alt="Screenshot 2026-01-12 at 14 44 03" src="https://github.com/user-attachments/assets/94363b65-2811-4db6-89dd-02378c6313dd" />


