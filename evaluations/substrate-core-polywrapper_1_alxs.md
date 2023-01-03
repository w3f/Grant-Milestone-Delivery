# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate_core_polywrapper.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [rpc-wrapper](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/LICENSE.md), [signer-provider-js](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/LICENSE.md) | GPL v3 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/README.md) | |
| 0c. | Testing | <ul><li>[ ] </li></ul> | [rpc-wrapper](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/src/__tests__/e2e.spec.ts), [signer-provider-js](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/src/__tests__/e2e.spec.ts) | No "polywrap recipes json tests" as described in the application but Jest integration tests (which should be fine)
| 0d. | Article | <ul><li>[x] </li></ul> | [GDoc](https://docs.google.com/document/d/1G7l0sgyEI_X9ucnEkJMUcD_bYo-FeCm9Ot_ETR7giiM/edit#heading=h.uzkbekb348bf) | sent to grantsPR for review |
| 1. | Schema Definitions | <ul><li>[x] </li></ul> | [Signer-Provider Plugin Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/src/schema.graphql), [RPC Wrapper Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/schema.graphql) |
| 2. | `signer-provider` TypeScript Plugin | <ul><li>[x] </li></ul>  | [signer-provider-js](https://github.com/polywrap/integrations/tree/main/protocol/substrate/signer-provider-js) | implemented
| 3. | `rpc-wrapper` Wasm Wrapper | <ul><li>[x] </li></ul> | [rpc-wrapper](https://github.com/polywrap/integrations/tree/main/protocol/substrate/rpc-wrapper) | build errors fixed

## General Notes

Great delivery and interesting project.
There were some changes in functionality with respect to the deliverable specifications in the application, such as the rpc-wrapper API having changed (though its scope remained essentially the same) and some features of the signer-provider not being needed.
The team submitted an amendment to address these changes in https://github.com/w3f/Grants-Program/pull/1262.

See the full conversation on the [delivery PR](https://github.com/w3f/Grant-Milestone-Delivery/pull/610).

Testing could be more comprehensive with mainly the happy path being tested or return values checked for errors.

Great communication with the team, who among other things provided a demo application using the wrapper under [dOrgJelli/substrate-wrapper-test](https://github.com/dOrgJelli/substrate-wrapper-test)
