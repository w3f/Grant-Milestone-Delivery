# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/6d20db668dd8964ad7e26eb5e63e77cf18830ae1/applications/Nolik.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [License](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/LICENCE) | Apache License 2.0 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [Installation instructions](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/README.md#installation), [Basic tutorial](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/README.md#sample-scenario), [Pallet with inline docs](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/src/lib.rs) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [pallet tests](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/src/tests.rs) | Tests pass. Core functionality is covered. |
| 0d. | Docker |<ul><li>[x] </li></ul>| [Image on dockerhub](https://hub.docker.com/r/chainify/substrate-nolik-dev), [Dockerfile](https://github.com/chainify/substrate-nolik-dev/blob/6f51575cbf1eef2898ad1da0b0fece99d4a65ec6/Dockerfile), [docker-compose.yml](https://github.com/chainify/substrate-nolik-dev/blob/6f51575cbf1eef2898ad1da0b0fece99d4a65ec6/docker-compose.yml) | A docker image was published on dockerhub. It contains a Substrate node as described in deliverable 3. |
| 1. | Substrate module: Account Rules |<ul><li>[x] </li></ul>| [Nolik Pallet](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/src/lib.rs) | Implemented. |
| 2. | Substrate module: Message Validation |<ul><li>[x] </li></ul>| [Nolik Pallet](https://github.com/chainify/pallet-nolik/blob/d683aef2069b96e3de705241723dc7ebe234ff42/src/lib.rs) | Implemented. |
| 3. | Substrate chain |<ul><li>[x] </li></ul>| [Substrate Node with Nolik pallet](https://github.com/chainify/substrate-nolik-dev/tree/6f51575cbf1eef2898ad1da0b0fece99d4a65ec6) | See [Substrate Chain Feedback](#substrate-chain-feedback) |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Documentation Feedback

- Installation instructions are clear.
- A basic tutorial is present, the steps are understandable and have been successfully tested.
- Inline documentation is present.

### Substrate Chain Feedback

- The Nolik pallet was properly integrated into a substrate node.
- The node runs properly using docker.
- The PolkadotJs webinterface can be used to access it.
- The [sample scenario](https://github.com/chainify/pallet-nolik#sample-scenario) was successfully tested on the running node.