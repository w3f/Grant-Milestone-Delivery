# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/6d20db668dd8964ad7e26eb5e63e77cf18830ae1/applications/Nolik.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [License](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/LICENCE) | Apache License 2.0 |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| [Installation instructions](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/README.md#installation), [Basic tutorial](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/README.md#sample-scenario), [Pallet with inline docs](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| [pallet tests](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/tests.rs) | Tests pass. Core functionality is mostly covered, except the following error types: `AddressNotOwned`, `SameAddress`. Please consider adding tests for these as well. |
| 0d. | Docker |<ul><li>[x] </li></ul>| [Image on dockerhub](https://hub.docker.com/r/chainify/substrate-nolik-dev), [Dockerfile](https://github.com/chainify/substrate-nolik-dev/blob/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2/Dockerfile), [docker-compose.yml](https://github.com/chainify/substrate-nolik-dev/blob/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2/docker-compose.yml) | A docker image was published on dockerhub. It contains a Substrate node as described in deliverable 3. |
| 1. | Substrate module: Account Rules |<ul><li>[x] </li></ul>| [Nolik Pallet](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs) | Implemented. |
| 2. | Substrate module: Message Validation |<ul><li>[x] </li></ul>| [Nolik Pallet](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs) | Implemented. |
| 3. | Substrate chain |<ul><li>[x] </li></ul>| [Substrate Node with Nolik pallet](https://github.com/chainify/substrate-nolik-dev/tree/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2) | See [Substrate Chain Feedback](#substrate-chain-feedback) |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Documentation Feedback

- Installation instructions are clear.
- A basic tutorial is present, the steps are understandable and have been successfully tested.
- Inline documentation is present to a certain extend but large parts of the pallets don't have any inline documentation at all. For example, the [extrinsics section](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs#L110) at `#[pallet::call]` as well as the [implementation section for the queryable methods](https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs#L219). Please make sure to add inline comments there as well since it will help other users that may want to reuse your code to get a better understanding of it.
- Regarding the naming I personally was a bit confused about names like `list_of` and `list_el`. Feel free to use variable names that more adequately describe the concepts they represent.

### Substrate Chain Feedback

- The Nolik pallet was properly integrated into a substrate node.
- The node runs properly using docker.
- The PolkadotJs webinterface can be used to access it.
- The [sample scenario](https://github.com/chainify/pallet-nolik#sample-scenario) was successfully tested on the running node.