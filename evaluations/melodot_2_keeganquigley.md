# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Melodot.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number  | Deliverable                    | Link                                                         | Accepted                                                     | Notes                                                        |
| ------- | ------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                        | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | <ul><li>[x] </li></ul> | Apache 2.0                                                   |
| **0b.** | Documentation                  | [Docs](https://docs.melodot.io/ )                            | <ul><li>[x] </li></ul> | It includes the `learn` and `guide` sections that provide a introduction to Melodot and how to use it, with more detailed information available in the inline documentation. |
| **0c.** | Testing and Testing Guide      | [Testing Guide](https://github.com/ZeroDAO/melodot/blob/w3f/TESTING.md) | <ul><li>[x] </li></ul> | Includes unit tests and e2e tests.                           |
| **0d.** | Docker                         | [Start](https://github.com/ZeroDAO/melodot/tree/w3f#5-docker) [Testing](https://github.com/ZeroDAO/melodot/blob/w3f/TESTING.md#using-docker) | <ul><li>[x] </li></ul> | Run all unit tests, run the development network, and execute e2e tests within Docker. |
| 1.      | Substrate pallet: excutive_das | [pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/frame-executive-ext) | <ul><li>[x] </li></ul> | The existing pallet has been modified as expected to be compatible with the new block header while keeping all tests compatible. |
| 2.      | Substrate pallet: system_das   | [Pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/frame-system-ext) | <ul><li>[x] </li></ul> | Extend the `frame-system` pallet to support the creation of extended headers. |
| 3.      | Substrate pallet: melo_store   | [Pallet](https://github.com/ZeroDAO/melodot/tree/w3f/crates/pallet-melo-store) | <ul><li>[x] </li></ul> | A core pallet for handling data availability. Main features include: 1) Registering applications. 2) Allowing users to submit data metadata. 3) Validators accessing off-chain storage via OCW and reporting unavailable data. 4) Interface for creating extended block header. |
| 4.      | melodot-client                 | [Node](https://github.com/ZeroDAO/melodot/tree/w3f/node)     | <ul><li>[x] </li></ul> | A substrate client containing a complete data availability layer. It has successfully completed all the core functions as expected, which can be validated through e2e tests. |

# General Notes

