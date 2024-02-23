# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/roloi-xcm-payment-automation.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

**Deliverables**

| Number | Deliverable                                                    | Accepted              | Link                                                                                                                                | Evaluation Notes                                                               |
| ------ | -------------------------------------------------------------- |---------------------- |-----------------------------------------------------------------------------------------------------------------------------------  | ------------------------------------------------------------------------------ |
| 0a.    | License                                                        | <ul><li>[x] </li></ul> | [Apache License 2.0](https://github.com/NeoPower-Digital/tempora/blob/main/LICENSE)                                                 | Apache 2.0                                                                              |
| 0b.    | Documentation                                                  | <ul><li>[x] </li></ul> | [Developer documentation & testing guide](https://github.com/NeoPower-Digital/tempora/blob/main/README.md)                          | GitHub Repository README file                                                  |
| 0c.    | Testing                                                        | <ul><li>[] </li></ul> | [Tests](https://github.com/NeoPower-Digital/tempora/tree/main/__tests__)                                                            | What about tests for the smart contracts? The dApp tests are all passing.                                                                          |
| 0d.    | Article                                                        | <ul><li>[] </li></ul> | [Delivery Article (In Review)](https://docs.google.com/document/d/1ZcPF7QCWMt-cmWC235_eSaSE9kqmyqM_RLDWQod-c_o/edit?usp=sharing)    | Still under review |
| 1.     | UI                                                             | <ul><li>[] </li></ul> | [UI repository](https://github.com/NeoPower-Digital/tempora)                                                                        | [Link to the dApp](https://tempora-dapp.vercel.app/)                           |
| 1a.    | My Payments Page                                               | <ul><li>[] </li></ul> | [My Payments Page](https://github.com/NeoPower-Digital/tempora/tree/main/app/my-payments)                                           | Have to wait for TUR & ROC tokens for testing.                                                                  |
| 2.     | Smart Contract                                                 | <ul><li>[] </li></ul> | [ink! Smart Contract repository](https://github.com/NeoPower-Digital/tempora/tree/main/contracts/tempora_contract)                  | no tests?      |
| 2a.    | Transaction - Configure new recurring transfer                 | <ul><li>[x] </li></ul> | [Save Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L129)      | -                                                                              |
| 2b.    | Transaction - Modify the configuration of a recurring transfer | <ul><li>[x] </li></ul> | [Update Schedule Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L190)    | -                                                                              |
| 2c.    | Query - Get user recurring transfers                           | <ul><li>[x] </li></ul> | [Get User Schedules Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L217) | -                                                                              |
| 2d.    | Transaction - Execute a transfer                               | <ul><li>[x] </li></ul> | [Trigger Payment Contract Message](https://github.com/NeoPower-Digital/tempora/blob/main/contracts/tempora_contract/lib.rs#L243)    | -                                                                              |

## General Notes

## UI
In the application you stated that you will add the connectio to the Kusama chains of OAK and Astar. Did that happen? Looks like you still use the Rococo testnets. 


## Ink! Contracts 
the Ink! Contracts suffer from state bloat as `remove schedule` doesn't clear the schedule from state instead only switches the enabled flag. 

Once "removed" the schedule can't be re-enabled via `update schedule` and also the id can't be used again. How do you feel about this? Have you decided for this concept willingly? If so why?


##  testing output

<details>
<summary>testing output dApp</summary>
<br>

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