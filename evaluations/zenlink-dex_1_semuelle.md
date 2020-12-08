# Evaluation


* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/104 
* **Milestone:** 1
* **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
* **Previously successfully merged evaluation:** —


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x]</li></ul> |[License](https://github.com/zenlinkpro/zenlink-dex-contract/blob/main/LICENSE)| — |
| 1. | Technical specifications and Zenlink DEX Module design |<ul><li>[x]</li></ul>|[zenlink_whitepaper_en.pdf](https://github.com/zenlinkpro/whitepaper/blob/3af1af967dde202b0376ed84671de979da7693f5/en/zenlink_whitepaper_en.pdf)| — |
| 2. | Zenlink DEX Smart Contract Repository |<ul><li>[x]</li></ul>|[Link](https://github.com/zenlinkpro/zenlink-dex-contract/commit/4d0da281c8e2251d11c28bea349a50c534b34ebf)| see [General Notes](#general-notes) |
| 3. | Tests | <ul><li>[] </li></ul> | [Link to repo](https://github.com/zenlinkpro/zenlink-dex-contract) | no unit tests |
| 4. | Docker | <ul><li>[x] </li></ul> | [DockerHub](https://hub.docker.com/layers/zenlinkpro/dex/zenlink-canvas-node/images/sha256-daad0726a1db8b5f9ed792ae778623cbc10f283c638fbaa07af5acbb48b20584?context=explore) | — |
| 5. | Tutorial | <ul><li>[] </li></ul> | [Google Doc](https://docs.google.com/document/d/1zoXwg0VuMGlNnUAmz9TYubKX-B2dwJ54a5z4fSYss0E/edit?usp=sharing) | no access to doc |



## General Notes

The setup instructions are not functional. `zenlink_contract_builder` should be `zenlinkpro/dex:zenlink_contract_builder` and the `docker run` commands need to be run from different directories. The README could generally use a little more detail.

The proposal includes "proper unit-test coverage to ensure functionality and robustness". However, there are none. Manual testing, as proposed, worked.
