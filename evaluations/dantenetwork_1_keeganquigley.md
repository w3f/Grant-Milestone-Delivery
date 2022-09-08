# Evaluation

- **Status:** Accepted
- **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPLv3](https://github.com/dantenetwork/protocol-stack-for-ink/blob/feature-evaluation/LICENSE) | |
| 0b. | Documentation | <ul><li>[x] </li></ul> | - [Tech white Paper](https://github.com/dantenetwork/Pitch-Deck/blob/main/Dante%20Network%EF%BC%9AThe%20_Internet%20protocol%20stack_%20of%20Web3.pdf) <br> - [Website](https://www.dantechain.com/) <br> - [SDK guide](https://github.com/dantenetwork/ink-sdk) | - White paper provides detailed descriptions of how the different components will work together. <br> - Website works nicely. <br> - SDK guide explains the call functions and includes examples.|
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | - [Functionality Test Report](https://docs.google.com/document/d/1Mc_VorQ5m5GMMtNKhW_KcI60Pwx681Ur5rjMrp1s38k/edit?usp=sharing) <br> - [Algorithms Test](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm) <br> - [Test Guide for Trying](https://github.com/dantenetwork/cross-chain-demo/tree/main) <br> - [Test Videos](https://dante-network.oss-cn-hangzhou.aliyuncs.com/Prototype_Multichain_SmartContract_invocation%20.mp4) | - `Functionality Test Report` looks good. <br> - `Algorithms Test` runs successfully. <br> - Demo works successfully and all deployed contracts (`greeting`, `oscomputing`, `cross-chain`) run on both Shibuya testnet as well as local `substrate-contracts-node`. | 
| 0d. | Article | <ul><li>[x] </li></ul> | https://dantechain.com/blog/detail/101 <br> https://dantechain.com/blog/detail/103 <br> https://dantechain.com/blog/detail/109 | Articles provide detailed overview of Dante protocol stack and service presentation layer.| 
| 1   | (ink!)smart contracts: Service expression layer | <ul><li>[x] </li></ul> | [message protocol in ink!](https://github.com/dantenetwork/message-ink/tree/develop) | Tests and compiles successfully on local --dev node. | 
| 2.  | (ink!)smart contracts: message verification algorithm | <ul><li>[x] </li></ul> | - [link](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L296) <br> - [Intuitively Test Trying Guide](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#message-verification) | Tests and compiles successfully on local --dev node. | 
| 3.  | (ink!)smart contracts: router credibility evaluation algorithm | <ul><li>[x] </li></ul> | - [link](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L355) <br> - [Intuitively Test Trying Guide](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-evaluation) | Tests and compiles successfully on local --dev node. | 
| 4.  | off-chain routers: general message sharing | <ul><li>[x] </li></ul> | [Ink! part](https://github.com/dantenetwork/protocol-stack-for-ink/tree/green-leaf/leaf) | Looks good. | 
| 5.  | (Rust)SDK: general message sharing | <ul><li>[x] </li></ul> | [ink! sdk](https://github.com/dantenetwork/ink-sdk) | Looks good. | 

## General Notes

Overall I think the team has put a lot of effort into this delivery. Cool use case for ink! smart contracts. The contracts have great inline documentation for the most part.

Quick communication from the team, and compile errors were fixed upon request. Only concern regarding this delivery is cleanliness of code, such as removing ink! template comments and general file organization on GitHub, but the team addressed these concerns and is committed to working on housekeeping moving forward.

Finally, here are some resources that my colleagues have provided on past ink! smart contract evals:

* If you haven't used it yet, https://contracts-ui.substrate.io/ is a nice tool for quickly getting a feel for what the experience is like for callers of your contracts, and for finding missing documentation:

![contracts ui](https://user-images.githubusercontent.com/35080151/186529509-2dcd1da1-0b70-4033-8380-341660aa6f01.png)

* I also find some warnings raised when running `cargo +nightly clippy -- -A clippy::let_unit_value`, you may want to check these out to see if your smart contract code can be improved. (`-A clippy::let_unit_value` removes warnings for a specific lint created by some the macro expansions which you have no control over).

* **Please note:** No security audits have been conducted as part of this evaluation.
