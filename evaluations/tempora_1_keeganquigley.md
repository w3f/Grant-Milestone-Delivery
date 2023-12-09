# Evaluation

- **Status:** Accepted
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

## Tests

`yarn dev` works:

```ts
yarn run v1.22.19
warning ../package.json: No license field
$ next dev
- info Loaded env from /Users/keeganquigley/tempora/.env.local
- ready started server on [::]:3000, url: http://localhost:3000
warning ../package.json: No license field
- event compiled client and server successfully in 94 ms (20 modules)
- wait compiling...
- event compiled client and server successfully in 75 ms (20 modules)
- info Loaded env from /Users/keeganquigley/tempora/.env.local
- info Loaded env from /Users/keeganquigley/tempora/.env.local
- wait compiling /page (client and server)...
(node:19483) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
- event compiled client and server successfully in 4.7s (4487 modules)
- wait compiling...
- event compiled successfully in 290 ms (2268 modules)
- wait compiling /favicon.ico/route (client and server)...
- event compiled client and server successfully in 2.9s (4514 modules)
```

`yarn build` is successful:

```ts
yarn run v1.22.19
warning ../package.json: No license field
$ next build
(node:20862) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
- info Loaded env from /Users/keeganquigley/tempora/.env.local
- info Creating an optimized production build
- info Compiled successfully
- info Linting and checking validity of types
- info Collecting page data ..(node:20981) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20980) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20987) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20988) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20989) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
- info Collecting page data
[    ] - info Generating static pages (0/5)(node:20991) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20990) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20992) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20982) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20983) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20990) ExperimentalWarning: buffer.Blob is an experimental feature. This feature could change at any time
- info Generating static pages (5/5)
(node:20985) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20986) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20984) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
(node:20993) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
- info Finalizing page optimization

Route (app)                                Size     First Load JS
┌ ○ /                                      11.2 kB        1.16 MB
├ ○ /favicon.ico                           0 B                0 B
└ ○ /new-recurring-payment                 48.2 kB         1.2 MB
+ First Load JS shared by all              1.14 MB
  ├ chunks/242-53df7710c6999964.js         3.47 kB
  ├ chunks/503-dfa7e0cc8ba596f3.js         224 kB
  ├ chunks/5360716d-f06d468458110bc8.js    173 kB
  ├ chunks/596-70fc02383742deec.js         26.1 kB
  ├ chunks/aaea2bcf-5e23fc7b93adbe96.js    101 kB
  ├ chunks/c1265c78-55c0cf4cb8b40b0a.js    173 kB
  ├ chunks/f4e5f4e1-777c876ab3540aae.js    23.2 kB
  ├ chunks/fcdd03af-4f650ed25d2178d5.js    364 kB
  ├ chunks/fd9d1056-4fc7323f2e4d7609.js    50.5 kB
  ├ chunks/main-app-d243a5ff7dbf8eaf.js    216 B
  └ chunks/webpack-99f421eb0759ec74.js     1.79 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   182 B          76.6 kB
+ First Load JS shared by all              76.4 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-5d690231d58d313d.js        29.4 kB
  ├ chunks/pages/_app-52924524f99094ab.js  195 B
  └ chunks/webpack-99f421eb0759ec74.js     1.79 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)

✨  Done in 26.36s.
```
`yarn lint` produces no warnings.

`yarn test` works albeit with warnings; see below.

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
