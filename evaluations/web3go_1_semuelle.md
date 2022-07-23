# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [ui](https://github.com/web3go-xyz/portal-ui/blob/756f98c7b7f4e905c71aecc3cde4203f87788286/LICENSE), [service](https://github.com/web3go-xyz/portal-service/blob/9c36e31f1dff908a4cec1ad73746b5df6fabc624/LICENSE) (Apache 2.0), [RMRK indexer](https://github.com/web3go-xyz/RMRK-Indexer/blob/6e294a5f51251db856eee485cdf9fee5a000d329/LICENSE), [crowdloan indexer](https://github.com/web3go-xyz/Crowdloan-Indexer/blob/67551bab9e6666bf8ef6436ad2e65697c2e6ee59/LICENSE), [Moonbeam indexer](https://github.com/web3go-xyz/moonbeam-balance-indexer/blob/aff17fa1960a527845462af5c28370b2e31c61d4/LICENSE), [Polkadot indexer](https://github.com/web3go-xyz/polkadot-balance-indexer/blob/73cba611e20686ee7d1a83fcfc7cd7411dafd04b/LICENSE) (MIT) | —
| 0b. | Documentation | <ul><li>[x] </li></ul> | [web3go.xyz](https://doc.web3go.xyz), [portal-service](https://github.com/web3go-xyz/portal-service/commit/7992a195c6277e2001af5c8373f19802711a3b48) | Inline docs added on request |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [web3go-xyz/portal-ui](https://github.com/web3go-xyz/portal-ui/blob/a10ed8d6313456d231d857c00fa9726192b529bf/testing-with-dockerfile.md), [web3go-xyz/portal-service](https://github.com/web3go-xyz/portal-service/blob/7992a195c6277e2001af5c8373f19802711a3b48/testing-with-dockerfile.md) | Improved on request |
| 0d. | Docker | <ul><li>[x] </li></ul> | [UI](https://github.com/web3go-xyz/portal-ui/blob/756f98c7b7f4e905c71aecc3cde4203f87788286/Dockerfile), [service](https://github.com/web3go-xyz/portal-service/blob/9c36e31f1dff908a4cec1ad73746b5df6fabc624/Dockerfile) | Improved on request |
| 0e. | Article | <ul><li>[x] </li></ul> | [medium](https://web3go.medium.com/introducing-web3go-fcf5f1880a72), [medium](https://web3go.medium.com/rmrk-nft-garden-dashboard-introduction-2e773238db01), [medium](https://web3go.medium.com/moonbeam-moonriver-staking-dashboards-tracking-and-simulation-14fcc6f7024e) | —
| 1.a & 1.b | Indexer | <ul><li>[x] </li></ul> | [RMRK](https://github.com/web3go-xyz/RMRK-Indexer), [crowdloan](https://github.com/web3go-xyz/Crowdloan-Indexer), [moonbeam](https://github.com/web3go-xyz/moonbeam-balance-indexer), [polkadot](https://github.com/web3go-xyz/polkadot-balance-indexer) | — |
| 2. | UI Module:general WebApp | <ul><li>[x] </li></ul> | [web3go-xyz/portal-ui](https://github.com/web3go-xyz/portal-ui/tree/7e1b67b7b657d17cd88bb1129a3f36749002ebf0) | also visible on https://web3go.xyz |  
| 3. | 3 more Data Boards: | <ul><li>[x] </li></ul> | [NFT Profiler](https://web3go.xyz/#/NFTProfiler), [MOVR staking](https://web3go.xyz/#/Moonriver), GLMR staking | also visible on https://web3go.xyz |  
| 4. | UI Module: semi-automatic chart generation | <ul><li>[x] </li></ul> | [web3go-xyz/portal-ui](https://github.com/web3go-xyz/portal-ui/blob/7d10c762c052d5dee87a8466f6093befc58a9adf/src/components/customQuery/CustomQuery.vue) | — |
| 5. | Support more Kusama Token: | <ul><li>[x] </li></ul> | [MOVR](https://github.com/web3go-xyz/moonbeam-balance-indexer/tree/moonriver-balance-indexer), [RMRK NFTs](https://github.com/web3go-xyz/RMRK-Indexer) | Pivoted from KAR and kUSD to MOVR and RMRK |


## General Notes

Very useful tool to quickly whip up statistics and graphs. Local setup was quite easy to reproduce. `npm audit` still shows some vulnerabilities, but most have been addressed during review.
