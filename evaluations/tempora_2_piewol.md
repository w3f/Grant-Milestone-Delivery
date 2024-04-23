# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/roloi-xcm-payment-automation.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

**Deliverables**

| Number | Deliverable                                                    | Accepted              | Link                                                                                                                                | Evaluation Notes                                                               |
| ------ | -------------------------------------------------------------- |---------------------- |-----------------------------------------------------------------------------------------------------------------------------------  | ------------------------------------------------------------------------------ |
| 0a.    | License                                                        | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/NeoPower-Digital/tempora/blob/main/LICENSE)                                                 | Apache 2.0                                                                              |
| 0b.    | Documentation                                                  | <ul><li>[x] </li></ul> | [Developer documentation & testing guide](https://github.com/NeoPower-Digital/tempora/blob/main/README.md)                          | GitHub Repository README file                                                  |
| 0c.    | Testing                                                        | <ul><li>[x] </li></ul> | [Tests](https://github.com/NeoPower-Digital/tempora/tree/main/__tests__)                                                            |  The dApp tests are all passing.  The testing guide is good and definitely needed.                                                                       |
| 0d.    | Article                                                        | <ul><li>[x] </li></ul> | [Delivery Article (In Review)](https://docs.google.com/document/d/1ZcPF7QCWMt-cmWC235_eSaSE9kqmyqM_RLDWQod-c_o/edit?usp=sharing)    | thanks for incorporating ideas for changes |
| 1.     | UI                                                             | <ul><li>[x] </li></ul> | [UI repository](https://github.com/NeoPower-Digital/tempora)                                                                        | [Link to the dApp](https://tempora-dapp.vercel.app/)                           |
| 1a.    | My Payments Page                                               | <ul><li>[x] </li></ul> | [My Payments Page](https://github.com/NeoPower-Digital/tempora/tree/main/app/my-payments)                                           | works                                                                  |
| 2.     | Smart Contract                                                 | <ul><li>[x] </li></ul> | [ink! Smart Contract repository](https://github.com/NeoPower-Digital/tempora/tree/main/contracts/tempora_contract)                  | tests are passing     |
| 2a.    | Transaction - Configure new recurring transfer                 | <ul><li>[x] </li></ul> | [Save Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L129)      | works
| 2b.    | Transaction - Modify the configuration of a recurring transfer | <ul><li>[x] </li></ul> | [Update Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L190)    | works
| 2c.    | Query - Get user recurring transfers                           | <ul><li>[x] </li></ul> | [Get User Schedules Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L217) | works
| 2d.    | Transaction - Execute a transfer                               | <ul><li>[x] </li></ul> | [Trigger Payment Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L243)    |works |

## General Notes

## UI
Looks good. Thanks for the latest changing improving UX futher. Hope you will extend this even further once you are deploying on Kusama.


## Ink! Contracts 
ink! contract tests are passing.
Looking forward to an update making payments resumable again so that it makes sense to keep the current design that doesn't remove the cancelled payments from storage.



##  testing output dApp

<details>
<summary>testing output dApp</summary>

```yarn run v1.22.19
$ vitest
The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.

 DEV  v0.34.6 /root/tempora

(node:6993) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ __tests__/useProxyAccount.test.tsx (20)
(node:6993) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
 ✓ __tests__/useProxyAccount.test.tsx (20)
 ✓ __tests__/useSchedulePayment.test.tsx (3)
 ✓ __tests__/useProxyAccount.test.tsx (20)
 ✓ __tests__/useSchedulePayment.test.tsx (3)
 ✓ __tests__/useContract.test.tsx (5)
 ✓ __tests__/useProxyAccount.test.tsx (20)
 ✓ __tests__/useSchedulePayment.test.tsx (3)
 ✓ __tests__/useProxyAccount.test.tsx (20)
 ✓ __tests__/useSchedulePayment.test.tsx (3)
 ✓ __tests__/useContract.test.tsx (5)
 ✓ __tests__/proxyAccountsHelper.test.tsx (5)
 ✓ __tests__/useFeeEstimation.test.tsx (2)

 Test Files  5 passed (5)
      Tests  35 passed (35)
   Start at  08:48:33
   Duration  10.55s (transform 359ms, setup 2ms, collect 6.65s, tests 197ms, environment 2.34s, prepare 388ms)
```
</details>

<details>
<summary>testing output dApp</summary>

```
   Running unittests lib.rs (target/debug/deps/tempora_contract-19a92093c173e169)
   
   running 25 tests
   test tempora_contract::tests::add_token_to_whitelist_works ... ok
   test tempora_contract::tests::add_token_to_whitelist_by_common_user_fails ... ok
   test tempora_contract::tests::add_token_to_whitelist_twice_fails ... ok
   test tempora_contract::tests::remove_nonexistent_token_from_whitelist_fails ... ok
   test tempora_contract::tests::remove_schedule_by_nonowner_fails ... ok
   test tempora_contract::tests::get_whitelisted_tokens_works ... ok
   test tempora_contract::tests::remove_token_from_whitelist_by_common_user_fails ... ok
   test tempora_contract::tests::remove_token_from_whitelist_works ... ok
   test tempora_contract::tests::remove_nonexistent_schedule_fails ... ok
   test tempora_contract::tests::remove_schedule_works ... ok
   test tempora_contract::tests::save_fixed_payment_with_nonwhitelisted_token_fails ... ok
   test tempora_contract::tests::save_fixed_payment_without_amount_fails ... ok
   test tempora_contract::tests::save_fixed_payment_with_same_caller_and_recipient_fails ... ok
   test tempora_contract::tests::save_schedule_without_timestamp_configuration_fails ... ok
   test tempora_contract::tests::set_admin_fails ... ok
   test tempora_contract::tests::set_admin_works ... ok
   test tempora_contract::tests::save_fixed_payment_schedule_works ... ok
   test tempora_contract::tests::save_repeated_fixed_payment_fails ... ok
   test tempora_contract::tests::save_recurring_payment_schedule_works ... ok
   test tempora_contract::tests::trigger_payment_with_same_caller_recipient_fails ... ok
   test tempora_contract::tests::trigger_payment_without_amount_fails ... ok
   test tempora_contract::tests::trigger_native_payment_without_sufficient_balance_fails ... ok
   test tempora_contract::tests::update_nonexistent_schedule_fails ... ok
   test tempora_contract::tests::update_schedule_works ... ok
   test tempora_contract::tests::trigger_native_payment_works ... ok
   
   test result: ok. 25 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

</details>