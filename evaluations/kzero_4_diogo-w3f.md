# Evaluation

- **Status:** Accepted
- **Application Document:** [KZero Grant Application](https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md)
- **Milestone:** 4

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet | GPLv3 license is present at the repository root. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet/blob/feat/refactor-and-add-tests/docs/kzero-wallet-sdk.md | Docs now live under the repo’s `docs/` folder (commit 731b2cc); the root README links to them directly. |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet/blob/feat/refactor-and-add-tests/docs/kzero-wallet-test-guide.md | Guide is bundled in-repo; `pnpm install && pnpm test` on `feat/refactor-and-add-tests` runs Vitest for `@kzero/zk-core`, `@kzero/message-port`, `@kzero/zk-react`, and `@kzero/wallet` (2 + 2 + 7 + 12 files, all green) and `pnpm test:cov` reports ≥ 80 % branch coverage per package. |
| 0d. | Docker | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet/blob/feat/refactor-and-add-tests/docs/kzero-docker-tutorial.md | Following the tutorial + `kzero-service-docker` runs the full stack locally (verified). |
| 0e. | Article | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet/blob/feat/refactor-and-add-tests/docs/kzero-article.md | Architecture article is published alongside the SDK docs and linked from the README. |
| 1. | KZero-SDK | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet/tree/feat/refactor-and-add-tests | Modular SDK builds cleanly and the new suites cover the core logger/proof helpers and React provider/hooks. |
| 2. | KZero-Website | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-wallet/tree/feat/refactor-and-add-tests/apps/wallet | Wallet UI + iframe flow work with the Docker backend; tests exercise storage, auth, encryption, and messaging utilities. |

## Testing & Coverage Summary
- `pnpm test` (commit 731b2cc) succeeds: `@kzero/zk-core` (2 files), `@kzero/message-port` (2), `@kzero/zk-react` (7), `@kzero/wallet` (12) all pass; Vitest output confirms the suites we reviewed in the branch.
- `pnpm test:cov` yields high coverage: `@kzero/zk-core` 100 / 96 / 100 / 100, `@kzero/message-port` 95 / 80 / 100 / 95, `@kzero/zk-react` 99 / 92 / 100 / 99, `@kzero/wallet` 94 / 91 / 89 / 95 (statements / branches / functions / lines).
- Test depth matches the new suites, e.g. proof handling in `getProof.test.ts` and React integration in `useKzero.test.tsx`.

```1:60:packages/zk-core/src/__tests__/getProof.test.ts
import { getProof } from '../getProof.js';

describe('getProof', () => {
  const baseAuthUrl = 'https://auth.kzero.xyz';
  const ephemeralPublicKey = '0x1234567890abcdef';

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });
```

```1:40:packages/zk-react/src/hooks/__tests__/useKzero.test.tsx
import { renderHook } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { KzeroContext } from '../../context/KzeroContext.js';
import { useKzero } from '../useKzero.js';

describe('useKzero', () => {
  const mockAccount: ZkAccount = {
    type: 'zk',
    address: '0x1234567890abcdef1234567890abcdef12345678',
```

## Additional Observations
- `AppProvider` now surfaces `import.meta.env.VITE_AUTH_ENDPOINT` before falling back to `http://localhost:3000`, so alternate auth deployments only need an env override.

```80:118:apps/wallet/src/lib/AppContext.tsx
        // Get auth endpoint from environment variable
        const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT || 'http://localhost:3000';

        // Get parent origin
        // In development, use the parent URL from environment variable
        // In production, use ancestorOrigins for security
        let parentOrigin = '*';
```

- Latest manual E2E (2025‑11‑26) hit the Docker stack end-to-end: auth-server served proof polling for `ephemeral_public_key=0xa41ca89a3dfcefadb743c39f1218babdb9747927aca493f52b9cf1a21b94f58f`, the proof-worker generated a wasm proof in ~24 s, and the resulting transaction appeared on-chain as extrinsic `0xec811122e55ed191f901e1dabbed8178ccabd5fbacc26099ac4993ed76eda9da`.
- Loading `http://localhost:5176/` directly shows “Initialization Error – Handshake timeout” because the wallet expects to be embedded; the flow works correctly when launched from the playground (`http://localhost:5175/`).
- The fix explanation (`kzero-m4-fix-explanation.md`) documents the refactor; keep it linked in README alongside the new docs so future reviewers can trace changes.


