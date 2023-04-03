# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/ChainSafe/Grants-Program/blob/master/applications/substrate_core_polywrapper.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.    | License   | <ul><li>[x] </li></ul> | [License](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/LICENSE.md)            |       |
| 0b.    | Documentation       | <ul><li>[x] </li></ul> | https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/src/__tests__/e2e.spec.ts                      | Looks good.   |
| 0c.    | Testing      | <ul><li>[x] </li></ul> | https://github.com/bsn-si/rubeus-smartcontract/blob/main/README.md#how-to | Looks good. |
| 0d.    | Article         | <ul><li>[x] </li></ul> | [Link](https://docs.google.com/document/d/1G7l0sgyEI_X9ucnEkJMUcD_bYo-FeCm9Ot_ETR7giiM/edit#heading=h.uzkbekb348bf)            | See notes below.      |
| 1.     | Schema Definitions | <ul><li>[x] </li></ul> | [Signer-Provider Plugin Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/src/schema.graphql), [RPC Wrapper Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/schema.graphql) | Looks good.      |
| 2.     | `signer-provider` TypeScript Plugin | <ul><li>[x] </li></ul> | [Link](https://github.com/polywrap/integrations/tree/main/protocol/substrate/signer-provider-js)
| 3.     | `rpc-wrapper` Wasm Wrapper | <ul><li>[x] </li></ul> | [Link](https://github.com/polywrap/integrations/tree/main/protocol/substrate/rpc-wrapper)

# General Notes

`yarn test` runs 5 tests successfully for `signer-provider`

```js
 PASS  src/__tests__/e2e.spec.ts (8.624 s)
  e2e
    ✓ getAccounts returns Alice (52 ms)
    ✓ signRaw produces a valid signature from test account (6 ms)
    ✓ signRaw throws if an unmanaged account address is requested (1 ms)
    ✓ signPayload produces a valid signature from test account (12 ms)
    ✓ signPayload throws if an unmanaged account address is requested (1 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        8.897 s
Ran all test suites.
✨  Done in 9.44s.
```
Although there are a number of conflicting packages warnings:
```js
console.warn
    @polkadot/util has multiple versions, ensure that there is only one installed.
    Either remove and explicitly install matching versions or dedupe using your package manager.
    The following conflicting packages were found:
    	cjs 10.2.1	node_modules/@polkadot/util/cjs
    	cjs 10.3.1	node_modules/@polkadot/util/cjs
    	cjs 10.2.1	node_modules/@polkadot/util-crypto/node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/util/cjs
    	cjs 10.3.1	node_modules/@polkadot/extension-dapp/node_modules/@polkadot/util/cjs
    	cjs 10.3.1	node_modules/@polkadot/ui-keyring/node_modules/@polkadot/util/cjs

      4 | import { Injected, InjectedAccount } from "@polkadot/extension-inject/types";
      5 | import { cryptoWaitReady } from "@polkadot/util-crypto";
    > 6 | import { Keyring } from "@polkadot/ui-keyring";
        | ^
      7 |
      8 | export function mockExtension(): void {
      9 |   injectExtension(
      ```
      
      
