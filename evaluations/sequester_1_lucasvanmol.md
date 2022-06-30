# Evaluation

- **Status:** Accepted
- **Application Document:** [Sequester Application](<https://github.com/w3f/Grants-Program/blob/master/applications/sequester.md>) 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> |  [License Link](https://github.com/SequesterChain/pallets/blob/main/donations/LICENSE)| Apache 2.0 |
| 0b.  | Documentation |<ul><li>[x] </li></ul> |[Documentation Link](https://github.com/SequesterChain/pallets/tree/main/donations#documentationconfiguration-options)| |
| 0c.  | Testing |<ul><li>[x] </li></ul> |[Testing Link](https://github.com/SequesterChain/pallets/tree/main/donations#testing)| |
| 0d.  | Docker |<ul><li>[x] </li></ul> |[Docker Link](https://github.com/SequesterChain/sequester-example-node#run-in-docker)| Running Docker compose runs into an error on M1 macs, which seems to be an upstream issue on [substrate-node-template](https://github.com/substrate-developer-hub/substrate-node-template) |
| 1.  | Calculate Transaction Fees |<ul><li>[x] </li></ul> |[Calculate Txn Fees Link](https://github.com/SequesterChain/pallets/blob/w3f_milestone_1_submission/donations/src/lib.rs#L192-L211)| |
| 2.  | Send to Sequester |<ul><li>[x] </li></ul> |[Send To Sequester Link](https://github.com/SequesterChain/pallets/blob/w3f_milestone_1_submission/donations/src/lib.rs#L327-L362)| XCM call will remain mocked until the final architecture of the Sequester Common Good Chain is finalized |
| 3.  | Article/Tutorial |<ul><li>[x] </li></ul> | [Article Link](https://medium.com/@sequester.chain/introducing-sequesters-donations-pallet-3e55f54cdfd1) | |
| 4.  | Weight estimation |<ul><li>[x] </li></ul> |[Weights Estimation Link](https://github.com/SequesterChain/pallets/blob/main/donations/src/weights.rs)| |




## General Notes

Overall a relatively simple milestone, but the delivery is good. It will be interesting to see how the project grows from here.

---

`docker-compose up` error on M1 Mac (from eval notes `0d`):

```
sequester-example-node % docker-compose up
[+] Running 2/2
 ⠿ Network sequester-example-node_default  Created                                                                                                                                                     0.0s
 ⠿ Container node-template                 Created                                                                                                                                                     0.1s
Attaching to node-template
node-template  | warning: /var/www/node-template/runtime/Cargo.toml: unused manifest key: dependencies.log.feature
node-template  |     Updating crates.io index
node-template  | bash: line 1:     8 Killed                  cargo build --release
node-template exited with code 137
```

