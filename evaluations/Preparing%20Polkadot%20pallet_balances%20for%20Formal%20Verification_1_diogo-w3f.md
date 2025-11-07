
## Evaluation
- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Preparing%20Polkadot%20pallet_balances%20for%20Formal%20Verification.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `pallet-balances-formal-verification/LICENSE` | MIT license present in the repository root, matching the application scope. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | `pallet-balances-formal-verification/preparation/` | Documentation folder includes the milestone summary, methodology, trait-to-Wasm mapping, and contextual materials as promised; clarified coverage expectations and confirmed completeness. |
| 0c. | Reproducibility | <ul><li>[x] </li></ul> | `pallet-balances-formal-verification/balances_contract/` | Ink! port (`lib.rs`), annotated Wasm (`balances_contract.wat`), and conformance tests are provided; `cargo test` (135 tests) and the reproducibility workflow succeed in the grantee’s reference Linux environment. On macOS the bit-exact check still fails, but the team documented the nondeterministic ordering issue and supplied a justification we accept for this milestone. |
| 0d. | Final Research Article | <ul><li>[x] </li></ul> | `pallet-balances-formal-verification/preparation/preparing-polkadot-pallet-balances-for-formal-verification.md` | Comprehensive article with reproducibility guide, annotated Wasm insights, trait coverage, and future roadmap fulfilling the agreed scope. |

**Additional notes**
- `cargo test` was executed inside `balances_contract` to confirm the expanded conformance suite (`cargo test`, 135 tests, all passing).
- Running `cargo tarpaulin --tests` on the team’s Linux environment reports 100% coverage (393/393 executable lines) while our macOS runs report 92.98% because Tarpaulin collapses macro-expanded Ink! code; leveraging Rust’s `-Cinstrument-coverage` tooling corroborates the higher line count, so we accept the suite as fully covered.
- Downloaded the three GitHub Actions artifacts mentioned by the team (`balances_contract-58/59/60.zip`) and ran the provided `reorder_wasm.sh` helper (requires WABT, GNU `sed`, Bash ≥4). Artifacts 58 and 59 reorder cleanly across platforms; artifact 60 only aligns in the reference Linux environment, and the grantee provided a credible explanation of the nondeterministic ordering that makes cross-platform bit-exactness impractical, so we accept the justification.
- Annotated WAT and trait mapping appendix are detailed. A concise index mapping WAT sections to trait methods could aid reviewers for future iterations.
- Research article aligns with proposal scope, documents methodology thoroughly, and outlines a phased verification roadmap that matches the approved milestone.
