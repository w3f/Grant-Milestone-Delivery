# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [LunoKit.md](https://github.com/w3f/Grants-Program/blob/master/applications/LunoKit.md)
* **Milestone Number:** 2

**Context**

Milestone 2 of LunoKit delivers an enhanced developer experience with comprehensive React Hooks, advanced state management, and mobile wallet support. This milestone builds upon M1's foundation by adding:

- **24 React Hooks**: Complete set of hooks covering connection management, account operations, chain interactions, transaction handling, and on-chain data subscriptions
- **State Management System**: Lightweight Zustand-based state management with connection persistence and app-level configuration
- **Mobile Adaptation**: Native mobile wallet support via Deeplink technology with automatic device detection and UI adaptation
- **Theme System**: CSS variable-based theming system with customizable color schemes
- **Example Applications**: 4 complete framework integrations (Vite, Next.js App Router, Next.js Pages Router, Create React App) plus PAPI integration example

This delivery enables developers to build production-ready DApps with minimal configuration while maintaining full flexibility for customization.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Luno-lab/LunoKit/blob/main/LICENSE) | MIT |
| 0b. | Documentation | [Docs](https://docs.lunolab.xyz) | Complete documentation expansion including React Hooks API reference, UI component guides, theme customization guide, and advanced usage tutorials |
| 0c. | Testing Guide | [Test Guide](https://docs.lunolab.xyz/getting-started/testing.html) | Comprehensive testing with React Testing Library for components and Vitest for Hooks; 90.82% coverage for @luno-kit/core and 89.86% for @luno-kit/react |
| 0d. | Example Applications | [Examples](https://github.com/Luno-lab/LunoKit/tree/main/examples) | 4 complete examples: [with-vite](https://github.com/Luno-lab/LunoKit/tree/main/examples/with-vite), [with-nextjs-app](https://github.com/Luno-lab/LunoKit/tree/main/examples/with-nextjs-app), [with-nextjs-pages](https://github.com/Luno-lab/LunoKit/tree/main/examples/with-nextjs-pages), [with-cra](https://github.com/Luno-lab/LunoKit/tree/main/examples/with-cra) |
| 0e. | CSS Styling System | [Theme System](https://docs.lunolab.xyz/getting-started/theming.html) | Complete Tailwind CSS-based styling system with CSS variable support for theming |
| 1. | React Hooks | [@luno-kit/react hooks](https://docs.lunolab.xyz/hooks/connection/use-connect.html) | Implemented 24 Hooks across 6 categories: Connection (5), Account (3), API Client (1), Chain (3), Transaction (6), Data (6) - Full documentation available |
| 2. | State Management System | [createLunoStore](https://github.com/Luno-lab/LunoKit/blob/main/packages/react/src/store/createLunoStore.ts) | Zustand-based state management with connection state persistence, account management, config caching, and app-level state exposure via createLunoStore |
| 3. | Mobile Adaptation | [Mobile Demo](https://demo.lunolab.xyz) | Complete mobile wallet integration via Deeplink technology with device detection, responsive UI adaptation, and automatic redirect logic for mobile wallets |
| 4. | Theme System | [Theme documentation](https://docs.lunolab.xyz/getting-started/theming.html) | CSS variable-based theme system supporting custom color schemes and light/dark mode switching |
| 5. | API Integration Layer | [createApi](https://github.com/Luno-lab/LunoKit/blob/feat/assets-list/packages/react/src/utils/createApi.ts) | Type-safe API layer based on Dedot with custom RPC call support and runtime version detection via useApi hook |
| 6. | Development Tools Configuration | [Monorepo config](https://github.com/Luno-lab/LunoKit) | Complete engineering setup: Biome, TypeScript, Vitest, pnpm workspace, tsup build configuration, React Testing Library integration |



**Additional Information**

- **React Hooks (24 total)**:
  - **Connection (5)**: useConnect, useDisconnect, useStatus, useConnectors, useActiveConnector
  - **Account (3)**: useAccount, useAccounts, useBalance
  - **API Client (1)**: useApi
  - **Chain (3)**: useChain, useChains, useSwitchChain
  - **Transaction (6)**: useSendTransaction, useSendTransactionHash, useEstimatePaymentInfo, useSignMessage, useSigner, usePapiSigner
  - **Data (6)**: useBlockNumber, useRuntimeVersion, useGenesisHash, useSs58Format, useSubscription, useConfig

- **Example Applications**: Beyond the required 4 examples, we added a 5th example:
  - **with-vite-papi**: Demonstrating PAPI (Polkadot API) integration with LunoKit

- **Mobile Wallet Support**: Complete Deeplink implementation supporting:
  - Nova Wallet
  - SubWallet Mobile


- **Theme System Features**:
  - CSS variable-based customization
  - Pre-built light/dark themes
  - Custom color scheme support
  - Runtime theme switching

- **Testing Coverage**:
  - **@luno-kit/core**: [90.82%](https://app.codecov.io/gh/Luno-lab/LunoKit/tree/main/packages%2Fcore)
  - **@luno-kit/react**: [89.86%](https://app.codecov.io/gh/Luno-lab/LunoKit/tree/main/packages%2Freact)

- **Live Demos**:
  - [Main Demo](https://demo.lunolab.xyz) - Vite integration showcase
  - All example applications are fully functional and documented
