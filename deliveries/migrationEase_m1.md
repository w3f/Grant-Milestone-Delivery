# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/blob/master/applications/MigrationEase.md) directory). In the case of a private application, please provide the name of the project. 
* **Milestone Number:** 1

**Context**

In this milestone, we are delivering a user interface (UI) that allows users to connect to a Ledger hardware device and interact with their accounts with the objective to facilitate the Migration process from old accounts to the new Polkadot generic app.  

The core features include:
- **Connect to Ledger Hardware Device**: Users will be able to securely connect their hardware wallets when using the polkadot generic and migration apps previously developed by Zondax.
- **Scan and View Accounts**: The app will scan the connected devices and display all relevant accounts, allowing users to view their account balances.
- **Balance Overview**: Users can easily check the balance of their accounts, including unstaked/available funds.
- **Transfer and Account Management**: For accounts that are not locked (e.g., due to staking or other restrictions), users will be able to transfer accounts and send funds. This will include the transfer of NFTs. 

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [License file](https://github.com/Zondax/polkadot-web-migration?tab=Apache-2.0-1-ov-file#readme)  |
| **0b.** | Documentation | [Docs](https://github.com/Zondax/polkadot-web-migration?tab=readme-ov-file) |
| **0c.** | Testing and Testing Guide | [e3e tests](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__ )|
| **0d.** | Docker | [Docker file](https://github.com/Zondax/polkadot-web-migration/blob/main/dockerfile) |
| 0e. | Article/Tutorial |[Link](https://zondax.ch/blog/the-polkadot-ledger-migration-assistant)|
| 1. | PoC code| [General structure](https://github.com/Zondax/polkadot-web-migration)  |
| 2a. | Code| [Connect to Ledger Hardware Device](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/lib/ledger/ledgerService.ts#L108) |
| 2b. | Code| [Scan and View Accounts](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L493)  |
| 2c. | Code| [Balance Overview](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L563) |
| 2d. | Code| [Transfer and Account Management]( https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L746) |

**Additional Information**
