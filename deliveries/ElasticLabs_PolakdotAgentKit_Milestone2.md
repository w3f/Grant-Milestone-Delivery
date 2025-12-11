# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadot_agent_kit.md
- **Milestone Number:** 2

**Context** (optional)

- Implementation of the core **"DeFi Integrations & External Context Providers"** including:
  - Documentation (0b.): [Documentation Site](https://cocdap.github.io/agent-docs/) - [Source Code](https://github.com/elasticlabs-org/polkadot-agent-kit-docs)
  - Testing and Testing Guide (0c.): https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/sdk/tests/e2e/sdk.test.ts
  - Agentic DeFi Tools: Hydration (1a.): [Documentation](https://cocdap.github.io/agent-docs/tools/defi-tool.html) - [Source Code](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/core/src/defi/swap.ts)
  - Agentic DeFi Tools: Bifrost (1b.): [Documentation](https://cocdap.github.io/agent-docs/tools/bifrost-tool.html) - [Source Code](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/core/src/bifrost/mintVdot.ts)
  - Agentic DeFi Tools: Relaychain Nomination Pools (1c.): [Documentation](https://cocdap.github.io/agent-docs/tools/nomination-staking-tool.html) - [Source Code](https://github.com/elasticlabs-org/polkadot-agent-kit/tree/main/packages/core/src/pallets/nomination-pools)
  - Host a Model Context Protocol (MCP) server (2a.): [Documentation](https://cocdap.github.io/agent-docs/examples/mcp-server.html) - [Source Code](https://github.com/elasticlabs-org/polkadot-agent-kit/tree/main/examples/mcp-server)
  - Convertible to Langchain tools (2c.): [Source Code](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/sdk/src/langchain.ts#L18)

**Deliverables**

- **Estimated duration:** 1 month
- **FTE:** 2
- **Costs:** 10,000 USD

|  Number | Deliverable                                     | Specification                                                                                               |
| ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **0a.** | License                                         | MIT                                                                                                         |
| **0b.** | Documentation                                   | API reference + advanced guide                                                                              |
| **0c.** | Testing and Testing Guide                       | Integration/stress tests + guide                                                                            |
|     1a. | Agentic DeFi Tools: Hydration                   | Support swapping on Hydration                                                                               |
|     1b. | Agentic DeFi Tools: Bifrost                     | Support minting vDOT                                                                                        |
|     1c. | Agentic DeFi Tools: Relaychain Nomination Pools | Support Nomination Pool staking on Relaychain                                                               |
|     2a. | Host a Model Context Protocol (MCP) server      | Compatible with the structure required of MCP protocol to easily set up a MCP server on top of the library. |
|     2b. | Convertible to Lanchain tools                   | Easily convert the langchain tools                                                                          |

**Additional Information**

Link to the Polkadot Agent Kit documentation: https://cocdap.github.io/agent-docs/tools/defi-tool.html

To see how the Polkadot Agent Kit library is integrated in client application, check out the example for Telegram Bot built with Polkadot Agent Kit: [Polkadot Agent Kit - Telegram Bot](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/examples/telegram-bot/README.md) or [Polkadot Agent Playground](https://github.com/elasticlabs-org/polkadot-agent-kit/tree/main/apps/playground)

To install and check the test coverage, following the below guide: https://cocdap.github.io/agent-docs/quickstart.html

**Basic Usage**

Full documentation of the latest changes can be found here: https://github.com/elasticlabs-org/polkadot-agent-kit/blob/main/packages/sdk/README.md
