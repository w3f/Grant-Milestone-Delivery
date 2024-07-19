# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typechain_revived.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/C-Forge/typechain-polkadot/blob/91d3dbfd4b3147eac105576e33d2667bffd13f2f/LICENSE) | MIT  |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/C-Forge/typechain-polkadot/blob/4f431a92f0878abafd3eba4c3749405cc8625ee7/README.md), [docs/about](https://github.com/C-Forge/typechain-polkadot/blob/91d3dbfd4b3147eac105576e33d2667bffd13f2f/docs/about.md) | Build instructions, test instructions, usage. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [tests/README](https://github.com/C-Forge/typechain-polkadot/blob/4f431a92f0878abafd3eba4c3749405cc8625ee7/tests/README.md), [docs/about](https://github.com/C-Forge/typechain-polkadot/blob/4f431a92f0878abafd3eba4c3749405cc8625ee7/docs/about.md) | Unit tests as well as manual test examples. |
| **1.** | Update to support ink! 5 | <ul><li>[x] </li></ul> | [commit/fa0691](https://github.com/C-Forge/typechain-polkadot/commit/fa0691843585ab6fc1fe8ed10240a2d89a108357) | — |
| **2.** | Remove ReturnNumber | <ul><li>[x] </li></ul> | [commit/fa0691](https://github.com/C-Forge/typechain-polkadot/commit/fa0691843585ab6fc1fe8ed10240a2d89a108357) | — |
| **3.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [tests/README](https://github.com/C-Forge/typechain-polkadot/blob/4f431a92f0878abafd3eba4c3749405cc8625ee7/tests/README.md) | Same as above |
| **4.** | Update Typechain-compiler | <ul><li>[x] </li></ul> | [commit/d746c4](https://github.com/C-Forge/typechain-polkadot/commit/d746c4e0fc801bfaf0725cefebc97ea042f70786) | — |
| **5.** | Generate Enums for events | <ul><li>[x] </li></ul> | [commit/d746c4](https://github.com/C-Forge/typechain-polkadot/commit/d746c4e0fc801bfaf0725cefebc97ea042f70786) | — |

## General Notes

Minor test issues fixed on request. 

### `pnpm run test` output

```sh
> pnpm run test                 

> typechain-workspace@ test /typechain-revived/typechain-polkadot
> npm run gen-test-ts && npm run only-test


> gen-test-ts
> npx tsx packages/typechain-polkadot/index.ts --in tests/artifacts --out tests/generated

[Typechain Generator] Could not read wasm file for contract_with_enums. Typechain will be forced to use contract file which may be flaky.
[Typechain Generator] Could not read wasm file for my_psp22. Typechain will be forced to use contract file which may be flaky.
[Typechain Generator] Could not read wasm file for my_psp34. Typechain will be forced to use contract file which may be flaky.
[Typechain Generator] Could not read wasm file for my_psp34_events. Typechain will be forced to use contract file which may be flaky.
(node:17751) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/packages/typechain-polkadot/node_modules/@c-forge/typechain-polkadot-parser/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(Use `node --trace-deprecation ...` to show where the warning was created)

> only-test
> npx mocha --config ./.mocharc.js -C --exit --full-trace false --require tsx/cjs 'tests/**/*.ts' --colors

(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author
(node:17787) [DEP0128] DeprecationWarning: Invalid 'main' field in '/typechain-revived/typechain-polkadot/node_modules/@c-forge/typechain-types/package.json' of 'dist/index.js'. Please either fix that or report it to the module author


  MY_PSP34
No wasm file found for contract_with_enums. Trying to use contract file...
    ✔ Returns proper value

  Events
No wasm file found for my_psp34_events. Trying to use contract file...
    ✔ Subscription to events works (4099ms)
No wasm file found for my_psp34_events. Trying to use contract file...
    ✔ Test events on submittables (39ms)
No wasm file found for my_psp34_events. Trying to use contract file...
    ✔ Test events on submittables with ReturnNumber (48ms)

  Correctness of the PSP22 contract' methods types
No wasm file found for my_psp22. Trying to use contract file...
    ✔ total_supply works
No wasm file found for my_psp22. Trying to use contract file...
    ✔ balance_of works
No wasm file found for my_psp22. Trying to use contract file...
    ✔ allowance works (134ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ Transfer works (101ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ Cannot transfer above the amount (73ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ TransferFrom works (134ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ Transfer without approval should fail (43ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ PSP22Mintable::mint works (40ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ PSP22

  Correctness of the PSP22 contract' methods types query
No wasm file found for my_psp22. Trying to use contract file...
    ✔ `PSP22::total_supply`
    ✔ `PSP22::balance_of`
    ✔ `PSP22::balance_of`
    ✔ `mint_to`
    ✔ `PSP22Mintable::mint`
    ✔ `PSP22::allowance`
    ✔ `PSP22::increase_allowance` & `PSP22::decrease_allowance`
    ✔ `PSP22::transfer`

  Correctness of the PSP22 contract' methods types tx
No wasm file found for my_psp22. Trying to use contract file...
    ✔ `PSP22::total_supply`
    ✔ `PSP22::balance_of`
    ✔ `PSP22Mintable::mint`
    ✔ `PSP22::allowance`
    ✔ `PSP22::increase_allowance` & `PSP22::decrease_allowance` (38ms)
    ✔ `PSP22::transfer`

  MY_PSP34 (ink5)
    ✔ Approve (43ms)
    ✔ Transfer
    ✔ Can mint any Id (42ms)
    ✔ Allowance (60ms)
    ✔ BalanceOf
    ✔ OwnerOf
    ✔ TotalSupply
    ✔ listen on approval event (89ms)

  MY_PSP34 (ink5)
    ✔ Returns total supply (45ms)
    ✔ Transfer works (62ms)
    ✔ Can mint any Id (177ms)

  MY_PSP34
No wasm file found for my_psp34. Trying to use contract file...
    ✔ Approve
    ✔ Transfer
    ✔ Can mint any Id
    ✔ Allowance
    ✔ BalanceOf
    ✔ OwnerOf
    ✔ TotalSupply

  MY_PSP34
No wasm file found for my_psp34. Trying to use contract file...
    ✔ Returns total supply
    ✔ Transfer works (46ms)
    ✔ Can mint any Id (134ms)


  48 passing (13s)
```