# Milestone Delivery :mailbox:



**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Preparing%20Polkadot%20pallet_balances%20for%20Formal%20Verification.md
* **Milestone Number:** 1

**Context**
 
This milestone delivers insights into the foundational work required for the formal verification of `pallet_balances`.

Due to the complexity of the monolithic Polkadot runtime, we ported the functionality of `pallet_balances` to the Ink! platform which successfully passes all tests from the "fungible conformance" suite and compiles via the cargo-contract build system into a relatively compact (about 16 thousand lines in disassembled form) Wasm module.



**Deliverables**
## Deliverables Table

| Number   | Deliverable   | Link   | Notes   |
|---|---|---|---|
| 0a. | License | [https://github.com/.../LICENSE](https://github.com/Inferara/pallet-balances-formal-verification/blob/main/LICENSE) | MIT |
| 0b. | Documentation | [https://github.com/Inferara/pallet-balances-formal-verification/preparation](https://github.com/Inferara/pallet-balances-formal-verification/tree/main/preparation) | This directory contains documentation for the project |
| 0c. | Reproducibility | [balances_contracts.rs](https://github.com/Inferara/pallet-balances-formal-verification/blob/main/balances_contract/lib.rs) |  *ink!* implementation of `palette_balances` |
| | | [balances_contract.wat](https://github.com/Inferara/pallet-balances-formal-verification/blob/main/balances_contract/balances_contract.wat) | Annotated WASM binary compilation artifacts |
| | | [Conformance tests](https://github.com/Inferara/pallet-balances-formal-verification/tree/main/balances_contract/conformance_tests) <br/> [![Build](https://github.com/Inferara/pallet-balances-formal-verification/actions/workflows/build_test.yml/badge.svg?branch=main)](https://github.com/Inferara/pallet-balances-formal-verification/actions/workflows/build_test.yml) | Fungible conformance tests |
| 0d. | Final Research Article | [https://github.com/.../preparing-polkadot-pallet-balances-for-formal-verification.md](https://github.com/Inferara/pallet-balances-formal-verification/blob/main/preparation/preparing-polkadot-pallet-balances-for-formal-verification.md) | A detailed research article that explains research findings and results. It includes the reproducibility guide of the `0c` deliverable, notably WASM binary compilation artifacts. Textual description of fungible traits specification along with discovered assumptions regarding execution environment, required for implementation. All public functions, involved in implementation of traits `Inspect`, `Unbalanced`, `UnbalancedHold`, `Mutate`, `InspectHold`, `MutateHold`, `UnbalancedHold`, `InspectFreeze`, `MutateFreeze` and `Balanced`. This article includes a cleaned up and annotated WASM module of `pallet_balances`. Includes Rust code that is distilled and ready to reason about. Ordinary unit tests to confirm its faithfulness to the original in a classical sense. This article describes the process we went through preparing `pallet_balances` for future formal verification. |


**Additional Information**
We are greatly looking forward to any feedback or comments on both our research methods and the phased approach towards formal verification. 

With additional feedback and discussions about this approach to formal verification, we hope to continue researching how to apply formal methods for further securing the polkadot ecoystem.
