# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ElizaPluginPolkadot.md
* **Milestone Number:** 1

**Context** (optional)
1. Implementation of a Wallet Provider for ElizaOS, with actions to create, load, eject a wallet, utilizing encrypted file backups and in-memory storage for fast switching.
2. Implementation of a Network Data Service that allows for querying on-chain data, such as block info, balances, events, referenda, referendum details etc.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Esscrypt/plugin-polkadot/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | [Setup Tutorial](https://github.com/Esscrypt/plugin-polkadot/blob/main/README.md#step-by-step-usage)<br> | Inline code documentation and comprehensive setup tutorial with step-by-step ElizaOS integration |
| 0c. | Testing and Testing Guide | • [Tests](https://github.com/Esscrypt/plugin-polkadot/tree/main/src/tests)<br>• [Instructions](https://github.com/Esscrypt/plugin-polkadot/blob/main/README.md#testing) | Comprehensive unit tests covering core functions with testing instructions |
| 1. | Wallet Integration | https://github.com/Esscrypt/plugin-polkadot | Encrypted files get created on file system with the mnemonics, and in-memory caching is used to switch between wallets on the fly| 
| 2.  | On-Chain Data Feed Module | https://github.com/Esscrypt/plugin-polkadot | We are utilizing the same provider for 2 and 3 with usage actions | 
| 3.  | Governance Query Module | https://github.com/Esscrypt/plugin-polkadot| We are utilizing the same provider for 2 and 3 with usage actions | 

**Additional Information**

**Usage instructions:**
**Option 1** - Dynamically Loading from Github repo:
1. Follow the ElizaOS quickstart instructions here: https://eliza.how/docs/quickstart
2. Add the following dependancy in your newly created agent's package.json: `"@esscrypt/plugin-polkadot": "github:Esscrypt/plugin-polkadot"`
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
