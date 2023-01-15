# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Zero Network: Privacy Preserving Transactions Blockchain based on Substrate](https://github.com/w3f/Grants-Program/blob/master/applications/zero-network.md)
* **Milestone Number:** 1

**Deliverables**

In this milestone, we implement `confidential transfer` pallet which is capable of transfer with hiding transfer amount.

| Number | Deliverable | Link |
| -----: | ----------- | ------------- |
| 0a. | License | [Apache 2.0](https://github.com/zero-network/zero/blob/master/LICENSE) |
| 0b. | Documentation | [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/), [`zero-jubjub`](https://docs.rs/zero-jubjub/latest/zero_jubjub/), [`zero-bls12-381`](https://docs.rs/zero-bls12-381/latest/zero_bls12_381/), [`zero-elgamal`](https://docs.rs/zero-elgamal/latest/zero_elgamal/), [`zero-pairing`](https://docs.rs/zero-pairing/latest/zero_pairing/) |
| 0c. | Testing Guide | [How to run test](https://github.com/zero-network/zero#test) |
| 0d. | Docker | [Dockerfile](https://github.com/zero-network/zero/blob/master/Dockerfile) |
| 0e. | Article | [documentation](https://zero-network.github.io/zero/), [tutorial](https://zero-network.github.io/zero/6_0_tutorial.html) |
| 1. | `Lifted-ElGamal` pallet | [github](https://github.com/zero-network/zero/tree/master/primitive/elgamal), [crate.io](https://docs.rs/zero-elgamal/latest/zero_elgamal/) |
| 2. | `encrypted-balance` pallet | [github](https://github.com/zero-network/zero/tree/master/pallets/encrypted_balance) |
| 3. | `plonk` pallet | [github](https://github.com/zero-network/zero/tree/master/pallets/plonk) |
| 4. | `confidential-transfer` pallet | [github](https://github.com/zero-network/zero/tree/master/pallets/confidential_transfer) |

**Additional Information**

We think it's important to implement cryptographic libraries from scratch because there are no cryptographic libraries implemented for `Substrate` runtime and we can immediately reflect our optimization so now we can use every cryptographic libraries related to `zk-SNARKs` on `Substrate` runtime without costomizing. In this milestone, we were working on three things.

1. Implement basic cryptographic libraries which are compatible with `no_std` and `parity-scale-codec` to use these on runtime
- [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/)
- [`zero-jubjub`](https://docs.rs/zero-jubjub/latest/zero_jubjub/)
- [`zero-bls12-381`](https://docs.rs/zero-bls12-381/latest/zero_bls12_381/)
- [`zero-elgamal`](https://docs.rs/zero-elgamal/latest/zero_elgamal/)
- [`zero-pairing`](https://docs.rs/zero-pairing/latest/zero_pairing/)
2. Replace [`dusk-plonk`](https://github.com/dusk-network/plonk) with our cryptographic libraries to customize some implementations
- [parity-scale-codec compatible `dusk-plonk`](https://github.com/zero-network/dusk-plonk)
3. Implement `confidential-transfer` to transfer without revealing transfer amount
- [`confidential_transfer`](https://github.com/zero-network/zero/tree/master/pallets/confidential_transfer)

The following is the dependency graph.

- [`confidential_transfer`](https://github.com/zero-network/zero/tree/master/pallets/confidential_transfer)
    - [`pallet-plonk`](https://github.com/zero-network/zero/tree/master/pallets/plonk)
        - [parity-scale-codec compatible `dusk-plonk`](https://github.com/zero-network/dusk-plonk)
            - [`zero-jubjub`](https://docs.rs/zero-jubjub/latest/zero_jubjub/)
                - [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/)
            - [`zero-bls12-381`](https://docs.rs/zero-bls12-381/latest/zero_bls12_381/)
                - [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/)
            - [`zero-pairing`](https://docs.rs/zero-pairing/latest/zero_pairing/)
                - [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/)
    - [`pallet-encrypted-balance`](https://github.com/zero-network/zero/tree/master/pallets/encrypted_balance)
        - [`zero-elgamal`](https://docs.rs/zero-elgamal/latest/zero_elgamal/)
            - [`zero-jubjub`](https://docs.rs/zero-jubjub/latest/zero_jubjub/)
                - [`zero-crypto`](https://docs.rs/zero-crypto/latest/zero_crypto/)
