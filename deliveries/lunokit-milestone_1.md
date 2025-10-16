# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [LunoKit.md](https://github.com/w3f/Grants-Program/blob/master/applications/LunoKit.md)
* **Milestone Number:** 1

**Context**

Milestone 1 of LunoKit delivers the core infrastructure for a developer-friendly Web3 account connection library for the Polkadot ecosystem. This milestone establishes the foundation with three main packages:

- **@luno-kit/core**: Provides wallet connector abstractions, chain configuration system, and account management logic
- **@luno-kit/ui**: Offers 10+ customizable React UI components for wallet connection flows
- **@luno-kit/react**: Implements 20+ React Hooks for state management, chain switching, and on-chain data subscriptions

This delivery enables DApp developers to integrate multi-wallet support with minimal effort, while maintaining full customization capabilities through a decoupled architecture.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Luno-lab/LunoKit/blob/main/LICENSE) | MIT |
| 0b. | Documentation | [Docs](https://github.com/Luno-lab/lkdoc) | Complete online documentation including installation guide, quick start, API reference, and integration examples |
| 0c. | Testing Guide | [Test Guide](https://docs.lunolab.xyz/getting-started/testing.html) | Core functionality covered by Vitest unit tests for connectors, utility functions, and configuration system |
| 0d. | Build System | [monorepo structure](https://github.com/Luno-lab/LunoKit) | Complete monorepo build with tsup, supporting ESM and CJS outputs |
| 0e. | Package Management | [package.json](https://github.com/Luno-lab/LunoKit/blob/main/package.json) | pnpm workspace with Changesets for version management and NPM publishing |
| 1. | Core Module: @luno-kit/core | [@luno-kit/core](https://github.com/Luno-lab/LunoKit/tree/main/packages/core) | Core connector abstraction, configuration system, chain definitions, and storage system |
| 2. | Wallet Connectors | [connectors](https://github.com/Luno-lab/LunoKit/tree/main/packages/core/src/connectors) | 6 wallet connectors: Polkadot.js Extension, SubWallet, Talisman, Polkagate, Nova Wallet, WalletConnect |
| 3. | Chain Configuration | [chains](https://github.com/Luno-lab/LunoKit/tree/main/packages/core/src/chains) | Pre-configured 6 chains: Polkadot, Kusama, Westend, Paseo, Polkadot AssetHub, Paseo AssetHub |
| 4. | Utility Functions | [utils](https://github.com/Luno-lab/LunoKit/tree/main/packages/core/src/utils) | Address format conversion, SS58 encoding/decoding, balance formatting, device detection |
| 5. | Type System | [types](https://github.com/Luno-lab/LunoKit/tree/main/packages/core/src/types) | Full TypeScript types for Account, Chain, Config, Connector, Signer, etc. |
| 6. | UI Components | [@luno-kit/ui](https://github.com/Luno-lab/LunoKit/tree/main/packages/ui) | 10 UI components: ConnectButton, ConnectModal, AccountDetailsModal, ChainModal, etc. |
| 7. | Demo Website | [demo.lunolab.xyz](https://demo.lunolab.xyz) | Fully functional demo showcasing all features |



**Additional Information**
- **NPM Packages**: All three core packages are published on NPM and ready for production use
  - [@luno-kit/core](https://www.npmjs.com/package/@luno-kit/core)
  - [@luno-kit/react](https://www.npmjs.com/package/@luno-kit/react)
  - [@luno-kit/ui](https://www.npmjs.com/package/@luno-kit/ui)

- **Wallet Connectors**: Beyond the original Milestone 1 deliverables, we added support for 3 additional wallet connectors:
  - Enkrypt
  - Fearless Wallet
  - Mimir

- **Chain Configuration**: Beyond the original Milestone 1 deliverables, we added support for 8 additional chains:
  - Polkadot People
  - Polkadot Coretime
  - Polkadot Collectives
  - Kusama AssetHub
  - Kusama People
  - Kusama Coretime
  - Westend AssetHub
  - PAssetHub
    
