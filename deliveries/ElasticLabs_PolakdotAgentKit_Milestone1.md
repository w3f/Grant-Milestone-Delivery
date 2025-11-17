# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone Number:** 1

**Context** (optional)

You can track the status of all tasks in the milestone 1 [here](https://github.com/elasticlabs-org/polkadot-agent-kit/milestone/1?closed=1).

- Implementation of the core XCM features including:

  - [PR#60: feat: paraspell migration](https://github.com/elasticlabs-org/polkadot-agent-kit/pull/60): Migration to ParaSpell as the underlying library for executing cross-chain transactions.
  - Integration of the core XCM module to the agentic layer.
    - [PR#58: feat: XCM native transfer tool call](https://github.com/elasticlabs-org/polkadot-agent-kit/commit/9a43da2463142111158cce5828f584f25444eb5e): Support direct-hop for XCM native transfer from chain A to chain B.
    - [ISSUE#24: Resolved with the ParaSpell migration](https://github.com/elasticlabs-org/polkadot-agent-kit/issues/24): Support multi-hop XCM transferring.
  - Support XCM transact to allow agent sending runtime calls cross-chain.

- [PR#59: feat: add integrations tests, e2e tests](https://github.com/elasticlabs-org/polkadot-agent-kit/commit/4c43f3fe793a229c729a64311d03fd5cf75023d7): More concrete codebase with >85% test coverage: unit tests and integration tests.
- [polkadot-agent-kit-docs](https://github.com/elasticlabs-org/polkadot-agent-kit-docs): Add documentation page and landing page for the Polkadot Agent Kit.

**Deliverables**

|  Number | Deliverable                            | Specification                                                                                                               |
| ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                | MIT                                                                                                                         |
| **0b.** | Documentation                          | Documentation Page + Quickstart tutorial.                                                                                   |
| **0c.** | Testing and Testing Guide              | Unit tests + E2E tests guide + CI pipeline.                                                                                 |
|     1a. | Migrate to ParaSpell                   | Migrate from raw XCM implementation to use ParaSpell as the underlying XCM library.                                         |
|     1b. | Multi-hop XCM Transferring             | Support multi-hop asset transferring via XCM between parachains (reserve transfers) and parachain to relaychain (teleport). |
|     1c. | Transact                               | Support XCM transact to allow agent sending runtime calls cross-chain.                                                      |
|      2. | Agentic XCM integration-texts codebase | Thorough test coverage for XCM functionalities                                                                              |

**Additional Information**

Link to the Polkadot Agent Kit documentation: https://cocdap.github.io/agent-docs/

To see how the Polkadot Agent Kit library is integrated in client application, check out the example for Telegram Bot built with Polkadot Agent Kit: [Polkadot Agent Kit - Telegram Bot](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/examples/telegram-bot/README.md)

To install and check the test coverage, following the below guide:

```bash
# 1. Clone the repository
git clone https://github.com/openguild-labs/polkadot-agent-kit.git
cd polkadot-agent-kit

# 2. Install all dependencies
pnpm install

# 3. Generate Polkadot API types (required before building)
pnpm papi

# 4. Build all packages
pnpm run build

# 5. Run unit tests across all packages
pnpm run test

# 6. Run end-to-end tests
pnpm run test:e2e

# 7. Run integration tests (requires Ollama)
pnpm run test:integration
```

To integrate the library on the client side:

```bash
npm install @polkadot-agent-kit/sdk
```

**Basic Usage**

Full documentation of the latest changes can be found here: https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/sdk/README.md

```ts
import { PolkadotAgentKit } from "@polkadot-agent-kit/sdk";

// Initialize agent with specific chains
const agent = new PolkadotAgentKit({
  chains: ["polkadot", "west_asset_hub"], // Optional: restrict to specific chains
  seedPhrase: "your twelve word seed phrase here",
});

// Initialize APIs for configured chains
await agent.initializeApi();

// Check balance
const balance = await agent.getNativeBalance("polkadot", address);

// Transfer tokens
const result = await agent.transferNative(
  "polkadot",
  recipient,
  amount,
  signer
);
```
