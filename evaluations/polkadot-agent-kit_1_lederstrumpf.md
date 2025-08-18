# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/pull/2549
- **Milestone:** 1
- **Kusama Identity:** FF3bTawSmxLcVAVFfze5gatuFec58fkp78ceL7Z9ivtXHRC
- **Previously successfully merged evaluation:** None in https://github.com/w3f/Grant-Milestone-Delivery

| Number | Deliverable  | Accepted               | Link | Evaluation Notes |
|--------|--------------|------------------------|------|------------------|
| 0a.    | License | <ul><li>[x] </li></ul> | [license repo](https://github.com/openguild-labs/polkadot-agent-kit/tree/d80885c1036731424f2a18807223174ccbea9544/LICENSE), [license docs](https://github.com/elasticlabs-org/polkadot-agent-kit-docs/tree/d0099159268f32964302c3a4bfd2896047f65d0f/LICENSE)  | MIT              |
| 0b.    | Documentation Page + Quickstart tutorial. | <ul><li>[ ] </li></ul> | [Docs](https://cocdap.github.io/agent-docs/), [Quickstart Tutorial](https://cocdap.github.io/agent-docs/quickstart.html)  | Instructions for client integration do not work yet, perhaps some will once latest sdk changes are published. |
| 0c.    |  Unit tests + E2E tests guide + CI pipeline | <ul><li>[ ] </li></ul> | [Unit, E2E & integration test instructions](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/88a843a4556ac815857afdf6cb09e9504913df18/README.md?plain=1#L52-L59), [CI pipeline](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/88a843a4556ac815857afdf6cb09e9504913df18/.github/workflows/ci.yaml#L47-L49) | E2E & integration tests not part of CI pipeline yet |
| 1a.    | Migrate from raw XCM implementation to use ParaSpell as the underlying XCM library | <ul><li>[x] </li></ul> | [ParaSpell migration PR](https://github.com/elasticlabs-org/polkadot-agent-kit/pull/60)  | Tentative yes, but haven't tested client integration yet; see 0b. |
| 1b.    | Support multi-hop asset transferring via XCM between parachains (reserve transfers) and parachain to relaychain (teleport). | <ul><li>[ ] </li></ul> | Nyet for now - missing key tests. | Firstly: Integration tests don't test constrain test outcome by any criteria; see 2. Secondly: No parachain->parachain tests in E2E or integration tests. Thirdly want to test [client integration](https://github.com/elasticlabs-org/polkadot-agent-kit/blob/88a843a4556ac815857afdf6cb09e9504913df18/packages/sdk/README.md?plain=1#L21-L54) before approving; see 0b. |
| 1c.    | Support XCM transact to allow agent sending runtime calls cross-chain. | <ul><li>[ ] </li></ul> | [XCM E2E tests](https://github.com/openguild-labs/polkadot-agent-kit/blob/d80885c1036731424f2a18807223174ccbea9544/packages/sdk/tests/e2e/sdk.test.ts#L91-L120) | Cannot assess this with certainty while E2E tests only assert that [something™ happened](https://github.com/openguild-labs/polkadot-agent-kit/blob/d80885c1036731424f2a18807223174ccbea9544/packages/sdk/tests/e2e/sdk.test.ts#L81-L242) - only checks for "success" & return of mock results  |
| 2.     | Thorough test coverage for XCM functionalities | <ul><li>[ ] </li></ul> | [XCM integration tests](https://github.com/openguild-labs/polkadot-agent-kit/tree/d80885c1036731424f2a18807223174ccbea9544/packages/sdk/tests/integration-tests/sdk.itest.ts) | Firstly: Doesn't seem the integration test suite actually checks for successful results - only that [something™ happened](https://github.com/openguild-labs/polkadot-agent-kit/blob/d80885c1036731424f2a18807223174ccbea9544/packages/sdk/tests/integration-tests/sdk.itest.ts#L63-L64) - ein nischt-nischt. Secondly: Missing both paseo & kusama relay & asset hub chains, as well as most parachains. Thirdly: Only three xcm test queries in [integration test suite](https://github.com/openguild-labs/polkadot-agent-kit/tree/d80885c1036731424f2a18807223174ccbea9544/packages/sdk/tests/integration-tests/sdk.itest.ts); these should at least be supplemented by equivalent tests for other parachain/relaychain pairings. |

## General Notes

Submission is clearly not ready for acceptance at this stage yet, so omitting detailed notes for now - notes above should provide sufficient insight into my reasons for this.
In the meantime, see https://github.com/w3f/Grant-Milestone-Delivery/pull/1270#pullrequestreview-3126418351.
