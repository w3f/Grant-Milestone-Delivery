# Evaluation

* **Status:** In progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/216
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[] </li></ul> | [Unlicense node](https://github.com/webb-tools/anon/blob/master/LICENSE) | Missing for the [gadgets library](https://github.com/webb-tools/bulletproof-gadgets/) |
| 0b. | Documentation | <ul><li>[] </li></ul> | | Missing |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [mixer tests](https://github.com/webb-tools/anon/blob/master/pallets/mixer/src/tests.rs), [merkle tests](https://github.com/webb-tools/anon/blob/master/pallets/merkle/src/tests.rs) | 
| 0d. | Article/Tutorial | <ul><li>[] </li></ul> | | Missing |
| 1. | Substrate module: SparseMerkleTree (SMT) | <ul><li>[x] </li></ul> | [source code](https://github.com/webb-tools/anon/tree/master/pallets/merkle) |  
| 2. | Substrate module: Mixer | <ul><li>[x] </li></ul> | [source code](https://github.com/webb-tools/anon/tree/master/pallets/mixer) |  
| 4. | Substrate chain | <ul><li>[x] </li></ul> | [node](https://github.com/webb-tools/anon/tree/master/node), [runtime](https://github.com/webb-tools/anon/tree/master/runtime) |  
| 5. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/webb-tools/anon/tree/master/Dockerfile) |

## General Notes

The mixer pallet provides the substrate interface for performing the high level mixer operations, i.e. deposit & withdraw + some admin settings (like configuring the mixer manager).

Subsequently, the logic is directed to the merkle pallet, which takes care of performing merkle tree operations (e.g. adding a leaf, needed for deposits), as well as abstracting the more complex details of veryfing membership in the tree, without revealing the leaf data itself. That's done by constructing ZK proofs via the Bulletproofs system & leveraging the [Poseidon hash](https://www.poseidon-hash.info/) ([original implementation + proof gadget](https://github.com/lovesh/bulletproofs-r1cs-gadgets/blob/master/src/gadget_poseidon.rs)) for efficient proofs.

The relevant ZK gadgets (Poseidon hash & sparse merkle tree) were taken from [this repo](https://github.com/lovesh/bulletproofs-r1cs-gadgets/) (not a fork, although has attribution), refactored and abstracted.

The high-level pallet callables are well covered by the provided unit tests. Overall, the code quality is prime & good dev practices were followed.

For a project with such a high level of technical detail and multiple layers of abstraction, documentation is a must in order to gain wider community adoption. Currently documentation & tutorial are missing.
