## Evaluation
- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Preparing%20Polkadot%20pallet_balances%20for%20Formal%20Verification.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | [x] | `pallet-balances-formal-verification/LICENSE` | MIT license present in the repository root, matching the application scope. |
| 0b. | Documentation | [ ] | `pallet-balances-formal-verification/preparation/` | Documentation folder includes the milestone summary, methodology, trait-to-Wasm mapping, and contextual materials as promised; pending clarification on lower-than-expected test coverage before acceptance or fixing that. |
| 0c. | Reproducibility | [ ] | `pallet-balances-formal-verification/balances_contract/` | Ink! port (`lib.rs`), annotated Wasm (`balances_contract.wat`), and conformance tests are provided; `cargo test` (63 tests) passes locally. However, rebuilding via `cargo contract build --verifiable` produces a Wasm of equal size but different hash, so I'll await a rationale or mitigation plan before sign-off. |
| 0d. | Final Research Article | [ ] | `pallet-balances-formal-verification/preparation/preparing-polkadot-pallet-balances-for-formal-verification.md` | Comprehensive article with reproducibility guide, annotated Wasm insights, trait coverage, and future roadmap fulfilling the agreed scope; awaiting response on coverage improvements and reproducibility automation. |

**Additional notes**
- `cargo test` was executed inside `balances_contract` to confirm the conformance suite (`cargo test`, 63 tests, all passing).
- `cargo tarpaulin --tests` reports 83.33% line coverage (45/54 lines) for `balances_contract/lib.rs`; several defensive branches (owner-only guards, overflow/dust fallbacks) remain untested, requesting clarification if the team plans to cover these paths before progressing toward formal proofs or fixing that.
- Reproducibility instructions were followed (`cargo contract build --verifiable`, `wat2wasm`, `cmp`), but the regenerated Wasm hash (`sha256sum`) differs from the repository artifact despite identical size, implying non-deterministic ordering. The article itself notes that `cargo contract build --verifiable` can emit semantically identical yet reordered binaries, but how to trust that? So I ask the team to provide a deterministic build (maybe using Docker and picking the exact versions of Rust and libraries) or normalisation script to keep the annotated WAT trustworthy for reviewers.
- Annotated WAT and trait mapping appendix are detailed. A concise index mapping WAT sections to trait methods could aid reviewers. 
- Research article aligns with proposal scope and lays out a phased verification roadmap. Awaiting the team’s response on coverage and reproducibility automation before acceptance.
