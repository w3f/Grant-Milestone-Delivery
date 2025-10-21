## Evaluation
- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LunoKit.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | ------- | ---- | ---------------- |
| 0a. | License | [x] | `LunoKit/LICENSE` | MIT license present and matches the application. |
| 0b. | Documentation | [x] | `https://docs.lunolab.xyz/` | Documentation now hosted in `lkdoc`, includes wallet/testing guides and matches submission. |
| 0c. | Testing Guide | [x] | `https://docs.lunolab.xyz/getting-started/testing.html` | Testing page details philosophy plus concrete `pnpm` commands per package. |
| 0d. | Build System | [x] | `LunoKit/` | pnpm workspace with tsup builds for core/react/ui; `pnpm build` succeeds producing ESM&CJS bundles. |
| 0e. | Package Management | [x] | `LunoKit/package.json` | Monorepo uses pnpm workspaces and Changesets for releases as promised. |
| 1. | Core Module: @luno-kit/core | [x] | `LunoKit/packages/core` | Module implements config, storage, chain definitions, connectors abstraction; tests and build artifacts validate functionality. |
| 2. | Wallet Connectors | [x] | `LunoKit/packages/core/src/connectors` | Required six injected connectors plus WalletConnect implemented; additional connectors (Enkrypt, Fearless, Mimir, Ledger, NovaMobile) included with tests. |
| 3. | Chain Configuration | [x] | `LunoKit/packages/core/src/chains` | Presets cover required networks; demo exposes chain switching, including AssetHub chains. |
| 4. | Utility Functions | [x] | `LunoKit/packages/core/src/utils` | Address, SS58, formatting, device detection utilities implemented with high test coverage. |
| 5. | Type System | [x] | `LunoKit/packages/core/src/types` | Comprehensive TS types for accounts, chains, connectors, signer are present and consumed across packages. |
| 6. | UI Components | [x] | `LunoKit/packages/ui/src/components` | Public API intentionally surfaces core components (ConnectButton, ConnectModal, ChainModal, AccountDetailsModal) while internal components support them, approach matches stated design. |
| 7. | Demo Website | [x] | `https://demo.lunolab.xyz/` | Demo functional with chain switching and wallet flows; documentation outlines WalletConnect setup (project ID). |

**Additional notes**
- Linting now targets the packages folder and passes (biome reports only optional-chaining suggestions in `core`); example apps are lint-clean.
- Example READMEs remain the upstream framework templates; optional improvement would be to add LunoKit-specific setup instructions mirroring the docs.
- Overall, deliverables match the milestone scope and documentation clarifies usage; milestone accepted.
