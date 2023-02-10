# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate_core_polywrapper.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** Alxs, keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [rpc-wrapper](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/LICENSE.md), [signer-provider-js](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/LICENSE.md) | GPL v3 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/README.md) | |
| 0c. | Testing | <ul><li>[x] </li></ul> | [rpc-wrapper](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/src/__tests__/e2e.spec.ts), [signer-provider-js](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/src/__tests__/e2e.spec.ts) | Looks good.
| 0d. | Article | <ul><li>[x] </li></ul> | [GDoc](https://docs.google.com/document/d/1G7l0sgyEI_X9ucnEkJMUcD_bYo-FeCm9Ot_ETR7giiM/edit#heading=h.uzkbekb348bf) | sent to grantsPR for review |
| 1. | Schema Definitions | <ul><li>[x] </li></ul> | [Signer-Provider Plugin Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/src/schema.graphql), [RPC Wrapper Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/schema.graphql) | looks good.
| 2. | `signer-provider` TypeScript Plugin | <ul><li>[x] </li></ul>  | [signer-provider-js](https://github.com/polywrap/integrations/tree/main/protocol/substrate/signer-provider-js) | implemented.
| 3. | `rpc-wrapper` Wasm Wrapper | <ul><li>[x] </li></ul> | [rpc-wrapper](https://github.com/polywrap/integrations/tree/main/protocol/substrate/rpc-wrapper) | build errors fixed.

## General Notes

Great delivery and interesting project.
There were some changes in functionality with respect to the deliverable specifications in the application, such as the rpc-wrapper API having changed (though its scope remained essentially the same) and some features of the signer-provider not being needed.
The team submitted an amendment to address these changes in https://github.com/w3f/Grants-Program/pull/1262.

See the full conversation on the [delivery PR](https://github.com/w3f/Grant-Milestone-Delivery/pull/610).

Testing could be more comprehensive with mainly the happy path being tested or return values checked for errors.

Great communication with the team, who among other things provided a demo application using the wrapper under [dOrgJelli/substrate-wrapper-test](https://github.com/dOrgJelli/substrate-wrapper-test)

### General Notes v2

The `yarn codegen && yarn build` command now works after first running `yarn` in the substrate directory.
```rust
> docker run --rm -v /home/keegan/integrations/protocol/substrate/rpc-wrapper/.polywrap/wasm/build/project:/project -v /home/keegan/integrations/protocol/substrate/rpc-wrapper/.polywrap/wasm/build/linked-packages:/linked-packages polywrap/vm-base-rs:latest /bin/bash -c "chmod -R 777 /project && chmod -R 777 /linked-packages"
🔄 Artifacts written to ./build
✅ Artifacts written to ./build
✅ Compile Polywrap
Done in 132.15s.
```

`yarn deploy` is also successful:
```rust
yarn deploy
yarn run v1.22.19
$ npx polywrap deploy -o deployment.json
🔄 Manifest loaded from ./polywrap.yaml
✅ Manifest loaded from ./polywrap.yaml
🔄 Manifest loaded from ./polywrap.deploy.yaml
DeployManifest is using an older version of the manifest format (0.1.0). Please update your manifest to the latest version (0.2.0) by using the "polywrap manifest migrate <type>" command.
✅ Manifest loaded from ./polywrap.deploy.yaml
🔄 Load manifest extension from ./.polywrap/wasm/deploy/modules/ipfs/polywrap.deploy.ext.json
✅ Load manifest extension from ./.polywrap/wasm/deploy/modules/ipfs/polywrap.deploy.ext.json


Executing 'ipfs_deploy' deployment DeployJob:

- ipfs_deploy


Executing step: 'ipfs_deploy', with URI: 'wrap://fs/./build'
Successfully executed step 'ipfs_deploy'. Result: 'wrap://ipfs/Qmey1bQAhfoNNkXVabipcNE9CkcNkf5wQd4Qz9Z4kuo4UE'


Successfully executed 'ipfs_deploy' deployment job


Done in 2.04s.
```

Thanks for creating the `substrate-wrapper-test` repo, this test completes successfully as noted [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/610#issuecomment-1361709184):
```rust
Starting substrate-test-env_substrate-node-template_1 ... done
****************************************
Block Hash:  0x1ece48cf1ebfadae2a8a40b2c2f3c580f51f2babdf1523a80aa5e1c050411cfe
****************************************
warning ../package.json: No license field
$ npx polywrap infra down
🔄 Manifest loaded from ./polywrap.infra.yaml
✅ Manifest loaded from ./polywrap.infra.yaml
Using infra modules:
- substrate-test-env
```

`yarn build` works for both `signer-provider-js` and `rpc-wrapper`.

```rust
yarn build
yarn run v1.22.19
$ rimraf ./build && yarn codegen && tsc --project tsconfig.json
$ npx polywrap codegen
🔄 Manifest loaded from ./polywrap.yaml
✅ Manifest loaded from ./polywrap.yaml
🔄 Generate types
✅ Generate types
🔄 Manifest written to ./build/wrap.info
✅ Manifest written to ./build/wrap.info
🔥 Types were generated successfully 🔥
Done in 2.76s.
```
```rust
> docker run --rm -v /home/keegan/integrations/protocol/substrate/rpc-wrapper/.polywrap/wasm/build/project:/project -v /home/keegan/integrations/protocol/substrate/rpc-wrapper/.polywrap/wasm/build/linked-packages:/linked-packages polywrap/vm-base-rs:latest /bin/bash -c "chmod -R 777 /project && chmod -R 777 /linked-packages"
🔄 Artifacts written to ./build
✅ Artifacts written to ./build
✅ Compile Polywrap
Done in 40.55s.
```

`yarn test` works for both `signer-provider-js` and `rpc-wrapper` 
```js
 PASS  src/__tests__/e2e.spec.ts (7.721 s)
  e2e
    ✓ blockHash (124 ms)
    ✓ retrieves genesis block parent hash is 00000 (125 ms)
    ✓ retrieves the chain metadata (16 ms)
    ✓ state get runtime version (5 ms)
    ✓ storage value (17 ms)
    ✓ return constant values (49 ms)
    ✓ rpc_methods (3 ms)
    ✓ get storage maps (14 ms)
    ✓ get storage maps paged (34 ms)
    ✓ get account info of Alice from chain (17 ms)
    ✓ can get signer-provider managed accounts. Returns Alice (29 ms)
    ✓ can sign using extension provider and get same signature as using polkadot-js directly (10 ms)
    ○ skipped Can send a signed extrinsic to the chain

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 12 passed, 13 total
Snapshots:   0 total
Time:        7.984 s
Ran all test suites.
```
The only remaining issue is the skipped test. Can this be fixed or refactored?
**UPDATE:** Test was fixed.

### General Notes v3 (by keegan quigley)

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
Docker compose file build and tests successfully with `yarn build` and `yarn test`. 

