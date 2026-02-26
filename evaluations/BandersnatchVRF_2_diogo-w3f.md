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
| **5.** | JAM Integration Testing | <ul><li>[ ] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/__tests__/entropy-vrf.test.ts, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/__tests__/epoch-root.test.ts, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/__tests__/audit-signature.test.ts | New JAM-component test suites are present and passing; however, explicit integration evidence with PeanutButterAndJAM and real-world validation evidence is still missing. |
| **6.** | Advanced Documentation | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf, https://esscrypt.github.io/bandersnatch-vrf/ | Documentation exists and includes usage guidance, backend notes, and JAM-context references. |
| **7.** | Performance Analysis | <ul><li>[x] </li></ul> | https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/__tests__/jam-components-benchmark.ts, https://github.com/Esscrypt/bandersnatch-vrf/blob/main/RING_VRF_PROVER_VERIFIER_ANALYSIS.md | Dedicated JAM-components benchmark script and analysis document are now present; benchmark script executed successfully in evaluator environment. |
| **8.** | Production Readiness | <ul><li>[x] </li></ul> | https://www.npmjs.com/package/@pbnjam/bandersnatch-vrf, https://www.npmjs.com/package/@pbnjam/bandersnatch | Package distribution is available; code includes validation/error handling across utility surfaces. |

## Verification Summary

Evaluator checks performed on the delivered repositories:

- `Esscrypt/bandersnatch-vrf`
  - Confirmed milestone-2 utility modules exist under `src/utils`:
    - `entropy-vrf.ts`
    - `audit-signature.ts`
    - `epoch-root.ts`
    - `gamma.ts`
  - Executed JAM-component suites:
    - `bun test src/__tests__/entropy-vrf.test.ts src/__tests__/epoch-root.test.ts src/__tests__/audit-signature.test.ts` → **41 passed, 0 failed**.
  - Executed benchmark script:
    - `bun run src/__tests__/jam-components-benchmark.ts` → successful run with timing table output for JAM-related operations.
  - Full suite status (current repo state): `bun test src/__tests__` → **94 passed, 0 failed**.
- Delivery document update in commit `f03fc731...` was reviewed:
  - improves markdown structure and package version notes,
  - but does not add new reproducible evidence for Deliverables 5 and 7,
  - and still keeps Deliverable 3 linked to `entropy-vrf.ts`.

## Findings

1. **Deliverable 5 is only partially evidenced (High)**
   - Newly added tests (`entropy-vrf`, `epoch-root`, `audit-signature`) are strong evidence for JAM component-level testing.
   - Milestone text, however, explicitly includes integration with PeanutButterAndJAM and real-world usage validation; this specific integration evidence (repo path, commands, and reproducible outputs) is still not provided in the delivery.
   - Requested evidence format:
     - exact PeanutButterAndJAM path(s)/module(s) where `@pbnjam/bandersnatch-vrf` is invoked for these flows,
     - exact commands to run from a clean checkout,
     - expected logs/output that confirm entropy/audit/epoch-root logic is executed in the integrated node flow.

2. **Delivery table link mismatch (Low)**
   - Deliverable 3 link points to `entropy-vrf.ts` instead of `epoch-root.ts`.

## Recommendation

Please provide a concise, reproducible PeanutButterAndJAM integration evidence section to close Deliverable 5, including:

- repository path/module location where `@pbnjam/bandersnatch-vrf` is integrated,
- exact run commands (from clean checkout),
- expected pass criteria and log/output snippets proving entropy/audit/epoch-root package functionality in the integrated flow.

Coordination note: another evaluator is scheduled to run PeanutButterAndJAM next week; final integration confirmation for Deliverable 5 can be concluded after that run is reported.

After this is added and cross-evaluator integration confirmation is available, Milestone 2 can be re-reviewed quickly for acceptance.
