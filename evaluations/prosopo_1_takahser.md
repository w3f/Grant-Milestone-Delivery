# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/7ab49456baf43a9474cb3fa49af0c7e42e0db5f0/applications/prosopo.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [provider license](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/LICENSE), [protocol license](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/LICENSE), [example dApp license](https://github.com/prosopo-io/dapp-example/blob/418d4b658764539fab67b2602481306b1b51e4ba/LICENSE) | GPLv3 |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [provider README](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/README.md), [protocol README](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/README.md), [integration README](https://github.com/prosopo-io/integration/blob/580b31ebea7d4451cf9f5df69780514028aac9ef/README.md), [Additional Setup Instructions](https://github.com/w3f/Grant-Milestone-Delivery/pull/361#issuecomment-1099337527) | ok, though there is room for improvement for M2 - in some cases the instructions were not completely clear and additional instructions by the grantee were required to spin up and test the infrastructure |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [provider tests](https://github.com/prosopo-io/integration/blob/580b31ebea7d4451cf9f5df69780514028aac9ef/README.md#tests), [protocol tests](https://github.com/prosopo-io/protocol/blob/8debb2a1ce32dc7ca4c1df5b96b1ff903581fc0b/README.md#test), [integration tests](https://github.com/prosopo-io/integration/blob/main/README.md#tests) | see [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Docker |<ul><li>[x] </li></ul>| [Provider Dockerfile](https://github.com/prosopo-io/provider/blob/a796760a66551302a6eb44ca7b5a5d421e740721/dev.dockerfile), [docker-compose.yml](https://github.com/prosopo-io/integration/blob/6df0787178d896791a3b0bd3fdcd2fa71a6d783d/docker-compose.yml) | provider-api and substrate-node can't be started, see [Documentation Feedback](#documentation-feedback). Only the mongodb container can be started. |
| 0e. | Article |<ul><li>[x] </li></ul>| [Article](https://github.com/prosopo-io/prosopo-website/blob/1b28c45a53c8f9fce64b2b75d579aa70b2152bc7/src/articles/prosopo-web3-foundation-grant.md) | - |
| 1. | Prosopo Contract Development |<ul><li>[x] </li></ul>| [protocol repo](https://github.com/prosopo-io/protocol/) | see [Contract/Provider/External Contract feedback](#contractproviderexternal-contract-feedback) |
| 2. | Prosopo Provider Service |<ul><li>[x] </li></ul>| [provider repo](https://github.com/prosopo-io/provider) | see [Contract/Provider/External Contract feedback](#contractproviderexternal-contract-feedback) |
| 3. | External Contract |<ul><li>[x] </li></ul>| [dapp-example repo](https://github.com/prosopo-io/dapp-example) | see [Contract/Provider/External Contract feedback](#contractproviderexternal-contract-feedback) |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Testing Guide Feedback

Overall, test coverage is sufficient. For M2, increasing the test coverage in the non-experimental cargo tests would be nice.

The test coverages were:

- 21.71% for the protocol tests using the standard test engine
- 88.04% for the protocol tests using the experimental test engine
- 96.24% for the provider unit & integration tests

#### Contract/Protocol Tests

- The first set of tests uses the standard test engine and they pass. In your [application](https://github.com/w3f/Grants-Program/blob/c038bd3a57c69ffd6e56a34f2944971787496d67/applications/prosopo.md?plain=1#L691) you were aiming for a test coverage of ~80%, however, currently its only 21.71%. This could be improved.

    ```bash
    $ cargo +nightly tarpaulin --no-default-features --features std --verbose -- --nocapture
    running 5 tests
    test prosopo::tests::test_default_works ... ok
    test prosopo::tests::test_get_random_number ... ok
    test prosopo::tests::test_provider_register ... ok
    test prosopo::tests::test_provider_deregister ... ok
    test prosopo::tests::test_list_providers_by_ids ... ok

    test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

    Apr 21 10:23:10.377  INFO cargo_tarpaulin::report: Coverage Results:
    || Uncovered Lines:
    || lib.rs: 463, 467, 496, 503, 505-506, 510-511, 514, 517-519, 521-522, 526-528, 530-531, 540, 544-545, 547-548, 550, 554, 560, 562, 566, 570-571, 574, 576, 589, 592-595, 597-598, 600-601, 607, 613-622, 627, 629, 634-635, 637, 646-647, 651-653, 656-658, 661, 672, 674-675, 677, 679-680, 682, 692-693, 695-698, 703, 708, 716-717, 719-725, 727, 729, 731-734, 739, 747-757, 762, 764, 767, 773-774, 776-777, 779, 781-782, 785-787, 789-791, 795, 799-803, 808, 815, 817, 819, 821, 824, 826, 829-830, 840, 842-843, 845-849, 851, 855, 857, 864-865, 871, 876-877, 879, 881-882, 884, 886, 889, 893, 896-905, 909, 914, 918-919, 921, 923-924, 926, 928, 931, 935, 938-946, 950, 954, 959-961, 963-966, 968-970, 972-973, 975, 981, 986-987, 990-994, 996-997, 999-1000, 1002-1003, 1005-1006, 1008, 1014, 1019, 1022-1023, 1031-1033, 1037-1038, 1044-1047, 1049-1052, 1054-1056, 1058, 1061, 1063-1065, 1068-1071, 1075-1077, 1079, 1086-1089, 1091-1092, 1099, 1103, 1108, 1110, 1115, 1122-1125, 1127, 1134-1137, 1139-1140, 1147-1150, 1152-1153, 1160-1163, 1171-1174, 1198-1202, 1205-1206, 1215, 1219, 1221, 1223-1225, 1227-1231, 1239-1244, 1246-1247, 1250
    || Tested/Total Lines:
    || lib.rs: 89/410 -66.33%
    || 
    21.71% coverage, 89/410 lines covered, -66.32909385010626% change in coverage
    ```

- The 2nd set of tests uses the experimental engine and they pass as well. In contrary to the 1st set, test coverage is very high here: >88%

    ```bash
    $ cargo +nightly tarpaulin --no-default-features --features std,ink-experimental-engine --verbose -- --nocapture
    running 19 tests
    test prosopo::tests_experimental_engine::test_non_existent_provider_account_has_zero_balance ... ok
    test prosopo::tests_experimental_engine::test_non_existent_dapp_account_has_zero_balance ... ok
    test prosopo::tests_experimental_engine::test_add_operator ... ok
    test prosopo::tests_experimental_engine::test_dapp_register_zero_balance_transfer ... ok
    test prosopo::tests_experimental_engine::test_dapp_register_positive_balance_transfer ... ok
    test prosopo::tests_experimental_engine::test_provider_register_with_service_origin_error ... ok
    test prosopo::tests_experimental_engine::test_dapp_fund ... ok
    test prosopo::tests_experimental_engine::test_provider_cannot_add_dataset_if_inactive ... ok
    test prosopo::tests_experimental_engine::test_provider_update_with_service_origin_error ... ok
    test prosopo::tests_experimental_engine::test_dapp_cancel ... ok
    test prosopo::tests_experimental_engine::test_dapp_register_and_update ... ok
    test prosopo::tests_experimental_engine::test_provider_register_and_update ... ok
    test prosopo::tests_experimental_engine::test_provider_add_dataset ... ok
    test prosopo::tests_experimental_engine::test_provider_unstake ... ok
    test prosopo::tests_experimental_engine::test_dapp_user_commit ... ok
    test prosopo::tests_experimental_engine::test_provider_approve_invalid_id ... ok
    test prosopo::tests_experimental_engine::test_dapp_operator_is_human_user ... ok
    test prosopo::tests_experimental_engine::test_provider_disapprove ... ok
    test prosopo::tests_experimental_engine::test_provider_approve ... ok

    test result: ok. 19 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s

    Apr 21 10:24:02.126  INFO cargo_tarpaulin::report: Coverage Results:
    || Uncovered Lines:
    || lib.rs: 463, 506, 511, 605, 627, 727, 739, 747, 762, 767, 777, 782, 824, 826, 882, 924, 961, 963-966, 968-970, 972-973, 987, 994, 999-1000, 1002-1003, 1006, 1031, 1046-1047, 1055-1056, 1064-1065, 1070-1071, 1076-1077, 1088-1089, 1124-1125, 1182-1186, 1189, 1198-1202, 1205-1206, 1215, 1219, 1221, 1223-1225, 1227-1231, 1239-1244, 1246-1247, 1250, 1255-1260, 1446, 1470, 1511, 1561, 1609
    || Tested/Total Lines:
    || lib.rs: 677/769 +66.33%
    || 
    88.04% coverage, 677/769 lines covered, +66.32909385010626% change in coverage
    ```

#### Unit/Integration Tests

- Coverage is very high: >96%

```bash
➜  provider git:(3a4f876) yarn c8 yarn test 
compiler version: 0.16.0
toolchain: nightly
ink: 0 matches
    ✓ Parses a captcha dataset correctly
    ✓ Captcha data set is hashed correctly
    ✓ Invalid Captcha solutions are not successfully parsed
    ✓ Text Captchas are successfully parsed
    ✓ Image Captchas are successfully parsed
    ✓ Invalid Captchas are not successfully parsed
    ✓ Captchas are hashed properly
    ✓ Captcha hashes are successfully added to dataset
    ✓ Empty dataset and tree throws error
    ✓ Matching captcha solutions are correctly compared, returning true
    ✓ Non-matching captcha solutions are correctly compared, returning false
    ✓ Mismatched length captcha solutions returns false
    ✓ Two captchas are correctly compared when solutions and captchaIds are identical
    ✓ Two captchas are correctly compared when solutions and captchaIds are different
    ✓ Mismatched captchas are correctly compared
    ✓ Captchas with zero length solutions are automatically assumed to be correct
    ✓ Captchas with no solutions are automatically assumed to be correct
    ✓ Pending request hash is calculated properly
    ✓ Computes a captcha solution hash correctly

  CONTRACT HELPERS
    ✓ Properly encodes `Hash` arguments when passed unhashed

  CONTRACT WRAPPER

    ✓ Gets the contract method from the ABI when method name is valid
    ✓ Gets the storage key from the ABI

  ERRORS

  PROVIDER MERKLE TREE
    ✓ Tree root is correct when computing leaf hashes
    ✓ Tree proof works when computing leaf hashes
    ✓ Tree contains correct leaf hashes when not computing leaf hashes
    ✓ Tree root is correct when not computing leaf hashes
    ✓ Tree proof works when not computing leaf hashes
    ✓ Tree proof works when there is only one leaf

  CONTRACT TASKS
   - providerAddDataset
   - dappRegister
    ✓ Provider registration (2999ms)
    ✓ Provider update (2998ms)
    ✓ Provider add dataset (3004ms)
    ✓ Provider approve (6005ms)
    ✓ Provider details (229ms)
    ✓ Provider accounts (229ms)
    ✓ Dapp is active (231ms)
    ✓ Dapp details (232ms)
    ✓ Dapp fund (2670ms)
    ✓ Dapp accounts (228ms)
    ✓ Captchas are correctly formatted before being passed to the API layer (108ms)
    ✓ Captcha proofs are returned if commitment found and solution is correct (5666ms)
    ✓ Dapp User sending solutions without committing to blockchain causes error (321ms)
    ✓ No proofs are returned if commitment found and solution is incorrect (4832ms)
    ✓ BuildTreeAndGetCommitment throws if commitment does not exist (324ms)
    ✓ Validates the Dapp User Solution Request is Pending (320ms)
    ✓ Get random captchas and request hash (100ms)
0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605
{
  status: 'Active',
  balance: '10.0000 pUnit',
  fee: '10',
  payee: 'Provider',
  service_origin: '0x15e7f4d24384ccf8e79cdd2c41eb6c2e5e14608020a2ab3b635f22988dbaa445',
  captcha_dataset_id: '0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605'
}
{
  status: 'Active',
  balance: '1.0000 pUnit',
  fee: '10',
  payee: 'Provider',
  service_origin: '0x450562c69ad0c582a0e6a5dee654427a1bfa9da05f8f975e8036aea1d3736f4b',
  captcha_dataset_id: '0x41ddc1ac1322bff70524dba63d28edce1992079d52599c26bece3e971db9ad6e'
}
    ✓ Validate provided captcha dataset - fail (11996ms)
    ✓ Provider deregister (2996ms)
  UTIL FUNCTIONS
    ✓ fails on an invalid address
    ✓ correctly encodes a hex string address
    ✓ shuffle function shuffles array
    ✓ correctly hex hashes a string


┌──────────┬─────────┬───────────────────────────┬───────────────────────────┬───────────────────────────┬───────┐
├──────────┼─────────┼─────────────┬─────────────┼─────────────┬─────────────┼─────────────┬─────────────┼───────┤
│ Contract │ Message │ EstimateGas │ Weight      │ EstimateGas │ Weight      │ EstimateGas │ Weight      │ Calls │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ p       │ 8642112119  │ 8910149521  │ 8642112119  │ 10221499807 │ 8642112119  │ 9952777724  │ 8     │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ p       │ 10378958742 │ 10646996144 │ 12452158566 │ 12990816056 │ 10971301548 │ 12094518680 │ 7     │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ d       │ 10178191701 │ 10446229103 │ 10178191701 │ 10618279701 │ 10178191701 │ 10532254402 │ 2     │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ d       │ 9822149178  │ 10090186580 │ 9822149178  │ 10262237178 │ 9822149178  │ 10176211879 │ 2     │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ p       │ 11022345729 │ 11388984768 │ 11022345729 │ 11462433729 │ 11022345729 │ 11403674560 │ 5     │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ p       │ 11152711559 │ 13661827133 │ 11152711559 │ 13661827133 │ 11152711559 │ 13661827133 │ 1     │
├──────────┼─────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼───────┤
│ prosopo  │ p       │ 9304623670  │ 9744711670  │ 9304623670  │ 9744711670  │ 9304623670  │ 9744711670  │ 1     │
└──────────┴─────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴───────┘

-----------------------|---------|----------|---------|---------|-----------------------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                 
-----------------------|---------|----------|---------|---------|-----------------------------------
All files              |   96.34 |    81.28 |   92.75 |   96.34 |                                   
 provider              |     100 |      100 |     100 |     100 |                                   
  redspot.config.ts    |     100 |      100 |     100 |     100 |                                   
 provider/src          |    95.4 |     86.3 |   96.42 |    95.4 |                                   
  captcha.ts           |   97.68 |    88.23 |     100 |   97.68 | 48-49,124-125                     
  errors.ts            |   93.29 |      100 |   66.66 |   93.29 | 168-179                           
  merkle.ts            |   96.49 |    83.33 |     100 |   96.49 | 45-46,104-105                     
  util.ts              |      94 |    84.21 |     100 |      94 | 38-39,89-90,94-95                 
 provider/src/codec    |     100 |      100 |     100 |     100 |                                   
  codec.ts             |     100 |      100 |     100 |     100 |                                   
 provider/src/contract |   95.05 |    76.59 |     100 |   95.05 |                                   
  definitions.ts       |     100 |      100 |     100 |     100 |                                   
  helpers.ts           |     100 |    93.75 |     100 |     100 | 68                                
  interface.ts         |   89.94 |    67.74 |     100 |   89.94 | ...32-133,143-145,152-153,163-164 
 provider/src/tasks    |   92.74 |       75 |    86.2 |   92.74 |                                   
  tasks.ts             |   92.74 |       75 |    86.2 |   92.74 | ...78-279,285-286,306-308,319-320 
 provider/src/types    |     100 |      100 |     100 |     100 |                                   
  api.ts               |     100 |      100 |     100 |     100 |                                   
  captcha.ts           |     100 |      100 |     100 |     100 |                                   
  config.ts            |     100 |      100 |     100 |     100 |                                   
  contract.ts          |     100 |      100 |     100 |     100 |                                   
  db.ts                |     100 |      100 |     100 |     100 |                                   
  env.ts               |     100 |      100 |     100 |     100 |                                   
  index.ts             |     100 |      100 |     100 |     100 |                                   
  merkle.ts            |     100 |      100 |     100 |     100 |                                   
-----------------------|---------|----------|---------|---------|-----------------------------------
```

### Contract/Provider/External Contract feedback

- Call for getting the providers works: `GET http://localhost:3000/v1/prosopo/providers/`

  ```
  {"accounts":["5C4tkB4RNhedF98r3NX1sHYxoTYyq5QFck1U1EruZqt6fjzv","5D1wZLz1gd2MNSPwhXPY8y2LaRueDEkM8sex1wHYSCQ26Rjo","5EkRjpJkLZo5uLPTtjTnx6Sb1fjkXVgiE9m42mwXWqC6SKRh","5F9JuuzQm7zPhaWKYm9ABuXw7AxVCBaGCGEF6PJmPF2e2H64","5GbFgxL5UKknnF9NYMJx3becaZQWjpSjpVjVBKEETjSMomuR","5H6DrS5Xvx6hNWGYApmSR6WEYRypDdh6q6cWvswsMTBEjwHD","5E2FBBJJzznFAUrNbxzhSfWKHPu5TVhWZu6HWEup3kQUGgvR","5GgoHaUi9RRP2bHeKoB6CyuDA2wg9xDjMZDZXnAphSUYtLZn"]}
  ```
- External contract/example contract calling prosopo contract (cross-contract call): `GET http://localhost:3000/v1/prosopo/dapps/`

  ```bash
  {"accounts":["5DJXUzxcx95jrt2nABsSPmzUoGxciAX9SnWkfj1fjvw6o5M3"]}
  ```

- Receive captcha puzzles: `GET http://localhost:3000/v1/prosopo/provider/captcha/:captchaDatasetId:/:accountHash:/:blockNumber:`
  - result of calling the `get_random_active_provider` method on the Prosopo contract
    ```rust
    { 
      Ok: {
        provider: {
          status: Active
          balance: 10
          fee: 10
          payee: Provider
          serviceOrigin: 0x15e7f4d24384ccf8e79cdd2c41eb6c2e5e14608020a2ab3b635f22988dbaa445
          captchaDatasetId: 0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605
        }
        blockNumber: 215
      }
    }
    ```
  - with captchaDatasetId = `0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605`
  - with accountHash = `0x422bce1bc6f1683de70c4d2ca6b4d67797d3e1fc798ecf7a9394375b483e6c71` (derived from cli: `yarn ts-node ./scripts/hash <ACCOUNT>`)
  - with blockNumber = `215`
  - => `GET http://localhost:3000/v1/prosopo/provider/captcha/0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605/0x422bce1bc6f1683de70c4d2ca6b4d67797d3e1fc798ecf7a9394375b483e6c71/215`

    ```json
    {
        "captchas": [
            {
                "captcha": {
                    "captchaId": "0xaeffcc3d1f9f461f43b1db75e366ac8fc231c19d9fdf4a4dbbe6dcb561e9936c",
                    "datasetId": "0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605"
                },
                "proof": [
                    [
                        "0xaeffcc3d1f9f461f43b1db75e366ac8fc231c19d9fdf4a4dbbe6dcb561e9936c",
                        "0x51f1f4f0077cf4d5bccbb5bfd6b07bb4d8544cfed3fefb5a4d2a4e0b217b6fbc"
                    ],
                    [
                        "0x40ccd7d86bb18860c660a211496e525a3cacc4b506440e56ac85ac824a253378",
                        "0x76cb07140a3c9e1108e392386b286d60dd5e302dc59dfa8c049045107f8db854"
                    ],
                    [
                        "0x8b12abef36bfa970211495a826922d99f8a01a66f2e633fff4874061f637d814",
                        "0xe52b9fc3595ec17f3ad8d7a8095e1b730c9c4f6be21f16a5d5c9ced6b1ef8903"
                    ],
                    [
                        "0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605"
                    ]
                ]
            },
            {
                "captcha": {
                    "captchaId": "0x8a1aa5c298c4d0f7f8d3cc7dd983427a271fb6a5db35e3ea8c47039138af4ea1",
                    "datasetId": "0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605"
                },
                "proof": [
                    [
                        "0x17ba2bbf5926bdf709f01c822288efa53bb516bd1ba5b13eae807da6505c85a0",
                        "0x8a1aa5c298c4d0f7f8d3cc7dd983427a271fb6a5db35e3ea8c47039138af4ea1"
                    ],
                    [
                        "0x34194f72bedca1ce8edf70d8525517f2d7eb1ee69ab76e235fbf996e8c07fcc3",
                        "0xb730f53e3008da99fd51ee3ecf8cc6e974c5da1cf5e94958314025e39a491948"
                    ],
                    [
                        "0x8b12abef36bfa970211495a826922d99f8a01a66f2e633fff4874061f637d814",
                        "0xe52b9fc3595ec17f3ad8d7a8095e1b730c9c4f6be21f16a5d5c9ced6b1ef8903"
                    ],
                    [
                        "0x4e5b2ae257650340b493e94b4b4a4ac0e0dded8b1ecdad8252fe92bbd5b26605"
                    ]
                ]
            }
        ],
        "requestHash": "0xed49344d1f948b9ea39c50df65da79cab8fe3a308b79e0db064bf88e41f476f1"
    }
    ```

