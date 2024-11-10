# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typechain_revived.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/C-Forge/typechain-polkadot/blob/72a9ab41c17c1bfec7caa5220f69e4144c324001/LICENSE) | MIT | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | [docs/about.md](https://github.com/C-Forge/typechain-polkadot/blob/72a9ab41c17c1bfec7caa5220f69e4144c324001/docs/about.md), [packages/typechain-compiler/README](https://github.com/C-Forge/typechain-polkadot/blob/72a9ab41c17c1bfec7caa5220f69e4144c324001/packages/typechain-compiler/README.md), [packages/typechain-polkadot/README](https://github.com/C-Forge/typechain-polkadot/blob/72a9ab41c17c1bfec7caa5220f69e4144c324001/packages/typechain-polkadot/README.md) | Thorough documentation. | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | [/tests](https://github.com/C-Forge/typechain-polkadot/tree/72a9ab41c17c1bfec7caa5220f69e4144c324001/tests) | — | 
| 0e. | Article | <ul><li>[x] </li></ul> | [docs/whats_new.md](https://github.com/C-Forge/typechain-polkadot/blob/72a9ab41c17c1bfec7caa5220f69e4144c324001/docs/whats_new.md) | I recommend publishing this somewhere more accessible. | 
| **1** | SC Deployment code | <ul><li>[x] </li></ul> | [commit/221d89](https://github.com/C-Forge/typechain-polkadot/commit/221d891bf0f2ab63918a469bc8aaacf40579da79) | — |
| **2** | Improve Result/Error handling | <ul><li>[x] </li></ul> | [commit/221d89](https://github.com/C-Forge/typechain-polkadot/commit/221d891bf0f2ab63918a469bc8aaacf40579da79) | — |
| **3** | Handle bugs & issues | <ul><li>[x] </li></ul> | [commit/221d89](https://github.com/C-Forge/typechain-polkadot/commit/221d891bf0f2ab63918a469bc8aaacf40579da79) | — |
| **4** | Incorporate docker build into typechain | <ul><li>[x] </li></ul> | [commit/f15c78](https://github.com/C-Forge/typechain-polkadot/commit/f15c78f224d2dbdaa3af770a4f13af1316bd5e59) | — |


## General Notes

- —

### `pnpm run test` output


```sh
$ pnpm run test

> typechain-workspace@ test /typechain/typechain-polkadot
> npm run gen-test-ts && npm run only-test


> gen-test-ts
> npx tsx packages/typechain-polkadot/index.ts --in tests/artifacts --out tests/generated

[Typechain Generator] Could not read wasm file for contract_with_enums. Typechain will be forced to use contract file which may be flaky.
[Typechain Generator] Could not read wasm file for my_psp22. Typechain will be forced to use contract file which may be flaky.
[Typechain Generator] Could not read wasm file for my_psp34. Typechain will be forced to use contract file which may be flaky.
[Typechain Generator] Could not read wasm file for my_psp34_events. Typechain will be forced to use contract file which may be flaky.

> only-test
> npx mocha --config ./.mocharc.js -C --exit --full-trace false --require tsx/cjs 'tests/**/*.ts' --colors



  MY_PSP34
No wasm file found for contract_with_enums. Trying to use contract file...
    ✔ Returns proper value

  Events
No wasm file found for my_psp34_events. Trying to use contract file...
    ✔ Subscription to events works (4115ms)
No wasm file found for my_psp34_events. Trying to use contract file...
    ✔ Test events on submittables U32
No wasm file found for my_psp34_events. Trying to use contract file...
    ✔ Test events on submittables U128

  Correctness of the PSP22 contract' methods types
No wasm file found for my_psp22. Trying to use contract file...
    ✔ total_supply works
No wasm file found for my_psp22. Trying to use contract file...
    ✔ balance_of works
No wasm file found for my_psp22. Trying to use contract file...
    ✔ allowance works (73ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ Transfer works (56ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ Cannot transfer above the amount
No wasm file found for my_psp22. Trying to use contract file...
    ✔ TransferFrom works (71ms)
No wasm file found for my_psp22. Trying to use contract file...
    ✔ Transfer without approval should fail
No wasm file found for my_psp22. Trying to use contract file...
    ✔ PSP22Mintable::mint works
No wasm file found for my_psp22. Trying to use contract file...
    ✔ PSP22

  methods should have docs
    ✔ should have exact docs for transferFrom[query]
    ✔ should have exact docs for transferFrom[tx-sign-and-send]
    ✔ should have exact docs for transferFrom[mixed-methods]

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
    ✔ mint_to throws correct, readable error

  Correctness of the PSP22 contract' methods types tx
No wasm file found for my_psp22. Trying to use contract file...
    ✔ `PSP22::total_supply`
    ✔ `PSP22::balance_of`
    ✔ `PSP22Mintable::mint`
    ✔ `PSP22::allowance`
    ✔ `PSP22::increase_allowance` & `PSP22::decrease_allowance`
    ✔ `PSP22::transfer`

  MY_PSP34 (ink5)
    ✔ Approve
    ✔ Transfer
    ✔ Can mint any Id
    ✔ Allowance
    ✔ BalanceOf
    ✔ OwnerOf
    ✔ TotalSupply
    ✔ listen on approval event (54ms)

  MY_PSP34 (ink5)
    ✔ Returns total supply
    ✔ Transfer works (56ms)
    ✔ Can mint any Id (144ms)

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
    ✔ Transfer works (44ms)
    ✔ Can mint any Id (125ms)


  52 passing (9s)

```