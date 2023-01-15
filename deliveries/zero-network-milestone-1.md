# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Zero Network: Privacy Preserving Transactions Blockchain based on Substrate](https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md)
* **Milestone Number:** 1

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link |
| -----: | ----------- | ------------- |
| 0a. | License | [Apache 2.0](https://github.com/zero-network/zero/blob/master/LICENSE) |
| 0b. | Documentation | [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/), [`zero-jubjub`](https://docs.rs/zero-jubjub/latest/zero_jubjub/), [`zero-bls12-381`](https://docs.rs/zero-bls12-381/latest/zero_bls12_381/), [`zero-elgamal`](https://docs.rs/zero-elgamal/latest/zero_elgamal/), [`zero-pairing`](https://docs.rs/zero-pairing/latest/zero_pairing/) |
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | [documentation](https://zero-network.github.io/zero/), [tutorial](https://zero-network.github.io/zero/6_0_tutorial.html) |
| 1. | `Lifted-ElGamal` pallet | [github](https://github.com/zero-network/zero/tree/master/primitive/elgamal) [crate.io](https://docs.rs/zero-elgamal/latest/zero_elgamal/) |
| 2. | `encrypted-balance` pallet | [github](https://github.com/zero-network/zero/tree/master/pallets/encrypted_balance) [crate.io]() |
| 3. | `plonk` pallet | [github](https://github.com/zero-network/zero/tree/master/pallets/plonk) |
| 4. | `confidential-transfer` pallet | [github](https://github.com/zero-network/zero/tree/master/pallets/confidential_transfer) |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
