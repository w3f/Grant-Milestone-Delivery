# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/evanesco_networks.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable          | Accepted               | Link                                                                                                                                                                  | Evaluation notes                                                                                                                   |
|--------|----------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License              | <ul><li>[x] </li></ul> | [WhiteNoise.rs](https://github.com/Evanesco-Labs/WhiteNoise.rs/blob/main/LICENSE),[WhiteNoise-RPC](https://github.com/Evanesco-Labs/WhiteNoise-RPC/blob/main/LICENSE) |                                                                                                                                    |
|    0b. | Documentation        | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/WhiteNoise.rs/blob/94372dc6d2ab5958b747529aa6899ab070b623bd/whitenoise.md)                                                    |                                                                                                                                    |
|    0c. | Testing Guide        | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/substrate/blob/master/tutorial.md)                                                                                            |                                                                                                                                    |
|    0d. | Article/Tutorial     | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/substrate/blob/master/tutorial.md)                                                                                            | Tutorial improved                                                                                                                  |
|     1. | P2Private-rust Repo  | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/WhiteNoise.rs)                                                                                                                |                                                                                                                                    |
|     2. | private service node | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/substrate.git)                                                                                                                | Integration with substrate limited to running the WhiteNoise.rs binary alongside the substrate node, which can accept RPC requests |
|     3. | Testnet              | <ul><li>[x] </li></ul> | [Link](https://github.com/Evanesco-Labs/substrate/blob/master/tutorial.md#4-whitenoise-testnet)                                                                       | Straightforward to setup after the documentation had been updated                                                                  |

## General notes

### Testnet

Some warnings emitted: 
```
Dial upgrade error Upgrade(Select(Failed))
```

This happens at every connection. Would be good to either address the issue, or if non-important at all to the functionality of this project, silence it.

Quick testnet validation with e.g. a Docker setup would be advantagous. Please consider that for your future projects. It's also easy to then set-up CI/CD pipeline that runs an integration test before making changes to master.
