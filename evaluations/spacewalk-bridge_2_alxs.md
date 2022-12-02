# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/spacewalk-bridge.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
|    0a. | License | <ul><li>[x] </li></ul>                  | [LICENSE](https://github.com/pendulum-chain/spacewalk/blob/main/LICENSE) | Apache 2.0 |
|    0b. | Documentation | <ul><li>[x] </li></ul>            | [demo tutorial](https://satoshipay.notion.site/Spacewalk-Stellar-Oracle-Demo-Documentation-a3341e692d754d649b74bff9ac47e800) | Good inline documentation and demo walkthrough
|    0c. | Testing Guide | <ul><li>[x] </li></ul>            | [guide](https://github.com/pendulum-chain/spacewalk/tree/web-3-milestone-2/pallets/stellar-relay) | Unit tests also available in other pallets
|    0d. | Article | <ul><li>[x] </li></ul>                  | https://pendulum-chain.medium.com/introducing-the-stellar-oracle-ce4b85244cc8 | Well-written and accessible
|     1. | Protocol specification | <ul><li>[x] </li></ul>   | https://satoshipay.notion.site/Stellar-Oracle-Protocol-Specification-38ce4edc3e3b4c929a10097a7ae2ac12 | Rather informal for a protocol specification, but also more accessible. Only covers the oracle delivered in this milestone as per the application.
|     2. | Stellar oracle consensus | <ul><li>[x] </li></ul> | [relay pallet](https://github.com/pendulum-chain/spacewalk/tree/web-3-milestone-2/pallets/stellar-relay), [agent](https://github.com/pendulum-chain/stellar-experiments/tree/2b1181e483cedbe0c4fd8750b8c0a3adf6e0cf2f) | Agent implementation seems to be more of a stub than a finished delivery, `stellar-experiments` contains no documentation or unit tests [fixed, repo now contains explanatory README and comprehensive tests]

## General Notes

See notes for the individual deliverables. 

`cargo clippy` returns a number of warnings in both repositories, and `cargo test` returned one failed test in `stellar-experiments` [fixed].

Great high-level and inline documentation as well as code readibility in all repos.
The protocol specification needs to be significantly expanded and merged with that of other components, which may happen at a later date.

As mentioned above, the agent looks like only a minimal implementation as the name of the repository suggests [fixed, team intended to merge it into the `spacewalk` repository].
