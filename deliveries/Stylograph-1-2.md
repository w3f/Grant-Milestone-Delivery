# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Stylograph.md
* **Milestone Number:** 1
* **Milestone Number:** 2

## Context
Both milestones were completed simultaneously for practical development reasons. The project was initially named "Stylograph," but has been renamed to `pallet_hookpoints` to align with traditional Substrate naming conventions. The frontend part is also fully completed. A detailed walkthrough of the development process and features is documented in a [Medium article](https://medium.com/@GenesisDAO/introducing-the-hookpoints-pallet-377de6680c2d).

If you want to try it out, Genesis DAO has its own testnet:
- [The frontend](https://www.genesis-dao.org/)
- [The backend service](https://service.genesis-dao.org/redoc/)
- [The node](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fnode.genesis-dao.org#/)

> Note: This is a testnet. It does not have real tokens, the alice/bob test accounts are available for free use, and we are resetting this testnet regularly. Do not use for production use cases and do not expect data to remain.

If you want to build from source, note that we upgraded to polkadot-1.0.0. And (similar to the frame pallets) you should link `pallet_hookpoints` from GitHub like this: https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/pallets/dao-votes/Cargo.toml#L26

Note that Genesis DAO now has a Cumulus/parachain integration, so compiling no longer yields a `genesis-dao` binary but a `genesis-dao-solochain` binary. This is the one used in our testnet.

## Milestone 1 Deliverables

| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| 0a.    | License | [GitHub License](https://github.com/deep-ink-ventures/pallet_hookpoints/blob/main/LICENSE) | Apache 2.0 license for `pallet_hookpoints` |
| 0b.    | Documentation | [Medium Article](https://medium.com/@GenesisDAO/introducing-the-hookpoints-pallet-377de6680c2d), [README](https://github.com/deep-ink-ventures/pallet_hookpoints/blob/main/README.md) | Exhaustive inline documentation and basic tutorial provided. See also the Medium article for a detailed walkthrough. |
| 0c.    | Testing and Testing Guide | [GitHub](https://github.com/deep-ink-ventures/pallet_hookpoints/blob/main/src/tests.rs) | High test coverage. Tests can be run using `cargo test` |
| 0d.    | Benchmarking | [GitHub](https://github.com/deep-ink-ventures/pallet_hookpoints/blob/main/src/benchmarking.rs) | Pallet Hookpoints includes benchmarks |
| 0e.    | State of the art Tech Stack | N/A | Utilizes next.js/react for frontend, python/django for backend, and rust for Substrate components |
| 1.     | Pallet Development | [GitHub](https://github.com/deep-ink-ventures/pallet_hookpoints), [Crates.io](https://crates.io/crates/pallet-hookpoints) | Developed as specified in the original proposal |
| 2.     | Frontend Integration: Dashboard Add-On | [Walkthrough](https://docs.google.com/document/d/1GDqfZnigri5qp6sJoIu4655NALk0cMxDl3BMAnnbGWc/edit?usp=sharing), [Website](https://genesis-dao.org) | See the walkthrough or visit genesis-dao.org for more details |
| 3.     | Frontend Integration: Token Transfer | [Walkthrough](https://docs.google.com/document/d/1GDqfZnigri5qp6sJoIu4655NALk0cMxDl3BMAnnbGWc/edit?usp=sharing), [Website](https://genesis-dao.org) | See the walkthrough or visit genesis-dao.org for more details |

## Milestone 2 Deliverables

| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| 0a.    | License | [GitHub License](https://github.com/deep-ink-ventures/hookpoints-cli/blob/main/LICENSE) | Apache 2.0 license for `hookpoints-cli` |
| 0b.    | Documentation | [Medium Article](https://medium.com/@GenesisDAO/introducing-the-hookpoints-pallet-377de6680c2d), [README](https://github.com/deep-ink-ventures/hookpoints-cli/blob/main/README.md) | Exhaustive inline documentation and basic tutorial. Medium article provides a detailed walkthrough |
| 0c.    | Testing and Testing Guide | [GitHub](https://github.com/deep-ink-ventures/hookpoints-cli/tree/main/src/tests) | High test coverage. Tests can be executed using `cargo test` |
| 0d.    | State of the art Tech Stack | N/A | Utilizes next.js/react for frontend, python/django for backend, and rust for Substrate components |
| 1.     | Facade Builder | [GitHub](https://github.com/deep-ink-ventures/hookpoints-cli), [Crates.io](https://crates.io/crates/hookpoints-cli) | CLI generates `hooks.rs` and all boilerplate/trait code. Refer to the Medium article for details |
| 2.     | Reference Implementation | [GitHub Example](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/pallets/dao-votes/src/tests.rs#L342-L379) | Genesis DAO uses this implementation. An example can be found at the provided GitHub link |
| 3.     | Frontend Integration: Councils Management | [Walkthrough](https://docs.google.com/document/d/1GDqfZnigri5qp6sJoIu4655NALk0cMxDl3BMAnnbGWc/edit?usp=sharing) | See the Walkthrough or create a proposal and mark it as faulty, then visit the transaction page for more details |

## Additional Information

- The project was initially named "Stylograph" but was renamed to `pallet_hookpoints` to align with traditional Substrate naming conventions.
- The CLI tool (`hookpoints-cli`) was developed alongside the pallet (`pallet_hookpoints`).
- Both `pallet_hookpoints` and `hookpoints-cli` have been released as version 1.0.0, which serves as the reference for this milestone. We are actively adding new features to both.
- We are actively integrating `pallet_hookpoints` into Genesis DAO. An example of its usage is the planned integration of vesting wallets, which will be respected by the votes hookpoint. More details can be found in this [GitHub issue](https://github.com/deep-ink-ventures/genesis-dao-node/issues/117).
- A detailed walkthrough has been provided through a [Medium article](https://medium.com/@GenesisDAO/introducing-the-hookpoints-pallet-377de6680c2d).
- The frontend part is fully completed
