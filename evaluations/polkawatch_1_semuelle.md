# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkawatch.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/969d022cf6226a180edb9d33bafc0a77237f2e46/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Readme.md](https://gitlab.com/polkawatch/polkawatch/-/blob/969d022cf6226a180edb9d33bafc0a77237f2e46/Readme.md), [lqs/Readme.md](https://gitlab.com/polkawatch/polkawatch/-/blob/969d022cf6226a180edb9d33bafc0a77237f2e46/packages/lqs/Readme.md) | Thorough. Good inline documentation as well. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Readme.md](https://gitlab.com/polkawatch/polkawatch/-/tree/969d022cf6226a180edb9d33bafc0a77237f2e46#testing-guide) | Great setup and testing guide. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/969d022cf6226a180edb9d33bafc0a77237f2e46/docker-compose.yml) | — |
| 1. | Indexer Extension | <ul><li>[x] </li></ul> | [packages/indexer](https://gitlab.com/polkawatch/polkawatch/-/tree/ff56e722297895166d2c92e07a21f772238ca73d/packages/indexer/src) | — |
| 2. | Live Query Server | <ul><li>[x] </li></ul> | [packages/lqs](https://gitlab.com/polkawatch/polkawatch/-/tree/090087174cc72bbd59a3a0f6f13c4090b0ac9137/packages/lqs) | — |
| 3. | Gitlab Pipelines | <ul><li>[x] </li></ul> | [.gitlab-ci.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/cf2bd5038eedc2035afdd892e10a4a583dfeb0d8/.gitlab-ci.yml)  | Automated unit testing on commits; docker image build and upload |


## General Notes

Great delivery. Documentation is excellent, setup was a breeze. Interesting data. Comes with query and swagger interface.
