
## Evaluation
- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Preparing%20Polkadot%20pallet_balances%20for%20Formal%20Verification.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | [x] | `pallet-balances-formal-verification/LICENSE` | MIT license present in the repository root, matching the application scope. |
| 0b. | Documentation | [ ] | `pallet-balances-formal-verification/preparation/` | Documentation folder includes the milestone summary, methodology, trait-to-Wasm mapping, and contextual materials as promised; pending clarification on lower-than-expected test coverage before acceptance. |
| 0c. | Reproducibility | [ ] | `pallet-balances-formal-verification/balances_contract/` | Ink! port (`lib.rs`), annotated Wasm (`balances_contract.wat`), and conformance tests are provided; `cargo test` (135 tests) passes locally. However, rebuilding via `cargo contract build --verifiable` produces a Wasm of equal size but different hash, so I'll await a rationale or mitigation plan before sign-off. |
| 0d. | Final Research Article | [ ] | `pallet-balances-formal-verification/preparation/preparing-polkadot-pallet-balances-for-formal-verification.md` | Comprehensive article with reproducibility guide, annotated Wasm insights, trait coverage, and future roadmap fulfilling the agreed scope; awaiting response on coverage improvements and reproducibility automation. |

**Additional notes**
- `cargo test` was executed inside `balances_contract` to confirm the expanded conformance suite (`cargo test`, 135 tests, all passing). As of this branch the raw run reports 92.98% (53/57) coverage; the only uncovered branches are the overflow guards in `mint_into`, `transfer`, and `handle_dust`.
- Downloaded the three GitHub Actions artifacts mentioned by the team (`balances_contract-58/59/60.zip`) and ran the provided `reorder_wasm.sh` helper (requires WABT, GNU `sed`, Bash ≥4). Artifacts 58 and 59 reorder cleanly and hash-match the repository’s `balances_contract.wasm`, but artifact 60 still produces a divergent binary (differences from byte 356 onward, including data segments). A robust, documented canonicalisation step is still missing.
- Annotated WAT and trait mapping appendix are detailed. A concise index mapping WAT sections to trait methods could aid reviewers.
- Research article aligns with proposal scope and lays out a phased verification roadmap. Awaiting the team’s response on coverage and reproducibility automation before acceptance.
