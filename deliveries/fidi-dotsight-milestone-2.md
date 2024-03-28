# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [FiDi DotSight](https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md)
* **Milestone Number:** 2

**Progress**
* We have successfully evolved the user interface into an intuitive, code-free analytical platform, consistent with the strategic direction set forth in our [prior milestone](https://github.com/w3f/Grant-Milestone-Delivery/pull/1080#issuecomment-1881517430).
* This marks the completion of the final milestone for [FiDi DotSight](https://github.com/w3f/Grants-Program/blob/master/applications/fidi-dotsight-analytics.md). Milestones [1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/fidi-dotsight-milestone-1.md) and [3](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/fidi-dotsight-milestone-3.md) have been previously delivered and milestone [4](https://github.com/w3f/Grants-Program/pull/2258) has been proposed out of scope.

 In surpassing our initial goals, we have accomplished the following:
* Enabled access to DotLake data within FiDi, thanks to the collaborative efforts and contributions of the Parity Data Platform team.
* Integrated additional key data sources, including Chainlink, DappRadar, Public BigQuery, Subsquid, DeBank, and Ankr.
* Achieved parachain-level data coverage via BigQuery and DotLake resources.

**Available Use Cases**
* Top-level Polkadot metrics: Monthly Active, Transactions, Unique Addresses (Network > Polkadot).
* Governance Analytics (Network > Polkadot > Treasury Balance).
* Wallet-Level Analytics: (Wallets > One or Many > Net Worth, Holdings, NFTs).
* Combined EVM and non-EVM analytics (e.g., Network > Polakdot, Ethereum, Avalanche, Arbitrum > All Metrics).
* Real-Time Pricing Data (Token > One or Many > Price).
* Block Production for EVM (Network > One or Many > Block Production).


**Key Links**
* As before, the backend and frontend are available in [fidi-tech/dotsight](https://github.com/fidi-tech/dotsight) and [fidi-tech/dotsight-ui](https://github.com/fidi-tech/dotsight-ui) respective repositories.
* The current iteration of the platform is live at [dot.fidi.tech](https://dot.fidi.tech/).
* The documentation is available at [docs.fidi.tech](https://docs.fidi.tech/) and is actively evolving.

**Next Steps**
* Our target launch date within the Polkadot community is tentatively set for April 10th. Leading up to the launch, we’re focusing on adding more finesse to user experience, closing gaps in the parachain coverage, and introducing more dashboard types.
* Additionally, we will be proposing a Decentralized Future initiative aimed at further advancing FiDi's capabilities to a fully-fledged self-serviced analytics portal for Polkadot, i.e., encompassing a broader array of metrics, dashboard types, data sources, advanced querying, external embedding capabilities, and a creator UI for arranging widgets accoridng to user preference.


**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [LINK](https://github.com/fidi-tech/dotsight/blob/main/LICENSE) |
| **0b.** | Documentation | [LINK](https://docs.fidi.tech/fidi-overview/fidi-analytics-portal) |  |
| **0c.** | Testing | [Jest](https://github.com/fidi-tech/dotsight-ui/blob/main/jest.config.mjs) [Example 1](https://github.com/fidi-tech/dotsight/blob/main/src/widgets/widget.controller.spec.ts) [Example 2](https://github.com/fidi-tech/dotsight-ui/blob/main/src/features/widgetViews/ui/Radar/widget/hooks/useDataset.spec.ts) [Example 3](https://github.com/fidi-tech/dotsight-ui/blob/main/src/widgets/WidgetConfigurator/components/Types/hooks/useTypes.spec.ts) | Detailed test coverage is provided alongside each core component. Run npm run test for all Jest targets in both repos. |
| **1a.** | dApp-level signals: collator metrics | [dApps Transformations](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/data-sources/collection/dapp-radar/dapp.datasource.ts) [dApps Available](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/common/categories/collection/network/dapps.ts) [Example: Block Counts](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/data-sources/collection/bigquery-public-data/network.datasource.ts#L68) [Blocks Sourcing](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/data-sources/collection/bigquery-public-data/queries.ts#L21) |  See Network > Parachains in the UI. Daily Transactions, Volume, and Uniques are available for Beamswap, StellaSwap, ArthSwap, and 3 external dApps. Block production metrics (mentioned in 1a) are also available for 44 parachains. |
| **1b.** | dApp-level signals: user activity | [Example: Monthly Active](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/data-sources/collection/parity/active-addresses/network.datasource.ts#L23) [Example: Uniques](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/data-sources/collection/parity/unique-addresses/network.datasource.ts#L23) | See Network > Parachains in the UI. Monthly Active, Monthly Uniques, and Monthly Transactions metrics are currently available for 44 parachains via Parity's aggregates. |
| **2a.** | Network-level signals |  [Pricing Logic](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/data-sources/collection/chainlink/token.datasource.ts#L194) [Available Networks](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/common/categories/collection/network/networks.ts) [Available Tokens](https://github.com/fidi-tech/dotsight/blob/c5aa6c5b043693be3829a542bd38474a292a76f3/src/common/categories/collection/token/tokens.ts) | See the Network/Token section. Monthly Active, Monthly Unique, Monthly Transactions, and Governance metrics are currently available for Polkadot. Additionally, price metrics are available for 50+ EVM chains. |
| - | Key UI Widgets | [Line Chart](https://github.com/fidi-tech/dotsight-ui/blob/0d7fb5b11d632a3e96599d61da8bf6f3b3026933/src/shared/ui/LineChart/index.tsx) [Table](https://github.com/fidi-tech/dotsight-ui/blob/0d7fb5b11d632a3e96599d61da8bf6f3b3026933/src/shared/ui/Table/index.tsx) [All Entities](https://github.com/fidi-tech/dotsight-ui/tree/0d7fb5b11d632a3e96599d61da8bf6f3b3026933/src/entities) | Surfaced for visibility. |



