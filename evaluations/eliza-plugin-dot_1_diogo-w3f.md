# Evaluation

- **Status:** Changes requested
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/eliza-plugin-dot.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | ------- | ---- | ---------------- |
| 0a. | License | <ul><li>[x] </li></ul> | `ChainSupport/eliza`, `ChainSupport/eliza-plugin-dot`, `ChainSupport/eliza-dot-aes` | Apache‑2.0 present in every repo referenced by the milestone. |
| 0b. | Documentation | <ul><li>[x] </li></ul> | `README.md` in each repo | Plugin README describes features/actions; AES README covers packages; agent README documents env vars and run modes, though `.env` copy instructions should reference `.env.example`. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | `eliza-plugin-dot/docs/test-guide.md`, `eliza-dot-aes/docs/test-guide.md`, `eliza/docs/test-guide.md` | AES and plugin guides exist, but the agent guide’s instructions stop at “### Testing” with no steps, and the `.env` copy command references a non-existent `.env.example.env`. Needs completion before acceptance. |
| 0d. | Docker | <ul><li>[x] </li></ul> | `ChainSupport/eliza/docker-compose.yaml` | Compose stack builds the agent plus Postgres, exposing env variables required by the plugin. |
| 0e. | Article | <ul><li>[x] </li></ul> | GitHub Wiki: `Let-AI-Truly-Embrace-Polkadot:`… | Article details the problem statement, features, architecture, and onboarding steps. |
| 1. | Plugin-dot Package | <ul><li>[ ] </li></ul> | https://github.com/ChainSupport/eliza-plugin-dot/tree/m1 | Core features implemented and automated tests now run (`pnpm run coverage`), but suites depend on live RPC/Subscan services and hard-code two API keys. E2E transfer required a custom script and key; docs still lack a straightforward path. Needs documented env input, plus manual action coverage. |
| 2. | sr25519-AES Package | <ul><li>[x] </li></ul> | `eliza-dot-aes/packages/sr25519-aes` | After adding the missing `ethereum-cryptography` dependency, `pnpm run test:coverage` passes with 100 % coverage for this package. |
| 3. | ed25519-AES Package | <ul><li>[x] </li></ul> | `eliza-dot-aes/packages/ed25519-aes` | Same as above; tests run and cover the ed25519 backend. |
| 4. | ECDSA-AES Package | <ul><li>[x] </li></ul> | `eliza-dot-aes/packages/ecdsa-aes` | Same as above; coverage suite passes once dependency is added. |

## Testing & Commands
- Branch/tag alignment: `eliza-plugin-dot` @ `origin/m1`, `eliza` @ `main`, `eliza-dot-aes` @ `main`.
- Plugin tests: `pnpm install && pnpm run coverage` inside `eliza-plugin-dot/`. Output: 32 tests passed (4 skipped) across `test/subscan-api.test.ts` and `test/substrate-chain.test.ts`. Coverage shows 0 % for actions/service files because only `src/common` has suites. Note: I had to add `ethereum-cryptography` in AES dependency tree and adjust the invalid-RPC tests to keep this command green.
- Manual transfer: I used a script to perform a manual transfer.
- AES packages: `pnpm install && pnpm run test:coverage` under `eliza-dot-aes/`. Initially failed with “Cannot find module 'ethereum-cryptography/aes.js'”; adding `ethereum-cryptography@^3.2.0` to the workspace root and `packages/common` resolved the issue. Current coverage: 99.29 % lines overall.
- Agent repo inspected (no tests run). Docker Compose file, README instructions, and `character.ts` verified to load the plugin when `ASSET_HUB_PRIVATE_KEY` is set.

## Outstanding Issues
1. **Testing guide gap (Deliverable 0c).** The agent’s `docs/test-guide.md` ends right after the “Testing” header and still tells users to copy `.env.example.env`. Without documented steps for UI/manual flows, reviewers cannot reproduce the claimed manual coverage for `assethub-service` and `src/actions`.
2. **Live API keys in source/tests.** `DEFAULT_SUBSCAN_X_API_KEY` (`3716…`) and `SubscanApi`’s constructor default (`4d0c…`) are hard-coded in `src/constants.ts` and `src/common/subscan-api.ts`. The Vitest suites also call production Subscan and AssetHub RPC endpoints. Please move keys and endpoints to environment variables.
3. **Action layer lacks automated coverage.** The generated coverage report shows 0 % across `src/actions` and `assethub-service.ts`, contradicting the deliverable’s note that these modules were verified manually. Provide either integration tests or a reproducible manual checklist (tied to Deliverable 0c) showing how each action was exercised.
4. **E2E / agent validation not reproducible.**  Better document the e2e tests and manual steps to do it. The transaction history command fails, the configuration of RPC endpoint is not documented neither the commands that are available in the chat.

## E2E Status
- A live transfer with encrypted memo was executed script.
- I was able to use the Chat with ElizaOS but the wallet history command failed with the msg below. All other commands worked (balance, transfer dot, encrypted msg) besides I don't understand how useful will be the encrypted msg.

```
MY_WALLET_HISTORY
Error
Input
actions: [
  "MY_WALLET_HISTORY"
]
thought: The user is asking for their wallet history again. I previously tried this and it failed. I should acknowledge their request, explain that I encountered an issue last time, and try again, but also manage expectations that it might fail again. I will use the MY_WALLET_HISTORY tool.
Output
{
  "result": "Action MY_WALLET_HISTORY failed",
  "status": "failed",
  "thought": "The user is asking for their wallet history again. I previously tried this and it failed. I should acknowledge their request, explain that I encountered an issue last time, and try again, but also manage expectations that it might fail again. I will use the MY_WALLET_HISTORY tool.",
  "actionResult": {
    "success": false,
    "text": "Failed to get my wallet history on the POLKADOT AssetHub. error: TypeError: null is not an object (evaluating 'data.data.transfers.map')",
    "error": {}
  }
}
```

## Requested Next Steps
1. Update `eliza/docs/test-guide.md` with complete setup + testing instructions (local & Docker) and reference them from the plugin README. Correct the `.env` copy command.
2. Replace baked-in API keys and endpoints with env vars
3. Add (or document) manual integration tests for `TRANSFER_ASSETS`, `SEND_MESSAGE`, `USER_ASSETS_BALANCE`, etc., ideally via the agent. 
4. Expose a documented way to run the agent against Paseo (either ship a supported HTTPS RPC URL or enable WebSocket endpoints). Once the above items are addressed, re-run automated tests and, if possible, supply an E2E recording/log showing the agent performing a transfer on Asset Hub.
5. Fix the problem with transaction history on ElizaOS chat.

Until those gaps are closed, Milestone 1 cannot be accepted.

