# Evaluation

- **Status:** Changes Requested
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/BandersnatchVRF.md
- **Milestone:** 2
- **Milestone Delivery PR:** https://github.com/w3f/Grant-Milestone-Delivery/pull/1308

## Deliverables

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| **1.** | Entropy VRF Implementation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/entropy-vrf.ts | Implementation is present and maps to the intended Gray Paper flow (`jam_entropy` context + `banderout` composition). |
| **2.** | Audit VRF Implementation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/audit-signature.ts | Implementation is present for tranche 0 and tranche N paths; audit test suite passes. |
| **3.** | Epoch Root Utilities | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/epoch-root.ts | Utility implementation is present (`getRingRoot`, extraction/verification helpers). Delivery table link should be corrected (currently points to `entropy-vrf.ts`). |
| **4.** | Gamma Processing Functions | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/gamma.ts | Required functions are present (`getCommitmentFromGamma`, `getBanderoutFromGamma`). |
| **5.** | JAM Integration Testing | <ul><li>[ ] </li></ul> | https://github.com/Esscrypt/pbnj-fuzzer-releases | Current evidence is a binaries repository link, but no clear reproducible integration test procedure/results for this milestone scope. |
| **6.** | Advanced Documentation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf, https://esscrypt.github.io/bandersnatch-vrf/ | Documentation exists and includes usage guidance, backend notes, and JAM-context references. |
| **7.** | Performance Analysis | <ul><li>[ ] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/__tests__ | Benchmark content exists for Ring backends, but milestone asks for JAM specialized components performance analysis/comparison; evidence is not yet explicit for those components. |
| **8.** | Production Readiness | <ul><li>[x] </li></ul> | https://www.npmjs.com/package/@pbnjam/bandersnatch-vrf, https://www.npmjs.com/package/@pbnjam/bandersnatch | Package distribution is available; code includes validation/error handling across utility surfaces. |

## Verification Summary

Evaluator checks performed on the delivered repositories:

- `Esscrypt/bandersnatch-vrf`
  - Confirmed milestone-2 utility modules exist under `src/utils`:
    - `entropy-vrf.ts`
    - `audit-signature.ts`
    - `epoch-root.ts`
    - `gamma.ts`
  - Executed: `bun test src/__tests__/audit-signature.test.ts` → **2 passed, 0 failed**.
  - Full suite status (current repo state): `bun test src/__tests__` → **94 passed, 0 failed**.
- Delivery document update in commit `77fca978...` was reviewed:
  - improves markdown structure and package version notes,
  - but does not add new reproducible evidence for Deliverables 5 and 7,
  - and still keeps Deliverable 3 linked to `entropy-vrf.ts`.

## Findings

1. **Insufficient evidence for Deliverable 5 (High)**
   - Milestone 2 contract asks for JAM integration testing with end-to-end coverage.
   - Current delivery links to `pbnj-fuzzer-releases`, but does not provide a reproducible integration test guide/results mapping to milestone requirements.

2. **Insufficiently explicit evidence for Deliverable 7 (High)**
   - Milestone 2 asks for specialized JAM component performance analysis and comparison.
   - Current references focus mainly on general/ring backend tests and benchmark snippets, without clear component-level JAM analysis coverage.

3. **Delivery table link mismatch (Low)**
   - Deliverable 3 link points to `entropy-vrf.ts` instead of `epoch-root.ts`.

## Recommendation

Please provide:

- A reproducible JAM integration testing section (commands, environment, expected output, and pass/fail evidence), and
- A dedicated performance analysis section for Milestone 2 JAM-specific components (not only backend ring benchmarks),
