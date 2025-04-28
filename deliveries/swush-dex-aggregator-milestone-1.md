# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Swush Dex Aggregator](https://github.com/w3f/Grants-Program/blob/master/applications/swush-dex-aggregator.md)
* **Milestone Number:** 1

**Context** (optional)
This milestone is Initial Proof of Concept which sets up foundation with functional UI and API integrations for assets, balances, rates and wallet integration.

**Deliverables**


| Number | Deliverable | Link | Notes |
| --- | --- | --- | --- |
| **0a.** | License | AGPLv3  |
| **0b.** | Documentation | [High Level Documentation](https://github.com/swush-labs/swush-app/blob/dev/docs/api/HIGH_LEVEL_DESIGN.md) | 
| **0c.** | Testing Guide | [Testing Guide](https://github.com/swush-labs/swush-app?tab=readme-ov-file#getting-started) | Steps to setup locally and run lint and unit tests |
| **0d.** | Docker | [Dockerfile](https://github.com/swush-labs/swush-app/blob/dev/docker-compose.yml) and [steps to run](https://github.com/swush-labs/swush-app?tab=readme-ov-file#docker-development-environment) | 
| **0e.** | Article | | Our progress is published at the Documentation section above
| **1.** | **Basic Functional UI (Responsive Design)** |[UI root component](https://github.com/swush-labs/swush-app/blob/dev/apps/web/src/app/page.tsx) | Complete UI can be viewed at http://localhost:3000/
| **2.** | **Wallet Integration** | [Wallet UI component](https://github.com/swush-labs/swush-app/blob/dev/apps/web/src/components/swap/WalletButton.tsx)| Wallet support for major ecosystem wallets like Talisman, Polkadot.js, Subwallet, etc. and the user can view the asset balance in the UI if wallet is connected
| **3.** | **Asset APIs** | [Asset API](https://github.com/swush-labs/swush-app/blob/dev/packages/api/src/routes/assets.ts#L24-L55)| API to fetch assets and their metadata from hydradx and Polkadot asset hub
| **4.** | **Asset Pair Rates APIs** | [Asset Pair Rates API](https://github.com/swush-labs/swush-app/blob/dev/packages/api/src/routes/assets.ts#L57-L113)| API to fetch asset pair rates from hydradx and Polkadot asset hub
| **5.** | **Basic Notification System** | | Can be viewed in the UI, right now implemented when user connects and disconnects to the wallet
| **6.** | **User Profiles** | | Can be viewed in the UI, user can set slippage preferences


**Additional Information**

All of the deliverables above can be viewed in UI at http://localhost:3000/ complementing the APIs implemented.

A demo for UI can be viewed [here](https://www.loom.com/share/3dd0f5b4bb2040fa871b8b5a469c4e3a?sid=115150bb-f80b-4c76-b922-c461891564ce).
