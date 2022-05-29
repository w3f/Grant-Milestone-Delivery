# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md
* **Milestone Number:**  1

**Context** (optional)

N/A


**Deliverables**

| Number | Deliverable | Link | Notes |
| ------ | ----------- | :------: |----------------- |
| 0a. | License  | [ui](https://github.com/web3go-xyz/portal-ui/blob/756f98c7b7f4e905c71aecc3cde4203f87788286/LICENSE), [service](https://github.com/web3go-xyz/portal-service/blob/9c36e31f1dff908a4cec1ad73746b5df6fabc624/LICENSE) (Apache 2.0), [RMRK indexer](https://github.com/web3go-xyz/RMRK-Indexer/blob/6e294a5f51251db856eee485cdf9fee5a000d329/LICENSE), [crowdloan indexer](https://github.com/web3go-xyz/Crowdloan-Indexer/blob/67551bab9e6666bf8ef6436ad2e65697c2e6ee59/LICENSE), [Moonbeam indexer](https://github.com/web3go-xyz/moonbeam-balance-indexer/blob/aff17fa1960a527845462af5c28370b2e31c61d4/LICENSE), [Polkadot indexer](https://github.com/web3go-xyz/polkadot-balance-indexer/blob/73cba611e20686ee7d1a83fcfc7cd7411dafd04b/LICENSE) (MIT) | — |
| 0b. | Documentation | [doc.web3go.xyz](https://doc.web3go.xyz) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the existing data board, and use the UI to create/publish their own customized data board|
| 0c. | Testing Guide | UI: https://github.com/web3go-xyz/portal-ui/blob/main/testing-with-dockerfile.md; Portal Service: https://github.com/web3go-xyz/portal-service/blob/main/testing-with-dockerfile.md | Guides to reproduce the services locally |
| 0d. | Docker  | [UI]( https://hub.docker.com/r/web3go/release ), [service]( https://hub.docker.com/r/web3go/portal-service ) | Images on docker hub |
| 0e. | Article | [medium](https://web3go.medium.com/introducing-web3go-fcf5f1880a72), [medium](https://web3go.medium.com/rmrk-nft-garden-dashboard-introduction-2e773238db01), [medium](https://web3go.medium.com/moonbeam-moonriver-staking-dashboards-tracking-and-simulation-14fcc6f7024e) | — |
| 1.a & 1.b | Indexer | [RMRK](https://github.com/web3go-xyz/RMRK-Indexer), [crowdloan](https://github.com/web3go-xyz/Crowdloan-Indexer), [moonbeam](https://github.com/web3go-xyz/moonbeam-balance-indexer), [polkadot](https://github.com/web3go-xyz/polkadot-balance-indexer) | — |
| 2. | UI Module:general WebApp | https://web3go.xyz | Production: https://web3go.xyz ; To reproduce locally, following the testing guide for UI: https://github.com/web3go-xyz/portal-ui/blob/main/testing-with-dockerfile.md |
| 3. | 3 more Data Boards: | [NFT Profiler](https://web3go.xyz/#/NFTProfiler), [MOVR staking](https://web3go.xyz/#/Moonriver), [GLMR staking](https://web3go.xyz/#/Moonbeam) | Production: https://web3go.xyz ; To reproduce locally, following the testing guide for UI: https://github.com/web3go-xyz/portal-ui/blob/main/testing-with-dockerfile.md |
| 4. | UI Module: semi-automatic chart generation | [web3go-xyz/portal-ui](https://github.com/web3go-xyz/portal-ui/blob/7d10c762c052d5dee87a8466f6093befc58a9adf/src/components/customQuery/CustomQuery.vue) | — |
| 5. | Support more Kusama Token: | [MOVR](https://github.com/web3go-xyz/moonbeam-balance-indexer/tree/moonriver-balance-indexer), [RMRK NFTs](https://github.com/web3go-xyz/RMRK-Indexer) | Pivoted from KAR and kUSD to MOVR and RMRK |

**Additional Information**

There is a deviation that the token tracker: we have implemented the token trackers for DOT, GLMR, MOVR, and RMRK NFT collection instead of KSM, KAR, and kUSD because we have chosen the most active and meaningful tokens in Polkadot Ecosystem. But all trackers for the native token in Polkadot will be implemented one by one.  it is only a matter of time.  We also have done more analytics beyond the contract: including the profile in Polkadot, which has integrated the identity module: https://web3go.xyz/#/ProfileHome,  and account analytics for Moonbeam, Moonriver, and Polkadot, which locates at https://web3go.xyz/#/Insight
