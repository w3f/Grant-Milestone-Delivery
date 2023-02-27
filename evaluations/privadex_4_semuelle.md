# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
- **Milestone:** 4
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/kapilsinha/privadex-swap-ui/blob/a8cf17b3306123b9ae396f54125304ab471a8605/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/kapilsinha/privadex-swap-ui/blob/a8cf17b3306123b9ae396f54125304ab471a8605/README.md) | Not exactly a tutorial, but setup and use are basic enough. No inline docs. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/kapilsinha/privadex-swap-ui/blob/a8cf17b3306123b9ae396f54125304ab471a8605/README.md) | No unit tests; UI. |
| **0e.** | Article | <ul><li>[x] </li></ul> | [medium.com](https://medium.com/@kaprivadex/privadex-launch-ab7d6b6ad9db) | Engaging, high-level project description |
| 1. | S3 API for executor | <ul><li>[x] </li></ul> | [kapilsinha/privadex](https://github.com/kapilsinha/privadex/blob/62dfcf6a0ad78f9d2930915bef8069ec9d32cb38/dex_aggregator/common/src/utils/s3_api.rs) | Based on [christopherfkk/fat-contract-s3-sync](https://github.com/christopherfkk/fat-contract-s3-sync). |
| 2. | Executor module scheduler | <ul><li>[x] </li></ul> | [kapilsinha/privadex-swap-ui](https://github.com/kapilsinha/privadex-swap-ui/blob/edbd5f4ae5a61ea30cae488aa0e7dc583b6c09ef/drive_privadex_phat_contract.js#L142-L158) | — |
| 3. | QuoteGetter API | <ul><li>[x] </li></ul> | [kapilsinha/privadex-swap-ui](https://github.com/kapilsinha/privadex-swap-ui/blob/a8cf17b3306123b9ae396f54125304ab471a8605/src/phat_api/privadex_phat_contract_api.js#L130) | — |
| 4. | SwapRequest API | <ul><li>[x] </li></ul> | [kapilsinha/privadex-swap-ui](https://github.com/kapilsinha/privadex-swap-ui/blob/a8cf17b3306123b9ae396f54125304ab471a8605/src/phat_api/privadex_phat_contract_api.js#L157) | — |
| 5. | GetSupportedChainTokens API | <ul><li>[x] </li></ul> | [kapilsinha/privadex-swap-ui](https://github.com/kapilsinha/privadex-swap-ui/blob/a8cf17b3306123b9ae396f54125304ab471a8605/src/components/Modal/TokenModal.tsx#L39) | Reads list of tokens from JSON. |
| 6. | Swap UI | <ul><li>[x] </li></ul> | [kapilsinha/privadex-swap-ui](https://github.com/kapilsinha/privadex-swap-ui/tree/a8cf17b3306123b9ae396f54125304ab471a8605/src) | Does not work with node 16 or 17, but 18. Based on [nguyentung9820/DEX](https://github.com/nguyentung9820/DEX) |


## General Notes

- —
