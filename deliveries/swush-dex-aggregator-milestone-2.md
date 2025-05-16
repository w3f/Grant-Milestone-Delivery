# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Swush Dex Aggregator](https://github.com/w3f/Grants-Program/blob/master/applications/swush-dex-aggregator.md)
* **Milestone Number:** 2

**Context** (optional)
This is final milestone with full functionality of the application.

Github repo of code: https://github.com/swush-labs/swush-app


**Deliverables**
 

| Number | Deliverable | Link | Notes |
| --- | --- | --- | --- |
| **0a.** | License | AGPLv3  | 
| **0b.** | Documentation | [High Level Documentation](https://github.com/swush-labs/swush-app/blob/dev-v2/docs/api/HIGH_LEVEL_DESIGN.md) | 
| **0c.** | Testing Guide | [Testing Guide](https://github.com/swush-labs/swush-app?tab=readme-ov-file#getting-started) | Steps to setup locally and run lint and unit tests. |
| **0d.** | Docker | [Dockerfile](https://github.com/swush-labs/swush-app/blob/dev/docker-compose.yml) and [steps to run](https://github.com/swush-labs/swush-app?tab=readme-ov-file#docker-development-environment) | 
| **0e.** | Article | | Our progress is published at the Documentation section above.
| 1. | **Cross-Chain (XCM) APIs** | [XCM APIs and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts) | XCM APIs to transfer and swap assets in a single transaction from Asset Hub to Hydradx and back to Asset Hub.
| 2. | **Asset Balance** | [Balance API and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/lib/api.ts#L119) | Balance API to fetch user owned assets balance for different asset types like Native and Foreign Assets on Asset Hub.
| 3. | **Slippage Control and Protection** | [Slippage Protection](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts#L181-L243) | Slippage control can be viewed in the UI, and for protection we are using dry_run API to simulate the transaction and show if it will succeed or fail. If transaction fails at XCM stage due to slippage, user will be notified of transaction failure.
| 4. | **Real-time Fee Updates** | Preview in UI | Swap rates are updated in output asset price, transaction and xcm fees are pre calculated and added as subtotal and shown at the field "Max Transaction Fee" in the UI.
| 5. | **Asset Pair Swap** | [Swap API and UI Integration](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/components/swap/hooks/useAssetConversionSwap.ts) | Swap different asset pairs from Hydradx and Polkadot Asset Hub. Hydradx supports limited asset pairs like DOT, USDC, USDT for now.
| 6. | **Optimized Routing** | [Best route selection API](https://github.com/swush-labs/swush-app/blob/dev-v2/packages/api/src/routes/assets.ts#L24-L55) |  Best swap route is selected from multiple routes based on output asset price and slippage tolerance. Currently not including XCM fees as the fees need to be further optimized and fees will come down in upcoming polkadot upgrades.
| 7. | **Chopsticks simulation** | [Chopsticks config](https://github.com/swush-labs/swush-app/tree/dev-v2/apps/web/chopsticks/config) | Final transaction is simulated with dry_run API before execution and submitted on chopsticks simulated Asset Hub. Asset Hub and Hydradx are configured with chopsticks config for cross chain transactions.
| 8 | **User Transaction History** | [Supabase API](https://github.com/swush-labs/swush-app/blob/dev-v2/apps/web/src/services/swapHistoryService.ts) | Transaction history is stored in Postgres database hosted on Supabase.


**Additional Information**

All of the deliverables above can be viewed in UI at http://localhost:3000/ complementing the APIs implemented.

**TODO**: 

- add demo video using loom
- flow diagram for the application
- iterate the high level design for the application
