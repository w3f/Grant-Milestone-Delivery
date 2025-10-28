# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- | ---------------- |
| 0a. | License |<ul><li>[x]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service | Added `LICENSE_GPLv3.md` with the full GPLv3 text in the repository root. |
| 0b. | Documentation |<ul><li>[x]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service#salt-generation-principles | README now explains the salt workflow, HKDF derivation, and how to use the bundled test JWT/JWK versus live providers; links to the detailed spec. |
| 0c. | Testing and Testing Guide |<ul><li>[x]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service#run-tests | `make test-app` drives `tests/test_app.cpp`, hitting `verify_jwt_for_provider`, `process_jwt_token`, and enclave ECALL paths; `make test-coverage-app` emits gcov with 93.13% coverage of `App.cpp`. |
| 0d. | Docker |<ul><li>[x]</li></ul>| https://hub.docker.com/r/kzeroxyz/kzero-salt-enclave-service | Container builds cleanly; locally built image responds `200` for the documented `test_google` JWT and the README explains how to refresh live JWKS tokens. |
| 1. | Salt Service Code |<ul><li>[x]</li></ul>| https://github.com/kzero-xyz/kzero-salt-enclave-service | SGX host/enclave flow verified end-to-end via the test provider: `/get_salt` returns `3885014440358504488` and enclave error branches are now covered by tests. |
| 2. | docs |<ul><li>[x]</li></ul>| https://github.com/kzero-xyz/kzero-grant-docs/blob/main/m3-docker-tutorial.md | Tutorial references the fixed JWT/JWK combo and is linked from the README, guiding evaluators through Docker execution and API validation. |
| 3. | Docker |<ul><li>[x]</li></ul>| https://hub.docker.com/r/kzeroxyz/kzero-salt-enclave-service | Image tag `v0.1.2` publishes the updated binaries and test targets (`make test-app`, `make test-coverage-app`); local build mirrors the published setup and passes the same checks. |

# General Notes

- Verified the new GPL license and documentation assets (`assets/salt_workflow.png`, `assets/salt_derive.png`) in the updated README and repo root.
- `docker run --rm -e SGX_MODE=SIM kzero-salt-enclave-service:local make test-app` executes the expanded unit/integration suite; all tests pass and the enclave salt ECALL succeeds with the bundled test JWT.
- Running the service via `docker run -d -p 0:8080 ...` and POSTing the documented `test_google` payload returns `{"salt":"3885014440358504488","status":"success"}` (HTTP 200), confirming end-to-end salt derivation.
- Live Google JWTs continue to depend on current JWKS keys, but the README now explains how to obtain fresh tokens when exercising real providers.


# Coverage

- `docker run --rm -e SGX_MODE=SIM kzeroxyz/kzero-salt-enclave-service:v0.1.2 make test-coverage-app` (or the locally built equivalent) now emits gcov files and reports 93.13% line coverage for `App/App.cpp`.
