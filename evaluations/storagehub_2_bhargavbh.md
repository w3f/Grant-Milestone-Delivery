# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/StorageHub.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** Milestone-1 by Semuelle, [evaluation report](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/storagehub_1_semuelle.md)



**Deliverables**

| Number | Deliverable | Links | Accepted | Evaluation Notes 
| -----: | ----------- | ------------- | :-------: | -----------
| **0a.** | License Type | GPLv3 [License](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/main/LICENSE) | <ul><li>[x] </li></ul> |  
| **0b.** | Documentation | * The implementation roadmap is described in the following docs: [Implementation Roadmap](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/main/techincal_design/implementationRoadmap.md), [Module's Breakdown](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/main/techincal_design/modulesBreakdown.md), [Runtime Breakdown](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/main/techincal_design/runtimeBreakdown.md) | <ul><li>[x] </li></ul> | * Builds on research and design [docs]((https://hackmd.io/@MoonsongLabs/Skq0Qzem6)) delivered in [Milestone-1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/storageHub_Milestone1.md).
| **0c.** | Testing & Testing Guide | *  [StorageHub Runtime & Client node PoC - README](https://github.com/Moonsong-Labs/storage-hub-runtime-poc/blob/main/README.md) <br> * [StorageHub Client Node - README](https://github.com/Moonsong-Labs/storage-hub-runtime-poc/blob/main/storagehub-client-node/README.md) | <ul><li>[x] </li></ul> | Artefacts are well documented with testing instructions.
| **0d.** | Docker | * [StorageHub PoC](https://github.com/Moonsong-Labs/storage-hub-runtime-poc/tree/main) along with the required [configs](https://github.com/Moonsong-Labs/storage-hub-runtime-poc/blob/main/compose.yaml) to be run using Docker compose | <ul><li>[x] </li></ul> | 
| **0e.** | Prototype Code | * [StorageHub PoC](https://github.com/Moonsong-Labs/storage-hub-runtime-poc/tree/main) | <ul><li>[x] </li></ul> | The PoC includes a mock-up of User nodes, BSP nodes, and runtime code. Spawns a network with 3 BSP nodes, connected to StorageHub as light clients and caters to storage requests. Interactions with relaychain/ parachains via XCMs for storage requests are not covered. 
| **0f.** | Resource Estimation & Planning | *  This [Implementation Roadmap](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/main/techincal_design/implementationRoadmap.md) identifies our preliminary assessment of the different key workstreams | <ul><li>[x] </li></ul> | Split in 2 phases: * MVP development * Testing, Auditing, and Optimisation. The workstreams focus on [MSP client/ BSP Client](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/add-technical-design/techincal_design/modulesBreakdown.md#file-transfer-module-p2p)/ StorageHub [runtime pallets](https://github.com/Moonsong-Labs/storage-hub-design-proposal/blob/add-technical-design/techincal_design/runtimeBreakdown.md) for orchestration. 
| **0g.** | Article | * [storage_hub_polkadot_forum_post](https://forum.polkadot.network/t/storagehub-looking-ahead/5313) | <ul><li>[x] </li></ul> | Forum post with intention of involving community. The team also engaged with W3F/Parity researchers via private channels to narrow down requirements and collect feedback on proposed design.

## Overall Evaluation 

The proposed implementation roadmap has sufficient technical depth. The team has come up with modular work-packages for MSP/BSP Clients and StorageHub Runtime code, and provisioned 1/3rd (4 months) of time and resources for testing, integration and security audits. The roadmap also tries to re-use existing code and infrastructure and has sections weighing possible dependencies and analysis of modifications if required, for eg. the libp2p library for sharing files and its integration on client-side. 
Ideally, we would have liked to evaluate the design and roadmap against upcoming applications scenarios like supporting the fixed-functionality logic in CoreJAM, in terms of both security and performance. However, CoreJAM architecture is under heavy revision. Overall, the architecture of having dedicated MSPs and contingency BSPs seems to be flexible enough to accommodate any future requirements of CoreJAM. It would be useful to have a deeper look into this issues at later stages once development starts and CoreJAM is ironed out. Secondly, once the infra side of MVP is completed, the incentive structures and Game Theoretic analysis needs some fleshing out for details, both in terms of economic viability of overall model and also crypto-economic security. That said, the storage solution's architecture fulfils the primary requirement of having DOT as the native token. Also, it remains to be decided if the StorageHub is launched as a Systems Parachain, or a stand-alone chain with its Coretime requirements funded by the treasury. Joe from W3F suggested the later option, since being a System Parachain brings additional restrictions and can slowdown the StorageHubs development, since any runtime upgrades would have to be cleared by the fellowship. 




