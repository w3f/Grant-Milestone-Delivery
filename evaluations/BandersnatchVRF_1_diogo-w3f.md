# Evaluation

- **Status:** Accepted
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
| **5.** | Ring VRF Implementation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ring-kzg.ts, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ring-kzg-wasm.ts, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ring-kzg-w3f.ts | Implemented with pure TypeScript backend plus WASM/W3F backends; tests and benchmarks provided. |
| **6.** | Cryptographic Infrastructure | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/crypto, https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/utils | Present and used by prove/verify flows. |
| **7.** | Performance Optimization | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch/blob/main/src/glv.ts, https://github.com/Esscrypt/bandersnatch/blob/main/README.md#performance-comparison, https://github.com/Esscrypt/bandersnatch-vrf?tab=readme-ov-file#ring-vrf-benchmarks-wasm-vs-w3f-vs-pure-typescript | GLV implementation and performance comparison added; ring backend benchmark comparison added. |
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
    - `ring-end-to-end.test.ts` (pure TypeScript path)
    - `ring-w3f-wasm-compare-end-to-end.test.ts`
    - `ring-native-end-to-end.test.ts`
    - `pedersen-test-vectors.test.ts`
    - `ietf-w3f-end-to-end.test.ts`
  - full `bun test src/__tests__` now passes (`94 passed, 0 failed`).
- Rust module check:
  - `cargo test` in `rust-ring-proof` passes (crate currently reports zero Rust unit tests).

Cross-checks already executed during evaluation:

- TS-generated Ring VRF proofs verified in external Rust verifier flow.
- Rust-generated proof verified in TS W3F and TS WASM verifiers.
- Interop validated both directions for tested vectors/cases.

## Findings

No blocking findings remain for Milestone 1 acceptance.

Notes:
- The pure TypeScript Ring VRF backend is now present (`ring-kzg.ts` and `verifier/ring.ts`), addressing the prior concern that Ring VRF was only delivered through Rust-backed paths.
- The test reproducibility issue was addressed by moving to repo-relative SRS paths, and the full test suite now passes.
- Performance deliverable evidence is now present (GLV implementation and benchmark sections, plus ring backend benchmark comparisons).
