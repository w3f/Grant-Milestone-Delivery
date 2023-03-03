# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md
* **Milestone Number:** 1

**Context**
Tuxedo is a runtime framework for writing Substrate runtimes in the UTXO model. It is analogous (and an alternative) to FRAME which uses the accounts model. This is the first of three milestones in the grant.

In this milestone we have written focused primarily on the on-chain aspects. This includes the **core of the Tuxedo system**, the first and most important "piece" (analogous to a pallet) which we call the **money piece** that represents a bitcoin-like cryptocurrency, several other **example pieces**, and a **template** node and runtime using the Tuxedo system.

We have also put together a minimal PoC "wallet" for spending coins, but this wallet is nowhere near production ready; the real wallet will be developed in milestone two. Similarly, the project's [readme](https://github.com/Off-Narrative-Labs/Tuxedo/#readme) contains instructions to test the code both through unit tests and manually with the PoC wallet, but this is not the final tutorial; a detailed written tutorial and accompanying video tutorial will be developed in milestone 3.

**Deliverables**

| Number | Deliverable | Link(s)       | Notes |
| ------ | ----------- | ------------- |------------- |
| 0a.    | License     | [LICENSE file](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/LICENSE) | Apache 2.0, as recommended | 
| 0b.    | Documentation | [Hosted Rustdocs](https://off-narrative-labs.github.io/Tuxedo), [Readme](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main#readme) | We have detailed rustdocs throughout the project; they are also hosted. Instructions for using Tuxedo are in the Readme. | 
| 0c.    | Testing     | [Readme Section](TODO) | We have good unit test coverage throughout the project. The tests are run in CI and instructions for running them locally are in the readme. Instructions for testing the node manually with the PoC wallet in the Readme. |
| 0d.    | Docker      | [Node Dockerfile](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/Dockerfile), [PoC Wallet Dockerfile](TODO), [Readme Section](TODO) | We provide docker images for both the template node and the PoC wallet as well as instructions for how to test the node with them. |
| 1.     | Tuxedo Core | [Core Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_core/index.html), [Core Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/tuxedo-core) | |
| 2.     | Money Piece | [Money Rustdocs](TODO), [Money Code](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/frameless-runtime/src/money.rs) | |
| 3.     | Tuxedo Template | [Node Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/node), [Runtime Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/frameless-runtime), [Runtime Rustdocs](https://off-narrative-labs.github.io/Tuxedo/frameless_runtime/index.html) | There is not much to see in the node code, it is 95% copied from the Substrate node template. We recommend spending review effort on the Runtime. |
| Bonus  | Other Example Pieces | [Amoeba](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/frameless-runtime/src/amoeba.rs), [PoE](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/frameless-runtime/src/poe.rs), [Runtime Upgrade](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/frameless-runtime/src/runtime_upgrade.rs) | We found it useful to write a few more example tuxedo pieces while we were designing the core. Maybe you want to see them too. These pieces were not required by the grant, so they are not all tested or completed up to grant standards (although some of them are). |

**Additional Information**
Thanks for the opportunity to work on this. We look forward to the next two milestones and beyond.
