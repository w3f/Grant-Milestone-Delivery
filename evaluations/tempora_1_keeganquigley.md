# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/roloi-xcm-payment-automation.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> |[Apache License 2.0](https://github.com/NeoPower-Digital/tempora/blob/main/LICENSE) | - | 
| 0b.  | User guide | <ul><li>[x] </li></ul> | [User guide on Medium](https://medium.com/@NeoPowerDigital/on-chain-payment-scheduling-in-polkadot-2ff15ed6485a) | Great docs, thank you! | 
| 0c.  | Developer documentation and testing guide | <ul><li>[x] </li></ul> | [Developer documentation & testing guide](https://github.com/NeoPower-Digital/tempora/blob/main/README.md) | Great work. Very detailed repo readme. | 
| 1  | UI & React XCM tooling | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/NeoPower-Digital/tempora) | Ok. | 
| 1a  | Code Formatting guidelines | <ul><li>[x] </li></ul> | [Prettier configuration file ](https://github.com/NeoPower-Digital/tempora/blob/main/.prettierrc) | Ok. |

# General Notes

Great progress so far! The Vercel app works great and has a very sleek, easy-to-use UI. I was able to make both fixed and recurring payments on the testnet.

## Evaluation v2

## UI

I'm able to successfully set up the proxy accounts and set up recurring payments.

<img width="718" alt="proxy" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/cf79f9db-6c0b-4a54-89d2-c326436070e0">

The transactions are successful! Shame that you can only schedule for the top of the hour but this is due to an Oak Network restriction.

<img width="718" alt="recurring" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/c705dca3-d766-4219-b9c3-336f717d6879">

<img width="718" alt="recurring2" src="https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/c8561039-3c16-4676-b423-653628fc53fc">

## Evaluation v1

The unit tests are running now but with warnings about conflicting node modules. It also seems to get stuck waiting for file changes:

<details>

<summary>Output</summary>

```ts
ubuntu@ip-172-31-31-38:~/tempora$ yarn test
yarn run v1.22.19
warning ../package.json: No license field
$ vitest

 DEV  v0.34.6 /home/ubuntu/tempora

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.5.1      node_modules/@polkadot/util/

stderr | unknown test
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/

stderr | unknown test
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-create/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-create/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util-crypto/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
@polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-crypto/
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-bridge/
@polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-crypto-wasm/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-crypto-wasm/
@polkadot/wasm-util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-util/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-util/

stderr | unknown test
The current test runner does not support afterEach/teardown hooks. This means we won't be able to run automatic cleanup and you should be calling cleanup() manually.
The current test runner does not support beforeAll/afterAll hooks. This means you should be setting IS_REACT_ACT_ENVIRONMENT manually.

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-create/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-create/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util-crypto/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
@polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-crypto/
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-bridge/
@polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-crypto-wasm/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-crypto-wasm/
@polkadot/wasm-util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-util/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-util/

stderr | unknown test
The current test runner does not support afterEach/teardown hooks. This means we won't be able to run automatic cleanup and you should be calling cleanup() manually.
The current test runner does not support beforeAll/afterAll hooks. This means you should be setting IS_REACT_ACT_ENVIRONMENT manually.

stderr | unknown test
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.5.1      node_modules/@polkadot/util/

stderr | unknown test
The current test runner does not support afterEach/teardown hooks. This means we won't be able to run automatic cleanup and you should be calling cleanup() manually.
The current test runner does not support beforeAll/afterAll hooks. This means you should be setting IS_REACT_ACT_ENVIRONMENT manually.

stderr | unknown test
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-create/node_modules/@polkadot/util/
@polkadot/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/api-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/rpc-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-augment/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-create/node_modules/@polkadot/util/
        esm 12.6.1      node_modules/@polkadot/types-codec/node_modules/@polkadot/util/
@polkadot/util-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 12.5.1      node_modules/@polkadot/util-crypto/
        esm 12.6.1      node_modules/@polkadot/types/node_modules/@polkadot/util-crypto/
@polkadot/wasm-crypto has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-crypto/
@polkadot/wasm-bridge has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto/node_modules/@polkadot/wasm-bridge/
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-bridge/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-bridge/
@polkadot/wasm-crypto-wasm has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-crypto-init/node_modules/@polkadot/wasm-crypto-wasm/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-crypto-wasm/
@polkadot/wasm-util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
        esm 7.2.2       node_modules/@polkadot/wasm-util/
        esm 7.3.1       node_modules/@polkadot/types/node_modules/@polkadot/wasm-util/

 ✓ __tests__/useProxyAccount.test.tsx (20)
 ✓ __tests__/useProxyAccount.test.tsx (20)
 ✓ __tests__/useSchedulePayment.test.tsx (2)
 ✓ __tests__/useFeeEstimation.test.tsx (2)
 ✓ __tests__/proxyAccountsHelper.test.tsx (5)

 Test Files  4 passed (4)
      Tests  29 passed (29)
   Start at  23:51:25
   Duration  6.67s (transform 542ms, setup 1ms, collect 9.19s, tests 181ms, environment 2.10s, prepare 466ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```
</details>
