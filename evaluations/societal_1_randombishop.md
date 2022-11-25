# Evaluation



- **Status:** Accepted
- **Application Document:** [Societal](https://github.com/sctllabs/Grants-Program/blob/master/applications/Societal.md)
- **Milestone:** 1
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| -----: | ----------- | -------- | ---- | ---------------- |
| 0a. | License | Yes | [License]([GitHub repo link](https://github.com/sctllabs/societal-grant-submission/blob/main/LICENSE)) | Apache 2.0 |
| 0b. | Documentation | Yes | [Readme](https://github.com/sctllabs/societal-grant-submission/blob/main/README.md) | OK |
| 0c. | Testing Guide | Yes | [Testing guide](https://github.com/sctllabs/societal-grant-submission/blob/main/docs/TestingGuide.md) | Nice bonus would be to add some context and explanations to the guide to make each step easier to understand. Like what is actually happening under the hood at each step. |
| 0d. | Docker | Yes | [Docker Image](https://hub.docker.com/layers/societal/societal-node/v67af404/images/sha256-a4de91a608c221c7e025df1311c9eccd9c10b90e4d0e1920dae32bd1097685c3?context=explore) | OK |
| 0e. | Article | Yes | Same as testing guide above | OK |
| 1. | Substrate module: DAO Factory | Yes | [Pallets](https://github.com/sctllabs/societal-grant-submission/tree/main/pallets) | OK |
| 2. | Client Modules | Yes | [Polkadot-JS](https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944) & [Societal UI](https://github.com/sctllabs/societal-front-end/tree/w3f-grant-minor-ui-update) | OK |




## General Notes

The milestone works as expected.

At this point, it is an adaptation of 
substrate pallets `frame/collective`, `frame/treasury` and `frame/membership` 
with data stored per DAO instead of a single one.



## Improvement suggestions:

- Add some context and explanations to the testing guide to make each step easier to understand. 
Like what is actually happening under the hood at each step.

- For next milestone, please include an end-user-facing article that 
shows how to use the features of Societal and clarifies the expectations of each function.

