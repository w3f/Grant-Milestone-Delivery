# Evaluation

- **Status:** In Progress
- **Application Document:** [Slushie mixer application](https://github.com/w3f/Grants-Program/blob/master/applications/Slushie%20Mixer.md). 
- **Milestone:** 1
- **Kusama Identity:** JCkD7cRTpfkQmk5v6XvWvR1JPTvrouPXSGmQqtWPcJQKFzx
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [x] | [LICENSE](https://github.com/4IRE-Labs/Slushie/0f1859216ab622619f352d6ba1cf0aeb37fa95d0/main/LICENSE) | |
| 0b. | Documentation | [ ] |[README](https://github.com/4IRE-Labs/Slushie/blob/c41519e2336a62460ff61858a969637cfc402e23/README.md)| It would be nice to have a small example on how to call the deposit method of the contract in the doc. Missing contract structure in the readme. |
| 0c. | Tests | [x] | [Testing doc](https://github.com/4IRE-Labs/Slushie/blob/c41519e2336a62460ff61858a969637cfc402e23/README.md#testing), [Slushie tests](https://github.com/4IRE-Labs/Slushie/blob/main/lib.rs), [Merkel tree tests](https://github.com/4IRE-Labs/Slushie/blob/main/tree/merkle_tree.rs) | Two tests were ignored in merkel tree |
| 1. | ink! contract with MerkleTree storage | [x] | [Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/main/lib.rs) |  |
| 2. | Change hash type of the Merkle Tree to some Poseidon implementation | [x] | [Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/main/lib.rs), [Hasher](https://github.com/4IRE-Labs/Slushie/blob/main/tree/hasher.rs) | |
| 3. | Withdraw function signature | [x] | [Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/main/lib.rs) | |
| 4. | Add events | [x] |[Slushie contract](https://github.com/4IRE-Labs/Slushie/blob/main/lib.rs)| |


## General Notes

Two tests are ignored (test_check_tree_zeros_correctness and test_check_tree_zeros_correctness_poseidon) when running `cargo test`, out of curiosity I removed the ignored attribute and ran them, but they take a lot of time to run - I stopped them. So I guess this is because they are slow to run that they have been ignored.

The documentation should explain how to use the contract - a small simple tutorial would be nice. Granted, the contract is simple and just by reading the signature of `deposit` and `withdraw` a user can easily understand how to use Slushie. But I expect the contract to evolve and at some point it might not be straight-forward to use.
