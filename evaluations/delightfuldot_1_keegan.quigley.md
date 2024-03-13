# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/delightfuldot.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**
| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/LICENSE) |  |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | - [README](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1) <br/> - [Playground Sandbox](https://codesandbox.io/p/devbox/trydedot-th96cm?file=%2Fmain.ts%3A24%2C26) | Great docs! |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [How to install & run the library](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1?tab=readme-ov-file#have-a-quick-taste)  | Tests passing. |
| 1. | Core functionalities | <ul><li>[x] </li></ul> | - Chain types & APIs ([codegen](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1/packages/codegen), [chaintypes](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1/packages/chaintypes), [codecs](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1/packages/codecs)) <br/> - [Metadata v14 parser](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/codecs/src/metadata/v14.ts) <br/> - [RPC APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/RpcExecutor.ts) <br/> - [Constant APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/ConstantExecutor.ts) <br/> - [Query Storage APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/StorageQueryExecutor.ts) <br/> - [Event APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/EventExecutor.ts) <br/> - [Error APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/ErrorExecutor.ts) | Looks good. |
| 2. | Publish to npm | <ul><li>[x] </li></ul> |  - [delightfuldot](https://www.npmjs.com/package/delightfuldot) <br/> - [7 other packages](https://www.npmjs.com/search?q=%40delightfuldot) | Looks good. |

# General Notes

Nicely done! Good automatic handling of data formats, and functionalities. The documentation is readily available and explains usage with examples. This library is definitely promising.

## Tests

Unit tests all passing in Ubuntu and Codespaces:

<details>
  <summary>Output</summary>

```ts
@keeganquigley ➜ /workspaces/delightfuldot (w3f-delivery/m1) $ npm test

> test
> npx lerna run --no-bail --verbose test

lerna notice cli v7.4.2
lerna verb packageConfigs Resolving packages based on package.json "workspaces" configuration.
lerna verb rootPath /workspaces/delightfuldot
lerna info versioning independent
lerna verb run Nx target configuration was not found. Task dependencies will not be automatically included.

 >  Lerna (powered by Nx)   Running target test for 4 projects:

    - delightfuldot
    - @delightfuldot/codecs
    - @delightfuldot/shape
    - @delightfuldot/utils

 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

> @delightfuldot/utils:test


 RUN  v0.34.6 /workspaces/delightfuldot/packages/utils

 ✓ src/__tests__/string.spec.ts  (11 tests) 6ms
 ✓ src/__tests__/assert.spec.ts  (7 tests) 6ms

 Test Files  2 passed (2)
      Tests  18 passed (18)
   Start at  17:55:29
   Duration  1.67s (transform 85ms, setup 0ms, collect 213ms, tests 12ms, environment 906ms, prepare 185ms)


> @delightfuldot/shape:test


 RUN  v0.34.6 /workspaces/delightfuldot/packages/shape

 ✓ src/lean/__tests__/index.spec.ts  (4 tests) 9ms
 ✓ src/extension/__test__/result.spec.ts  (10 tests) 8ms
 ✓ src/extension/__test__/hex.spec.ts  (4 tests) 5ms
 ✓ src/extension/__test__/object.spec.ts  (1 test) 5ms
 ✓ src/extension/__test__/str.spec.ts  (2 tests) 5ms
 ✓ src/extension/__test__/array.spec.ts  (2 tests) 4ms

 Test Files  6 passed (6)
      Tests  23 passed (23)
   Start at  17:55:33
   Duration  5.40s (transform 95ms, setup 1ms, collect 1.21s, tests 36ms, environment 2.67s, prepare 432ms)


> @delightfuldot/codecs:test


 RUN  v0.34.6 /workspaces/delightfuldot/packages/codecs

 ✓ src/registry/__tests__/CodecRegistry.spec.ts  (15 tests) 12ms
 ✓ src/metadata/__tests__/Metadata.spec.ts  (4 tests) 69ms

 Test Files  2 passed (2)
      Tests  19 passed (19)
   Start at  17:55:41
   Duration  3.16s (transform 128ms, setup 0ms, collect 1.65s, tests 81ms, environment 872ms, prepare 195ms)


> delightfuldot:test


 RUN  v0.34.6 /workspaces/delightfuldot/packages/api

 ✓ src/__tests__/DelightfulApi.spec.ts  (14 tests) 859ms

 Test Files  1 passed (1)
      Tests  14 passed (14)
   Start at  17:55:46
   Duration  2.82s (transform 692ms, setup 0ms, collect 1.15s, tests 859ms, environment 423ms, prepare 155ms)
```
</details>
