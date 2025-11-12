# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [paraport_m1.md](https://github.com/w3f/Grants-Program/pull/2542)
* **Milestone Number:** 1

**Context** (optional)

Landing page is available on [paraport.xyz](https://paraport.xyz/) 

The Milestone 1 of Embedded Polkadot Auto-teleport SDK for Polkadot, Assethub and Hydration contains
and delivers the following:

- SDK for Vue, React and Vanilla JS
- SDK supports following chains
  - Polkadot
  - Polkadot AssetHub
  - Hydration

Additionally we have unit and end-to-end test to ensure correct delivery

**Deliverables**

| Number | Deliverable | Link | Notes |
|----|-----------|-------------|-------------|
| 0a.   | Licensing      | [LICENSE](https://github.com/paraportxyz/app/blob/main/LICENSE) | MIT |
| 0b. | Documentation | [Docs Repo](https://github.com/paraportxyz/docs) | will be available under docs.paraport.xyz |
| 0c. | Testing Guidelines | [Vue](https://github.com/paraportxyz/sdk/tree/main/packages/vue/src/__tests__), [React](https://github.com/paraportxyz/sdk/tree/main/packages/react/src/__tests__), [SDK](https://github.com/paraportxyz/sdk/tree/main/packages/sdk/src/__tests__) | - |
| 0d. | CD/CI Pipeline | [CI](https://github.com/paraportxyz/sdk/blob/main/.github/workflows/ci.yml), [Release](https://github.com/paraportxyz/sdk/blob/main/.github/workflows/release.yml) | - |
| 1a. | Cross-Chain Messaging Implementation | See granular list | 1a |
| 1b. | Bridge & Network Management | See granular list | 1b |
| 1c. | Teleport Calculation System | See granular list | 1c |
| 1d. | Foundation & Lifecycle Management | See granular list | 1d |
| 2a. | Vue/React components | [React](https://github.com/paraportxyz/sdk/tree/main/packages/react), [Vue](https://github.com/paraportxyz/sdk/tree/main/packages/vue) | -|
| 2b. | Inline UI | [Integrated](https://github.com/paraportxyz/sdk/blob/main/packages/vue/src/components/integrated) | - |
| 2c. | UI Component Library | [paraport-component-library](https://www.figma.com/community/file/1559854238496516301/paraport-component-library) | -|
| 3a. | Basic Error Handling | See granular list | 3a |
| 3b. | Hydration Parachain Integration | See granular list | 3b |


**Granular Deliverables**

*1a. Cross-Chain Messaging Implementation*


- [XCM Message Construction](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/bridges/xcm/XCMBridge.ts)
- [Transfer Instruction Generation](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/utils/tx.ts)
- [Message Execution Engine](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/SessionManager.ts)
- [Transaction Signing Integration](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TeleportManager.ts)
- [Transfer Retry Management](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TransactionManager.ts)


*1b. Bridge & Network Management*

* [Network Discovery System](https://github.com/paraportxyz/sdk/blob/56c3dab3a6b39a5265d0f8b22785b4348efa0401/packages/core/src/utils/chains.ts#L45)
* [Bridge Adapters Architecture](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/bridges/BridgeRegistry.ts)
* [Connection Management](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/services/PolkadotApi.ts)
* [Endpoint Optimization Service](https://github.com/paraportxyz/sdk/blob/56c3dab3a6b39a5265d0f8b22785b4348efa0401/packages/core/src/types/common.ts#L37)

*1c. Teleport Calculation System*

* [Unified Fee Calculator](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/services/BalanceService.ts)
* [XCM Quote](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/bridges/xcm/XCMBridge.ts)
* [Unified Balance Validation](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/services/BalanceService.ts)
* [Funds Assessment Module](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/sdk/ParaPortSDK.ts)
* [Subscription System](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/sdk/ParaPortSDK.ts)
* [Fund Detection](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/services/BalanceService.ts)

*1d. Foundation & Lifecycle Management*

* [Initialization](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/config/SDKConfigManager.ts)
* [State Management Core](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/base/BaseManager.ts)
* [Asynchronous Operation Engine](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/SessionManager.ts)
* [Resource Optimization](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TransactionManager.ts)
* [Observability Infrastructure](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/services/LoggerService.ts)
* [Versioning & Compatibility](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/sdk/ParaPortSDK.ts)

*3a. Basic Error Handling*

* [Network Error Handler](https://github.com/paraportxyz/sdk/blob/main/packages/vue/src/components/integrated/IntegratedProgress.vue)
* [Transaction Error Handler](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TransactionManager.ts)
* [User Interaction Error Handler](https://github.com/paraportxyz/sdk/blob/main/packages/vue/src/components/integrated/Integrated.vue)
* [Recovery Strategy Handler](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TeleportManager.ts)
* [Retry Mechanism](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TeleportManager.ts)
* [Transaction Reset](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/managers/TransactionManager.ts)

*3b. Hydration Parachain Integration*

* [Chain Configuration](https://github.com/paraportxyz/sdk/blob/main/packages/static/src/chains.ts)
* [Token Support](https://github.com/paraportxyz/sdk/blob/main/packages/static/src/types.ts)
* [Cross-Chain Routes](https://github.com/paraportxyz/sdk/blob/main/packages/core/src/bridges/xcm/XCMBridge.ts)
* [Fee Calculation](https://github.com/paraportxyz/sdk/blob/56c3dab3a6b39a5265d0f8b22785b4348efa0401/packages/core/src/utils/chains.ts#L45)
* [Example Implementation](https://github.com/paraportxyz/sdk/blob/main/packages/static/src/providers.ts)



**Additional Information**

The SDK has been written using the latest [Polkadot API](papi.how).
Unit and end-to-end tests were written to ensure the correctness of the code.
