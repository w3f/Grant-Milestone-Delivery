# Evaluation


- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/delightfuldot.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 1**

|  Number | Deliverable                           | Accepted |Link  | Evaluation Notes  |
|--------:|---------------------------------------| :------: |-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/LICENSE) |  |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | - [README](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2) <br/> - [Playground Sandbox](https://codesandbox.io/p/devbox/trydedot-th96cm?file=%2Fmain.ts%3A24%2C26) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | - [How to install & run the library](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2?tab=readme-ov-file#have-a-quick-taste) <br/> - [Zombienet Tests](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/zombienet-tests/src), [GH Action](https://github.com/dedotdev/dedot/actions/workflows/zombienet-tests.yml)  | Run tests instructions: <br/> 1. Clone the [project](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2) <br/> 2. Run `yarn install` <br/> 3. Run `yarn test` |
| 1. | More core functionalities | <ul><li>[x] </li></ul> | - Transaction Apis ([TxExecutor](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/executor/TxExecutor.ts), [Extrinsic Codec](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/codecs/src/codecs/extrinsic/Extrinsic.ts), [Signed Extensions](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/packages/api/src/extrinsic/extensions)) <br/> - Runtime Apis ([Executor](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/executor/RuntimeApiExecutor.ts), [Runtime Api Specs](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/specs/src/runtime/all.ts)) <br/> |  |



## General Notes

## testing output - passes
<details>

    yarn test
    (node:1917) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
    (Use `node --trace-deprecation ...` to show where the warning was created)
    lerna notice cli v7.4.2
    lerna verb packageConfigs Resolving packages based on package.json "workspaces" configuration.
    lerna verb rootPath /root/dedot
    lerna info versioning independent
    lerna verb run Nx target configuration was not found. Task dependencies will not be automatically included.

    >  Lerna (powered by Nx)   Running target test for 4 projects:

        - dedot
        - @dedot/codecs
        - @dedot/shape
        - @dedot/utils

    ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    > @dedot/utils:test

    The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

    RUN  v0.34.6 /root/dedot/packages/utils

    ✓ src/address/ss58/__tests__/encodeAddress.spec.ts  (23 tests) 28ms
    ✓ src/address/ss58/__tests__/decodeAddress.spec.ts  (41 tests) 50ms
    ✓ src/__tests__/string.spec.ts  (18 tests) 10ms
    ✓ src/address/ss58/__tests__/checkAddressChecksum.spec.ts  (6 tests) 13ms
    ✓ src/__tests__/assert.spec.ts  (7 tests) 7ms
    ✓ src/address/eth/__test__/isEthereumAddress.spec.ts  (6 tests) 9ms
    ✓ src/hash/__tests__/blake2.spec.ts  (5 tests) 13ms
    ✓ src/address/eth/__test__/isEthereumChecksum.spec.ts  (5 tests) 10ms
    ✓ src/hash/__tests__/xxhash.spec.ts  (4 tests) 8ms
    ✓ src/hash/__tests__/keccak.spec.ts  (2 tests) 9ms
    ✓ src/__tests__/bigint.spec.ts  (3 tests) 6ms

    Test Files  11 passed (11)
        Tests  120 passed (120)
    Start at  22:02:57
    Duration  7.10s (transform 124ms, setup 0ms, collect 1.34s, tests 163ms, environment 2.87s, prepare 854ms)


    > @dedot/shape:test

    The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

    RUN  v0.34.6 /root/dedot/packages/shape

    ✓ src/extension/__test__/result.spec.ts  (10 tests) 13ms
    ✓ src/lean/__tests__/Struct.spec.ts  (3 tests) 23ms
    ✓ src/lean/__tests__/Enum.spec.ts  (3 tests) 9ms
    ✓ src/extension/__test__/hex.spec.ts  (4 tests) 10ms
    ✓ src/extension/__test__/object.spec.ts  (1 test) 9ms
    ✓ src/extension/__test__/str.spec.ts  (2 tests) 7ms
    ✓ src/extension/__test__/array.spec.ts  (2 tests) 7ms

    Test Files  7 passed (7)
        Tests  25 passed (25)
    Start at  22:03:05
    Duration  5.00s (transform 81ms, setup 0ms, collect 1.31s, tests 78ms, environment 1.82s, prepare 552ms)


    > @dedot/codecs:test

    The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

    RUN  v0.34.6 /root/dedot/packages/codecs

    ✓ src/codecs/extrinsic/__tests__/Extrinsic.spec.ts  (2 tests) 389ms
    ✓ src/codecs/generic/__tests__/Era.spec.ts  (11 tests) 12ms
    ✓ src/codecs/metadata/__tests__/Metadata.spec.ts  (4 tests) 96ms
    ✓ src/registry/__tests__/PortableRegistry.spec.ts  (5 tests) 27ms
    ✓ src/codecs/extrinsic/__tests__/ExtrinsicVersion.spec.ts  (4 tests) 10ms
    ✓ src/codecs/known/runtime/__tests__/MultiAddress.spec.ts  (1 test) 11ms
    ��� src/codecs/generic/__tests__/Header.spec.ts  (3 tests) 7ms
    ✓ src/codecs/known/runtime/__tests__/OpaqueExtrinsic.spec.ts  (2 tests) 7ms

    Test Files  8 passed (8)
        Tests  32 passed (32)
    Start at  22:03:12
    Duration  7.46s (transform 164ms, setup 0ms, collect 2.64s, tests 559ms, environment 2.10s, prepare 616ms)


    > dedot:test

    The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

    RUN  v0.34.6 /root/dedot/packages/api

    ✓ src/client/__tests__/Dedot.spec.ts  (19 tests) 1170ms

    Test Files  1 passed (1)
        Tests  19 passed (19)
    Start at  22:03:21
    Duration  3.11s (transform 919ms, setup 0ms, collect 1.31s, tests 1.17s, environment 293ms, prepare 104ms)


    ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

    >  Lerna (powered by Nx)   Successfully ran target test for 4 projects
</details>