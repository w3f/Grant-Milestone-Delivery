# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Swush Dex Aggregator](https://github.com/w3f/Grants-Program/blob/master/applications/swush-dex-aggregator.md)
* **Milestone Number:** 1

**Context** (optional)
This milestone was Initial Proof of Concept which sets up foundation with functional UI and API integrations for assets, balances, rates and wallet integration.
High level design docs can be found [here](https://github.com/swush-labs/swush-app/blob/dev/docs/api/HIGH_LEVEL_DESIGN.md)

**Deliverables**


| Number | Deliverable | Link | Notes |
| --- | --- | --- | --- |
| **0a.** | License | AGPLv3  |
| **0b.** | Documentation | [High Level Documentation](https://github.com/swush-network/swush-dex-aggregator/blob/main/docs/high-level-documentation.md) | 
| **0c.** | Testing Guide | [Testing Guide](https://github.com/swush-labs/swush-app?tab=readme-ov-file#getting-started) | Steps to setup locally and run lint and unit tests |
| **0d.** | Docker | [Dockerfile](https://github.com/swush-labs/swush-app/blob/dev/docker-compose.yml) and [steps to run](https://github.com/swush-labs/swush-app?tab=readme-ov-file#docker-development-environment) | 
| **1.** | **Basic Functional UI (Responsive Design)** |[UI root component](https://github.com/swush-labs/swush-app/blob/dev/apps/web/src/app/page.tsx) | Complete UI can be viewed at http://localhost:3000/
| **2.** | **Wallet Integration** | [Wallet component](https://github.com/swush-labs/swush-app/blob/dev/apps/web/src/components/swap/WalletButton.tsx)| Wallet support for major ecosystem wallets like Talisman, Polkadot.js, Subwallet, etc.
| **3.** | **Asset APIs** | [Asset API](https://github.com/swush-labs/swush-app/blob/dev/packages/api/src/routes/assets.ts#L24-L55)| API to fetch assets and their metadata 
| **4.** | **Asset Pair Rates APIs** | [Asset Pair Rates API](https://github.com/swush-labs/swush-app/blob/dev/packages/api/src/routes/assets.ts#L57-L113)| API to fetch asset pair rates 
| **5.** | **Basic Notification System** | | Can be viewed in the UI, right now implemented when user connects and disconnects to the wallet
| **6.** | **User Profiles** | | Can be viewed in the UI, user can set slippage preferences


**Additional Information**
> Any further comments on the milestone that you would like to share with us.
