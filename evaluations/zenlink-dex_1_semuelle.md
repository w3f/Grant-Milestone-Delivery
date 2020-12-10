# Evaluation


* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/104 
* **Milestone:** 1
* **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
* **Previously successfully merged evaluation:** All by semuelle


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> |[License](https://github.com/zenlinkpro/zenlink-dex-contract/blob/main/LICENSE)| — |
| 1. | Technical specifications and Zenlink DEX Module design |<ul><li>[x] </li></ul>|[zenlink_whitepaper_en.pdf](https://github.com/zenlinkpro/whitepaper/blob/3af1af967dde202b0376ed84671de979da7693f5/en/zenlink_whitepaper_en.pdf)| v0.6, adds chapter on smart contracts |
| 2. | Zenlink DEX Smart Contract Repository |<ul><li>[x] </li></ul>|[Link](https://github.com/zenlinkpro/zenlink-dex-contract/commit/4d0da281c8e2251d11c28bea349a50c534b34ebf)|  |
| 3. | Tests | <ul><li>[x] </li></ul> | [Link to repo](https://github.com/zenlinkpro/zenlink-dex-contract) | see [General Notes](#general-notes) |
| 4. | Docker | <ul><li>[x] </li></ul> | [DockerHub](https://hub.docker.com/layers/zenlinkpro/dex/zenlink-canvas-node/images/sha256-daad0726a1db8b5f9ed792ae778623cbc10f283c638fbaa07af5acbb48b20584?context=explore) | — |
| 5. | Tutorial | <ul><li>[x] </li></ul> | [Google Doc](https://docs.google.com/document/d/1zoXwg0VuMGlNnUAmz9TYubKX-B2dwJ54a5z4fSYss0E/edit?usp=sharing) | see [General Notes](#general-notes) |



## General Notes

After initial feedback, the setup instructions were fixed and improved. The README and tutorial could still use a little more detail.

`clippy` shows several `Style` and `Complexity` warnings on all contracts.

Crucial functions are documented with rustdoc.

Unit tests have been added after discussion. Largely due to limitations in the ink! test environment, the tests only cover token transfers and price calculations. `cargo-tarpaulin` results:

| Contract    | Coverage % |
|-------------|------------|
| ERC20       | 90.43%     |
| Factory     | 26.72%     |
| Exchange    |  0.00%     |
