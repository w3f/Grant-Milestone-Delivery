# Evaluation

- **Status:** In Progress
- **Application Document:** [KZero Grant Application](https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md)
- **Milestone:** 4

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | [x] | https://github.com/kzero-xyz/kzero-wallet | GPLv3 license is present at the repository root. |
| 0b. | Documentation | [x] | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-wallet-sdk.md | Technical docs live in the `kzero-grant-docs` repo; suggest mirroring/embedding them in the SDK repository. |
| 0c. | Testing and Testing Guide | [ ] | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-wallet-test-guide.md | Guide exists but SDK packages (`zk-core`, `zk-react`, `zk-wallet`) still have 0% coverage, no automated tests on the SDK yet only in the example. |
| 0d. | Docker | [x] | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/m4-docker-tutorial.md | Following the tutorial + `kzero-service-docker` runs the full stack locally (verified). |
| 0e. | Article | [x] | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-article.md | Architecture article provided externally; recommend citing it from the repo README. |
| 1. | KZero-SDK | [ ] | https://github.com/kzero-xyz/kzero-wallet | SDK builds and works with the Docker backend, but lacks meaningful automated tests. |
| 2. | KZero-Website | [x] | https://github.com/kzero-xyz/kzero-wallet/tree/master/example-wallet | Demo flow works end-to-end once the Docker services are running locally. |

## Testing & Coverage Summary
- Only `example-wallet/src/parseCall.test.ts` executes; SDK packages have no tests, so coverage is 0 % despite the new guide. The automated tests are only in the example. Adding unit/integration tests for `zk-core`, `zk-react`, and `zk-wallet` remains outstanding.
- `pnpm check-types` succeeds across packages; `pnpm dev:example`/`pnpm dev:wallet` rely on either remote endpoints or the Docker stack described above.

## Additional Observations
- `Auth.tsx` hard-codes `http://localhost:3000`; documentation could explain how to override for other environments.
- Docker verification: auth-server logs show nonce/OAuth/proof polling for `ephemeral_public_key=0x1995aa0e...`; proof-worker generated a wasm proof in ~22.6 s; extrinsic `0x838a2f8a7b82603d97490a21da76532bb8d391bc329554c2ebb98605fa1c21bd` landed on the KZero node template.
- Suggestion: consolidate the new documentation, testing guide, and article links into the main SDK/website READMEs so evaluators don’t need to cross-reference external repos.
- Without SDK tests, regressions would be hard to catch, adding coverage should be the remaining gating item.


