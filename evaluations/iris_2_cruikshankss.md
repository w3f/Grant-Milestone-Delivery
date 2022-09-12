# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/657
- **Milestone:** 2

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [X] | [Apache 2](https://github.com/iridium-labs/substrate/blob/iris-milestone-2/LICENSE-APACHE2) | No change to licenses used in Substrate |
| 0b. | Documentation | [X] | [docs](https://iridium-labs.github.io/), [mdbook source](https://github.com/iridium-labs/iris-docs) | Excellent. Very detailed and clear. |
| 0c. | Testing Guide | [X] | [doc](https://docs.google.com/document/d/1yFH74_yyJTSBXK3Lw3--2jgtqkyUkS4GoDvXlUsTlfw/edit?usp=sharing), [sheet](https://docs.google.com/spreadsheets/d/1ksROv3IsPmsm-QMIoMEhf_PyPob8Fz37vo6xDWWCO6U/edit#gid=1041485929), [video](https://www.youtube.com/watch?v=cDmQKB_xsO8) | Multiple explanations of how to test, thank you. |
| 0d. | Docker | [X] | [iris](https://hub.docker.com/repository/docker/iridiumlabs/iris), [UI](https://hub.docker.com/repository/docker/iridiumlabs/iris-ui) | Able to run both nodes via docker and use the Iris node for testing via the Polkadot explorer. |
| 0e. | Article | [X] | [medium](https://medium.com/iridium/iris-a-next-gen-decentralized-storage-layer-part-2-16afbe0739e0) | High-level concepts are well-organized and explained with concise clarity.  |
| 1a. | Substrate module: iris-session Runtime Module | [X] | [GitHub](https://github.com/iridium-labs/substrate/blob/iris_milestone_2/bin/node-template/pallets/iris-session/src/lib.rs) | Compiles from source & runs on Docker. |
| 1b. | Substrate module: iris-session Runtime Module Test | [X] | [mock helpers](https://github.com/iridium-labs/substrate/blob/iris_milestone_2/bin/node-template/pallets/iris-session/src/mock.rs), [tests](https://github.com/iridium-labs/substrate/blob/iris_milestone_2/bin/node-template/pallets/iris-session/src/tests.rs) | All tests pass. 
| 2. | User Interface | [X] | [GitHub](https://github.com/iridium-labs/ui/tree/iris_milestone_2) | Runs locally from source & from Docker. |


## Additional Notes

This milestone focused on the `iris-session` pallet which was forked from Parity's `session` pallet.

Their `ui` delivery is essentially a simplified & more user-friendly Polkadot explorer. 

This is a highly complex technology and they do a great job of simplifying it and explaining it in numerous ways. They provide highly-detailed testing guides and provided extensive support to me on Discord. 

I used these Rust toolchain commands to test at this commit hash `21d772c543b0d4355794e03210e79026bc8f5d33`:

```
rustup override set  nightly-2021-10-06
rustup target add wasm32-unknown-unknown --toolchain nightly-2021-10-06
```

The core of their project is that there are four roles that nodes can take in Iris:

- data owner (doesn't need iris-session)
- data consumer (need iris-session)
- validator (doesn't need iris-session)
- storage provider (need iris-session) (only validators can become storage providers)

To reiterate, `iris-session` is used in these cases:
- if a user wants to access a stored file that they own
- if a validator wants to become a storage provider

To test the `iris-session` pallet, they provide unit tests which cover events related to validators, the storage pool, and the off-chain ipfs worker. 

The `ui` is very simplified, and any additional manual testing is possible via the Polkadot explorer.

Wishing the team great success with Milestone 3!