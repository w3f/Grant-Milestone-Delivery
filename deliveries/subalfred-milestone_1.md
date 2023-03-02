# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Subalfred](https://github.com/w3f/Grants-Program/blob/master/applications/subalfred.md)
* **Milestone Number:** 1

**Deliverables**
| Number | Deliverable                        | Link                                                                                                                                                                                    | Notes |
| ------ | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 0a.    | License                            | [GPL-3.0](https://github.com/hack-ink/subalfred/blob/main/LICENSE)                                                                                                                      |       |
| 0b.    | Documentation                      | [Code documentation](https://docs.rs/releases/search?query=subalfred), [user guide](https://subalfred.hack.ink), [Substrate Seminar](https://www.crowdcast.io/e/substrate-seminar-2/26) |       |
| 0c.    | Testing guide                      | [Additional Information 2](#26)                                                                                                                                                         |       |
| 0d.    | Functionality testing              | [Additional Information 2](#26)                                                                                                                                                         |       |
| 1.     | Core: `check features` command     | https://github.com/hack-ink/subalfred/pull/207                                                                                                                                          |       |
| 2.     | Core: use paritytech/ss58-registry | https://github.com/paritytech/ss58-registry/pull/106                                                                                                                                    |       |
| 3.     | Core, CLI: override runtime code   | https://github.com/hack-ink/subalfred/pull/262                                                                                                                                          |       |
| 4.     | Core, CLI: `rpc` command           | https://github.com/hack-ink/subalfred/pull/260                                                                                                                                          |       |
| 5.     | CLI: JSON output                   | https://github.com/hack-ink/subalfred/pull/261                                                                                                                                          |       |
| 6.     | CLI: support stable Rust toolchain | https://github.com/hack-ink/subalfred/pull/195                                                                                                                                          |       |
| 7.     | CLI: `--at` accept block number    | https://github.com/hack-ink/subalfred/pull/259                                                                                                                                          |       |
| 8.     | Release                            | [GitHub release](https://github.com/hack-ink/subalfred/releases), [crates.io](https://crates.io/crates/subalfred)                                                                       |       |

**Additional Information**
1. You could also run `cargo doc --open` in the repository root and it will open the documentation locally.
2. I made all tests into Rust unit test. Simply run `cargo test` in the repository root, then check the results.
3. I improve the **3.** It's possible to modify any chain state.
4. I realize that it is much easier for you to test this with a simple `cargo test` command. So, I decide to use cargo instead of docker for **4.**.
