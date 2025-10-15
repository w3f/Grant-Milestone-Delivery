## Evaluation
- **Status:** Changes Requested
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LunoKit.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | ------- | ---- | ---------------- |
| 0a. | License | [x] | `LunoKit/LICENSE` | MIT license present and matches the application. |
| 0b. | Documentation | [ ] | `https://docs.lunolab.xyz/` | Needs updates: example READMEs lack run/integration instructions, and WalletConnect/Nova flows miss guidance on providing the required project ID, leaving QR prompts non-functional. |
| 0c. | Testing Guide | [ ] | — | No standalone testing guide found in the repository; coverage report alone does not satisfy the requirement. |
| 0d. | Build System | [x] | `LunoKit/` | pnpm workspace with tsup builds for core/react/ui; `pnpm build` succeeds producing ESM&CJS bundles. |
| 0e. | Package Management | [x] | `LunoKit/package.json` | Monorepo uses pnpm workspaces and Changesets for releases as promised. |
| 1. | Core Module: @luno-kit/core | [x] | `LunoKit/packages/core` | Module implements config, storage, chain definitions, connectors abstraction; tests and build artifacts validate functionality. |
| 2. | Wallet Connectors | [x] | `LunoKit/packages/core/src/connectors` | Required six injected connectors plus WalletConnect implemented; additional connectors (Enkrypt, Fearless, Mimir, Ledger, NovaMobile) included with tests. |
| 3. | Chain Configuration | [ ] | `LunoKit/packages/core/src/chains` | AssetHub presets exist, but example interfaces do not expose switching to Polkadot or Paseo AssetHub, leaving required chains effectively unusable. |
| 4. | Utility Functions | [x] | `LunoKit/packages/core/src/utils` | Address, SS58, formatting, device detection utilities implemented with high test coverage. |
| 5. | Type System | [x] | `LunoKit/packages/core/src/types` | Comprehensive TS types for accounts, chains, connectors, signer are present and consumed across packages. |
| 6. | UI Components | [ ] | `LunoKit/packages/ui/src/components` | Only four components are publicly exported (`AccountDetailsModal`, `ChainModal`, `ConnectButton`, `ConnectModal`); promised 10+ standalone components are not all delivered. |
| 7. | Demo Website | [x] | `https://demo.lunolab.xyz/` | Live demo working. |

**Additional notes**
- Running `pnpm test` after building passes (`547` tests) and coverage (`pnpm test:coverage`) reaches ~78% overall; however lack of documented testing instructions reduces reproducibility for new evaluators.
- Example READMEs should include clear setup/launch guidance (e.g., installing deps, `pnpm dev`) and note prerequisites like WalletConnect project IDs so QR flows aren’t blocked by missing config. AssetHub chains listed in the spec are not accessible via the example UI, so reviewers can’t validate those presets in action.
- Linting (`pnpm lint`) surfaces numerous warnings (unused imports, a11y issues) across example apps; though outside milestone scope, they indicate engineering polish gaps.
- Published packages at `npmjs.com` match reported versions and export built artifacts.
- Recommend adding the missing testing guide, exposing the full promised component set (or documenting the reduced scope), expanding documentation with connector-specific setup instructions, and ensuring AssetHub chains are accessible in the demos before resubmission.
