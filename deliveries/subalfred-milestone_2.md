# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Subalfred](https://github.com/w3f/Grants-Program/blob/master/applications/subalfred.md)
* **Milestone Number:** 2

**Deliverables**
| Number | Deliverable                      | Link                                                                                                              | Notes |
| ------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| 0a.    | License                          | [GPL-3.0](https://github.com/hack-ink/subalfred/blob/main/LICENSE)                                                |       |
| 0b.    | Documentation                    | [Code documentation](https://docs.rs/releases/search?query=subalfred), [user guide](https://subalfred.hack.ink)   |       |
| 0c.    | Testing guide                    | [Additional Information 2](#20)                                                                                   |       |
| 1.     | Core, CLI: track-update          | https://github.com/hack-ink/subalfred/pull/303                                                                    |       |
| 2.     | Core, CLI: workspace update-deps | https://github.com/hack-ink/subalfred/pull/308                                                                    |       |
| 3.     | Release                          | [GitHub release](https://github.com/hack-ink/subalfred/releases), [crates.io](https://crates.io/crates/subalfred) |       |

**Additional Information**
1. You could also run `cargo doc --open` in the repository root and it will open the documentation locally.
2. I made all tests into Rust unit test. Simply run `cargo test` in the repository root, then check the results.
3. `track-updates` was renamed to `track-update` in the code.
4. `update-subdeps` was renamed to `workspace update-deps` in the code.
