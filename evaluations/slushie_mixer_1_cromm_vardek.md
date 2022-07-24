# Evaluation

- **Status:** Accepted
- **Application Document:** [Slushie mixer application](https://github.com/w3f/Grants-Program/blob/master/applications/Slushie%20Mixer.md). 
- **Milestone:** 1
- **Kusama Identity:** JCkD7cRTpfkQmk5v6XvWvR1JPTvrouPXSGmQqtWPcJQKFzx
- **Previously successfully merged evaluation:** [polkadot js extension per account auth - milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/pull/502)

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [x] | [LICENSE](https://github.com/4IRE-Labs/Slushie/0f1859216ab622619f352d6ba1cf0aeb37fa95d0/main/LICENSE) | |
| 0b. | Documentation | [x] |[README](https://github.com/4IRE-Labs/Slushie/blob/c41519e2336a62460ff61858a969637cfc402e23/README.md), [Usage](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/usage.md) | |
| 0c. | Tests | [x] | [Testing doc](https://github.com/4IRE-Labs/Slushie/blob/c41519e2336a62460ff61858a969637cfc402e23/README.md#testing), [Slushie tests](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/lib.rs#L183), [Merkel tree tests](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/tree/merkle_tree.rs#L165) | Two tests were ignored in merkel tree |
| 1. | ink! contract with MerkleTree storage | [x] | [Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/lib.rs#L38) |  |
| 2. | Change hash type of the Merkle Tree to some Poseidon implementation | [x] | [Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/lib.rs#L111), [Hasher (Poseidon)](https://github.com/4IRE-Labs/Slushie/blob/main/tree/hasher.rs#L65) | |
| 3. | Withdraw function signature | [x] | [Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/lib.rs#L143) | |
| 4. | Add events | [x] |[Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/2695913b5e41900c40ea03cff62c801686eca29e/lib.rs#L55)| |


## General Notes

Two tests are ignored (test_check_tree_zeros_correctness and test_check_tree_zeros_correctness_poseidon) when running `cargo test`, out of curiosity I removed the ignored attribute and ran them, but they take a lot of time to run - I stopped them. So I guess this is because they are slow to run that they have been ignored.

The documentation should explain how to use the contract - a small simple tutorial would be nice. Granted, the contract is simple and just by reading the signature of `deposit` and `withdraw` a user can easily understand how to use Slushie. But I expect the contract to evolve and at some point it might not be straight-forward to use. ==> OK since last commits. 

Generally speaking the project is still not really usable, but the next deliveries should take care of that aspect. For now it is promising. 
