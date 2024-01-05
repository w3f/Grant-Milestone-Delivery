# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).** 

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo_parachain.md
* **Milestone Number:** 1

**Context**

Tuxedo is a framework for writing Substrate runtimes in the UTXO model. It is analogous (and an alternative) to FRAME which uses the accounts model. In this grant we are adding parachain support to Tuxedo.

In this first milestone we have built the `tuxedo-parachain-core` crate which handles the bulk of the in-runtime parachain logic. We have also built a `parachain` piece (analogous to a FRAME pallet) to accept the parachain inherent.

While the `validate-block` implementation is not expected until the next milestone, we have already built a working (but not fully secure yet) prototype to test the core parachain deliverables in a real testnet.

**Deliverables**

I didn't specify the deliverables _that_ clearly in the application because I didn't know the exact form the final implementation would take yet. Now that it is done, I'll add a few "bonus" deliverables in addition to what I originally proposed. This should help you better understand the structure and scope of the work, and evaluate the submission more thoroughly.

| Number | Deliverable | Link(s)       | Notes |
| ------ | ----------- | ------------- |------------- |
| 0a.    | License     | [LICENSE file](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/LICENSE) | Apache 2.0, as recommended. | 

| 0b.    | Documentation | [Hosted Rustdocs](https://off-narrative-labs.github.io/Tuxedo), [Readme](https://github.com/Off-Narrative-Labs/Tuxedo#readme) | We have detailed rustdocs throughout the project; they are also hosted. There is also a detailed project Readme. | 

| 0c.    | Testing     | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#testing-and-code-quality) | We have good unit test coverage throughout the project. The tests are run in CI and instructions for running them locally are in the readme. Instructions for testing the node manually with the PoC wallet in the Readme. |

| 0d.    | Docker      | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#docker), [Published Images](https://github.com/orgs/Off-Narrative-Labs/packages) | We provide docker images for both the template node and the PoC wallet as well as instructions for how to test the node with them. |

| 1.     | Tuxedo Parachain Core | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_parachain_core/index.html), [Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/tuxedo-parachain-core/src) | Extensions to `tuxedo-core` that allow the runtime to be a parachain. |

| (BONUS) 2.  | Parachain Piece | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/parachain_piece/index.html), [Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/wardrobe/parachain/src) | Analogous to `pallet-parahcain-system`, this Tuxedo piece accepts the parachain inherent. |

| (BONUS) 3. | Dev Service | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#the-dev-service) | Allows running a parachain runtime without a relay chain. |

| (BONUS) 4. | Zombienet | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#zombienet) [Config File](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/zombienet.toml) | To spin up a proper relay-para testnet, you can youse the provided zombienet config. |


**Additional Information**

Thanks for the opportunity to work on this.
