# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ElizaPluginPolkadot.md
* **Milestone Number:** 2

**Context** (optional)
1. Implementation of a single-chain transfer
2. Implementation of cross-parachain transfer
3. Implementation of subsidized transfer
4. Improved `networkDataProvider` service. 
5. Chopsticks testing suite

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Esscrypt/plugin-polkadot/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | [Setup Tutorial](https://github.com/Esscrypt/plugin-polkadot/blob/main/README.md#step-by-step-usage)<br> | Inline code documentation and comprehensive setup tutorial with step-by-step ElizaOS integration |
| 0c. | Testing and Testing Guide | • [Tests](https://github.com/Esscrypt/plugin-polkadot/tree/main/src/tests)<br>• [Instructions](https://github.com/Esscrypt/plugin-polkadot/blob/main/README.md#testing) | Comprehensive unit tests covering core functions with testing instructions |
| 4.     | Transfers & Transactions | [Here](https://github.com/Esscrypt/plugin-polkadot/blob/main/src/actions/crossChainTransfer.ts) [Here](https://github.com/Esscrypt/plugin-polkadot/blob/main/src/actions/transferFunds.ts) | Execute token transfers between accounts, multisigs, or across parachains (XCMP transfers).    
| 5.     | Subsidized Transactions  | [Action Here](https://github.com/Esscrypt/plugin-polkadot/blob/main/src/actions/subsidizedTransfer.ts)	|Subsidized payment of transaction fees using asset hub's sufficient assets.                  |
| 6.     | Official ElizaOS Repository Integration | [Merged Here](https://github.com/elizaos-plugins/registry/pull/184#event-18525664150) |Submit a pull request to the official ElizaOS plugin repository and ensure successful merge. This ensures the plugin becomes an official part of the ElizaOS ecosystem and is accessible to all ElizaOS users. |          

**Additional Information**

**Usage instructions:**
**Option 1** - Dynamically Loading from Github repo:
1. Follow the ElizaOS quickstart instructions here: https://eliza.how/docs/quickstart
2. Add the following dependency in your newly created agent's package.json: `"@esscrypt/plugin-polkadot": "github:Esscrypt/plugin-polkadot"`
3. Add the following line to the end of the plugins array in src/character.ts: `'@esscrypt/plugin-polkadot'`
4. Run: `bun install`
5. Start Agent: `bun run dev` 
6. (Optional) Set root .env with **POLKADOT_PRIVATE_KEY** and **POLKADOT_RPC_URL**
> Note: When starting the Agent, if **POLKADOT_PRIVATE_KEY** is not set, an error will pop up, but the agent will still run and expect a wallet to get created by the user

**Option 2** - Submodule
1. Clone the ElizaOS monorepo: https://github.com/elizaOS/eliza
2. Inside packages, clone the polkadot-plugin repo: https://github.com/Esscrypt/plugin-polkadot
Inside `packages/plugin-polkadot/characters/polkadot.character.json`, Fill up the secrets:
```
            "POLKADOT_RPC_URL": "<your-rpc-url>",
            "POLKADOT_PRIVATE_KEY": "<your-private-key>",
            "OPENAI_API_KEY": "<your-openai-api-key>"
```
3. In the root folder (monorepo), run:
`bun i && bun run build`
4. Eliza now supports a CLI that can be run through:
```
bun install -g @elizaos/cli

elizaos start --character "packages/plugin-polkadot/characters/polkadot.character.json"

# Alternatively using bun:

bun run start:debug --character "packages/plugin-polkadot/characters/polkadot.character.json"
```

#### Go to [http://localhost:3000/](http://localhost:3000/) and interact with the agent. If started, click the "Polkadot" character and then "Start agent" then interact.
