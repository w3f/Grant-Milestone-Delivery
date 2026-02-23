# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/BandersnatchVRF.md
- **Milestone:** 1
- **Milestone Delivery PR:** https://github.com/w3f/Grant-Milestone-Delivery/pull/1306

## Deliverables

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch/blob/main/LICENSE | Apache 2.0 present. |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch/blob/main/README.md, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/README.md | Setup and usage docs are present and sufficient for evaluation. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch/blob/main/src/__tests__/curve.test.ts, https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/__tests__ | Automated tests exist and most pass; one path-hardcoded test issue is noted below. |
| **1.** | Bandersnatch Curve Implementation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch/blob/main/src/curve.ts | Implemented and tests pass. |
| **2.** | Elligator2 Hash-to-Curve | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/crypto/elligator2.ts | Implemented and exercised by VRF tests. |
| **3.** | IETF VRF Implementation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ietf.ts | Implemented; vector/e2e tests passed in evaluator run. |
| **4.** | Pedersen VRF Implementation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/pedersen.ts | Implemented; vector/e2e tests passed in evaluator run. |
| **5.** | Ring VRF Implementation | <ul><li>[ ] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ring-kzg-wasm.ts, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ring-kzg-w3f.ts | Implemented using a Rust wrapper, what is not the intention of the grant. |
| **6.** | Cryptographic Infrastructure | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/crypto, https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/utils | Present and used by prove/verify flows. |
| **7.** | Performance Optimization | <ul><li>[ ] </li></ul> | Contract requirement in application | Contract asks for performance optimization plus analysis/comparison; PR delivery table omits this contractual item as a standalone deliverable. |
| **8.** | Core Package Distribution | <ul><li>[x] </li></ul> | https://www.npmjs.com/package/@pbnjam/bandersnatch | Package publication evidenced; note that milestone file renumbered this as item 7. |

## Verification Summary

Evaluator execution summary for repos referenced by the delivery:

- `Esscrypt/bandersnatch`
  - `bun install` passed.
  - `bun run test` passed (`21 passed, 0 failed`).
- `Esscrypt/bandersnatch-vrf`
  - `bun install` passed.
  - `bun run test` passed (package script).
  - focused suites passed:
    - `ring-end-to-end.test.ts`
    - `ring-w3f-wasm-compare-end-to-end.test.ts`
    - `pedersen-test-vectors.test.ts`
    - `ietf-w3f-end-to-end.test.ts`
  - full `bun test src/__tests__` has one failing test due test harness path issue (see findings).
- Rust module check:
  - `cargo test` in `rust-ring-proof` passes (crate currently reports zero Rust unit tests).

Cross-checks already executed during evaluation:

- TS-generated Ring VRF proofs verified in external Rust verifier flow.
- Rust-generated proof verified in TS W3F and TS WASM verifiers.
- Interop validated both directions for tested vectors/cases.

## Findings

1. **Contract mismatch in milestone mapping (High)**
   - The contract milestone includes both:
     - Deliverable 7: Performance Optimization
     - Deliverable 8: Core Package Distribution
   - The PR delivery file presents only up to item 7 and maps package distribution there, with no standalone contractual performance-optimization deliverable entry/evidence.
   - This should be reconciled explicitly before acceptance.

2. **Hardcoded local path in automated test (Medium)**
   - `ring-native-end-to-end.test.ts` uses a machine-specific absolute SRS path, causing full-suite failure for independent evaluators.
   - This is a reproducibility issue in test harness, not a cryptographic correctness failure, but should be fixed for portable milestone validation.

3. **Contract narrative inconsistency on dependencies (Medium)**
   - Application text claims "Zero Rust Dependencies", but milestone delivery and repo documentation include a native Rust backend (`rust-ring-proof`) for W3F Ring VRF.
   - This is likely a positioning/documentation inconsistency and should be clarified in grant records.

4. **Deterministic Ring proof mode in delivered integration (Informational)**
   - Evaluated W3F Ring proofs were deterministic for equal inputs in the delivered integration path due `test-vectors` feature usage in the native dependency configuration.
   - Interoperability works, but the team should document production-vs-test-vector randomness behavior clearly.

## Recommendation

Requested updates to the milestone delivery before acceptance:

- Add an explicit section for contractual Deliverable 7 (Performance Optimization) with concrete evidence (bench methodology, results, and comparison).
- Fix portable test setup for native ring e2e tests (remove machine-specific absolute path).
- Provide a Zero Rust dependencies implementation to match actual grant application.
